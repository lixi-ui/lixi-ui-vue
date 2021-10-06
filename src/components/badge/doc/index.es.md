## Badge

Marcas en forma de número o estado para botones e iconos.

### Uso básico

Muestra la cantidad de mensajes nuevos.

:::demo La cantidad está definida por `value` que acepta `Number` o `String`.

```html
<lx-badge :value="12" class="item">
  <lx-button size="small">comments</lx-button>
</lx-badge>
<lx-badge :value="3" class="item">
  <lx-button size="small">replies</lx-button>
</lx-badge>
<lx-badge :value="1" class="item" type="primary">
  <lx-button size="small">comments</lx-button>
</lx-badge>
<lx-badge :value="2" class="item" type="warning">
  <lx-button size="small">replies</lx-button>
</lx-badge>

<lx-dropdown trigger="click">
  <span class="lx-dropdown-link">
    Click Me<i class="lx-icon-caret-bottom lx-icon--right"></i>
  </span>
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item class="clearfix">
        comments
        <lx-badge class="mark" :value="12" />
      </lx-dropdown-item>
      <lx-dropdown-item class="clearfix">
        replies
        <lx-badge class="mark" :value="3" />
      </lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Valor máximo

Se puede personalizar el valor máximo.

:::demo Lx valor máximo se define como `max` el cual es un `Number`. Nota: solo funciona si `value` es también un `Number`.

```html
<lx-badge :value="200" :max="99" class="item">
  <lx-button size="small">comments</lx-button>
</lx-badge>
<lx-badge :value="100" :max="10" class="item">
  <lx-button size="small">replies</lx-button>
</lx-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Personalizaciones

Mostrar texto en vez de números.

:::demo Cuando `value` es un `String`, puede mostrar texto personalizado.

```html
<lx-badge value="new" class="item">
  <lx-button size="small">comments</lx-button>
</lx-badge>
<lx-badge value="hot" class="item">
  <lx-button size="small">replies</lx-button>
</lx-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Pequeño punto rojo

Puede utilizar un punto rojo para marcar contenido que debe ser notado.

:::demo Use el atributo `is-dot`. Es un `Boolean`.

```html
<lx-badge is-dot class="item">query</lx-badge>
<lx-badge is-dot class="item">
  <lx-button class="share-button" icon="lx-icon-share" type="primary"></lx-button>
</lx-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Atributos
| Atributo | Descripción                              | Tipo           | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------------- | ----------------- | ----------- |
| value    | valor a mostrar                          | string, number | —                 | —           |
| max      | valor máximo, Muestra '{max}+' cuando se excede. Solo funciona si `value` es un `Number` | number         | —                 | —           |
| is-dot   | si se debe mostrar un pequeño punto      | boolean        | —                 | false       |
| hidden   | oculta el badge                    | boolean        | —                 | false       |
| type     | tipo de botón                            | string         | primary / success / warning / danger / info | — |

