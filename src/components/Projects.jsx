import { useState } from "react";
import { ExternalLink, Github, Tag } from "lucide-react";
import { projects } from "../data/portfolioData";
import "./Projects.css";

const FILTERS = ["All", "Full Stack", "Frontend"];

const TAG_COLORS = {
  "Full Stack": {
    bg: "rgba(236,72,153,0.12)",
    color: "#ec4899",
    border: "rgba(236,72,153,0.25)",
  },
  Frontend: {
    bg: "rgba(139,92,246,0.12)",
    color: "#8b5cf6",
    border: "rgba(139,92,246,0.25)",
  },
};

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <section id="projects" className="section section-alt projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of real-world projects showcasing full-stack and
            frontend expertise.
          </p>
        </div>

        {/* Filters */}
        <div className="projects__filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              id={`projects-filter-${f.toLowerCase().replace(" ", "-")}`}
              className={`projects__filter-btn ${active === f ? "projects__filter-btn--active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
              <span className="projects__filter-count">
                {f === "All"
                  ? projects.length
                  : projects.filter((p) => p.tag === f).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((project, i) => {
            const tagStyle = TAG_COLORS[project.tag] || {};
            return (
              <div
                key={project.id}
                className="glass-card projects__card"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {/* Card header / gradient band */}
                <div className="projects__card-banner">
                  <div className="projects__card-number">0{project.id}</div>
                  <span
                    className="projects__tag"
                    style={{
                      background: tagStyle.bg,
                      color: tagStyle.color,
                      border: `1px solid ${tagStyle.border}`,
                    }}
                  >
                    <Tag size={11} />
                    {project.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="projects__card-body">
                  <h3 className="projects__title">{project.title}</h3>
                  <p className="projects__desc">{project.description}</p>

                  {/* Tech */}
                  <div className="projects__tech">
                    {project.tech.map((t) => (
                      <span key={t} className="projects__tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="projects__card-footer">
                  <a
                    href={project.links.live}
                    className="projects__link projects__link--primary"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
