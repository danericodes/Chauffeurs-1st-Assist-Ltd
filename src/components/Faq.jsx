import '../styles/faq.css'
import { useState } from 'react'

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div className="faq__item" key={item.q}>
            <button
              className="faq__question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              {item.q}
              <span className={`faq__icon ${isOpen ? 'open' : ''}`}>+</span>
            </button>
            <div className={`faq__answer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
