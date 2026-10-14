import './Projects.css'

const projects = [
  {
    title: 'SmartValidator',
    desc: 'An AI-powered startup validation platform that helps entrepreneurs evaluate business ideas through market analysis, SWOT and PESTEL reports, financial insights, viability scoring, and machine learning predictions.',
    tags: ['React', 'Node.js', 'Supabase', 'PostgreSQL', 'AI', 'LightGBM'],
    hue: 270,
  },
  {
    title: 'E-Commerce Platform for Crafts and Startups',
    desc: 'A full-stack e-commerce platform for artisans and small startups, with product management, database operations, and responsive user interfaces across devices.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    hue: 160,
  },
  {
    title: 'Medical Clinic Management Platform',
    desc: 'A web application for managing patient records and appointments, helping clinics organize their daily operations in one place.',
    tags: ['React', 'Laravel', 'PostgreSQL'],
    hue: 200,
  },
]

function ProjectCard({ project }) {
  return (
    <div className="proj-card">
      <div className="proj-thumb" style={{
        background: `linear-gradient(135deg,
          hsl(${project.hue}, 60%, 8%) 0%,
          hsl(${project.hue}, 70%, 14%) 50%,
          hsl(${project.hue}, 50%, 10%) 100%)`
      }}>
        <div className="proj-thumb-inner">
          <div className="thumb-grid">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="thumb-block" style={{
                background: `hsla(${project.hue + (i * 5 % 30) - 15}, 70%, ${20 + (i % 3) * 8}%, ${0.4 + (i % 4) * 0.15})`,
                borderRadius: i % 3 === 0 ? '6px' : '3px',
              }}/>
            ))}
          </div>
          <div className="thumb-glow" style={{
            background: `radial-gradient(circle, hsla(${project.hue}, 80%, 50%, 0.25) 0%, transparent 70%)`
          }}/>
        </div>
      </div>
      <div className="proj-body">
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.desc}</p>
        <div className="proj-tags">
          {project.tags.map(t => (
            <span key={t} className="proj-tag">{t}</span>
          ))}
        </div>
        {/* <div className="proj-actions">
          <button className="btn-view">View Details</button>
          <button className="proj-icon-btn" aria-label="GitHub">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </button>
          <button className="proj-icon-btn" aria-label="Live demo">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="proj-header">
          <h2 className="section-title section-title-center">My Projects</h2>
          <p className="proj-sub">
            A collection of projects I've built, from AI-powered platforms to
            full-stack web applications that solve real-world problems.
          </p>
        </div>
        <div className="proj-grid">
          {projects.map(p => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}