import React, { useState, useRef, useEffect } from 'react'

export const Accordion = ({
  items,
  allowMultiple = false,
  theme = 'light',
  className = '',
}) => {
  const [openIndexes, setOpenIndexes] = useState([])
  const contentRefs = useRef({})

  const toggle = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      )
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]))
    }
  }

  useEffect(() => {
    openIndexes.forEach((index) => {
      const el = contentRefs.current[index]
      if (el) {
        el.style.maxHeight = `${el.scrollHeight}px`
      }
    })
  }, [openIndexes])

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
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className={`groker__accordion-body ${isOpen ? 'groker__accordion-body--open' : ''}`}
              style={{ maxHeight: isOpen ? `${contentRefs.current[index]?.scrollHeight || 0}px` : '0px' }}
            >
              <div className="groker__accordion-content">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
