import '../styles/quick-check.css'
import { useState } from 'react'
import { Clock } from 'lucide-react'

// Indicative road times only - confirm figures with the company before launch.
const ROUTES = {
  Heathrow: 'Typically around 45 minutes to central London.',
  Gatwick: 'Typically 60\u201390 minutes to central London, longer at peak times.',
  Luton: 'Typically around an hour to central London.',
  Stansted: 'Typically 60\u201375 minutes to central London.',
  'London City': 'Typically 30\u201345 minutes to central London.',
  Southampton: 'Typically 1 hour 45 minutes or more to central London.',
}

export default function QuickCheck() {
  const [airport, setAirport] = useState('Heathrow')

  return (
    <div className="quick-check">
      <label htmlFor="quick-airport" className="quick-check__label">Check a route</label>
      <select id="quick-airport" value={airport} onChange={(e) => setAirport(e.target.value)}>
        {Object.keys(ROUTES).map((name) => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
      <div className="quick-check__result" key={airport} aria-live="polite">
        <Clock size={16} aria-hidden="true" />
        <span>{ROUTES[airport]}</span>
      </div>
      <p className="quick-check__note">Indicative road times only. Your quote confirms timing for your journey.</p>
    </div>
  )
}
