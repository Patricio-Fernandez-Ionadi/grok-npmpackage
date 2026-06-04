import React, { useState } from 'react'

const LINKS = [
	{ to: '/products', label: 'Productos' },
	{ to: '/suppliers', label: 'Proveedores' },
	{ to: '/orders', label: 'Pedidos' },
	{ to: '/stock', label: 'Stock' },
	{ to: '/shifts', label: 'Turnos' },
	{ to: '/tasks', label: 'Tareas' },
	{ to: '/soporte', label: 'Soporte' },
]

const GROUPS = [
	{
		label: 'Inventario',
		links: [
			{ to: '/products', label: 'Productos' },
			{ to: '/suppliers', label: 'Proveedores' },
			{ to: '/stock', label: 'Stock' },
		],
	},
	{
		label: 'Operaciones',
		links: [
			{ to: '/orders', label: 'Pedidos' },
			{ to: '/shifts', label: 'Turnos' },
			{ to: '/tasks', label: 'Tareas' },
		],
	},
	{
		label: 'Soporte',
		links: [{ to: '/soporte', label: 'Soporte' }],
	},
]

export const NavItem = ({
	to,
	label,
	isLogo,
	linkComponent: Link = 'a',
	onClick,
}) => {
	return (
		<Link
			{...(Link === 'a' ? { href: to } : { to })}
			className={isLogo ? 'navigation__logo' : 'navigation__link'}
			onClick={onClick}
		>
			{label}
		</Link>
	)
}

export const Navigation = ({
	links,
	groups,
	logo,
	linkComponent,
	className = '',
}) => {
	const [menuOpen, setMenuOpen] = useState(false)

	const resolvedLinks = links || LINKS
	const resolvedGroups = groups || GROUPS
	const resolvedLogo = logo || { to: '/', label: "RIKO'S" }

	return (
		<nav className={`navigation__nav ${className}`}>
			<NavItem
				to={resolvedLogo.to}
				label={resolvedLogo.label}
				isLogo
				linkComponent={linkComponent}
				onClick={() => setMenuOpen(false)}
			/>

			<div className='navigation__desktop-links'>
				{resolvedLinks.map((link) => (
					<NavItem
						key={link.to}
						to={link.to}
						label={link.label}
						linkComponent={linkComponent}
					/>
				))}
			</div>

			<button
				className={`navigation__hamburger ${menuOpen ? 'navigation__hamburger--open' : ''}`}
				onClick={() => setMenuOpen((v) => !v)}
				aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
			>
				<span />
				<span />
				<span />
			</button>

			{menuOpen && (
				<div
					className='navigation__overlay'
					onClick={() => setMenuOpen(false)}
				/>
			)}

			<div
				className={`navigation__drawer ${menuOpen ? 'navigation__drawer--open' : ''}`}
			>
				{resolvedGroups.map((group) => (
					<div key={group.label} className='navigation__group'>
						<span className='navigation__group-label'>{group.label}</span>
						{group.links.map((link) => (
							<NavItem
								key={link.to}
								to={link.to}
								label={link.label}
								linkComponent={linkComponent}
								onClick={() => setMenuOpen(false)}
							/>
						))}
					</div>
				))}
			</div>
		</nav>
	)
}
