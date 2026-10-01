import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import BrandLockup from './BrandLockup.jsx'
import '../styles/footer.css'

const services = [
  ['Airport transfers', '/services'],
  ['Corporate travel', '/services'],
  ['Chauffeur hire', '/services'],
  ['Seaport transfers', '/services'],
]

const company = [
  ['About us', '/about'],
  ['Our fleet', '/fleet'],
  ['Services', '/services'],
  ['Get a quote', '/quote'],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__intro">
          <BrandLockup className="footer__logo" />
          <p className="footer__intro-copy">
            Professional chauffeur services for airport transfers, corporate travel,
            private journeys and longer-distance travel across London and the UK.
          </p>
          <Link to="/quote" className="footer__primary-link">
            Arrange a journey <ArrowUpRight size={16} strokeWidth={1.7} aria-hidden="true" />
          </Link>
        </div>

        <div className="footer__column">
          <h3>Services</h3>
          <ul>
            {services.map(([label, href]) => (
              <li key={label}><Link to={href}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h3>Company</h3>
          <ul>
            {company.map(([label, href]) => (
              <li key={label}><Link to={href}>{label}</Link></li>
            ))}
            <li><Link to="/terms">Terms &amp; conditions</Link></li>
          </ul>
        </div>

        <div className="footer__column footer__contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <MapPin size={15} strokeWidth={1.5} aria-hidden="true" />
              <span>370 Cranford Lane, Hayes, United Kingdom, UB3 5HD</span>
            </li>
            <li>
              <Phone size={15} strokeWidth={1.5} aria-hidden="true" />
              <a href="tel:+447414868223">+44 7414 868223</a>
            </li>
            <li>
              <Phone size={15} strokeWidth={1.5} aria-hidden="true" />
              <a href="tel:+442038434424">020 3843 4424</a>
            </li>
            <li>
              <Mail size={15} strokeWidth={1.5} aria-hidden="true" />
              <a href="mailto:info@1stassistltd.com">info@1stassistltd.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__booking">
        <div className="footer__booking-inner container">
          <div>
            <span className="footer__booking-label">Private &amp; business travel</span>
            <strong>Planning your next journey?</strong>
          </div>
          <Link to="/quote" className="footer__booking-link">
            Request a quote <ArrowUpRight size={17} strokeWidth={1.6} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <span>Company Registration Number 11863786</span>
          <span>© {new Date().getFullYear()} CHAUFFEURS 1ST ASSIST LTD. All rights reserved.</span>
          <Link to="/terms">Terms &amp; conditions</Link>
        </div>
      </div>
    </footer>
  )
}
