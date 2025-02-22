import React from 'react'
import { Button } from '../../button/Button'

export function ConfirmModal({
	isOpen = false,
	onClose,
	onConfirm,
	message = '',
	theme = 'light',
	className = '',
}) {
	if (!isOpen) return null

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div
				className={`modal-content ${theme} ${className}`}
				onClick={(e) => e.stopPropagation()}
			>
				<p>{message}</p>
				<div className="modal-actions">
					<Button className="confirm-button" onEvent={onConfirm} theme={theme}>
						Confirmar
					</Button>
					<Button className="cancel-button" onEvent={onClose} theme={theme}>
						Cancelar
					</Button>
				</div>
			</div>
		</div>
	)
}
