import React from 'react'
import { Calendar } from '../../../icons'
export const DateInput = React.forwardRef(function DateInput(props, ref) {
	const {
		label,
		defaultValue = '',
		onChangeEvent = () => {},
		onClickEvent = () => {},
		iconSize = 30,
		toShowValue,
		theme = 'light',
	} = props

	return (
		<>
			<label className={`groker__input-label ${theme}`}>{label}</label>
			<div className={`groker__input-field ${theme} custom-date-field`}>
				<input
					ref={ref}
					type="date"
					style={{
						opacity: 0,
						position: 'absolute',
						zIndex: -1,
					}}
					defaultValue={defaultValue}
					onChange={onChangeEvent}
				/>
				<input
					type="text"
					readOnly
					value={toShowValue}
					onClick={() => {
						if (ref.current) ref.current.showPicker()
						onClickEvent()
					}}
					className="custom-date-input"
				/>
				<button
					className="custom-date-button"
					onClick={() => {
						if (ref.current) ref.current.showPicker()
						onClickEvent()
					}}
					aria-label="Abrir selector de fecha"
				>
					<Calendar size={iconSize} />
				</button>
			</div>
		</>
	)
})
