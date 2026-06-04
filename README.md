# Groker

Groker es una biblioteca de componentes reutilizables para React que incluye íconos, utilidades de fecha y
otros módulos útiles. Está diseñada para ser modular y fácil de integrar en proyectos modernos.

- [Uso](#ejemplos-de-uso)
- [Componentes](#componentes)
  - [ToggleSwitch](#comp-toggle)
  - [Button](#comp-btn)
  - [ConfirmModal](#comp-confMod)
  - [AlertModal](#comp-alMod)
  - [TextInput](#comp-TI)
  - [DateInput](#comp-DI)
  - [Selector](#comp-selector)
  - [Spinner](#comp-spinner)
  - [Tooltip](#comp-tooltip)
  - [Badge](#comp-badge)
  - [Dropdown](#comp-dropdown)
  - [Pagination](#comp-pagination)
  - [Accordion](#comp-accordion)
  - [RadioGroup](#comp-radiogroup)
  - [Checkbox](#comp-checkbox)
  - [Textarea](#comp-textarea)
  - [Avatar](#comp-avatar)
  - [ProgressBar](#comp-progressbar)
- [Funciones](#funciones)
- [Iconos](#iconos)
- [Como contribuir](#contribucion)

## Instalación

Para instalar Groker, ejecuta el siguiente comando:
`npm install groker`

## Uso

### Importacion de estilos del paquete

Antes de usar los componentes, asegúrate de importar los estilos globales del paquete en tu archivo
principal (por ejemplo, main.jsx o index.js): `import 'groker/dist/groker.css';`
Esto aplicará los estilos necesarios para que los componentes se vean correctamente.

### Importar Componentes

Puedes importar componentes, íconos y utilidades desde el paquete principal (groker) o desde módulos específicos (groker/components, groker/icons, etc.).

- Opción 1: Importar desde el Paquete Principal
  Si prefieres simplicidad, puedes importar todo directamente desde 'groker':

```javascript
import { ToggleSwitch } from 'groker' // Componente
import { DarkMode_icon, LightMode_icon } from 'groker' // Íconos
import { today } from 'groker' // Utilidad de fecha
```

- Opción 2: Importar desde Módulos Específicos
  Si prefieres modularidad, puedes importar desde módulos específicos:

```javascript
import { ToggleSwitch } from 'groker/components' // Componentes
import { DarkMode_icon, LightMode_icon } from 'groker/icons' // Íconos
import { today } from 'groker/date' // Utilidades de fecha
```

<a name="ejemplos-de-uso"></a>

### Ejemplo de Uso

Aquí tienes un ejemplo básico de cómo usar Groker en una aplicación React:

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'groker/dist/groker.css' // Importa los estilos globales
import { ToggleSwitch } from 'groker/components' // Importa un componente
import { DarkMode_icon, LightMode_icon } from 'groker/icons' // Importa íconos

function App() {
	const [isDarkMode, setIsDarkMode] = React.useState(false)

	return (
		<div>
			<h1>Groker Example</h1>
			<ToggleSwitch
				switcher={isDarkMode}
				onEvent={() => setIsDarkMode(!isDarkMode)}
			/>
			<p>{isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}</p>
			{isDarkMode ? <DarkMode_icon /> : <LightMode_icon />}
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
```

## Estructura del Paquete

- `groker/components`: Componentes reutilizables como `ToggleSwitch`, `ConfirmModal`, etc.
- `groker/icons`: Íconos como `DarkMode_icon`, `LightMode_icon`, `Calendar`, etc.
- `groker/date` : Utilidades relacionadas con fechas, como `today`.
- `groker/dist/groker.css`: Archivo CSS con los estilos globales del paquete.

## Lista de Componentes, Funciones e Iconos

<a name="componentes"></a>

### Componentes (`groker/components`)

<a name="comp-toggle"></a>

- `ToggleSwitch` : Un interruptor de on/off.
  ![image](https://github.com/user-attachments/assets/f664518c-3732-4aa3-864b-6c42a23ec35d) ![image](https://github.com/user-attachments/assets/3961b0df-93a3-4a78-9251-3c22e5fdf750)

```
Props:
| Nombre      | Tipo       | Requerido | Descripción                                      | Valor por Defecto |
|-------------|------------|-----------|--------------------------------------------------|-------------------|
| `switcher`  | `boolean`  | No        | Indica si el interruptor está activado o no.     | -                 |
| `onEvent`   | `function` | No        | Función que se ejecuta cuando cambia el estado.  | -                 |
| `name`      | `string`   | No        | Nombre del input type checkbox.                  | ""                |
```

```javascript
import { ToggleSwitch } from 'groker/components';

function App() {
  const [isTrue, setIsTrue] = React.useState(false)

  return (
    <div>
      <ToggleSwitch onEvent={() => console.log(`switched to ${isTrue}`)} switcher={isTrue}> name="my toggle switch" />
    </div>
  );
}
```

---

<a name="comp-btn"></a>

- `Button` : Boton reutilizable con estilos predeterminados

```
Props:
| Nombre      | Tipo       | Requerido | Descripción                                      | Valor por Defecto |
|-------------|------------|-----------|--------------------------------------------------|-------------------|
| `children`  | `ReactNode`| Si        | Contenido renderizable dentro del componente.    | -                 |
| `onEvent`   | `function` | No        | Función que se ejecuta cuando se hace click.     | -                 |
| `className` | `string`   | No        | Clases de estilo customizables.                  | ""                |
| `theme`     | `string`   | No        | ligh/dark para uso de colores.                   | "light"           |
```

```javascript
import { Button } from 'groker/components'

function App() {
	return (
		<div>
			{/* Children como texto */}
			<Button theme='light' onEvent={() => alert('¡Clic!')}>
				Botón Primario
			</Button>

			{/* Children como JSX */}
			<Button theme='dark' className='your-custom-button-class'>
				<span style={{ color: 'white' }}>Botón Secundario</span>
			</Button>

			{/* Children como un número */}
			<Button>42</Button>
		</div>
	)
}
```

---

<a name="comp-confMod"></a>

- `ConfirmModal` : Ventana modal que permite confirmar o rechazar.
  ![image](https://github.com/user-attachments/assets/b33f7583-3fee-4d06-a132-b0f249f93b5e)

```
Props:
| Nombre      | Tipo       | Requerido | Descripción                                      | Valor por Defecto |
|-------------|------------|-----------|--------------------------------------------------|-------------------|
| `isOpen`    | `boolean`  | Si        | Indica si el modal está abierto o no.            | false             |
| `onClose`   | `function` | Si        | Función que se ejecuta cuando cambia el estado.  | -                 |
| `onConfirm` | `function` | Si        | Función que se ejecuta cuando cambia el estado.  | -                 |
| `message`   | `string`   | Si        | Texto que se muestra en el componente.           | ""                |
| `className` | `string`   | No        | Clases de estilo customizables.                  | ""                |
| `theme`     | `string`   | No        | ligh/dark para uso de colores.                   | "light"           |
```

```javascript
import React from 'react'
import { ConfirmModal } from 'groker/components'

function App() {
	const [isModalOpen, setIsModalOpen] = React.useState(false) // Estado para el modal

	const cunstomHandlerThatOpensTheModal = () => {
		// ... mas logica a ejecutar
		setIsModalOpen(true) // Abre el modal
	}

	const customHandlerWhenConfirms = () => {
		// ... mas logica a ejecutar
		setIsModalOpen(false) // Cierra el modal
	}

	const customHandlerThatClosesModal = () => {
		// ... mas logica a ejecutar
		setIsModalOpen(false) // Cierra el modal
	}

	return (
		<div>
			<ConfirmModal
				isOpen={isModalOpen}
				onClose={customHandlerThatClosesModal}
				onConfirm={customHandlerWhenConfirms}
				message={`¿Estás seguro de que deseas realizar esta acción"?`}
				theme={theme}
			/>
		</div>
	)
}
```

---

<a name="comp-alMod"></a>

- `AlertModal` : Ventana modal informativa solo permite confirmar.
  ![image](https://github.com/user-attachments/assets/92e3e535-4adc-44c9-b53f-9c7f64514891)

```
Props:
| Nombre      | Tipo       | Requerido | Descripción                                      | Valor por Defecto |
|-------------|------------|-----------|--------------------------------------------------|-------------------|
| `isOpen`    | `boolean`  | Si        | Función que se ejecuta cuando cambia el estado.  | -                 |
| `onClose`   | `function` | Si        | Función que se ejecuta cuando cambia el estado.  | -                 |
| `message`   | `string`   | Si        | Texto que se muestra en el componente.           | ""                |
| `className` | `string`   | No        | Clases de estilo customizables.                  | ""                |
| `theme`     | `string`   | No        | ligh/dark para uso de colores.                   | "light"           |
```

```javascript
import React from 'react'
import { AlertModal } from 'groker/components'

function App() {
	const [isModalOpen, setIsModalOpen] = React.useState(false) // Estado para el modal
	const theme = 'dark'

	const cunstomHandlerThatOpensTheModal = () => {
		// ... mas logica a ejecutar
		setIsModalOpen(true) // Abre el modal
	}

	const customHandlerThatClosesModal = () => {
		// ... mas logica a ejecutar
		setIsModalOpen(false) // Cierra el modal
	}

	return (
		<div>
			<AlertModal
				isOpen={isModalOpen}
				onClose={customHandlerThatClosesModal}
				message={`Alerta! estas por realizar una acción`}
				theme={theme}
			/>
		</div>
	)
}
```

---

<a name="comp-TI"></a>

- `TextInput` : Input de texto con estilos predeterminados
  ![image](https://github.com/user-attachments/assets/b6793339-fb21-4520-b8ed-4f900fded3ef)

```
Props:
| Nombre         | Tipo       | Requerido | Descripción                                      | Valor por Defecto |
|----------------|------------|-----------|--------------------------------------------------|-------------------|
| `label`        | `string`   | Si        | Texto que se muestra en el margen sup del comp.  | -                 |
| `defaultValue` | `string`   | No        | Valor por defecto a mostrar.                     | ""                |
| `onChangeEvent`| `function` | Si        | Funcion que se ejecuta en el evento change.      | "void"            |
| `type`         | `string`   | No        | Tipo de input text | number.                     | "text"            |
| `name`         | `string`   | No        | Nombre para el input.                            | ""                |
| `className`    | `string`   | No        | Clases de estilo customizables.                  | ""                |
| `theme`        | `string`   | No        | ligh/dark para uso de colores.                   | "light"           |
```

```javascript
import React from 'react'
import { TextInput } from 'groker/components'

function App() {
	const theme = 'light'

	return (
		<div>
			<TextInput
				label='Nombre'
				defaultValue={'Un Input de Texto'}
				name='name'
				theme={theme}
				onChangeEvent={myCustomHandler}
			/>
		</div>
	)
}
```

---

<a name="comp-DI"></a>

- `DateInput` : Input de fecha con estilos predeterminados

```
Props:
| Nombre         | Tipo       | Requerido | Descripción                                      | Valor por Defecto |
|----------------|------------|-----------|--------------------------------------------------|-------------------|
| `onChangeEvent`| `function` | Si        | Funcion que se ejecuta cuando cambia el valor.   | -                 |
| `label`        | `string`   | No        | Texto que se muestra en el margen sup del comp.  | -                 |
| `iconSize`     | `number`   | No        | Valor para icono de calendario (px).             | 30                |
| `className`    | `string`   | No        | Clases de estilo customizables.                  | ""                |
| `theme`        | `string`   | No        | ligh/dark para uso de colores.                   | "light"           |
```

```javascript
import React from 'react'
import { TextInput } from 'groker/components'
import { inputsFormat, calendarFormat } from 'groker/dates'

function App() {
	const [selectedDate, setSelectedDate] = React.useState(new Date())

	const handleChangeEvent = (e) => {
		setSelectedDate(e.target.value)
	}

	return (
		<div>
			<DateInput label='Seleccionar Fecha' onChangeEvent={handleChangeEvent} />
		</div>
	)
}
```

---

<a name="comp-selector"></a>

- `Selector` : Selector de opciones con estilos predeterminados

```
Props:
| Nombre         | Tipo       | Requerido | Descripción                                      | Valor por Defecto |
|----------------|------------|-----------|--------------------------------------------------|-------------------|
| `list`         | `array`    | Si        | Array de string|number que se mostraran listadas | -                 |
| `onChangeEvent`| `function` | No        | Funcion que se ejecuta cuando cambia el valor.   | -                 |
| `defaultValue` | `string`   | No        | Valor por defecto seleccionado.                  | ""                |
| `label`        | `string`   | No        | Texto que se muestra en el margen sup del comp.  | ""                |
| `className`    | `string`   | No        | Clases de estilo customizables.                  | ""                |
| `theme`        | `string`   | No        | ligh/dark para uso de colores.                   | "light"           |
```

```javascript
import React from 'react'
import { Selector } from 'groker/components';

function App() {

  // lista con strings, numeros o un mix ✔️
  const listaValida = ['opcion 1', 'otra opcion', 3, 8, 'flores']

  // lista con valores invalidos ❌
  const listaInvalida = [ {}, [], 'no va a listarse', () => {} ]

  return (
    <div>
     <Selector
        onChangeEvent={() => {...}}
        list={listaValida}
      />
   </div>
  );
}
```

---

<!-- ########## NUEVOS COMPONENTES ########## -->

<a name="comp-spinner"></a>

- `Spinner` : Indicador de carga animado
  ![image](https://github.com/user-attachments/assets/cc53ca8f-d14a-45bd-a439-1c1ca4402170)
  

```
Props:
| Nombre      | Tipo       | Requerido | Descripción                                      | Valor por Defecto |
|-------------|------------|-----------|--------------------------------------------------|-------------------|
| `size`      | `number`   | No        | Tamaño del spinner en píxeles.                   | 40                |
| `theme`     | `string`   | No        | light/dark para uso de colores.                  | "light"           |
| `className` | `string`   | No        | Clases de estilo personalizables.                | ""                |
```

```javascript
import { Spinner } from 'groker/components'

function App() {
  return (
    <div>
      <Spinner size={30} />
      <Spinner size={50} />
    </div>
  )
}
```

---

<a name="comp-tooltip"></a>

- `Tooltip` : Tooltip que muestra información al hacer hover
  ![image](https://github.com/user-attachments/assets/3bd69fbc-c834-4773-a959-ed939ccd0a10)
  

```
Props:
| Nombre      | Tipo       | Requerido | Descripción                                      | Valor por Defecto |
|-------------|------------|-----------|--------------------------------------------------|-------------------|
| `content`   | `string`   | Si        | Texto a mostrar en el tooltip.                   | -                 |
| `position`  | `string`   | No        | Posición: top/bottom/left/right.                 | "top"             |
| `delay`     | `number`   | No        | Milisegundos de retardo al hacer hover.          | 200               |
| `theme`     | `string`   | No        | light/dark para uso de colores.                  | "light"           |
| `className` | `string`   | No        | Clases de estilo personalizables.                | ""                |
```

```javascript
import { Tooltip, Button } from 'groker/components'

function App() {
  return (
    <div>
      <Tooltip content="Esto es un tooltip" position="top">
        <Button>Hover top</Button>
      </Tooltip>
      <Tooltip content="Tooltip abajo" position="bottom">
        <Button>Hover bottom</Button>
      </Tooltip>
    </div>
  )
}
```

---

<a name="comp-badge"></a>

- `Badge` : Etiqueta o insignia con variantes de color. Si se pasa `onClick`, se renderiza como botón clickeable.
  ![image](https://github.com/user-attachments/assets/d0e3b6c2-6a94-49af-a8b2-fb824c4cb021)

```
Props:
| Nombre      | Tipo         | Requerido | Descripción                                      | Valor por Defecto |
|-------------|--------------|-----------|--------------------------------------------------|-------------------|
| `children`  | `ReactNode`  | Si        | Contenido del badge.                             | -                 |
| `variant`   | `string`     | No        | Variante: default/success/warning/error/info.    | "default"         |
| `size`      | `string`     | No        | Tamaño: sm/md/lg.                                | "md"              |
| `onClick`   | `function`   | No        | Si se pasa, el badge se vuelve clickeable.       | -                 |
| `theme`     | `string`     | No        | light/dark para uso de colores.                  | "light"           |
| `className` | `string`     | No        | Clases de estilo personalizables.                | ""                |
```

```javascript
import { Badge } from 'groker/components'

function App() {
  return (
    <div>
      <Badge>default</Badge>
      <Badge variant="success">success</Badge>
      <Badge variant="warning">warning</Badge>
      <Badge variant="error" onClick={() => alert('click')}>clickeable</Badge>
      <Badge variant="info">info</Badge>
      <Badge size="sm">small</Badge>
      <Badge size="lg">large</Badge>
    </div>
  )
}
```

---

<a name="comp-dropdown"></a>

- `Dropdown` : Menú desplegable con click outside para cerrar
  ![image](https://github.com/user-attachments/assets/618d1cf5-8ff3-4757-8391-17363cc6d3f4)

```
Props:
| Nombre      | Tipo         | Requerido | Descripción                                      | Valor por Defecto |
|-------------|--------------|-----------|--------------------------------------------------|-------------------|
| `trigger`   | `ReactNode`  | Si        | Elemento que activa el dropdown al hacer click.  | -                 |
| `children`  | `ReactNode`  | Si        | Contenido del menú desplegable.                  | -                 |
| `align`     | `string`     | No        | Alineación: left/right.                          | "left"            |
| `theme`     | `string`     | No        | light/dark para uso de colores.                  | "light"           |
| `className` | `string`     | No        | Clases de estilo personalizables.                | ""                |
```

```javascript
import { Dropdown, Button } from 'groker/components'

function App() {
  return (
    <Dropdown
      trigger={<Button>Abrir Dropdown</Button>}
      align="left"
    >
      <div style={{ padding: 8 }}>Opción 1</div>
      <div style={{ padding: 8 }}>Opción 2</div>
      <div style={{ padding: 8 }}>Opción 3</div>
    </Dropdown>
  )
}
```

---

<a name="comp-pagination"></a>

- `Pagination` : Navegación de páginas
  ![image](https://github.com/user-attachments/assets/faa04831-928e-41f5-a7df-2f74935e82cc)

```
Props:
| Nombre         | Tipo         | Requerido | Descripción                                      | Valor por Defecto |
|----------------|--------------|-----------|--------------------------------------------------|-------------------|
| `currentPage`  | `number`     | Si        | Página actual.                                   | -                 |
| `totalPages`   | `number`     | Si        | Número total de páginas.                         | -                 |
| `onPageChange` | `function`   | Si        | Función que se ejecuta al cambiar de página.     | -                 |
| `theme`        | `string`     | No        | light/dark para uso de colores.                  | "light"           |
| `className`    | `string`     | No        | Clases de estilo personalizables.                | ""                |
```

```javascript
import { Pagination } from 'groker/components'

function App() {
  const [page, setPage] = React.useState(1)

  return (
    <Pagination
      currentPage={page}
      totalPages={5}
      onPageChange={setPage}
    />
  )
}
```

---

<a name="comp-accordion"></a>

- `Accordion` : Panel de secciones expandibles
  ![image](https://github.com/user-attachments/assets/d3d4fa19-2adb-4d74-9ac6-da68c2eadab3)

```
Props:
| Nombre          | Tipo         | Requerido | Descripción                                      | Valor por Defecto |
|-----------------|--------------|-----------|--------------------------------------------------|-------------------|
| `items`         | `array`      | Si        | Array de objetos { title, content }.             | -                 |
| `allowMultiple` | `boolean`    | No        | Permite abrir varias secciones a la vez.         | false             |
| `theme`         | `string`     | No        | light/dark para uso de colores.                  | "light"           |
| `className`     | `string`     | No        | Clases de estilo personalizables.                | ""                |
```

```javascript
import { Accordion } from 'groker/components'

function App() {
  const items = [
    { title: 'Sección 1', content: 'Contenido de la primera sección.' },
    { title: 'Sección 2', content: 'Contenido de la segunda sección.' },
    { title: 'Sección 3', content: 'Contenido de la tercera sección.' },
  ]

  return <Accordion items={items} />
}
```

---

<a name="comp-radiogroup"></a>

- `RadioGroup` : Grupo de opciones de radio button
  ![image](https://github.com/user-attachments/assets/3eaa3655-89eb-4d14-9e74-7cd0bcb4f32a)


```
Props:
| Nombre      | Tipo         | Requerido | Descripción                                      | Valor por Defecto |
|-------------|--------------|-----------|--------------------------------------------------|-------------------|
| `name`      | `string`     | Si        | Nombre del grupo de radios.                      | -                 |
| `options`   | `array`      | Si        | Array de objetos { value, label }.               | -                 |
| `value`     | `string`     | Si        | Valor actualmente seleccionado.                  | -                 |
| `onChange`  | `function`   | Si        | Función que se ejecuta al cambiar la selección.  | -                 |
| `label`     | `string`     | No        | Título del grupo.                                | -                 |
| `theme`     | `string`     | No        | light/dark para uso de colores.                  | "light"           |
| `className` | `string`     | No        | Clases de estilo personalizables.                | ""                |
```

```javascript
import { RadioGroup } from 'groker/components'

function App() {
  const [color, setColor] = React.useState('verde')

  return (
    <RadioGroup
      name="color"
      label="Elige un color"
      options={[
        { value: 'rojo', label: 'Rojo' },
        { value: 'verde', label: 'Verde' },
        { value: 'azul', label: 'Azul' },
      ]}
      value={color}
      onChange={(e) => setColor(e.target.value)}
    />
  )
}
```

---

<a name="comp-checkbox"></a>

- `Checkbox` : Casilla de verificación personalizada
  ![image](https://github.com/user-attachments/assets/735947ce-e19e-497b-a6ed-e797624a30ad)

```
Props:
| Nombre      | Tipo         | Requerido | Descripción                                      | Valor por Defecto |
|-------------|--------------|-----------|--------------------------------------------------|-------------------|
| `checked`   | `boolean`    | No        | Estado del checkbox (controlado).                | false             |
| `onChange`  | `function`   | No        | Función que se ejecuta al cambiar el estado.     | -                 |
| `label`     | `string`     | No        | Texto descriptivo del checkbox.                  | -                 |
| `name`      | `string`     | No        | Nombre del input.                                | -                 |
| `theme`     | `string`     | No        | light/dark para uso de colores.                  | "light"           |
| `className` | `string`     | No        | Clases de estilo personalizables.                | ""                |
```

```javascript
import { Checkbox } from 'groker/components'

function App() {
  const [checked, setChecked] = React.useState(false)

  return (
    <Checkbox
      label="Acepto términos"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  )
}
```

---

<a name="comp-textarea"></a>

- `Textarea` : Área de texto multilínea
  ![image](https://github.com/user-attachments/assets/418b9bb4-0171-4702-b6ad-984c8d2e70c6)

```
Props:
| Nombre         | Tipo         | Requerido | Descripción                                      | Valor por Defecto |
|----------------|--------------|-----------|--------------------------------------------------|-------------------|
| `label`        | `string`     | No        | Texto que se muestra arriba del textarea.        | -                 |
| `defaultValue` | `string`     | No        | Valor por defecto.                               | ""                |
| `placeholder`  | `string`     | No        | Placeholder del textarea.                        | ""                |
| `rows`         | `number`     | No        | Cantidad de filas visibles.                      | 4                 |
| `name`         | `string`     | No        | Nombre del textarea.                             | ""                |
| `onChange`     | `function`   | No        | Función que se ejecuta al cambiar el valor.      | -                 |
| `theme`        | `string`     | No        | light/dark para uso de colores.                  | "light"           |
| `className`    | `string`     | No        | Clases de estilo personalizables.                | ""                |
```

```javascript
import { Textarea } from 'groker/components'

function App() {
  return (
    <Textarea
      label="Comentarios"
      placeholder="Escribe algo..."
      rows={3}
    />
  )
}
```

---

<a name="comp-avatar"></a>

- `Avatar` : Avatar con imagen o iniciales
  ![image](https://github.com/user-attachments/assets/f3adc6e9-f239-488f-92cd-aa33a81dd8f8)

```
Props:
| Nombre      | Tipo         | Requerido | Descripción                                      | Valor por Defecto |
|-------------|--------------|-----------|--------------------------------------------------|-------------------|
| `src`       | `string`     | No        | URL de la imagen.                                | -                 |
| `alt`       | `string`     | No        | Texto alternativo de la imagen.                  | ""                |
| `size`      | `number`     | No        | Tamaño en píxeles.                               | 40                |
| `initials`  | `string`     | No        | Iniciales a mostrar si no hay imagen.            | -                 |
| `theme`     | `string`     | No        | light/dark para uso de colores.                  | "light"           |
| `className` | `string`     | No        | Clases de estilo personalizables.                | ""                |
```

```javascript
import { Avatar } from 'groker/components'

function App() {
  return (
    <div>
      <Avatar initials="PI" size={40} />
      <Avatar initials="JD" size={50} />
      <Avatar src="https://example.com/avatar.jpg" size={50} />
    </div>
  )
}
```

---

<a name="comp-progressbar"></a>

- `ProgressBar` : Barra de progreso con variantes de color
  ![image](https://github.com/user-attachments/assets/d7e3d157-789f-4a95-b5ee-e8ba454184a9)

```
Props:
| Nombre      | Tipo         | Requerido | Descripción                                      | Valor por Defecto |
|-------------|--------------|-----------|--------------------------------------------------|-------------------|
| `value`     | `number`     | No        | Valor actual del progreso.                       | 0                 |
| `max`       | `number`     | No        | Valor máximo.                                    | 100               |
| `label`     | `string`     | No        | Texto descriptivo.                               | -                 |
| `showValue` | `boolean`    | No        | Muestra el porcentaje numérico.                  | true              |
| `variant`   | `string`     | No        | Variante: primary/success/warning/error/info.    | "primary"         |
| `theme`     | `string`     | No        | light/dark para uso de colores.                  | "light"           |
| `className` | `string`     | No        | Clases de estilo personalizables.                | ""                |
```

```javascript
import { ProgressBar } from 'groker/components'

function App() {
  return (
    <div>
      <ProgressBar value={65} label="Progreso" />
      <ProgressBar value={30} variant="success" label="Éxito" />
      <ProgressBar value={85} variant="warning" label="Advertencia" />
    </div>
  )
}
```

---

<a name="funciones"></a>

### Funciones (`groker/date`)

- `calendarFormat()`: param String (algun formato de fecha) returns `DD/MM/YY`
- `inputsFormat()`: param String (algun formato de fecha) returns `YYYY-MM-DD`
- `isoFormat()`: param String (algun formato de fecha) returns `YYYY-MM-DDThh:mm:ss.sssZ`
- `today`: returns `YYYY-MM-DD`
  <a name="iconos"></a>

### Iconos (`groker/icons`)

- Arrow_left
- Calendar
- Chevron_left
- Chevron_right
- Cloud_arrou_up
- DarkMode
- LightMode
- Edit_icon
- Ellipsis_vertical
- Exclamation_circle
- Eye
  <a name="contribucion"></a>

## Contribuciones

Si deseas contribuir al desarrollo de Groker, sigue estos pasos:

1.  Clona el repositorio:
    `git clone https://github.com/tu-usuario/groker.git`
2.  Instala las dependencias:
    `npm install`
3.  Realiza tus cambios y prueba localmente:
    `npm run build`
    `link`
4.  Envia un pull request con tus mejoras.
