import './Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    tags: [
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend',
    tags: [
      'Node.js',
      'Express.js',
      'Python',
      'REST APIs',
      'PostgreSQL',
      'Supabase',
    ],
  },
  {
    title: 'AI & Data',
    tags: [
      'Machine Learning',
      'LightGBM',
      'Scikit-learn',
      'Pandas',
      'Prompt Engineering',
      'AI Integration',
    ],
  },
  {
    title: 'Tools & Technologies',
    tags: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Docker',
      'Linux',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map(cat => (
            <div key={cat.title} className="skills-card">
              <p className="skills-card-title">{cat.title}</p>
              <div className="skills-tags">
                {cat.tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
