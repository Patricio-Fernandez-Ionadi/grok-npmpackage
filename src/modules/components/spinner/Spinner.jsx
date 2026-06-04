import React from 'react'

export const Spinner = ({ size = 40, theme = 'light', className = '' }) => {
  return (
    <div
      className={`groker__spinner ${theme} ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
