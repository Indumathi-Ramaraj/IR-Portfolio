import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import { navLinks } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section tracking
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a className="navbar__logo" href="#hero" onClick={() => handleNavClick('#hero')}>
          <span className="navbar__logo-icon">IR</span>
          <span className="navbar__logo-text">Indumathi</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                className={`navbar__link ${activeSection === href.slice(1) ? 'navbar__link--active' : ''}`}
                onClick={() => handleNavClick(href)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="navbar__actions">
          <a
            href="https://github.com/IndumathiAnand"
            target="_blank"
            rel="noreferrer"
            className="navbar__icon-btn"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/indumathi-ramaraj"
            target="_blank"
            rel="noreferrer"
            className="navbar__icon-btn"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a href="/resume.pdf" download className="btn btn-primary navbar__resume-btn">
            <Download size={15} />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar__mobile-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${isMobileOpen ? 'navbar__mobile--open' : ''}`}>
        <ul className="navbar__mobile-links">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                className="navbar__mobile-link"
                onClick={() => handleNavClick(href)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-actions">
          <a href="https://github.com/IndumathiAnand" target="_blank" rel="noreferrer" className="navbar__icon-btn">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/indumathi-ramaraj" target="_blank" rel="noreferrer" className="navbar__icon-btn">
            <Linkedin size={18} />
          </a>
          <a href="/resume.pdf" download className="btn btn-primary">
            <Download size={15} /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
