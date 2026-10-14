import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        {/* <div className="hero-badge">
          <span className="badge-dot" />
          Available for new Projects
        </div> */}

        <h1 className="hero-title">
          Hey! , I am <span className="hero-name">Aya</span>
        </h1>

        <h2 className="hero-subtitle">Full-Stack & AI Developer</h2>

        <p className="hero-desc">
          Driven by innovation, I build intelligent web applications that combine modern technologies with practical solutions.
           Passionate about AI, startups, and user-centered design, I transform ideas into scalable digital experiences.</p>

        

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary" onClick={e => {
            e.preventDefault()
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline" onClick={e => {
            e.preventDefault()
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Get in Touch
          </a>
        </div>
      </div>

      {/* Ambient glow */}
      <div className="hero-glow" />
    </section>
  )
}
