import React from 'react'

export const TextInput = (props) => {
	const {
		label,
		defaultValue = '',
		name = '',
		type = 'text',
		className = '',
		theme = 'light',
		onChangeEvent,
	} = props

	return (
		<div className={`groker__input-field ${theme} ${className}`}>
			<label className={`groker__input-label ${theme}`}>{label}</label>
			<input
				type={type}
				className={`groker__input-element ${theme}`}
				name={name}
				defaultValue={defaultValue}
				aria-labelledby={`${name ? name : 'input'}-field-label`}
				onChange={onChangeEvent}
			/>
		</div>
	)
}
