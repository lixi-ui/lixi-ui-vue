## Button

Botones comúnmente usados.

### Uso básico

:::demo Use `type`, `plain`,`round` y `circle` para definir estilos a los botones.

```html
<lx-row>
  <lx-button>Default</lx-button>
  <lx-button type="primary">Primary</lx-button>
  <lx-button type="success">Success</lx-button>
  <lx-button type="info">Info</lx-button>
  <lx-button type="warning">Warning</lx-button>
  <lx-button type="danger">Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button plain>Plain</lx-button>
  <lx-button type="primary" plain>Primary</lx-button>
  <lx-button type="success" plain>Success</lx-button>
  <lx-button type="info" plain>Info</lx-button>
  <lx-button type="warning" plain>Warning</lx-button>
  <lx-button type="danger" plain>Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button round>Round</lx-button>
  <lx-button type="primary" round>Primary</lx-button>
  <lx-button type="success" round>Success</lx-button>
  <lx-button type="info" round>Info</lx-button>
  <lx-button type="warning" round>Warning</lx-button>
  <lx-button type="danger" round>Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button icon="lx-icon-search" circle></lx-button>
  <lx-button type="primary" icon="lx-icon-edit" circle></lx-button>
  <lx-button type="success" icon="lx-icon-check" circle></lx-button>
  <lx-button type="info" icon="lx-icon-message" circle></lx-button>
  <lx-button type="warning" icon="lx-icon-star-off" circle></lx-button>
  <lx-button type="danger" icon="lx-icon-delete" circle></lx-button>
</lx-row>
```

:::

### Botón deshabilitado

El atributo `disabled` determina su un botón esta deshabilitado.

:::demo Use el atributo `disabled` para determinar si un botón esta deshabilitado. Acepta un valor `Boolean`.

```html
<lx-row>
  <lx-button disabled>Default</lx-button>
  <lx-button type="primary" disabled>Primary</lx-button>
  <lx-button type="success" disabled>Success</lx-button>
  <lx-button type="info" disabled>Info</lx-button>
  <lx-button type="warning" disabled>Warning</lx-button>
  <lx-button type="danger" disabled>Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button plain disabled>Plain</lx-button>
  <lx-button type="primary" plain disabled>Primary</lx-button>
  <lx-button type="success" plain disabled>Success</lx-button>
  <lx-button type="info" plain disabled>Info</lx-button>
  <lx-button type="warning" plain disabled>Warning</lx-button>
  <lx-button type="danger" plain disabled>Danger</lx-button>
</lx-row>
```

:::

### Botón de texto

Botones sin borde ni fondo.

:::demo

```html
<lx-button type="text">Text Button</lx-button>
<lx-button type="text" disabled>Text Button</lx-button>
```

:::

### Botón icono

Use iconos para darle mayor significado a Button. Se puede usar simplemente un icono o un icono con texto.

:::demo Use el atributo `icon` para agregar un icono. Puede encontrar el listado de iconos en el componente de iconos. Agregar iconos a la derecha del texto se puede conseguir con un tag `<i>`. También se pueden usar iconos personalizados.

```html
<lx-button type="primary" icon="lx-icon-edit"></lx-button>
<lx-button type="primary" icon="lx-icon-share"></lx-button>
<lx-button type="primary" icon="lx-icon-delete"></lx-button>
<lx-button type="primary" icon="lx-icon-search">Search</lx-button>
<lx-button type="primary"
  >Upload<i class="lx-icon-upload lx-icon-right"></i
></lx-button>
```

:::

### Grupo de botones

Mostrar un grupo de botones puede ser usado para mostrar un grupo de operaciones similares.

:::demo Use el tag `<lx-button-group>` para agrupar sus botones.

```html
<lx-button-group>
  <lx-button type="primary" icon="lx-icon-arrow-left">Previous Page</lx-button>
  <lx-button type="primary"
    >Next Page<i class="lx-icon-arrow-right lx-icon-right"></i
  ></lx-button>
</lx-button-group>
<lx-button-group>
  <lx-button type="primary" icon="lx-icon-edit"></lx-button>
  <lx-button type="primary" icon="lx-icon-share"></lx-button>
  <lx-button type="primary" icon="lx-icon-delete"></lx-button>
</lx-button-group>
```

:::

### Botón de descarga

Cuando se hace clic en un botón para descargar datos, el botón muestra un estado de descarga.

:::demo Ajuste el atributo `loading` a `true` para mostrar el estado de descarga.

```html
<lx-button type="primary" :loading="true">Loading</lx-button>
```

:::

### Tamaños

Además del tamaño por defecto, el componente Button provee tres tamaños adicionales para utilizar en diferentes escenarios.

:::demo Use el atributo `size` para setear tamaños adicionales con `medium`, `small` o `mini`.

```html
<lx-row>
  <lx-button>Default</lx-button>
  <lx-button size="medium">Medium</lx-button>
  <lx-button size="small">Small</lx-button>
  <lx-button size="mini">Mini</lx-button>
</lx-row>
<lx-row>
  <lx-button round>Default</lx-button>
  <lx-button size="medium" round>Medium</lx-button>
  <lx-button size="small" round>Small</lx-button>
  <lx-button size="mini" round>Mini</lx-button>
</lx-row>
<lx-row>
  <lx-button icon="lx-icon-search" circle></lx-button>
  <lx-button icon="lx-icon-search" size="medium" circle></lx-button>
  <lx-button icon="lx-icon-search" size="small" circle></lx-button>
  <lx-button icon="lx-icon-search" size="mini" circle></lx-button>
</lx-row>
```

:::

### Button Atributos

| Atributo    | Descripción                                   | Tipo    | Valores aceptados                                  | Por defecto |
| ----------- | --------------------------------------------- | ------- | -------------------------------------------------- | ----------- |
| size        | tamaño del botón                              | string  | medium / small / mini                              | —           |
| type        | tipo de botón                                 | string  | primary / success / warning / danger / info / text | —           |
| plain       | determinar si es o no un botón plano          | boolean | —                                                  | false       |
| round       | determinar si es o no un botón redondo        | boolean | —                                                  | false       |
| circle      | determina si es un botón circular             | boolean | —                                                  | false       |
| loading     | determinar si es o no un botón de descarga    | boolean | —                                                  | false       |
| disabled    | deshabilitar el botón                         | boolean | —                                                  | false       |
| icon        | nombre de la clase del icono                  | string  | —                                                  | —           |
| autofocus   | misma funcionalidad que la nativa `autofocus` | boolean | —                                                  | false       |
| native-type | misma funcionalidad que la nativa `type`      | string  | button / submit / reset                            | button      |

### Button-Group Attributes

| Attribute | Description                                      | Type   | Accepted Values       | Default |
| --------- | ------------------------------------------------ | ------ | --------------------- | ------- |
| size      | control the size of buttons in this button-group | string | medium / small / mini | —       |

### Button-Group Slots

| Name    | Description                    |
| ------- | ------------------------------ |
| default | customize button group content |
