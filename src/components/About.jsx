import { stats } from '../data/portfolioData';
import { Code2, Briefcase, Layers, GraduationCap } from 'lucide-react';
import './About.css';

const STAT_ICONS = [Briefcase, Code2, Layers, GraduationCap];

export default function About() {
  return (
    <section id="about" className="section section-alt about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">
            Building experiences <span className="gradient-text">that matter.</span>
          </h2>
          <p className="section-subtitle">
            I'm a passionate Full Stack Developer based in Coimbatore, India, with a love for clean code,
            elegant UIs, and scalable backend systems. I also mentor developers as a React.js Technical Trainer.
          </p>
        </div>

        {/* Stats grid */}
        <div className="about__stats">
          {stats.map(({ value, label }, i) => {
            const Icon = STAT_ICONS[i];
            return (
              <div key={label} className="glass-card about__stat-card">
                <div className="about__stat-icon">
                  <Icon size={22} />
                </div>
                <div className="about__stat-value gradient-text">{value}</div>
                <div className="about__stat-label">{label}</div>
              </div>
            );
          })}
        </div>

        {/* Bio section */}
        <div className="about__bio glass-card">
          <div className="about__bio-content">
            <h3 className="about__bio-title">My Journey</h3>
            <p>
              With over <strong>4+ years of professional experience</strong>, I've worked across the full stack —
              crafting pixel-perfect frontends with React.js and Vue.js, building robust APIs with FastAPI and
              Node.js, and managing complex databases with PostgreSQL and MongoDB.
            </p>
            <p>
              At <strong>HMG Technology</strong>, I lead frontend development for enterprise SaaS products, and
              I bring that same passion to mentoring the next generation of React developers. I'm always exploring
              new technologies and love turning complex problems into elegant solutions.
            </p>
            <p>
              When I'm not coding, I'm contributing to open source, improving my design skills, and staying
              up to date with the latest in web development trends — from server components to AI tooling.
            </p>
          </div>
          <div className="about__bio-highlights">
            <div className="about__highlight">
              <span className="about__highlight-dot" />
              Full Stack Development (React + FastAPI)
            </div>
            <div className="about__highlight">
              <span className="about__highlight-dot" />
              React.js Technical Trainer
            </div>
            <div className="about__highlight">
              <span className="about__highlight-dot" />
              Open to Remote &amp; Hybrid Roles
            </div>
            <div className="about__highlight">
              <span className="about__highlight-dot" />
              Based in Coimbatore, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
