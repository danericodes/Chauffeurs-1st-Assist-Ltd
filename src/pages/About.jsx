import '../styles/page-hero.css'
import usePageTitle from '../hooks/usePageTitle.js'
import '../styles/about.css'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const VALUES = [
  ['01', 'Professional service', 'A chauffeur journey should feel organised, clear and respectful from the first booking conversation to arrival.'],
  ['02', 'Safety and compliance', 'The company states that its drivers are qualified, experienced and licensed, with operations subject to applicable private-hire requirements.'],
  ['03', 'Practical travel', 'Vehicle options, route information and journey details are considered together so the service fits the trip.'],
]

export default function About() {
  usePageTitle('About Us')
  return <>
    <section className="page-hero page-hero--about"><div className="container"><Reveal><div className="eyebrow">About 1st Assist</div><h1>Local knowledge. Professional chauffeur service.</h1><p>1st Assist Ltd is a London-based chauffeur company operating from Hayes, close to Heathrow Airport, with services covering airports, seaports, London journeys and longer UK travel.</p></Reveal></div></section>

    <section className="section"><div className="container grid grid--2">
      <Reveal className="image-card about-image"><img src={`${import.meta.env.BASE_URL}images/about-built.jpg`} alt="Chauffeur vehicle" loading="lazy"/>
      <div className="image-card__overlay"><h3>Based near Heathrow</h3><p>370 Cranford Lane, Hayes, UB3 5HD</p></div></Reveal>
      <Reveal delay={100}><div className="eyebrow">Who we are</div><h2>Built around airport and city travel.</h2><p>1st Assist states that it is registered with the Public Carriage Office and that its drivers are qualified, experienced and licensed by TfL. The company says it operates around the clock, 365 days a year.</p><p>Its published coverage includes Heathrow, Gatwick, Luton, Stansted and London City Airport, alongside Southampton, Harwich, Dover, Bristol, Portsmouth and Newhaven.</p><p>The service is designed around a simple objective: provide a dependable, comfortable and professionally coordinated journey for individuals, families, groups and business travellers.</p><Link to="/services" className="btn btn--brass">View our services</Link></Reveal>
    </div></section>

    <section className="section section--tight"><div className="container">
      <Reveal className="section-head"><div className="eyebrow">The chauffeur difference</div><h2>More than a car with a driver.</h2><p>A chauffeur booking is planned around the passenger: the collection point, timing, luggage, route and any special requirements are considered before the journey begins.</p></Reveal>
      <Reveal className="booking-strip" delay={80}>
        <div className="booking-strip__item"><strong>Pre-arranged travel</strong><span>Your journey is agreed before pickup rather than treated as an on-demand taxi trip.</span></div>
        <div className="booking-strip__item"><strong>Passenger care</strong><span>Professional, courteous service with attention to luggage, timing and comfort.</span></div>
        <div className="booking-strip__item"><strong>Journey flexibility</strong><span>Airport, business, event and longer-distance travel can be planned around your itinerary.</span></div>
      </Reveal>
    </div></section>

    <section className="section section--tinted"><div className="container"><Reveal className="section-head"><div className="eyebrow">What matters</div><h2>A service shaped by the journey.</h2></Reveal><div className="grid grid--3">{VALUES.map(([n,title,body],i)=><Reveal className="card" delay={i*80} key={n}><div className="eyebrow">{n}</div><h3>{title}</h3><p>{body}</p></Reveal>)}</div></div></section>

    <section className="section section--tight"><div className="container grid grid--2">
      <Reveal><div className="eyebrow">Company information</div><h2>Clear information before you travel.</h2><p>For specific booking conditions, waiting times, cancellation terms, charges and data protection information, see the published terms and conditions.</p><Link to="/terms" className="btn btn--outline-dark">Read terms &amp; conditions</Link></Reveal>
      <Reveal delay={100} className="card company-card"><div className="eyebrow">1st Assist Ltd</div><h3>Company details</h3><p><strong>Registration:</strong> 11863786</p><p><strong>Address:</strong><br/>370 Cranford Lane, Hayes, United Kingdom, UB3 5HD</p><p><strong>Email:</strong><br/><a href="mailto:info@1stassistltd.com">info@1stassistltd.com</a></p><p style={{ marginBottom: 0 }}><strong>Phone:</strong><br/><a href="tel:+442038434424">020 3843 4424</a></p></Reveal>
    </div></section>
  </>
}
