import React, { useState, useRef, useEffect } from 'react'

export const Tooltip = ({
  children,
  content,
  position = 'top',
  delay = 200,
  theme = 'light',
  className = '',
}) => {
  const [visible, setVisible] = useState(false)
  const timeoutRef = useRef(null)

  const show = () => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setVisible(true), delay)
  }

  const hide = () => {
    clearTimeout(timeoutRef.current)
    setVisible(false)
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  return (
    <div
      className={`groker__tooltip-wrapper ${theme} ${className}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <div
          className={`groker__tooltip groker__tooltip--${position}`}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  )
}
