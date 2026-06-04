import React from 'react'

export const Textarea = ({
  label,
  defaultValue = '',
  name = '',
  placeholder = '',
  rows = 4,
  theme = 'light',
  className = '',
  onChange,
}) => {
  return (
    <div className={`groker__textarea-field ${theme} ${className}`}>
      {label && <label className="groker__textarea-label">{label}</label>}
      <textarea
        className="groker__textarea-element"
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        rows={rows}
        onChange={onChange}
      />
    </div>
  )
}
