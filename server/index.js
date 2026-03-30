import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ─────────────────────────────────────────────
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// ── Nodemailer transporter (Gmail) ─────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// ── Twilio (SMS) — optional, only active if credentials set ─
let twilioClient = null;
if (
  process.env.TWILIO_ACCOUNT_SID &&
  process.env.TWILIO_AUTH_TOKEN &&
  process.env.TWILIO_FROM_PHONE
) {
  const { default: twilio } = await import('twilio');
  twilioClient = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  console.log('✅ Twilio SMS enabled');
} else {
  console.log('⚠️  Twilio credentials not set — SMS disabled');
}

// ── Helper: send email ─────────────────────────────────────
async function sendEmail({ name, email, phone, message }) {
  const html = `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:auto;background:#0a0a0a;color:#fff;border-radius:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#ec4899,#f97316);padding:32px;text-align:center;">
        <h1 style="margin:0;font-size:24px;color:#fff;">📬 New Portfolio Message</h1>
        <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);">Someone reached out via your portfolio!</p>
      </div>
      <div style="padding:32px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#a1a1aa;font-size:13px;width:100px;">Name</td>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:15px;font-weight:600;">${name}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#a1a1aa;font-size:13px;">Email</td>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:15px;"><a href="mailto:${email}" style="color:#ec4899;">${email}</a></td>
          </tr>
        </table>
        <div style="margin-top:24px;">
          <p style="color:#a1a1aa;font-size:13px;margin-bottom:8px;">Message</p>
          <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:16px;font-size:15px;line-height:1.7;white-space:pre-wrap;">${message}</div>
        </div>
        <div style="margin-top:28px;text-align:center;">
          <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#ec4899,#f97316);color:#fff;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:600;font-size:14px;">Reply to ${name}</a>
        </div>
      </div>
      <div style="padding:20px;text-align:center;color:#71717a;font-size:12px;border-top:1px solid rgba(255,255,255,0.06);">
        Received via indumathi-portfolio contact form • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `📬 New message from ${name} — Portfolio`,
    html,
  });
}

// ── Helper: send SMS via Twilio ────────────────────────────
async function sendSMS({ name, email, phone, message }) {
  if (!twilioClient) return { sent: false, reason: 'Twilio not configured' };

  const body = `📬 Portfolio Contact!\nFrom: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ''}\n\nMsg: ${message.slice(0, 120)}${message.length > 120 ? '...' : ''}`;

  await twilioClient.messages.create({
    body,
    from: process.env.TWILIO_FROM_PHONE,
    to: process.env.NOTIFY_PHONE,
  });

  return { sent: true };
}

// ── POST /api/contact ──────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ success: false, error: 'Name, email and message are required.' });
  }

  const results = { email: false, sms: false };

  try {
    await sendEmail({ name, email, phone, message });
    results.email = true;
    console.log(`✅ Email sent for contact from ${name} <${email}>`);
  } catch (err) {
    console.error('❌ Email error:', err.message);
    return res.status(500).json({ success: false, error: 'Failed to send email. Please try again.' });
  }

  try {
    const smsResult = await sendSMS({ name, email, phone, message });
    results.sms = smsResult.sent;
    if (smsResult.sent) console.log('✅ SMS sent');
    else console.log(`ℹ️  SMS skipped: ${smsResult.reason}`);
  } catch (err) {
    console.error('⚠️  SMS error (non-fatal):', err.message);
    // SMS failure is non-fatal — email already sent
  }

  res.json({
    success: true,
    message: 'Message received! I\'ll get back to you within 24 hours.',
    results,
  });
});

// ── Health check ───────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    email: !!process.env.GMAIL_USER,
    sms: !!twilioClient,
  });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio backend running at http://localhost:${PORT}`);
  console.log(`   Email → ${process.env.CONTACT_TO_EMAIL}`);
  console.log(`   SMS   → ${process.env.NOTIFY_PHONE} (${twilioClient ? 'active' : 'configure Twilio to enable'})\n`);
});
