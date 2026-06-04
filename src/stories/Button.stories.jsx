import { Button } from '../modules/components/button/Button'

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] },
    onEvent: { action: 'clicked' },
  },
}

export const Light = {
  args: {
    children: 'Botón',
    theme: 'light',
  },
}

export const Dark = {
  args: {
    children: 'Botón',
    theme: 'dark',
  },
}

export const CustomClass = {
  args: {
    children: 'Custom',
    className: 'custom-btn',
  },
}
