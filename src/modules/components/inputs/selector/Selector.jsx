import React from 'react'

export const Selector = (props) => {
	const {
		theme = 'light',
		list,
		onChangeEvent = () => {},
		label = '',
		defaultValue = '',
		className = '',
	} = props

	const isArray = Array.isArray(list)
	const defaultErrorMessage = 'No se pueden mostrar las opciones'
	const validateList = () => {
		if (!isArray) {
			console.warn(
				'El componente Selector debe recibir una lista de valores, pero se recibió un valor de tipo:',
				typeof list
			)
			return defaultErrorMessage
		}
		if (list.length === 0) {
			console.warn(
				'El componente Selector debe recibir una lista de valores, pero se recibió una lista vacía'
			)
			return defaultErrorMessage
		}

		const invalidItems = list.filter(
			(item) => typeof item !== 'number' && typeof item !== 'string'
		)

		if (invalidItems.length > 0) {
			console.warn(
				'El componente Selector debe recibir una lista de valores de tipo String o Number, pero se encontraron valores inválidos:',
				invalidItems
			)
			return defaultErrorMessage
		}
		return null
	}

	const canRender = !validateList()
	const options = canRender && [...new Set(list)]

	return (
		<div className={`groker__input-field ${theme} ${className}`}>
			<label className={`groker__input-label ${theme}`}>{label}</label>
			<select
				aria-labelledby="groker__select-field"
				className="groker__input-element"
				onChange={onChangeEvent}
				defaultValue={defaultValue || ''}
			>
				<option value="">
					{canRender ? 'Selecciona una opcion' : defaultErrorMessage}
				</option>
				{canRender &&
					options.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
			</select>
		</div>
	)
}
