import '../styles/page-hero.css'
import usePageTitle from '../hooks/usePageTitle.js'
import '../styles/quote.css'
import QuoteForm from '../components/QuoteForm.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Quote() {
  usePageTitle('Request a Quote')
  return <>
    <section className="page-hero page-hero--quote"><div className="container"><Reveal><div className="eyebrow">Request a quote</div><h1>Tell us about your journey.</h1><p>The more detail you provide, the easier it is for the team to understand the vehicle, route and timing you need.</p></Reveal></div></section>
    <section className="section"><div className="container quote-layout">
      <Reveal className="card quote-form-card"><QuoteForm /></Reveal>
      <Reveal delay={100}>
        <div className="eyebrow">What to include</div><h2>Help us understand the trip.</h2><p>Have these details available where possible:</p>
        <div className="quote-details"><span>Pickup address or airport</span><span>Destination</span><span>Date and pickup time</span><span>Number of passengers</span><span>Luggage requirements</span><span>Flight number for airport arrivals</span><span>One-way or return journey</span><span>Child seat requirements</span></div>
        <div className="card quote-callout"><div className="eyebrow">Prefer to speak to us?</div><h3>Call the team directly.</h3><p>For a booking enquiry or question about your journey, you can call 020 3843 4424.</p><a href="tel:+442038434424" className="btn btn--outline-dark">020 3843 4424</a></div>
      </Reveal>
    </div></section>
  </>
}
