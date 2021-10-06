## Popover

### Uso básico

Similar a un Tooltip, Popover está construido con `Vue-popper`. Así que para atributos duplicados, por favor refiérase a la documentación de Tooltip.

:::demo Lx atributo `trigger` es usado para definir como el popover se dispara: `hover`, `click`, `focus` o `manual`. En cuanto al elemento desencadenante, puedes escribirlo de dos maneras diferentes: usando el `#reference`[named slot](https://vuejs.org/v2/guide/components.html#Named-Slots), o usando la directiva `v-popover` y poniendo  el `ref` de Popover.

```html
<template>
  <lx-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <lx-button>Hover to activate</lx-button>
    </template>
  </lx-popover>

  <lx-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="click"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <lx-button>Click to activate</lx-button>
    </template>
  </lx-popover>

  <lx-popover
    ref="popover"
    placement="right"
    title="Title"
    :width="200"
    trigger="focus"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <lx-button>Focus to activate</lx-button>
    </template>
  </lx-popover>

  <lx-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="manual"
    content="this is content, this is content, this is content"
    v-model:visible="visible"
  >
    <template #reference>
      <lx-button @click="visible = !visible">Manual to activate</lx-button>
    </template>
  </lx-popover>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      return {
        visible: ref(false),
      };
    },
  });

</setup>
-->
```
:::

### Información anidada
Otros componentes pueden anidarse dentro de popover. A continuación un ejemplo de una tabla anidada.

:::demo Reemplaza el atributo `content` con un `slot`.

```html
<lx-popover
  placement="right"
  :width="400"
  trigger="click"
>
  <template #reference>
    <lx-button>Click to activate</lx-button>
  </template>
  <lx-table :data="gridData">
    <lx-table-column width="150" property="date" label="date"></lx-table-column>
    <lx-table-column width="100" property="name" label="name"></lx-table-column>
    <lx-table-column width="300" property="address" label="address"></lx-table-column>
  </lx-table>
</lx-popover>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City'
        }]
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        gridData: [
          {
            date: '2016-05-02',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-04',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-01',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-03',
            name: 'Jack',
            address: 'New York City',
          },
        ],
      });
      return {
        ...toRefs(state),
      };
    },
  });

</setup>
-->
```
:::

### Operación anidada

Por supuesto, puedes anidar otras operaciones. Es más ligero que utilizar un `dialog`.

:::demo
```html
<lx-popover
  placement="top"
  :width="160"
  v-model:visible="visible"
>
  <p>Are you sure to delete this?</p>
  <div style="text-align: right; margin: 0">
    <lx-button size="mini" type="text" @click="visible = false">cancel</lx-button>
    <lx-button type="primary" size="mini" @click="visible = false">confirm</lx-button>
  </div>
  <template #reference>
    <lx-button @click="visible = true">Delete</lx-button>
  </template>
</lx-popover>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      return {
        visible: ref(false),
      };
    },
  });

</setup>
-->
```
:::

### Atributos
| Atributo       | Descripción                              | Tipo           | Valores aceptados                        | Por defecto                              |
| -------------- | ---------------------------------------- | -------------- | ---------------------------------------- | ---------------------------------------- |
| trigger        | cómo se dispara el popover               | string         | click/focus/hover/manual                 | click                                    |
| title          | título del popover                       | string         | —                                        | —                                        |
| content        | contenido del popover, puede ser sustituido por un `slot` | string         | —                                        | —                                        |
| width          | ancho del popover                        | string, number | —                                        | Min width 150px                          |
| placement      | posición del popover en la pantalla      | string         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                   |
| disabled       | si el popover está deshabilitado         | boolean        | —                                        | false                                    |
| visible / v-model:visible | si el popover está visible               | Boolean        | —                                        | false                                    |
| offset         | popover offset                           | number         | —                                        | 0                                        |
| transition     | animación de transición del popover | string         | —                                        | el-fade-in-linear                        |
| show-arrow  | si una flecha del tooltip es mostrada o no. Para más información, por favor refiérase a [Vue-popper](https://github.com/element-component/vue-popper) | boolean        | —                                        | true                                     |
| popper-options | parámetros para [popper.js](https://popper.js.org/documentation.html) | object         | por favor, refiérase a [popper.js](https://popper.js.org/documentation.html) | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| popper-class   | clase propia para popover                | string         | —                                        | —                                        |
| show-after     | retraso de la apariencia, en milisegundos | number  | —                                        | 0                                        |
| hide-after     | retraso en el cierre, en milisegundos | number  | —                                        | 0                                        |
| auto-close     | tiempo a esperar en milisegundos para esconder el Tooltip | number  | —                                        | 0                                        |
| tabindex       | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) de Popover |   number           |      —      |  —    |

### Slot
| Nombre    | Descripción                          |
| --------- | ------------------------------------ |
| —         | texto contenido en popover           |
| reference | elemento HTML que dispara el popover |

### Eventos
| Nombre del evento | Descripción                             | Parámetros |
| ----------------- | --------------------------------------- | ---------- |
| show              | se dispara cuando se muestra el popover | —          |
| after-enter       | se dispara cuando la transición de entrada termina | —       |
| hide              | se dispara cuando se oculta el popover  | —          |
| after-leave       | se dispara cuando la transición de salida termina | —        |
