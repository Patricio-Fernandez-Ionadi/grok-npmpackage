import { ToggleSwitch } from '../modules/components/toggleswitch/ToggleSwitch'

export default {
  title: 'ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    onEvent: { action: 'toggled' },
  },
}

export const Off = {
  args: {
    switcher: false,
    name: 'toggle',
  },
}

export const On = {
  args: {
    switcher: true,
    name: 'toggle',
  },
}
