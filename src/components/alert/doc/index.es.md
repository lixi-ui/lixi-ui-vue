## Alert

Mostrar mensajes de alertas importantes.

### Uso básico

Los componentes de alertas no son elementos overlay de la página y no desaparecen automáticamente.

:::demo Alert provee 4 tipos de temas definidos por `type`, el valor por defecto es `info`.

```html
<template>
  <lx-alert
    title="success alert"
    type="success">
  </lx-alert>
  <lx-alert
    title="info alert"
    type="info">
  </lx-alert>
  <lx-alert
    title="warning alert"
    type="warning">
  </lx-alert>
  <lx-alert
    title="error alert"
    type="error">
  </lx-alert>
</template>
```
:::

### Theme

Alert provee dos diferentes temas  `light` y `dark`.

:::demo Use `effect` para cambiar el tema, por defecto es `light`.
```html
<template>
  <lx-alert
    title="success alert"
    type="success"
    effect="dark">
  </lx-alert>
  <lx-alert
    title="info alert"
    type="info"
    effect="dark">
  </lx-alert>
  <lx-alert
    title="warning alert"
    type="warning"
    effect="dark">
  </lx-alert>
  <lx-alert
    title="error alert"
    type="error"
    effect="dark">
  </lx-alert>
</template>
```
:::

### Personalización del botón de cerrar

Personalizar el botón de cerrar como texto u otros símbolos.

:::demo Alert permite configurar si es posible cerrarla. Lx texto del botón de cerrado, así como los callbacks de cerrado son personalizables. Lx atributo `closable` define si el componente puede cerrarse o no. Acepta un `boolean`, que por defecto es `true`. También puede configurar el atributo `close-text` para reemplazar el símbolo de cerrado que se muestra por defecto. Lx atributo `close-text` debe ser un string. Lx evento `close` se dispara cuando el componente se cierra.


```html
<template>
  <lx-alert
    title="unclosable alert"
    type="success"
    :closable="false">
  </lx-alert>
  <lx-alert
    title="customized close-text"
    type="info"
    close-text="Gotcha">
  </lx-alert>
  <lx-alert
    title="alert with callback"
    type="warning"
    @close="hello">
  </lx-alert>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    setup() {
      const hello = () => {
        alert('Hello World!');
      }
      return {
        hello
      }
    }
  })
</script>
```
:::

### Usar iconos

Mostrar un icono mejora la legibilidad.

:::demo Setear el atributo `show-icon` muestra un icono que corresponde al tipo de Alert que se está mostrando.


```html
<template>
  <lx-alert
    title="success alert"
    type="success"
    show-icon>
  </lx-alert>
  <lx-alert
    title="info alert"
    type="info"
    show-icon>
  </lx-alert>
  <lx-alert
    title="warning alert"
    type="warning"
    show-icon>
  </lx-alert>
  <lx-alert
    title="error alert"
    type="error"
    show-icon>
  </lx-alert>
</template>
```
:::

### Texto centrado

Para centrar el texto utilice el atributo `center`.

:::demo

```html
<template>
  <lx-alert
    title="success alert"
    type="success"
    center
    show-icon>
  </lx-alert>
  <lx-alert
    title="info alert"
    type="info"
    center
    show-icon>
  </lx-alert>
  <lx-alert
    title="warning alert"
    type="warning"
    center
    show-icon>
  </lx-alert>
  <lx-alert
    title="error alert"
    type="error"
    center
    show-icon>
  </lx-alert>
</template>
```
:::

### Con descripción

Descripción incluye un mensaje con información más detallada.

:::demo Además del atributo requerido `title`, se puede agregar el atributo `description` para ayudar a describir la alerta con mas detalles. La descripción puede contener solamente un string y va a usar word wrap automáticamente.

```html
<template>
  <lx-alert
    title="with description"
    type="success"
    description="This is a description.">
  </lx-alert>
</template>
```
:::

### Utilizando icono y descripción

:::demo Finalmente este es un ejemplo utilizando icono y descripción.

```html
<template>
  <lx-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon>
  </lx-alert>
  <lx-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon>
  </lx-alert>
  <lx-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon>
  </lx-alert>
  <lx-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon>
  </lx-alert>
</template>
```
:::

### Atributos
| Atributo    | Descripción                              | Tipo    | Valores aceptados          | Por defecto |
| ----------- | ---------------------------------------- | ------- | -------------------------- | ----------- |
| title       | título                                   | string  | —                          | —           |
| type        | tipo de componente                       | string  | success/warning/info/error | info        |
| description | texto descriptivo. También puede ser pasado con el slot por defecto | string  | —                          | —           |
| closable    | si se puede cerrar o no                  | boolean | —                          | true        |
| center      | si el texto debe estar centrado          | boolean | —                          | false       |
| close-text  | texto de cerrado personalizado           | string  | —                          | —           |
| show-icon   | si un icono del tipo de alerta se debe mostrar | boolean | —                          | false       |
| effect | Choose theme  | string | light/dark | light |

### Slot

| Name | Description |
|------|--------|
| — | descripción |
| title | Lx contenido del título de alerta. |

### Eventos
| Nombre del evento | Descripción                           | Parámetros |
| ----------------- | ------------------------------------- | ---------- |
| close             | Se dispara cuando la alerta se cierra | —          |
