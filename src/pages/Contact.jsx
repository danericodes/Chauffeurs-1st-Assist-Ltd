import '../styles/forms.css'
import usePageTitle from '../hooks/usePageTitle.js'
import '../styles/page-hero.css'
import '../styles/contact.css'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  usePageTitle('Contact')
  return <>
    <section className="page-hero page-hero--contact">
      
      <div className="container"><Reveal><div className="eyebrow">Contact</div><h1>Let's talk about your journey.</h1><p>For booking enquiries, general questions or business travel arrangements, contact 1st Assist using the details below.</p></Reveal></div></section>

    <section className="section"><div className="container contact-grid">
      <Reveal><div className="eyebrow">Find us</div><h2>Based near Heathrow.</h2><p>370 Cranford Lane<br/>Hayes, United Kingdom<br/>UB3 5HD</p>
        <div className="contact-info-grid">
          <div><div className="eyebrow">Call</div><p><a href="tel:+447414868223">+44 7414 868223</a><br/><a href="tel:+442038434424">020 3843 4424</a></p></div>
          <div><div className="eyebrow">Email</div><p><a href="mailto:info@1stassistltd.com">info@1stassistltd.com</a><br/><a href="mailto:info@1stassist.uk">info@1stassist.uk</a></p></div>
        </div>
        <div className="map-wrap"><iframe title="1st Assist Ltd location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.5805523544086!2d-0.421123424101153!3d51.48421307180804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487672f739101153408b%3A0x89a492ec99c6f150!2s370%20Cranford%20Ln%2C%20Harlington%2C%20Hayes%20UB3%205HD%2C%20UK!5e0!3m2!1sen!2s!4v1695671102587!5m2!1sen!2s" width="100%" height="290" style={{ border:0, display:'block' }} loading="lazy" /></div>
      </Reveal>

      <Reveal delay={100} className="card contact-form-card">
        <form action="https://formsubmit.co/info@1stassistltd.com" method="POST">
          <input type="hidden" name="_subject" value="New 1st Assist website enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
          <div className="eyebrow">Send a message</div><h2>How can we help?</h2>
          <div className="form-row"><div className="field"><label htmlFor="c-name">Full name</label><input id="c-name" name="Customer name" required /></div><div className="field"><label htmlFor="c-phone">Phone</label><input id="c-phone" name="Phone" type="tel" /></div></div>
          <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" name="email" type="email" required /></div>
          <div className="field"><label htmlFor="c-subject">Subject</label><input id="c-subject" name="Subject" /></div>
          <div className="field"><label htmlFor="c-message">Message</label><textarea id="c-message" name="Message" required /></div>
          <button type="submit" className="btn btn--brass">Send message</button>
          <p className="form-note" style={{ marginTop: 12 }}>Your message is sent to the company's email address through the form service. For immediate booking enquiries, call the team or use the quote page.</p>
        </form>
      </Reveal>
    </div></section>

    <section className="section section--tinted"><div className="container">
      <Reveal className="section-head"><div className="eyebrow">Useful when booking</div><h2>Give the team the details that affect the journey.</h2><p>Airport terminal, flight number, passenger count, luggage, child seats, return travel and additional stops can all affect the vehicle or timing. Including them early makes it easier to prepare an accurate response.</p></Reveal>
      <div className="booking-strip">
        <div className="booking-strip__item"><strong>Airport pickup</strong><span>Include the airport, terminal and flight number where available.</span></div>
        <div className="booking-strip__item"><strong>Business travel</strong><span>Share meeting locations and timing if you need several stops.</span></div>
        <div className="booking-strip__item"><strong>Group travel</strong><span>Tell us passenger and luggage numbers so the vehicle can be considered correctly.</span></div>
      </div>
    </div></section>

    <section className="section section--navy section--tight"><div className="container" style={{ textAlign:'center' }}><Reveal><div className="eyebrow">Booking</div><h2>Need a price for a specific journey?</h2><p style={{ margin:'0 auto 25px' }}>Use the quote form and include your travel details.</p><Link to="/quote" className="btn btn--brass">Request a quote</Link></Reveal></div></section>
  </>
}
