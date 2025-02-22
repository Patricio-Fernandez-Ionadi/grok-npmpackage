export const Chevron_right = (props) => {
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
				d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
				clipRule="evenodd"
			/>
		</svg>
	)
}
