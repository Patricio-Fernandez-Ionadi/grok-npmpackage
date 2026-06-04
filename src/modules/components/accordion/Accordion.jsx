import React, { useState } from 'react'

export const Accordion = ({
  items,
  allowMultiple = false,
  theme = 'light',
  className = '',
}) => {
  const [openIndexes, setOpenIndexes] = useState([])

  const toggle = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      )
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]))
    }
  }

  return (
    <div className={`groker__accordion ${theme} ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index)
        return (
          <div key={index} className="groker__accordion-item">
            <button
              className={`groker__accordion-header ${isOpen ? 'groker__accordion-header--open' : ''}`}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="groker__accordion-icon">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div className="groker__accordion-body groker__accordion-body--open">
                <div className="groker__accordion-content">{item.content}</div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
