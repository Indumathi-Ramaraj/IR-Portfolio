import { experience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Career</div>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey building products and growing as an engineer.
          </p>
        </div>

        <div className="experience__timeline">
          {experience.map((job, i) => (
            <div key={job.company} className="experience__item">
              {/* Timeline line + dot */}
              <div className="experience__dot-wrap">
                <div className={`experience__dot ${job.current ? 'experience__dot--active' : ''}`}>
                  <Briefcase size={14} />
                </div>
                {i < experience.length - 1 && <div className="experience__line" />}
              </div>

              {/* Content */}
              <div className="glass-card experience__card">
                {/* Header */}
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{job.role}</h3>
                    <div className="experience__company">{job.company}</div>
                  </div>
                  <div className="experience__meta">
                    <div className="experience__badge">
                      {job.current
                        ? <span className="experience__current">Current</span>
                        : <span className="experience__past">{job.type}</span>
                      }
                    </div>
                    <div className="experience__period">
                      <Calendar size={13} />
                      {job.period}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="experience__desc">{job.description}</p>

                {/* Tech */}
                <div className="experience__tech">
                  {job.tech.map(t => (
                    <span key={t} className="experience__tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
