import '../styles/page-hero.css'
import usePageTitle from '../hooks/usePageTitle.js'
import '../styles/fleet.css'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const FLEET = [
  {
    name: 'Executive saloon',
    meta: 'Smaller groups · executive travel',
    image: `${import.meta.env.BASE_URL}images/Mercedez-on-the-move.jpg`,
    body: 'A refined option for solo travellers, couples and smaller groups. Well suited to airport transfers, business journeys and city travel.',
  },
  {
    name: 'People carrier',
    meta: 'Families · small groups',
    image: `${import.meta.env.BASE_URL}images/4.jpg`,
    body: 'More room for passengers and luggage, making it a practical choice for families, small groups and longer journeys.',
  },
  {
    name: 'Minivan',
    meta: 'Larger groups · shared travel',
    image: `${import.meta.env.BASE_URL}images/Edited-van.jpg`,
    body: 'A larger-capacity option for group airport transfers, events and journeys where travelling together is more convenient.',
  },
]
const FEATURES = [
  ['Cleaned regularly', 'Vehicles are cleaned regularly and prepared for passenger journeys.'],
  ['Routine maintenance', 'Routine servicing supports dependable operation and passenger comfort.'],
  ['Fully air-conditioned', 'Climate control helps keep journeys comfortable throughout the year.'],
  ['Non-smoking vehicles', 'Smoking and electronic cigarettes are not permitted inside passenger vehicles.'],
  ['Satellite navigation', 'Listed among the vehicle features published by 1st Assist.'],
  ['GPS tracked', 'Listed among the vehicle features published by 1st Assist.'],
]

export default function Fleet() {
  usePageTitle('Our Fleet')
  return <>
    <section className="page-hero page-hero--fleet"><div className="container"><Reveal><div className="eyebrow">Our fleet</div><h1>The right space for the journey.</h1><p>From executive saloons to people carriers and minivans, the fleet is designed to cover different passenger and luggage requirements.</p></Reveal></div></section>

    <section className="section"><div className="container">
      <Reveal className="section-head"><div className="eyebrow">Vehicle options</div><h2>Choose by passengers, luggage and journey.</h2><p>Vehicle availability depends on the requested date and time. If you are unsure which option fits, include your passenger and luggage details in your quote request.</p></Reveal>
      <div className="grid grid--3">{FLEET.map((v,i)=><Reveal className="image-card fleet-card" delay={i*90} key={v.name}><img src={v.image} alt={v.name} loading="lazy"/><div className="image-card__overlay"><div className="eyebrow">{v.meta}</div><h3>{v.name}</h3><p>{v.body}</p></div></Reveal>)}</div>
    </div></section>

    <section className="section section--tinted"><div className="container">
      <Reveal className="section-head"><div className="eyebrow">Every vehicle</div><h2>A consistent standard across the fleet.</h2><p>The company's published information highlights the following vehicle-care and comfort features.</p></Reveal>
      <div className="grid grid--3">{FEATURES.map(([title, body],i)=><Reveal className="card fleet-feature" delay={i*60} key={title}><div className="fleet-feature__number">0{i+1}</div><h3>{title}</h3><p>{body}</p></Reveal>)}</div>
    </div></section>

    <section className="section"><div className="container grid grid--2">
      <Reveal><div className="eyebrow">Need more space?</div><h2>Tell us what you're carrying.</h2><p>Passenger numbers alone do not always determine the best vehicle. Large cases, pushchairs, golf bags or event equipment can change the space you need.</p><p>Include those details in your quote request and the team can assess the appropriate vehicle, subject to availability.</p><Link to="/quote" className="btn btn--brass">Request a quote</Link></Reveal>
      <Reveal delay={100} className="card"><div className="eyebrow">For your quotation</div><h3>Useful vehicle information</h3><ul className="clean-list"><li>Number of passengers</li><li>Number and size of cases</li><li>Child seat requirements</li><li>Pickup and destination</li><li>One-way or return journey</li><li>Travel date and time</li></ul></Reveal>
    </div></section>
  </>
}
