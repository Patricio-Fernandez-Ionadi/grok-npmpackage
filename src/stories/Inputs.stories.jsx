import { TextInput } from '../modules/components/inputs/textinput/TextInput'
import { DateInput } from '../modules/components/inputs/dateinput/DateInput'
import { Selector } from '../modules/components/inputs/selector/Selector'
import { Textarea } from '../modules/components/textarea/Textarea'

export default {
  title: 'Inputs',
  tags: ['autodocs'],
}

export const Text = {
  render: (args) => <TextInput {...args} />,
  args: {
    label: 'Nombre',
    defaultValue: '',
    theme: 'light',
  },
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] },
    onChangeEvent: { action: 'changed' },
  },
}

export const Date = {
  render: (args) => <DateInput {...args} />,
  args: {
    label: 'Fecha',
    theme: 'light',
  },
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] },
    onChangeEvent: { action: 'changed' },
    iconSize: { control: { type: 'number', min: 16, max: 60 } },
  },
}

export const Select = {
  render: (args) => <Selector {...args} />,
  args: {
    label: 'Opción',
    list: ['Opción 1', 'Opción 2', 'Opción 3'],
    theme: 'light',
  },
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] },
    onChangeEvent: { action: 'changed' },
  },
}

export const TextareaStory = {
  render: (args) => <Textarea {...args} />,
  name: 'Textarea',
  args: {
    label: 'Comentarios',
    placeholder: 'Escribe algo...',
    rows: 4,
    theme: 'light',
  },
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] },
    onChange: { action: 'changed' },
  },
}
