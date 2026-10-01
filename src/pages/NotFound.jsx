import '../styles/notfound.css'
import usePageTitle from '../hooks/usePageTitle.js'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

export default function NotFound() {
  usePageTitle('Page Not Found')
  return <section className="section not-found"><div className="container"><Reveal><div className="eyebrow">404</div><h1>That page has taken a different route.</h1><p>We couldn't find the page you were looking for. Head back to the homepage or go straight to a quote.</p><div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', marginTop:25 }}><Link to="/" className="btn btn--outline-dark">Back home</Link><Link to="/quote" className="btn btn--brass">Get a quote</Link></div></Reveal></div></section>
}
