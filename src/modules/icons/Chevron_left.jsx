export const Chevron_left = (props) => {
	const { size, color = 'currentColor', getProps } = props

	if (getProps)
		console.log({
			size: 'number',
			color: 'string',
		})

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill={color}
			width={size}
			height={size}
		>
			<path
				fillRule="evenodd"
				d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
				clipRule="evenodd"
			/>
		</svg>
	)
}
