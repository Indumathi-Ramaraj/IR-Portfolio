import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader, AlertCircle } from 'lucide-react';
import { contact } from '../data/portfolioData';
import './Contact.css';

const API_URL = 'http://localhost:3001/api/contact';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [state, setState] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState('loading');
    setErrorMsg('');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setState('success');
      setForm({ name: '', email: '', phone: '', message: '' });

      // Reset to idle after 6 seconds
      setTimeout(() => setState('idle'), 6000);
    } catch (err) {
      setErrorMsg(err.message);
      setState('error');
      setTimeout(() => setState('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section section-alt contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Ready to collaborate? Drop me a message and I'll get back to you
            within 24 hours.
          </p>
        </div>

        <div className="contact__grid">
          {/* Form */}
          <div className="glass-card contact__form-card">
            <h3 className="contact__form-title">Send a Message</h3>

            {state === "success" ? (
              <div className="contact__success">
                <CheckCircle size={52} />
                <h4>Message Sent! 🎉</h4>
                <p>
                  Your message has been delivered to my inbox and I've been
                  notified. I'll get back to you within 24 hours!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__field-row">
                  <div className="contact__field">
                    <label htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      disabled={state === "loading"}
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      disabled={state === "loading"}
                    />
                  </div>
                </div>

                {/* <div className="contact__field">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    disabled={state === 'loading'}
                  />
                </div> */}

                <div className="contact__field">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                    disabled={state === "loading"}
                  />
                </div>

                {/* Error message */}
                {state === "error" && (
                  <div className="contact__error">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="btn btn-primary contact__submit"
                  disabled={state === "loading"}
                >
                  {state === "loading" ? (
                    <>
                      <Loader size={16} className="contact__spinner" />{" "}
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="contact__info">
            <div className="glass-card contact__info-card">
              <h3 className="contact__info-title">Contact Details</h3>
              <div className="contact__details">
                <a
                  href={`mailto:${contact.email}`}
                  className="contact__detail-item"
                >
                  <div className="contact__detail-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="contact__detail-label">Email</div>
                    <div className="contact__detail-value">{contact.email}</div>
                  </div>
                </a>
                <div className="contact__detail-item">
                  <div className="contact__detail-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="contact__detail-label">Phone</div>
                    <div className="contact__detail-value">{contact.phone}</div>
                  </div>
                </div>
                <div className="contact__detail-item">
                  <div className="contact__detail-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="contact__detail-label">Location</div>
                    <div className="contact__detail-value">
                      {contact.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card contact__availability">
              <div className="contact__avail-dot" />
              <div>
                <div className="contact__avail-title">
                  Open to Opportunities
                </div>
                <div className="contact__avail-desc">
                  Looking for full-time roles, freelance projects, and
                  consulting engagements. Remote &amp; hybrid preferred.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
