import { Dropdown } from '../modules/components/dropdown/Dropdown'
import { Pagination } from '../modules/components/pagination/Pagination'
import { Accordion } from '../modules/components/accordion/Accordion'

const items = [
  { title: 'Sección 1', content: 'Contenido de la primera sección.' },
  { title: 'Sección 2', content: 'Contenido de la segunda sección.' },
  { title: 'Sección 3', content: 'Contenido de la tercera sección.' },
]

export default {
  title: 'Navigation',
  tags: ['autodocs'],
}

export const DropdownStory = {
  render: (args) => (
    <Dropdown {...args}>
      <div style={{ padding: 8 }}>Opción 1</div>
      <div style={{ padding: 8 }}>Opción 2</div>
      <div style={{ padding: 8 }}>Opción 3</div>
    </Dropdown>
  ),
  name: 'Dropdown',
  args: {
    trigger: <button>Abrir</button>,
    align: 'left',
  },
  argTypes: {
    align: { control: 'radio', options: ['left', 'right'] },
  },
}

export const PaginationStory = {
  render: (args) => <Pagination {...args} />,
  name: 'Pagination',
  args: {
    currentPage: 1,
    totalPages: 5,
  },
  argTypes: {
    currentPage: { control: { type: 'number', min: 1, max: 10 } },
    totalPages: { control: { type: 'number', min: 1, max: 20 } },
    onPageChange: { action: 'pageChanged' },
  },
}

export const AccordionStory = {
  render: (args) => <Accordion {...args} />,
  name: 'Accordion',
  args: {
    items,
    allowMultiple: false,
  },
  argTypes: {
    allowMultiple: { control: 'boolean' },
  },
}
