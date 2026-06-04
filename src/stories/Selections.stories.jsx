import { RadioGroup } from '../modules/components/radiogroup/RadioGroup'
import { Checkbox } from '../modules/components/checkbox/Checkbox'

export default {
  title: 'Selections',
  tags: ['autodocs'],
}

const options = [
  { value: 'rojo', label: 'Rojo' },
  { value: 'verde', label: 'Verde' },
  { value: 'azul', label: 'Azul' },
]

export const RadioGroupStory = {
  render: (args) => <RadioGroup {...args} />,
  name: 'RadioGroup',
  args: {
    name: 'color',
    label: 'Elige un color',
    options,
    value: 'verde',
    theme: 'light',
  },
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] },
    onChange: { action: 'changed' },
  },
}

export const CheckboxStory = {
  render: (args) => <Checkbox {...args} />,
  name: 'Checkbox',
  args: {
    label: 'Acepto términos',
    checked: false,
  },
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] },
    onChange: { action: 'toggled' },
  },
}

export const CheckboxChecked = {
  render: (args) => <Checkbox {...args} />,
  name: 'Checkbox (checked)',
  args: {
    label: 'Opción marcada',
    checked: true,
  },
}
