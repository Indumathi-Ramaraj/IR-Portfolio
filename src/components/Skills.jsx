import { skills } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Tech Stack</div>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A curated set of tools and frameworks I use to build modern, scalable, and delightful applications.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map(({ category, icon, color, items }) => (
            <div
              key={category}
              className="glass-card skills__card"
              style={{ '--accent': color }}
            >
              <div className="skills__card-header">
                <div className="skills__icon">{icon}</div>
                <h3 className="skills__category">{category}</h3>
                <span className="skills__count">{items.length} skills</span>
              </div>
              <div className="skills__tags">
                {items.map((skill) => (
                  <span key={skill} className="skills__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
