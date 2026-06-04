import React, { useState, useRef, useEffect } from 'react'

export const Dropdown = ({
  trigger,
  children,
  align = 'left',
  theme = 'light',
  className = '',
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className={`groker__dropdown ${theme} ${className}`}>
      <div className="groker__dropdown-trigger" onClick={() => setOpen(!open)}>
        {trigger}
      </div>
      {open && (
        <div
          className={`groker__dropdown-menu groker__dropdown-menu--${align} ${theme}`}
          onClick={() => setOpen(false)}
        >
          {children}
        </div>
      )}
    </div>
  )
}
