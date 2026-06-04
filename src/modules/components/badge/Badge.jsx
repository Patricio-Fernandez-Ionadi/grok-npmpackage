import React from 'react'

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  onClick,
  theme = 'light',
  className = '',
}) => {
  const classes = `groker__badge groker__badge--${variant} groker__badge--${size} ${theme} ${className}`

  if (onClick) {
    return (
      <button className={classes} onClick={onClick} type="button">
        {children}
      </button>
    )
  }

  return <span className={classes}>{children}</span>
}
