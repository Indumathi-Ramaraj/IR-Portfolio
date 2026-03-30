import { useEffect, useState } from 'react';
import { ArrowDown, Download, Sparkles, Code2, Zap, Globe, Github, Linkedin } from 'lucide-react';
import './Hero.css';

const TYPING_STRINGS = [
  'Full Stack Developer',
  'React.js Specialist',
  'FastAPI Engineer',
  'UI/UX Enthusiast',
  'Technical Trainer',
  'Problem Solver',
];

const TECH_TAGS = [
  { label: 'React.js', color: '#61dafb', pos: { top: '10%', left: '5%' } },
  { label: 'FastAPI', color: '#009688', pos: { top: '20%', right: '4%' } },
  { label: 'TypeScript', color: '#3178c6', pos: { top: '60%', left: '2%' } },
  { label: 'Docker', color: '#2496ed', pos: { bottom: '20%', right: '6%' } },
  { label: 'PostgreSQL', color: '#336791', pos: { bottom: '10%', left: '8%' } },
  { label: 'AWS', color: '#ff9900', pos: { top: '38%', right: '2%' } },
];

export default function Hero() {
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[typingIndex];
    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypingText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setTypingText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTypingIndex(i => (i + 1) % TYPING_STRINGS.length);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, typingIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Floating tech tags */}
      {TECH_TAGS.map((tag) => (
        <div
          key={tag.label}
          className="hero__tech-tag"
          style={{ ...tag.pos, '--color': tag.color }}
        >
          <span className="hero__tech-dot" />
          {tag.label}
        </div>
      ))}

      <div className="container hero__inner">
        {/* Left: Text Content */}
        <div className="hero__content">
          {/* Status Badge */}
          <div className="hero__status">
            <span className="hero__status-dot" />
            <span>AVAILABLE FOR NEW OPPORTUNITIES</span>
          </div>

          {/* Heading */}
          <h1 className="hero__name">
            Hi, I'm{' '}
            <span className="gradient-text">Indumathi Ramaraj</span>
          </h1>

          {/* Typing */}
          <div className="hero__typing-wrap">
            <span className="hero__typing">{typingText}</span>
            <span className="hero__cursor">|</span>
          </div>

          {/* Subtitle */}
          <p className="hero__subtitle">
            Crafting <strong>digital experiences</strong> that matter — from pixel-perfect
            interfaces to robust backend systems. I build, train, and innovate.
          </p>

          {/* CTAs */}
          <div className="hero__ctas">
            <button className="btn btn-primary" onClick={scrollToProjects} id="hero-view-work-btn">
              <Sparkles size={16} />
              View My Work
            </button>
            <a href="/resume.pdf" download className="btn btn-outline" id="hero-download-resume-btn">
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Social */}
          <div className="hero__socials">
            <a href="https://github.com/IndumathiAnand" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/indumathi-ramaraj" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <div className="hero__social-divider" />
            <span className="hero__social-count">Open to remote &amp; hybrid roles</span>
          </div>
        </div>

        {/* Right: Profile Card */}
        <div className="hero__card-wrap">
          <div className="hero__profile-card glass-card">
            {/* Avatar */}
            <div className="hero__avatar">
              <div className="hero__avatar-ring" />
              <div className="hero__avatar-inner">
                <img
                  src="/Mypic.jpeg"
                  alt="Indumathi Ramaraj"
                  className="hero__avatar-photo"
                />
              </div>
            </div>

            {/* Info */}
            <h2 className="hero__card-name">Indumathi Ramaraj</h2>
            <p className="hero__card-role gradient-text">Full Stack Developer</p>

            {/* Mini stats */}
            <div className="hero__card-stats">
              <div className="hero__card-stat">
                <Code2 size={16} />
                <span>10+ Projects</span>
              </div>
              <div className="hero__card-stat">
                <Zap size={16} />
                <span>4+ Years Exp</span>
              </div>
              <div className="hero__card-stat">
                <Globe size={16} />
                <span>React Trainer</span>
              </div>
            </div>

            {/* Badge */}
            <div className="hero__card-badge">
              <span className="hero__status-dot" />
              Available Now
            </div>
          </div>

          {/* Floating code snippet */}
          <div className="hero__code-badge glass-card">
            <span className="hero__code-line">
              <span style={{ color: '#ec4899' }}>const</span>{' '}
              <span style={{ color: '#61dafb' }}>dev</span>{' '}
              <span style={{ color: '#fff' }}>=</span>{' '}
              <span style={{ color: '#f97316' }}>"Indumathi"</span>
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button className="hero__scroll" onClick={scrollToAbout} aria-label="Scroll down">
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
