import { Avatar } from '../modules/components/avatar/Avatar'
import { Tooltip } from '../modules/components/tooltip/Tooltip'

export default {
  title: 'Display',
  tags: ['autodocs'],
}

export const AvatarInitials = {
  render: (args) => <Avatar {...args} />,
  name: 'Avatar (iniciales)',
  args: {
    initials: 'PI',
    size: 40,
  },
  argTypes: {
    size: { control: { type: 'number', min: 16, max: 120 } },
    theme: { control: 'radio', options: ['light', 'dark'] },
  },
}

export const AvatarImage = {
  render: (args) => <Avatar {...args} />,
  name: 'Avatar (imagen)',
  args: {
    src: 'https://i.pravatar.cc/80',
    alt: 'avatar',
    size: 50,
  },
  argTypes: {
    size: { control: { type: 'number', min: 16, max: 120 } },
  },
}

export const TooltipStory = {
  render: (args) => (
    <Tooltip {...args}>
      <button style={{ padding: '8px 16px' }}>Hover me</button>
    </Tooltip>
  ),
  name: 'Tooltip',
  args: {
    content: 'Esto es un tooltip',
    position: 'top',
    delay: 200,
  },
  argTypes: {
    position: { control: 'radio', options: ['top', 'bottom', 'left', 'right'] },
    delay: { control: { type: 'number', min: 0, max: 1000 } },
  },
}
