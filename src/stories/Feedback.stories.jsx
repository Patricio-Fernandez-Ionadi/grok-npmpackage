import { Spinner } from '../modules/components/spinner/Spinner'
import { Badge } from '../modules/components/badge/Badge'
import { ProgressBar } from '../modules/components/progressbar/ProgressBar'

export default {
  title: 'Feedback',
  tags: ['autodocs'],
}

export const SpinnerStory = {
  render: (args) => <Spinner {...args} />,
  name: 'Spinner',
  args: {
    size: 40,
  },
  argTypes: {
    size: { control: { type: 'number', min: 16, max: 100 } },
    theme: { control: 'radio', options: ['light', 'dark'] },
  },
}

export const BadgeStory = {
  render: (args) => <Badge {...args} />,
  name: 'Badge',
  args: {
    children: 'Badge',
    variant: 'default',
    size: 'md',
  },
  argTypes: {
    variant: { control: 'radio', options: ['default', 'success', 'warning', 'error', 'info'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    theme: { control: 'radio', options: ['light', 'dark'] },
  },
}

export const BadgeClickable = {
  render: (args) => <Badge {...args}>Clickeame</Badge>,
  name: 'Badge (clickeable)',
  args: {
    variant: 'info',
    onClick: () => alert('click!'),
  },
  argTypes: {
    variant: { control: 'radio', options: ['default', 'success', 'warning', 'error', 'info'] },
  },
}

export const ProgressBarStory = {
  render: (args) => <ProgressBar {...args} />,
  name: 'ProgressBar',
  args: {
    value: 65,
    label: 'Progreso',
    variant: 'primary',
    showValue: true,
  },
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'success', 'warning', 'error', 'info'] },
    value: { control: { type: 'number', min: 0, max: 100 } },
    max: { control: { type: 'number', min: 1, max: 500 } },
  },
}
