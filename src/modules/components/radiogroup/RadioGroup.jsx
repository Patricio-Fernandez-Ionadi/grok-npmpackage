import React from 'react'

export const RadioGroup = ({
  name,
  options,
  value,
  onChange,
  label,
  theme = 'light',
  className = '',
}) => {
  return (
    <fieldset className={`groker__radiogroup ${theme} ${className}`}>
      {label && <legend className="groker__radiogroup-legend">{label}</legend>}
      {options.map((opt) => (
        <label key={opt.value} className="groker__radiogroup-label">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={onChange}
          />
          <span className="groker__radiogroup-custom" />
          <span>{opt.label}</span>
        </label>
      ))}
    </fieldset>
  )
}
