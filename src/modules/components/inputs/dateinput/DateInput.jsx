import React, { useRef } from 'react'
import { Calendar } from '../../../icons'

export const DateInput = (props) => {
  const {
    label,
    onChangeEvent = () => {},
    iconSize = 30,
    theme = 'light',
    className = '',
    defaultValue = '',
  } = props

  const inputRef = useRef(null)

  const handleOpenPicker = () => {
    if (inputRef.current && typeof inputRef.current.showPicker === 'function') {
      inputRef.current.showPicker()
    }
  }

  return (
    <>
      <div
        className={`groker__input-field ${theme} groker__date-field ${className}`}
      >
        <label className={`groker__input-label ${theme}`}>{label}</label>
        <input
          ref={inputRef}
          type="date"
          onClick={handleOpenPicker}
          className="groker__date-input"
          onChange={onChangeEvent}
          aria-label="groker-date-input"
          defaultValue={defaultValue}
        />
        <button
          className={`groker__date-button ${theme}`}
          onClick={handleOpenPicker}
          aria-label="Abrir selector de fecha"
        >
          <Calendar size={iconSize} />
        </button>
      </div>
    </>
  )
}
