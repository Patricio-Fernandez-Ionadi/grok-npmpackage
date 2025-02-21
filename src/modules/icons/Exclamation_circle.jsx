export const Exlamation_cicle = (props) => {
	const {
		strokeWidth = 1.5,
		size = 200,
		color = 'currentColor',
		fill = 'none',
		getProps,
	} = props

	if (getProps)
		console.log({
			strokeWidth: 'Number',
			size: 'Number',
			color: 'String',
			fill: 'String',
		})

	return (
		<svg
			// xmlns="http://www.w3.org/2000/svg"
			fill={fill}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke={color}
			width={size}
			height={size}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
			/>
		</svg>
	)
}
