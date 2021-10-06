## Dialog

Informar a usuarios preservando el estado de la página actual.

### Uso Básico

Dialog abre una caja de diálogo, y es bastante personalizable.

:::demo Establezca el `model-value / v-model` con un booleano, y el Dialog se muestra cuando es `true`. Lx diálogo tiene dos partes: `body` y `footer`,  este último requiere un slot llamado `footer`. Lx atributo `title` es opcional (vacío por defecto) y sirve para definir un título. Por último, este ejemplo muestra cómo se utiliza `before-close`.

```html
<lx-button type="text" @click="dialogVisible = true">click to open the Dialog</lx-button>

<lx-dialog
  title="Tips"
  v-model="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>This is a message</span>
  <template #footer>
    <span class="dialog-footer">
      <lx-button @click="dialogVisible = false">Cancel</lx-button>
      <lx-button type="primary" @click="dialogVisible = false">Confirm</lx-button>
    </span>
  </template>
</lx-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';
  import { LxMessageBox } from 'element-plus';

  export default defineComponent({
    setup() {
      const dialogVisible = ref(false);
      
      const handleClose = (done) => {
        LxMessageBox
          .confirm('Are you sure to close this dialog?')
          .then((_) => {
            done();
          })
          .catch((_) => {});
      };
      return {
        dialogVisible,
        handleClose,
      };
    },
  });

</setup>
-->
```
:::

:::tip

`before-close`  sólo funciona cuando el usuario hace clic en el icono de cerrar o en el fondo. Si tiene botones que cierran el cuadro de diálogo en el slot llamado `footer`, puede agregar lo que haría `before-close` en el manejador de eventos de los botones.

:::

### Personalizaciones


El contenido del Diálogo puede ser cualquier cosa, incluso una tabla o un formulario. Este ejemplo muestra cómo usar Lxement Plus Table y Form con Dialog

:::demo

```html
<lx-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</lx-button>

<lx-dialog title="Shipping address" v-model="dialogTableVisible">
  <lx-table :data="gridData">
    <lx-table-column property="date" label="Date" width="150"></lx-table-column>
    <lx-table-column property="name" label="Name" width="200"></lx-table-column>
    <lx-table-column property="address" label="Address"></lx-table-column>
  </lx-table>
</lx-dialog>

<!-- Form -->
<lx-button type="text" @click="dialogFormVisible = true">open a Form nested Dialog</lx-button>

<lx-dialog title="Shipping address" v-model="dialogFormVisible">
  <lx-form :model="form">
    <lx-form-item label="Promotion name" :label-width="formLabelWidth">
      <lx-input v-model="form.name" autocomplete="off"></lx-input>
    </lx-form-item>
    <lx-form-item label="Zones" :label-width="formLabelWidth">
      <lx-select v-model="form.region" placeholder="Please select a zone">
        <lx-option label="Zone No.1" value="shanghai"></lx-option>
        <lx-option label="Zone No.2" value="beijing"></lx-option>
      </lx-select>
    </lx-form-item>
  </lx-form>
  <template #footer>
    <span class="dialog-footer">
      <lx-button @click="dialogFormVisible = false">Cancel</lx-button>
      <lx-button type="primary" @click="dialogFormVisible = false">Confirm</lx-button>
    </span>
  </template>
</lx-dialog>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
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
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
          {
            date: '2016-05-04',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
          {
            date: '2016-05-01',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
          {
            date: '2016-05-03',
            name: 'John Smith',
            address: 'No.1518,  Jinshajiang Road, Putuo District',
          },
        ],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        formLabelWidth: '120px',
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

### Diálogo anidado
Si un diálogo está anidado en otro diálogo, se requiere append-to-body.

:::demo Normalmente no recomendamos el uso de Dialog anidado. Si necesita que se muestren múltiples diálogos en la página, puede simplemente aplanarlos para que sean hermanos entre sí. Si debe anidar un Diálogo dentro de otro Diálogo, establezca `append-to-body` del Diálogo anidado como true, y lo añadirá al cuerpo en lugar de su nodo padre, para que ambos Diálogos puedan ser correctamente renderizados.

```html
<template>
  <lx-button type="text" @click="outerVisible = true">open the outer Dialog</lx-button>

  <lx-dialog title="Outer Dialog" v-model="outerVisible">
    <lx-dialog
        width="30%"
        title="Inner Dialog"
        v-model="innerVisible"
        append-to-body>
    </lx-dialog>
    <template #footer>
      <div class="dialog-footer">
        <lx-button @click="outerVisible = false">Cancel</lx-button>
        <lx-button type="primary" @click="innerVisible = true">open the inner Dialog</lx-button>
      </div>
    </template>
  </lx-dialog>
</template>

<script>
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      return {
        outerVisible: ref(false),
        innerVisible: ref(false),
      };
    },
  });

</setup>
-->
```
:::

### Contenido centrado
El contenido de Diálogo se puede centrar.

:::demo Ajuste `center` en `true` para centrar el encabezado y el pie de página del cuadro de diálogo horizontalmente. `center` sólo afecta al encabezado y pie de página de Dialog. Lx cuerpo de Dialog puede ser cualquier cosa, así que a veces no se ve bien cuando está centrado. Necesitas escribir algún CSS si deseas centrar el cuerpo también.

```html
<lx-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</lx-button>

<lx-dialog
  title="Warning"
  v-model="centerDialogVisible"
  width="30%"
  center>
  <span>It should be noted that the content will not be aligned in center by default</span>
  <template #footer>
    <span class="dialog-footer">
      <lx-button @click="centerDialogVisible = false">Cancel</lx-button>
      <lx-button type="primary" @click="centerDialogVisible = false">Confirm</lx-button>
    </span>
  </template>
</lx-dialog>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
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
        centerDialogVisible: ref(false),
      };
    },
  });

</setup>
-->
```
:::

:::tip
El contenido de Dialog se renderiza en modo lazy, lo que significa que la ranura por defecto no se renderiza en el DOM hasta que se abre por primera vez. Por lo tanto, si necesita realizar una manipulación DOM o acceder a un componente mediante ref, hágalo en el callback del evento `open`.
:::

### Destroy on Close (Translation needed)
When this is feature is enabled, the content under default slot will be destroyed with a `v-if` directive. Enable this when you have perf concerns.

:::demo Note that by enabling this feature, the content will not be rendered before `transition.beforeEnter` dispatched, there will only be `overlay` `header(if any)` `footer(if any)`.

```html
<lx-button type="text" @click="centerDialogVisible = true">Click to open Dialog</lx-button>

<lx-dialog
  title="Notice"
  v-model="centerDialogVisible"
  width="30%"
  destroy-on-close
  center>
  <span>Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered</span>
  <div>
    <strong>Extra content (Not rendered)</strong>
  </div>
  <template #footer>
    <span class="dialog-footer">
      <lx-button @click="centerDialogVisible = false">Cancel</lx-button>
      <lx-button type="primary" @click="centerDialogVisible = false">Confirm</lx-button>
    </span>
  </template>

</lx-dialog>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
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
        centerDialogVisible: ref(false),
      };
    },
  });

</setup>
-->

```

:::tip
When using `modal` = false, please make sure that `append-to-body` was set to **true**, because `Dialog` was positioned by `position: relative`, when `modal` gets removed, `Dialog` will position itself based on the current position in the DOM, instead of `Document.Body`, thus the style will be messed up.
:::
### Atributo

| Atributo              | Descripción                              | Tipo                                     | Valores aceptados | Por defecto |
| --------------------- | ---------------------------------------- | ---------------------------------------- | ----------------- | ----------- |
| model-value / v-model               | visibilidad del Diálogo | boolean                                  | —                 | —       |
| title                 | título de Diálogo. También se puede pasar con un slot con nombre (ver la tabla siguiente) | string                                   | —                 | —           |
| width                 | anchura de Diálogo                       | string / number                                  | —                 | 50%         |
| fullscreen            | si el diálogo ocupa pantalla completa    | boolean                                  | —                 | false       |
| top                   | valor de `margin-top` del Diálogo CSS    | string                                   | —                 | 15vh        |
| modal                 | si se muestra una máscara                | boolean                                  | —                 | true        |
| append-to-body        | Si adjuntar el cuadro de diálogo al cuerpo | boolean                                  | —                 | false       |
| lock-scroll           | Si el scroll del cuerpo está desactivado mientras se muestra el cuadro de diálogo | boolean                                  | —                 | true        |
| custom-class          | nombres de clase personalizada para el Diálogo | string                                   | —                 | —           |
| open-delay            | Tiempo (milisegundos) antes de abierto | number    | — | 0 |
| close-delay           | Tiempo (milisegundos) antes de cierre | number    | — | 0 |
| close-on-click-modal  | si el Diálogo puede ser cerrado haciendo clic en la máscara | boolean                                  | —                 | true        |
| close-on-press-escape | si el Diálogo puede ser cerrado presionando ESC | boolean                                  | —                 | true        |
| show-close            | si mostrar un botón de cerrar            | boolean                                  | —                 | true        |
| before-close          | una devolución de llamada antes de que se cierre el cuadro de diálogo, y evitar cerrar el cuadro de diálogo | función(done) `done`se usa para cerrar el diálog | —                 | —           |
| center                | si alinear el encabezado y el pie de página en el centro | boolean                                  | —                 | false       |
| destroy-on-close      | Destruir elementos en Dialog cuando se cierra | boolean                                  | —                 | false         |

### Slots

| Nombre | Descripcíon                            |
| ------ | -------------------------------------- |
| —      | contenido de Diálogo                   |
| title  | contenido del título de Diálogo        |
| footer | contenido del pie de página de Diálogo |

### Eventos
| Nombre de Evento | Descripcíon                              | Parámetros |
| ---------------- | ---------------------------------------- | ---------- |
| open             | se activa cuando se abre el cuadro de Diálogo | —          |
| opened           | se activa cuando la animación de apertura del Dialog termina. | — |
| close            | se dispara cuando el Diálogo se cierra   | —          |
| closed           | se activa cuando finaliza la animación de cierre del Diálog | — |

