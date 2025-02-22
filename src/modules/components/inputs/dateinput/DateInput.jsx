import React from 'react'
import { Calendar } from '../../../icons'
export const DateInput = (props) => {
	const {
		label,
		onChangeEvent = () => {},
		iconSize = 30,
		theme = 'light',
		className = '',
	} = props

	const handleOpenPicker = () => {
		const myInput = document.querySelector('.groker__date-input')
		if (myInput && typeof myInput.showPicker === 'function') {
			myInput.showPicker()
		}
	}

	return (
		<>
			<div
				className={`groker__input-field ${theme} groker__date-field ${className}`}
			>
				<label className={`groker__input-label ${theme}`}>{label}</label>
				<input
					type="date"
					onClick={handleOpenPicker}
					className="groker__date-input"
					onChange={onChangeEvent}
					aria-label="groker-date-input"
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
