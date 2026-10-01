import { NavLink } from 'react-router-dom'
import '../styles/brand.css'

export default function BrandLockup({ className = '', onClick }) {
  return (
    <NavLink
      to="/"
      className={`navbar__brand ${className}`.trim()}
      onClick={onClick}
      aria-label="CHAUFFEURS 1ST ASSIST LTD home"
    >
      <span className="navbar__brand-lockup">
        <span className="navbar__brand-wordmark">
          <strong>CHAUFFEURS</strong>
          <em>1ST ASSIST LTD</em>
        </span>
      </span>
    </NavLink>
  )
}
