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
 - [Funciones](#funciones)
 - [Iconos](#iconos)
 - [Como contribuir](#contribucion)

## Instalación
Para instalar Groker, ejecuta el siguiente comando:
```npm install groker```

## Uso
### Importacion de estilos del paquete
Antes de usar los componentes, asegúrate de importar los estilos globales del paquete en tu archivo 
principal (por ejemplo, main.jsx o index.js): ```import 'groker/dist/groker.css';```
Esto aplicará los estilos necesarios para que los componentes se vean correctamente.

### Importar Componentes
Puedes importar componentes, íconos y utilidades desde el paquete principal (groker) o desde módulos específicos (groker/components, groker/icons, etc.).

 - Opción 1: Importar desde el Paquete Principal
Si prefieres simplicidad, puedes importar todo directamente desde 'groker':
```javascript
import { ToggleSwitch } from 'groker'; // Componente
import { DarkMode_icon, LightMode_icon } from 'groker'; // Íconos
import { today } from 'groker'; // Utilidad de fecha
```

 - Opción 2: Importar desde Módulos Específicos
Si prefieres modularidad, puedes importar desde módulos específicos:
```javascript
import { ToggleSwitch } from 'groker/components'; // Componentes
import { DarkMode_icon, LightMode_icon } from 'groker/icons'; // Íconos
import { today } from 'groker/date'; // Utilidades de fecha
```
<a name="ejemplos-de-uso"></a>
### Ejemplo de Uso
Aquí tienes un ejemplo básico de cómo usar Groker en una aplicación React:
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'groker/dist/groker.css'; // Importa los estilos globales
import { ToggleSwitch } from 'groker/components'; // Importa un componente
import { DarkMode_icon, LightMode_icon } from 'groker/icons'; // Importa íconos

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

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
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
## Estructura del Paquete
 - ```groke/components```: Componentes reutilizables como ```ToggleSwitch```, ```ConfirmModal```, etc.
 - ```groke/icons```: Íconos como ```DarkMode_icon```, ```LightMode_icon```, ```Calendar```, etc.
 - ```groke/date``` : Utilidades relacionadas con fechas, como ```today```.
 - ```groke/dist/groker.css```: Archivo CSS con los estilos globales del paquete.

## Lista de Componentes, Funciones e Iconos

<a name="componentes"></a>
### Componentes (```groker/components```)
<a name="comp-toggle"></a>
 - ```ToggleSwitch``` : Un interruptor de on/off.
  ![image](https://github.com/user-attachments/assets/f664518c-3732-4aa3-864b-6c42a23ec35d) ![image](https://github.com/user-attachments/assets/3961b0df-93a3-4a78-9251-3c22e5fdf750)
   
```
Props:
| Nombre      | Tipo       | Requerido | Descripción                                      | Valor por Defecto |
|-------------|------------|-----------|--------------------------------------------------|-------------------|
| `switcher`  | `boolean`  | No        | Indica si el interruptor está activado o no.     | -                 |
| `onEvent`   | `function` | No        | Función que se ejecuta cuando cambia el estado.  | -                 |
| `name`      | `string`   | No        | Nombre del input type checkbox.                  | ""                |
```
--------------
<a name="comp-btn"></a>
 - ```Button``` : Boton reutilizable con estilos predeterminados
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
import { Button } from 'groker/components';

function App() {
  return (
    <div>
      {/* Children como texto */}
      <Button theme="light" onEvent={() => alert('¡Clic!')}>
        Botón Primario
      </Button>

      {/* Children como JSX */}
      <Button theme="dark" className="your-custom-button-class">
        <span style={{ color: 'white' }}>Botón Secundario</span>
      </Button>

      {/* Children como un número */}
      <Button>42</Button>
    </div>
  );
}
```
--------------
   <a name="comp-confMod"></a>
 - ```ConfirmModal``` : Ventana modal que permite confirmar o rechazar.
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
import { ConfirmModal } from 'groker/components';

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
  );
}
```

--------------
<a name="comp-alMod"></a>
 - ```AlertModal``` : Ventana modal informativa solo permite confirmar.
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
import { AlertModal } from 'groker/components';

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
  );
}
```

--------------
<a name="comp-TI"></a>
 - ```TextInput``` : Input de texto con estilos predeterminados 
   ![image](https://github.com/user-attachments/assets/b6793339-fb21-4520-b8ed-4f900fded3ef)
```
Props:
| Nombre        | Tipo       | Requerido | Descripción                                      | Valor por Defecto |
|---------------|------------|-----------|--------------------------------------------------|-------------------|
| `label`       | `string`   | Si        | Texto que se muestra en el margen sup del comp.  | -                 |
| `defaultValue`| `string`   | No        | Valor por defecto a mostrar.                     | ""                |
| `ref`         | `ReactRef` | Si        | Referencia de React para control.                | "null"            |
| `type`        | `string`   | No        | Tipo de input text | number.                     | "text"            |
| `name`        | `string`   | No        | Nombre para el input.                            | ""                |
| `className`   | `string`   | No        | Clases de estilo customizables.                  | ""                |
| `theme`       | `string`   | No        | ligh/dark para uso de colores.                   | "light"           |
```
```javascript
import React from 'react'
import { TextInput } from 'groker/components';

function App() {
  const nameRef = React.useRef(null)
  const theme = 'light'

  return (
    <div>
     <TextInput
        label="Nombre"
        defaultValue={'Un Input de Texto'}
        name="name"
        ref={nameRef}
        theme={theme}
     />
   </div>
  );
}
```

--------------
<a name="comp-DI"></a>
 - ```DateInput``` : Input de fecha con estilos predeterminados
```
Props:
| Nombre        | Tipo       | Requerido | Descripción                                      | Valor por Defecto |
|---------------|------------|-----------|--------------------------------------------------|-------------------|
| `label`       | `string`   | Si        | Texto que se muestra en el margen sup del comp.  | -                 |
| `defaultValue`| `string`   | No        | Valor por defecto para el input.    (YYYY-MM-DD) | ""                |
| `toShowValue` | `string`   | No        | Valor por defecto para mostrar.                  | ""                |
| `ref`         | `ReactRef` | Si        | Referencia de React para control.                | "null"            |
| `iconSize`    | `number`   | No        | Valor para icono de calendario (px).             | 30                |
| `change`      | `function` | No        | Funcion que se ejecuta cuando cambia el valor.   | -                 |
| `click`       | `function` | No        | Funcion que se ejecuta para abrir el input       | -                 |
| `theme`       | `string`   | No        | ligh/dark para uso de colores.                   | "light"           |
```

```javascript
import React from 'react'
import { TextInput } from 'groker/components';
import { inputsFormat, calendarFormat } from 'groker/dates';

function App() {
  const dateRef = React.useRef(null)
  const theme = 'light'

const fechaDefault = new Date() // <- YYYY-MM-DDThh:mm:ss.sssZ

// Tambien podes usar el modulo de fechas para trabajar comodamente
const fechaGrokerParaInput = inputsFormat(fechaDefault) // <- YYYY-MM-DD

  return (
    <div>
     <DateInput
        label="Seleccionar Fecha"
        defaultValue={fechaGrokerParaInput}
        ref={dateRef}
        change={() => console.log('la fecha se cambió!')}
        click={() => console.log('Soy un calendario!')}
        toShowValue={calendarFormat(fechaDefault)}  // <- formato en el que queramos mostrar la fecha DD/MM/YY
        iconSize={iconSize}
        theme={theme}
      />
   </div>
  );
}
```
--------------
<a name="funciones"></a>
### Funciones (```groker/date```)
- ```calendarFormat()```: param String (algun formato de fecha) returns ```DD/MM/YY```
- ```inputsFormat()```: param String (algun formato de fecha) returns ```YYYY-MM-DD```
- ```isoFormat()```: param String (algun formato de fecha) returns ```YYYY-MM-DDThh:mm:ss.sssZ```
<a name="iconos"></a>
### Iconos (```groker/icons```)
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
 1. Clona el repositorio:
   ```git clone https://github.com/tu-usuario/groker.git```
 2. Instala las dependencias:
   ```npm install```
 3. Realiza tus cambios y prueba localmente:
   ```npm run build```
   ```link```
 4. Envia un pull request con tus mejoras.
