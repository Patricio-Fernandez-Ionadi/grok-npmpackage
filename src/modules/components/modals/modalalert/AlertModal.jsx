import React from 'react'
import { Button } from '../../button/Button'

export const AlertModal = ({
	isOpen = false,
	message,
	onClose,
	theme = 'light',
	className = '',
}) => {
	if (!isOpen) return null
	return (
		<div className="modal-overlay">
			<div className={`modal-content ${theme} ${className}`}>
				<p>{message}</p>
				<Button className="confirm-button" onEvent={onClose}>
					Confirmar
				</Button>
			</div>
		</div>
	)
}
