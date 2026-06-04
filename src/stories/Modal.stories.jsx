import { ConfirmModal } from '../modules/components/modals/modalconfirm/ConfirmModal'
import { AlertModal } from '../modules/components/modals/modalalert/AlertModal'

export default {
  title: 'Modals',
  tags: ['autodocs'],
}

export const Confirm = {
  render: (args) => <ConfirmModal {...args} />,
  args: {
    isOpen: true,
    message: '¿Estás seguro de realizar esta acción?',
    theme: 'light',
  },
  argTypes: {
    onClose: { action: 'closed' },
    onConfirm: { action: 'confirmed' },
    theme: { control: 'radio', options: ['light', 'dark'] },
  },
}

export const Alert = {
  render: (args) => <AlertModal {...args} />,
  args: {
    isOpen: true,
    message: 'Esto es una alerta informativa',
    theme: 'light',
  },
  argTypes: {
    onClose: { action: 'closed' },
    theme: { control: 'radio', options: ['light', 'dark'] },
  },
}
