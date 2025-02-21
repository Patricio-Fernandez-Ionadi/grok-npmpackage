export const Cloud_arrow_up = (props) => {
	const {
		strokeWidth = 1.5,
		size = 200,
		color = 'currentColor',
		fill = 'none',
		onEvent,
		getProps,
	} = props

	if (getProps)
		console.log({
			strokeWidth: 'Number',
			size: 'Number',
			color: 'String',
			fill: 'String',
			onEvent: 'Function',
		})

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill={fill}
			viewBox="0 0 24 24"
			strokeWidth={strokeWidth}
			stroke={color}
			width={size}
			height={size}
			onClick={onEvent}
			style={{ cursor: 'pointer' }}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
			/>
		</svg>
	)
}
