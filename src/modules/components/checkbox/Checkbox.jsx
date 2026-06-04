import React from 'react'

export const Checkbox = ({
  checked = false,
  onChange,
  label,
  name,
  theme = 'light',
  className = '',
}) => {
  return (
    <label className={`groker__checkbox ${theme} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <span className="groker__checkbox-custom" />
      {label && <span className="groker__checkbox-label">{label}</span>}
    </label>
  )
}
