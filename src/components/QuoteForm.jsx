import '../styles/forms.css'
const VEHICLES = ['Executive saloon', 'People carrier (MPV)', 'Minivan', 'Not sure yet']

function todayLocal() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export default function QuoteForm() {
  const today = todayLocal()
  return (
    <form action="https://formsubmit.co/info@1stassistltd.com" method="POST">
      <input type="hidden" name="_subject" value="New 1st Assist chauffeur quote request" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

      <div className="form-row">
        <div className="field">
          <label htmlFor="pickup">Pickup location</label>
          <input id="pickup" name="Pickup location" required placeholder="e.g. Heathrow Terminal 5" />
        </div>
        <div className="field">
          <label htmlFor="dropoff">Drop-off location</label>
          <input id="dropoff" name="Drop-off location" required placeholder="e.g. Central London" />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="date">Date</label>
          <input id="date" name="Travel date" type="date" min={today} required />
        </div>
        <div className="field">
          <label htmlFor="time">Pickup time</label>
          <input id="time" name="Pickup time" type="time" required />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="passengers">Passengers</label>
          <input id="passengers" name="Passengers" type="number" min="1" max="16" defaultValue="1" required />
        </div>
        <div className="field">
          <label htmlFor="vehicle">Vehicle type</label>
          <select id="vehicle" name="Vehicle type" defaultValue={VEHICLES[0]}>
            {VEHICLES.map((vehicle) => <option key={vehicle} value={vehicle}>{vehicle}</option>)}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="Customer name" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="Phone" type="tel" required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div className="field">
        <label htmlFor="details">Additional journey details</label>
        <textarea id="details" name="Additional journey details" placeholder="Flight number, luggage, return journey, child seat or extra stops, if applicable." />
      </div>

      <button type="submit" className="btn btn--brass">Request a quote</button>
      <p className="form-note">Your enquiry is sent directly to 1st Assist by email through the website form.</p>
    </form>
  )
}
