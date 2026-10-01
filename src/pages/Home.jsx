import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle.js'
import RouteLine from '../components/RouteLine.jsx'
import QuickCheck from '../components/QuickCheck.jsx'
import Faq from '../components/Faq.jsx'
import Reveal from '../components/Reveal.jsx'
import '../styles/home.css'

const SERVICES = [
  { number: '01', title: 'Airport transfers', body: 'Pre-arranged journeys to Heathrow, Gatwick, Luton, Stansted and London City Airport.' },
  { number: '02', title: 'City chauffeur hire', body: 'Point-to-point travel or hourly hire for meetings, appointments, shopping and events.' },
  { number: '03', title: 'Seaport & UK travel', body: 'Transfers to major UK ports and longer-distance journeys by arrangement.' },
]

const FEATURES = [
  ['Cleaned regularly', 'Vehicles are cleaned regularly and prepared for passenger journeys.'],
  ['Regular maintenance', 'Routine servicing supports dependable operation and passenger comfort.'],
  ['Climate controlled', 'Fully air-conditioned vehicles help keep journeys comfortable throughout the year.'],
  ['Non-smoking', 'Smoking and electronic cigarettes are not permitted inside passenger vehicles.'],
]

const COVERAGE = ['Heathrow', 'Gatwick', 'Luton', 'Stansted', 'London City', 'Southampton', 'Harwich', 'Dover', 'Bristol', 'Portsmouth', 'Newhaven']

const STEPS = [
  ['01', 'Share the journey', 'Tell us your pickup, destination, date, time, passengers and luggage requirements.'],
  ['02', 'Receive the details', 'We review the journey and confirm the available vehicle and quotation.'],
  ['03', 'Travel with 1st Assist', 'Your journey is arranged for the agreed pickup time and destination.'],
]

const FAQS = [
  { q: 'What happens if my flight is delayed?', a: 'The published terms provide airport grace periods measured from the last known estimated arrival time: 30 minutes for international arrivals and 15 minutes for domestic arrivals. Waiting beyond the applicable period may be charged.' },
  { q: 'What vehicles are available?', a: 'The fleet includes executive saloons, people carriers and minivans. The appropriate option depends on passengers, luggage and availability.' },
  { q: 'Do you cover journeys outside London?', a: 'Yes. The published coverage includes major London airports, UK seaports and longer-distance journeys by arrangement.' },
  { q: 'Can I request a child seat?', a: 'Child seats can be requested. An additional charge may apply, so include the requirement when requesting a quotation.' },
]

export default function Home() {
  usePageTitle()
  return (
    <>
      <section className="hero">
        <div className="hero__grid">
          <Reveal>
            <div className="hero__eyebrow">Chauffeur service · London & UK</div>
            <h1>Travel with a little more care.</h1>
            <p>1st Assist provides pre-arranged airport, city, seaport and longer-distance chauffeur journeys from its base near Heathrow.</p>
            <div className="hero__actions">
              <Link to="/quote" className="btn btn--brass">Request a quote <span>↗</span></Link>
              <a href="tel:+442038434424" className="btn btn--outline">Call 020 3843 4424</a>
            </div>
          </Reveal>

          <Reveal delay={110} className="hero__panel">
            <div className="hero__panel-title">Plan your journey</div>
            <div className="hero__panel-subtitle">A quick look at common routes before you request a quote.</div>
            <QuickCheck />
          </Reveal>
        </div>
      </section>

      <div className="trustbar">
        <div className="trustbar__row">
          <div className="trustbar__item">Qualified &amp; licensed drivers</div>
          <div className="trustbar__item">24/7 · 365 days</div>
          <div className="trustbar__item">Regularly maintained vehicles</div>
          <div className="trustbar__item">Air-conditioned &amp; non-smoking</div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="home-feature">
            <Reveal className="home-feature__image">
              <img src={`${import.meta.env.BASE_URL}images/Mercedez-on-the-move.jpg`} alt="Executive vehicle used for chauffeur travel" />
            </Reveal>
            <Reveal delay={100}>
              <div className="eyebrow">The 1st Assist approach</div>
              <h2>A calm journey starts before the car arrives.</h2>
              <p>Good chauffeur service is more than getting from A to B. It is clear arrangements, an appropriate vehicle and professional passenger service from pickup to destination.</p>
              <div className="home-feature__list">
                <div className="home-feature__item"><span className="home-feature__icon">01</span><div><h3>Professional drivers</h3><p>Qualified and experienced drivers focused on safe, courteous passenger service.</p></div></div>
                <div className="home-feature__item"><span className="home-feature__icon">02</span><div><h3>Practical vehicle choice</h3><p>Saloons, people carriers and minivans for different party and luggage requirements.</p></div></div>
                <div className="home-feature__item"><span className="home-feature__icon">03</span><div><h3>London and beyond</h3><p>Airport, seaport, city and longer-distance journeys can be arranged from near Heathrow.</p></div></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Services</div>
            <h2>One company for different journeys.</h2>
            <p>Whether you are travelling through an airport, attending a meeting or moving a group across the UK, the service can be arranged around your requirements.</p>
          </Reveal>
          <div className="grid grid--3">
            {SERVICES.map((service, i) => (
              <Reveal className="card service-card" delay={i * 90} key={service.title}>
                <div className="eyebrow">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <Link to="/services" className="text-link">Explore service <span>↗</span></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">The fleet</div>
            <h2>Space for the people and luggage you bring.</h2>
            <p>Executive saloons, people carriers and minivans give you practical choices for solo travellers, families and larger groups.</p>
          </Reveal>
          <div className="grid grid--3">
            {[
              [
                "Executive saloon",
                "For smaller groups and business travel.",
                `${import.meta.env.BASE_URL}images/Mercedez-on-the-move.jpg`,
              ],
              [
                "People carrier",
                "More passenger and luggage space.",
                `${import.meta.env.BASE_URL}images/4.jpg`,
              ],
              [
                "Minivan",
                "For larger parties travelling together.",
                `${import.meta.env.BASE_URL}images/Edited-van.jpg`,
              ],
            ].map(([title, body, image], i) => (
              <Reveal className="image-card" delay={i * 90} key={title}>
                <img src={image} alt={title} loading="lazy" />
                <div className="image-card__overlay"><h3>{title}</h3><p>{body}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: 28 }}>
            <Link to="/fleet" className="btn btn--outline-dark">View the full fleet</Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Coverage</div>
            <h2>Airports, seaports and routes across the UK.</h2>
            <p>Based close to Heathrow, 1st Assist lists the major London airports and a number of UK seaports among its regular coverage.</p>
          </Reveal>
          <Reveal as="ul" className="coverage-list">{COVERAGE.map(place => <li key={place}>{place}</li>)}</Reveal>
          <RouteLine width={340} height={46} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">How it works</div>
            <h2>Simple from request to pickup.</h2>
          </Reveal>
          <div className="grid grid--3">
            {STEPS.map(([num, title, body], i) => (
              <Reveal className="step-card" delay={i * 90} key={num}>
                <div className="step-card__num">{num}</div><h3>{title}</h3><p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <Reveal className="section-head"><div className="eyebrow">Every booking</div><h2>Details that support a better journey.</h2></Reveal>
          <div className="grid grid--2">
            {FEATURES.map(([title, body], i) => <Reveal className="card" delay={i * 70} key={title}><h3>{title}</h3><p>{body}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container" style={{ maxWidth: 820 }}>
          <Reveal className="section-head section-head--center"><div className="eyebrow">Questions</div><h2>Before you book</h2></Reveal>
          <Reveal><Faq items={FAQS} /></Reveal>
        </div>
      </section>

      <section className="section section--navy section--tight">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal><div className="eyebrow">Your next journey</div><h2>Tell us where you need to go.</h2><p style={{ margin: '0 auto 25px' }}>Send your journey details and request a quotation from 1st Assist.</p><Link to="/quote" className="btn btn--brass">Get a quote</Link></Reveal>
        </div>
      </section>
    </>
  )
}

// i need an image for tell us what matters, 2. services hero 3. fleet hero 4. built around airport and city 5. need a price for a specifi journey 6. have a journey in mind 7. tell us where you need to go 

