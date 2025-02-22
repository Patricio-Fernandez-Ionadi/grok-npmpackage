import React from 'react'

export const ToggleSwitch = ({ switcher, onEvent, name, className = '' }) => {
	return (
		<label className={`groker__toggle-switch ${className}`}>
			<input
				type="checkbox"
				checked={switcher}
				onChange={onEvent}
				name={name}
			/>
			<span className="groker__slider"></span>
		</label>
	)
}
