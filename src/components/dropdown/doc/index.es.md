## Dropdown
Menú conmutable para visualizar listas de enlaces y acciones.

### Uso básico
Pase el ratón por el menú desplegable para desplegarlo y obtener más acciones.

:::demo Lx elemento desencadenante se representa con el slot predeterminado, y la parte desplegable se representa con el slot llamado dropdown. Por defecto, la lista desplegable se muestra cuando se pasa el ratón por encima del elemento desencadenante sin necesidad de hacer clic en él.

```html
<lx-dropdown>
  <span class="lx-dropdown-link">
    Dropdown List<i class="lx-icon-arrow-down lx-icon--right"></i>
  </span>
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item disabled>Action 4</lx-dropdown-item>
      <lx-dropdown-item divided>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
  .lx-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
</style>

```

:::

### Lxemento detonante

Utilizando un botón para activar la lista desplegable.

:::demo Utilice `split-button` para dividir el elemento detonante en un grupo de botones, siendo el botón izquierdo un botón normal y el botón derecho el objetivo real de la detonacion. Si desea insertar una línea de separación entre la posición tres y la posición cuatro, sólo añada un divisor de clase a la posición cuatro.

```html
<lx-dropdown>
  <lx-button type="primary">
    Dropdown List<i class="lx-icon-arrow-down lx-icon--right"></i>
  </lx-button>
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
      <lx-dropdown-item>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>
<lx-dropdown split-button type="primary" @click="handleClick">
  Dropdown List
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
      <lx-dropdown-item>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
  .lx-dropdown {
    vertical-align: top;
  }
  .lx-dropdown + .lx-dropdown {
    margin-left: 15px;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const handleClick = () => {
        alert('button click');
      };
      return {
        handleClick,
      };
    },
  });

</setup>
-->
```
:::

### Cómo detonar el evento

Haga clic en el elemento detonante o sobre él.

:::demo Utilice el atributo `trigger`. Por defecto, es `hover`.

```html
<lx-row class="block-col-2">
  <lx-col :span="8">
    <span class="demonstration">hover to trigger</span>
    <lx-dropdown>
      <span class="lx-dropdown-link">
        Dropdown List<i class="lx-icon-arrow-down lx-icon--right"></i>
      </span>
      <template #dropdown>
        <lx-dropdown-menu>
          <lx-dropdown-item icon="lx-icon-plus">Action 1</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-plus">Action 2</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-plus-outline">Action 3</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-check">Action 4</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-check">Action 5</lx-dropdown-item>
        </lx-dropdown-menu>
      </template>
    </lx-dropdown>
  </lx-col>
  <lx-col :span="8">
    <span class="demonstration">click to trigger</span>
    <lx-dropdown trigger="click">
      <span class="lx-dropdown-link">
        Dropdown List<i class="lx-icon-arrow-down lx-icon--right"></i>
      </span>
      <template #dropdown>
        <lx-dropdown-menu>
          <lx-dropdown-item icon="lx-icon-plus">Action 1</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-plus">Action 2</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-plus-outline">Action 3</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-check">Action 4</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-check">Action 5</lx-dropdown-item>
        </lx-dropdown-menu>
      </template>
    </lx-dropdown>
  </lx-col>
  <lx-col :span="8">
    <span class="demonstration">right click to trigger</span>
    <lx-dropdown trigger="contextmenu">
      <span class="lx-dropdown-link">
        Dropdown List<i class="lx-icon-arrow-down lx-icon--right"></i>
      </span>
      <template #dropdown>
        <lx-dropdown-menu>
          <lx-dropdown-item icon="lx-icon-plus">Action 1</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-plus">Action 2</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-plus-outline">Action 3</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-check">Action 4</lx-dropdown-item>
          <lx-dropdown-item icon="lx-icon-circle-check">Action 5</lx-dropdown-item>
        </lx-dropdown-menu>
      </template>
    </lx-dropdown>
  </lx-col>
</lx-row>

<style>
  .lx-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: var(--lx-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
```
:::

### Ocultamiento del menú

Use `hide-on-click` para definir si el menú se cierra al hacer clic.

:::demo Lx menú predeterminado se cerrará cuando haga clic en los elementos del menú, y se puede desactivar configurando `hide-on-click` como false.

```html
<lx-dropdown :hide-on-click="false">
  <span class="lx-dropdown-link">
    Dropdown List<i class="lx-icon-arrow-down lx-icon--right"></i>
  </span>
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item disabled>Action 4</lx-dropdown-item>
      <lx-dropdown-item divided>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
  .lx-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
</style>
```
:::

### Evento command

Al hacer clic en cada elemento desplegable se detona un evento cuyo parámetro es asignado por cada elemento.

:::demo
```html
<lx-dropdown @command="handleCommand">
  <span class="lx-dropdown-link">
    Dropdown List<i class="lx-icon-arrow-down lx-icon--right"></i>
  </span>
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item command="a">Action 1</lx-dropdown-item>
      <lx-dropdown-item command="b">Action 2</lx-dropdown-item>
      <lx-dropdown-item command="c">Action 3</lx-dropdown-item>
      <lx-dropdown-item command="d" disabled>Action 4</lx-dropdown-item>
      <lx-dropdown-item command="e" divided>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
  .lx-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { LxMessage } from 'lixi-ui-vue';

  export default defineComponent({
    setup() {

      const handleCommand = (command) => {
        LxMessage(`click on item ${command}`);
      };
      return {
        handleCommand,
      };
    },
  });

</setup>
-->
```
:::

### Tamaños

Además del tamaño predeterminado, el componente Dropdown proporciona tres tamaños adicionales para que pueda elegir entre diferentes escenarios

:::demo Utilice el atributo `size` para establecer tamaños adicionales con `medium`, `small` o `mini`.

```html
<lx-dropdown split-button type="primary">
  Default
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<lx-dropdown size="medium" split-button type="primary">
  Medium
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<lx-dropdown size="small" split-button type="primary">
  Small
  <template #dropdown>
<lx-dropdown-menu>
   <lx-dropdown-item>Action 1</lx-dropdown-item>
   <lx-dropdown-item>Action 2</lx-dropdown-item>
   <lx-dropdown-item>Action 3</lx-dropdown-item>
   <lx-dropdown-item>Action 4</lx-dropdown-item>
  </lx-dropdown-menu>
</template>
</lx-dropdown>

<lx-dropdown size="mini" split-button type="primary">
  Mini
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>
```
:::

### Dropdown atributos
| Atributo      | Descripción                              | Tipo    | Valores aceptados                        | Por defecto |
| ------------- | ---------------------------------------- | ------- | ---------------------------------------- | ----------- |
| type          | tipo de botón de menú, consulte Componente`Button`, sólo funciona cuando `split-button` es true. | string  | —                                        | —           |
| size          | tamaño del menú, también funciona en `split-button` | string  | medium / small / mini                    | —           |
| max-height    | the max height of menu  | string / number  |     —    |    —     |
| split-button  | si se visualiza un grupo de botones      | boolean | —                                        | false       |
| disabled      | Ya sea para deshabilitar | boolean | — | false |
| placement     | colocación del menú                      | string  | top/top-start/top-end/bottom/bottom-start/bottom-end | bottom  |
| trigger       | cómo detonar                             | string  | hover/click/contextmenu                              | hover       |
| hide-on-click | si se oculta el menú después de hacer clic en el elemento | boolean | —                                        | true        |
| show-timeout  | Tiempo de retardo antes de mostrar un dropdown (solamente trabaja cuando se dispara `hover`) | number  | —                                        | 250         |
| hide-timeout  | Tiempo de retardo antes de ocultar un dropdown (solamente trabaja cuando se dispara `hover`) | number  | —                                        | 150         |
| tabindex      | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) de Dropdown | number              |          —         | 0           |

### Dropdown Slots

| Nombre | Descripción |
|------|--------|
| — | contenido del Dropdown. Aviso: Debe ser un elemento html dom válido (ej. `<span>, <button>` etc.) o `lx-component`, para adjuntar el listener trigger |
| dropdown | contenido del menu Dropdown, normalmente es un elemento `<lx-dropdown-menu>` |

### Dropdown Eventos
| Nombre         | Descripción                              | Parametros                               |
| -------------- | ---------------------------------------- | ---------------------------------------- |
| click          | si `split-button` es `true`, se activa al hacer clic en el botón izquierdo | —                                        |
| command        | activa cuando se hace clic en un elemento desplegable | el comando enviado desde el elemento desplegable |
| visible-change | se activa cuando aparece/desaparece el desplegable | true cuando aparece, y false de otro modo |

### Dropdown Menu Item Atributos
| Atributo | Descripción                              | Tipo                 | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------------------- | ----------------- | ----------- |
| command  | un comando que se enviará al `command` callback del Dropdown | string/number/object | —                 | —           |
| disabled | si el elemento está desactivado          | boolean              | —                 | false       |
| divided  | si se visualiza un divisor               | boolean              | —                 | false       |
| icon     | nombre de la clase del icono             | string               | —                 | —           |
