import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['Home', 'About', 'Projects', 'Blog', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, link) => {
    e.preventDefault()
    const id = link.toLowerCase()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo" onClick={e => handleNavClick(e, 'home')}>
          <span className="logo-dot">Aya</span>Portfolio
        </a>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={e => handleNavClick(e, link)}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
