import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { contact } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Left: Logo + tagline */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">IR</span>
            <span className="footer__logo-text">Indumathi Ramaraj</span>
          </div>
          <p className="footer__tagline">
            Crafting digital experiences with passion &amp; precision.
          </p>
          <div className="footer__socials">
            <a href="https://github.com/IndumathiAnand" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com/in/indumathi-ramaraj" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${contact.email}`} aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="footer__copy">
          <p>© 2026 Indumathi Ramaraj. All rights reserved.</p>
          <p className="footer__made">
            Made with <Heart size={12} className="footer__heart" fill="currentColor" /> using React &amp; Vite
          </p>
        </div>

        {/* Right: Scroll to top */}
        <button
          className="footer__scroll-top"
          onClick={scrollToTop}
          id="footer-scroll-top-btn"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
