import React from 'react'
import { Calendar } from '../../../icons'
export const DateInput = React.forwardRef(function DateInput(props, ref) {
	const {
		label,
		defaultValue = '',
		change,
		click,
		iconSize = 30,
		toShowValue,
		theme,
	} = props

	return (
		<>
			<label className={`groker__input-label ${theme}`}>{label}</label>
			<div className={`groker__input-field ${theme}`}>
				<input
					ref={ref}
					type="date"
					style={{
						opacity: 0,
						position: 'absolute',
						zIndex: -1,
					}}
					defaultValue={defaultValue}
					onChange={change}
				/>
				<input
					type="text"
					readOnly
					value={toShowValue || defaultValue}
					onClick={() => {
						if (ref.current) ref.current.showPicker()
						click()
					}}
					className="custom-date-input"
				/>
				<button
					className="custom-date-button"
					onClick={() => {
						if (ref.current) ref.current.showPicker()
						click()
					}}
					aria-label="Abrir selector de fecha"
				>
					<Calendar size={iconSize} />
				</button>
			</div>
		</>
	)
})
