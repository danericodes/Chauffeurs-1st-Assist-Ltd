import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowUpRight, Phone } from 'lucide-react'
import '../styles/navbar.css'
import BrandLockup from './BrandLockup.jsx'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/fleet', label: 'Fleet' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu only when the layout switches to desktop.
  // (A plain 'resize' listener also fires when a phone's address bar hides/shows.)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 761px)')
    const onChange = (e) => { if (e.matches) setOpen(false) }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__utility">
        <div className="navbar__utility-inner">
          <div className="navbar__utility-contacts">
            <span>24/7 chauffeur service</span>
            <a href="tel:+447414868223">+44 7414 868223</a>
            <span className="navbar__utility-sep">•</span>
            <a href="tel:+442038434424">020 3843 4424</a>
          </div>
          <a className="navbar__utility-email" href="mailto:info@1stassistltd.com">info@1stassistltd.com</a>
        </div>
      </div>

      <div className="navbar__bar">
        <div className="navbar__bar-inner">
          <BrandLockup onClick={close} />

          <nav className="navbar__desktop-nav" aria-label="Main navigation">
            <ul className="navbar__links">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__desktop-actions">
            <a href="tel:+442038434424" className="navbar__call"><Phone size={15} strokeWidth={1.8} /> Call us</a>
            <NavLink to="/quote" className="btn btn--brass">Get a quote</NavLink>
          </div>

          <button
            className={`navbar__toggle ${open ? 'open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`navbar__mobile-menu ${open ? 'open' : ''}`}>
        <div className="navbar__mobile-menu-inner">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={({ isActive }) => `navbar__mobile-link ${isActive ? 'active' : ''}`} onClick={close}>
              <span>{link.label}</span><ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.6} />
            </NavLink>
          ))}
          <NavLink to="/quote" className="btn btn--brass navbar__mobile-cta" onClick={close}>Request a quote</NavLink>
          <a className="navbar__mobile-phone" href="tel:+442038434424">020 3843 4424</a>
        </div>
      </div>
    </header>
  )
}
