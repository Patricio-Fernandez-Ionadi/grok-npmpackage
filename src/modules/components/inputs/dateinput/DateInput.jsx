import React from 'react'
import { Calendar } from '../../../icons'
export const DateInput = (props) => {
	const {
		label,
		defaultValue = '',
		onChangeEvent = () => {},
		onClickEvent = () => {},
		iconSize = 30,
		toShowValue,
		theme = 'light',
	} = props

	const thisGrokerDateInputRefference = React.useRef(null)

	return (
		<>
			<label className={`groker__input-label ${theme}`}>{label}</label>
			<div className={`groker__input-field ${theme} custom-date-field`}>
				<input
					ref={thisGrokerDateInputRefference}
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
						thisGrokerDateInputRefference.current.showPicker()
						onClickEvent()
					}}
					className="custom-date-input"
				/>
				<button
					className="custom-date-button"
					onClick={() => {
						thisGrokerDateInputRefference.current.showPicker()
						onClickEvent()
					}}
					aria-label="Abrir selector de fecha"
				>
					<Calendar size={iconSize} />
				</button>
			</div>
		</>
	)
}
