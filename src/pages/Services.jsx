import '../styles/page-hero.css'
import usePageTitle from '../hooks/usePageTitle.js'
import '../styles/services.css'
import { Link } from 'react-router-dom'
import Faq from '../components/Faq.jsx'
import Reveal from '../components/Reveal.jsx'

const SERVICES = [
  ['01', 'Airport transfers', 'Pre-arranged chauffeur journeys to and from Heathrow, Gatwick, Luton, Stansted and London City Airport.', 'Airports'],
  ['02', 'Seaport transfers', 'Transfers for cruise and ferry passengers travelling to Southampton, Harwich, Dover, Bristol, Portsmouth and Newhaven.', 'Ports'],
  ['03', 'City chauffeur hire', 'Point-to-point journeys around London, or hourly hire when your day involves several meetings, appointments or stops.', 'London'],
  ['04', 'Corporate travel', 'A practical transport option for businesses that need repeat journeys, account arrangements and a consistent point of contact.', 'Business'],
  ['05', 'Events & occasions', 'Pre-arranged chauffeur transport for weddings, conferences, private events and other occasions where coordinated movement matters.', 'Events'],
  ['06', 'Long-distance journeys', 'Longer journeys across the UK can be arranged with suitable vehicles and practical route planning.', 'UK travel'],
]

const FAQS = [
  { q: 'What happens if my flight is delayed?', a: 'The published terms provide a grace period measured from the last known estimated arrival time: 30 minutes for international arrivals and 15 minutes for domestic arrivals. Waiting beyond that period may be charged.' },
  { q: 'Can I book a round trip?', a: 'Yes. Include both legs when requesting a quote so the pickup, return journey and vehicle requirements can be considered together.' },
  { q: 'Do you provide child seats?', a: 'Child seats can be requested and an additional charge may apply. Include the requirement when requesting your quotation.' },
  { q: 'How far in advance should I book?', a: 'Advance booking is recommended when a particular vehicle or collection time is important. Same-day requests can be made subject to availability.' },
]

export default function Services() {
  usePageTitle('Chauffeur Services')
  return <>
    <section className="page-hero page-hero--services"><div className="container"><Reveal><div className="eyebrow">Our services</div><h1>Chauffeur travel built around your journey.</h1><p>From airport pickups to business travel and longer UK journeys, 1st Assist provides pre-arranged passenger transport from its base near Heathrow.</p></Reveal></div></section>

    <section className="section"><div className="container">
      <Reveal className="section-head"><div className="eyebrow">What we do</div><h2>One service, different ways to travel.</h2><p>Choose the type of journey you need, then send us the details. We can help determine the appropriate vehicle and pickup arrangements before travel.</p></Reveal>
      <div className="grid grid--3">{SERVICES.map(([num, title, body, tag], i) => <Reveal className="card service-detail" delay={i * 70} key={title}><div className="service-detail__top"><span>{num}</span><small>{tag}</small></div><h3>{title}</h3><p>{body}</p></Reveal>)}</div>
    </div></section>

    <section className="section section--tinted"><div className="container grid grid--2">
      <Reveal className="image-card"><img src={`${import.meta.env.BASE_URL}images/services-tell-us-what-matters.avif`} alt="Chauffeur service vehicle" loading="lazy"/><div className="image-card__overlay"><h3>Start with the journey details.</h3><p>The right vehicle and arrangement depend on the practical details of the trip.</p></div></Reveal>
      <Reveal delay={100}><div className="eyebrow">Before you travel</div><h2>Tell us what matters.</h2><p>For a useful quote, provide the collection point, destination, travel date, pickup time, passenger count and luggage requirements.</p><p>For airport journeys, include your flight number where available. If you need a child seat, return journey or additional stop, mention that at the start.</p><div className="service-checklist"><span>✓ Airport or pickup details</span><span>✓ Passenger &amp; luggage count</span><span>✓ Date and pickup time</span><span>✓ Return or additional stops</span></div><Link to="/quote" className="btn btn--brass">Request a quote</Link></Reveal>
    </div></section>

    <section className="section section--tight"><div className="container" style={{ maxWidth: 820 }}><Reveal className="section-head section-head--center"><div className="eyebrow">Questions</div><h2>Common booking questions</h2></Reveal><Reveal><Faq items={FAQS}/></Reveal></div></section>

    <section className="section section--navy section--tight"><div className="container" style={{ textAlign: 'center' }}><Reveal><div className="eyebrow">Ready when you are</div><h2>Have a journey in mind?</h2><p style={{ margin: '0 auto 25px' }}>Send the details and 1st Assist can confirm the practical arrangements and quotation.</p><Link to="/quote" className="btn btn--brass">Get a quote</Link></Reveal></div></section>
  </>
}
