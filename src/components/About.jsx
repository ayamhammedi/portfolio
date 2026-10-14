import './About.css'

function PixelChar() {
  return (
    <svg className="pixel-char" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      {/* Pixel art character - castle/wizard silhouette */}
      <g fill="#8b5cf6">
        {/* Body */}
        <rect x="40" y="60" width="40" height="40" rx="2"/>
        {/* Head */}
        <rect x="45" y="30" width="30" height="28" rx="3"/>
        {/* Hat */}
        <rect x="50" y="10" width="20" height="22" rx="2"/>
        <rect x="45" y="26" width="30" height="6" rx="1"/>
        {/* Eyes */}
        <rect x="51" y="39" width="5" height="5" rx="1" fill="#0a0a0f"/>
        <rect x="64" y="39" width="5" height="5" rx="1" fill="#0a0a0f"/>
        {/* Mouth */}
        <rect x="52" y="50" width="16" height="3" rx="1" fill="#6d28d9"/>
        {/* Legs */}
        <rect x="42" y="98" width="14" height="12" rx="2" fill="#6d28d9"/>
        <rect x="64" y="98" width="14" height="12" rx="2" fill="#6d28d9"/>
        {/* Arms */}
        <rect x="24" y="62" width="16" height="10" rx="2" fill="#7c3aed"/>
        <rect x="80" y="62" width="16" height="10" rx="2" fill="#7c3aed"/>
      </g>
      {/* Sparkles */}
      <g fill="#a78bfa" opacity="0.8">
        <rect x="15" y="20" width="5" height="5" rx="1"/>
        <rect x="100" y="35" width="4" height="4" rx="1"/>
        <rect x="108" y="15" width="3" height="3" rx="1"/>
        <rect x="10" y="45" width="3" height="3" rx="1"/>
        <rect x="95" y="10" width="6" height="6" rx="1"/>
      </g>
      {/* Plus symbols */}
      <g fill="#c4b5fd" opacity="0.6">
        <rect x="5" y="70" width="8" height="2"/>
        <rect x="8" y="67" width="2" height="8"/>
        <rect x="107" y="75" width="8" height="2"/>
        <rect x="110" y="72" width="2" height="8"/>
      </g>
    </svg>
  )
}

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p>
              I'm a passionate Full-Stack and AI Developer who enjoys transforming ideas into intelligent, user-focused digital solutions. 
              I love building modern web applications that combine clean design, efficient architecture, and innovative technologies to solve real-world problems.
            </p>
            <p>
              My interests extend beyond web development into artificial intelligence, startups, and entrepreneurship.
              I enjoy exploring new technologies, improving my skills, and creating projects that make a meaningful impact.
            </p>
            <p>
              When I'm not coding, you'll find me learning about emerging AI tools, working on personal projects, expanding my knowledge through research, or refining new ideas that can become innovative products.
           </p>
            <p>
              I'm always looking for opportunities to collaborate on exciting projects that challenge me, inspire creativity, and help me grow as a developer.            </p>
          </div>
          <div className="about-visual">
            <div className="pixel-wrapper">
              <PixelChar />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
