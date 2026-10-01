import '../styles/whatsapp.css'

const WHATSAPP_NUMBER = '447414868223' // +44 7414 868223, no leading +
const MESSAGE = "Hello 1st Assist Ltd, I'd like to enquire about a booking."

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-btn__ring" aria-hidden="true" />
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.15c-.24.68-1.4 1.32-1.92 1.36-.5.05-1.06.07-1.7-.11-.39-.11-.9-.29-1.55-.57-2.72-1.17-4.5-3.9-4.63-4.08-.14-.18-1.11-1.47-1.11-2.8 0-1.33.7-1.98.95-2.25.24-.27.52-.34.7-.34l.5.01c.16.01.38-.06.6.45.24.57.8 1.98.87 2.12.07.14.11.31.02.5-.09.18-.14.29-.27.45-.14.16-.28.35-.4.47-.14.13-.28.28-.12.55.16.27.71 1.17 1.53 1.9 1.05.93 1.94 1.22 2.21 1.36.27.14.43.11.59-.07.16-.18.68-.79.87-1.06.18-.27.36-.22.6-.13.25.09 1.6.75 1.87.89.27.14.45.2.51.32.07.11.07.66-.17 1.34z"/>
      </svg>
    </a>
  )
}
