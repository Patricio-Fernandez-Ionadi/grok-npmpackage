import React from 'react'

export const ProgressBar = ({
  value = 0,
  max = 100,
  label,
  showValue = true,
  variant = 'primary',
  theme = 'light',
  className = '',
}) => {
  const percent = Math.min((value / max) * 100, 100)

  return (
    <div className={`groker__progress ${theme} ${className}`}>
      {(label || showValue) && (
        <div className="groker__progress-header">
          {label && <span className="groker__progress-label">{label}</span>}
          {showValue && (
            <span className="groker__progress-value">{Math.round(percent)}%</span>
          )}
        </div>
      )}
      <div className="groker__progress-track">
        <div
          className={`groker__progress-bar groker__progress-bar--${variant}`}
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  )
}
