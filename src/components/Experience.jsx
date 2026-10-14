import './Experience.css'

const experiences = [
  {
    year: '2026',
    role: 'AI & Full-Stack Developer',
    company: 'SmartValidator',
    companyColor: true,
    desc: 'Developed an AI-powered platform for startup data analysis, market insights, and decision support, using Python, machine learning, PostgreSQL, React, and FastAPI.',
  },
  {
    year: '2025',
    role: 'Software Development Intern',
    company: 'Electronic Payment Solutions',
    companyColor: true,
    desc: 'Worked on enterprise payment applications, contributing to backend development, debugging, and feature implementation while collaborating within an agile development team.',
  },
  {
    year: '2024',
    role: 'Freelance & Personal Projects',
    company: 'Independent',
    companyColor: true,
    desc: 'Built full-stack web applications, including an e-commerce platform for crafts and startups (React, Node.js, Express.js, MongoDB) and a medical clinic management platform (React, Laravel, PostgreSQL), focusing on solving real-world problems.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="exp-list">
          {experiences.map((exp, i) => (
            <div key={i} className="exp-item">
              <div className="exp-year-col">
                <div className="exp-year-badge">{exp.year}</div>
                {i < experiences.length - 1 && <div className="exp-line" />}
              </div>
              <div className="exp-card">
                <p className="exp-role">{exp.role}</p>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}