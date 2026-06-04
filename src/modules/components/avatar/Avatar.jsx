import React from 'react'

export const Avatar = ({
  src,
  alt = '',
  size = 40,
  initials,
  theme = 'light',
  className = '',
}) => {
  return (
    <div
      className={`groker__avatar ${theme} ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      {src ? (
        <img className="groker__avatar-img" src={src} alt={alt} />
      ) : (
        <span className="groker__avatar-initials">{initials}</span>
      )}
    </div>
  )
}
