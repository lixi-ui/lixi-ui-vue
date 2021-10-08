## NavMenu

Menú que provee la navegación para tu sitio.

### Top bar

Top bar NavMenu puede ser usado en distinto escenarios.

:::demo Por defecto el menú es vertical, pero puede hacerlo horizontal asignando a la propiedad `mode` el valor 'horizontal'. Además, puede utilizar el componente de submenú para crear un menú de segundo nivel. Menú provee `background-color`, `text-color` y `active-text-color` para customizar los colores.

```html
<lx-menu :default-active="activeIndex" class="lx-menu-demo" mode="horizontal" @select="handleSelect">
  <lx-menu-item index="1">Processing Center</lx-menu-item>
  <lx-submenu index="2">
    <template #title>Workspace</template>
    <lx-menu-item index="2-1">item one</lx-menu-item>
    <lx-menu-item index="2-2">item two</lx-menu-item>
    <lx-menu-item index="2-3">item three</lx-menu-item>
    <lx-submenu index="2-4">
      <template #title>item four</template>
      <lx-menu-item index="2-4-1">item one</lx-menu-item>
      <lx-menu-item index="2-4-2">item two</lx-menu-item>
      <lx-menu-item index="2-4-3">item three</lx-menu-item>
    </lx-submenu>
  </lx-submenu>
  <lx-menu-item index="3" disabled>Info</lx-menu-item>
  <lx-menu-item index="4">Orders</lx-menu-item>
</lx-menu>
<div class="line"></div>
<lx-menu
  :default-active="activeIndex2"
  class="lx-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <lx-menu-item index="1">Processing Center</lx-menu-item>
  <lx-submenu index="2">
    <template #title>Workspace</template>
    <lx-menu-item index="2-1">item one</lx-menu-item>
    <lx-menu-item index="2-2">item two</lx-menu-item>
    <lx-menu-item index="2-3">item three</lx-menu-item>
    <lx-submenu index="2-4">
      <template #title>item four</template>
      <lx-menu-item index="2-4-1">item one</lx-menu-item>
      <lx-menu-item index="2-4-2">item two</lx-menu-item>
      <lx-menu-item index="2-4-3">item three</lx-menu-item>
    </lx-submenu>
  </lx-submenu>
  <lx-menu-item index="3" disabled>Info</lx-menu-item>
  <lx-menu-item index="4">Orders</lx-menu-item>
</lx-menu>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const activeIndex = ref('1');
      const activeIndex2 = ref('1');
      const handleSelect = (key, keyPath) => {
        console.log(key, keyPath);
      };
      return {
        activeIndex,
        activeIndex2,
        handleSelect,
      };
    },
  });

</setup>
-->
```
:::

### Side bar

NavMenu vertical con sub-menús.

:::demo Puede utilizar el componente `lx-menu-item-group` para crear un grupo de menú, y el nombre del grupo estará determinado por la propiedad `title` o la propiedad `slot`.

```html
<lx-row class="tac">
  <lx-col :span="12">
    <h5>Default colors</h5>
    <lx-menu
      default-active="2"
      class="lx-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <lx-submenu index="1">
        <template #title>
          <i class="lx-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <lx-menu-item-group title="Group One">
          <lx-menu-item index="1-1">item one</lx-menu-item>
          <lx-menu-item index="1-2">item one</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="Group Two">
          <lx-menu-item index="1-3">item three</lx-menu-item>
        </lx-menu-item-group>
        <lx-submenu index="1-4">
          <template #title>item four</template>
          <lx-menu-item index="1-4-1">item one</lx-menu-item>
        </lx-submenu>
      </lx-submenu>
      <lx-menu-item index="2">
        <i class="lx-icon-menu"></i>
        <span>Navigator Two</span>
      </lx-menu-item>
      <lx-menu-item index="3" disabled>
        <i class="lx-icon-document"></i>
        <span>Navigator Three</span>
      </lx-menu-item>
      <lx-menu-item index="4">
        <i class="lx-icon-setting"></i>
        <span>Navigator Four</span>
      </lx-menu-item>
    </lx-menu>
  </lx-col>
  <lx-col :span="12">
    <h5>Custom colors</h5>
    <lx-menu
      default-active="2"
      class="lx-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <lx-submenu index="1">
        <template #title>
          <i class="lx-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <lx-menu-item-group title="Group One">
          <lx-menu-item index="1-1">item one</lx-menu-item>
          <lx-menu-item index="1-2">item one</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="Group Two">
          <lx-menu-item index="1-3">item three</lx-menu-item>
        </lx-menu-item-group>
        <lx-submenu index="1-4">
          <template #title>item four</template>
          <lx-menu-item index="1-4-1">item one</lx-menu-item>
        </lx-submenu>
      </lx-submenu>
      <lx-menu-item index="2">
        <i class="lx-icon-menu"></i>
        <span>Navigator Two</span>
      </lx-menu-item>
      <lx-menu-item index="3" disabled>
        <i class="lx-icon-document"></i>
        <span>Navigator Three</span>
      </lx-menu-item>
      <lx-menu-item index="4">
        <i class="lx-icon-setting"></i>
        <span>Navigator Four</span>
      </lx-menu-item>
    </lx-menu>
  </lx-col>
</lx-row>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const handleOpen = (key, keyPath) => {
        console.log(key, keyPath);
      };
      const handleClose = (key, keyPath) => {
        console.log(key, keyPath);
      };
      return {
        handleOpen,
        handleClose,
      };
    },
  });

</setup>
-->
```
:::

### Collapse

NavMenu vertical puede ser colapsado.

:::demo
```html
<lx-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <lx-radio-button :label="false">expand</lx-radio-button>
  <lx-radio-button :label="true">collapse</lx-radio-button>
</lx-radio-group>
<lx-menu default-active="2" class="lx-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <lx-submenu index="1">
    <template #title>
      <i class="lx-icon-location"></i>
      <span>Navigator One</span>
    </template>
    <lx-menu-item-group>
      <template #title><span>Group One</span></template>
      <lx-menu-item index="1-1">item one</lx-menu-item>
      <lx-menu-item index="1-2">item two</lx-menu-item>
    </lx-menu-item-group>
    <lx-menu-item-group title="Group Two">
      <lx-menu-item index="1-3">item three</lx-menu-item>
    </lx-menu-item-group>
    <lx-submenu index="1-4">
      <template #title><span>item four</span></template>
      <lx-menu-item index="1-4-1">item one</lx-menu-item>
    </lx-submenu>
  </lx-submenu>
  <lx-menu-item index="2">
    <i class="lx-icon-menu"></i>
    <template #title>Navigator Two</template>
  </lx-menu-item>
  <lx-menu-item index="3" disabled>
    <i class="lx-icon-document"></i>
    <template #title>Navigator Three</template>
  </lx-menu-item>
  <lx-menu-item index="4">
    <i class="lx-icon-setting"></i>
    <template #title>Navigator Four</template>
  </lx-menu-item>
</lx-menu>

<style>
  .lx-menu-vertical-demo:not(.lx-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const isCollapse = ref(true);
      const handleOpen = (key, keyPath) => {
        console.log(key, keyPath);
      };
      const handleClose = (key, keyPath) => {
        console.log(key, keyPath);
      };
      return {
        isCollapse,
        handleOpen,
        handleClose,
      };
    },
  });

</setup>
-->
```
:::

### Atributos Menu
| Atributo          | Descripción                              | Tipo    | Valores aceptados     | Por defecto |
| ----------------- | ---------------------------------------- | ------- | --------------------- | ----------- |
| mode              | modo de presentación del menú            | string  | horizontal / vertical | vertical    |
| collapse          | si el menú está colapsado (solo en modo vertical) | boolean | —                     | false       |
| background-color  | color de fondo del menú (formato hexadecimal) | string  | —                     | #ffffff     |
| text-color        | color de texto del menú (formato hexadecimal) | string  | —                     | #303133     |
| active-text-color | color de text del menu-item activo (formato hexadecimal) | string  | —                     | #409EFF     |
| default-active    | índice del menu-item activo              | string  | —                     | —           |
| default-openeds   | arreglo que contiene las llaves del sub-menus activo | Array   | —                     | —           |
| unique-opened     | si solo un submenu puede ser activo      | boolean | —                     | false       |
| menu-trigger      | como dispara eventos sub-menus, solo funciona cuando `mode` es 'horizontal' | string  | hover / click      | hover   |
| router            | si el modo `vue-router` está activado. Si es verdadero, el índice será usado como 'path' para activar la ruta | boolean | —                     | false       |
| collapse-transition  | si se debe permitir collapse transition | boolean   | — | true   |

### Métodos Menu
| Métodos de evento | Descripción                   | Parámetros                             |
| ---------------- | ----------------------------- | -------------------------------------- |
| open             | abre un sub-menu específico   | index: índice del sub-menu para abrir  |
| close            | cierra un sub-menu específico | index: índice del sub-menu para cerrar |

### Eventos Menu
| Nombre de evento | Descripción                              | Parámetros                               |
| ---------------- | ---------------------------------------- | ---------------------------------------- |
| select           | callback ejecutado cuando el menú es activado | index: índice del menú activado, indexPath: index path del menú activado, item: el elemento de menú seleccionado, routeResult: resultado devuelto por `vue-router` si `router` está activado |
| open             | callback ejecutado cuando sub-menu se expande | index: índice del sub-menu expandido, indexPath: index path del sub-menu expandido |
| close            | callback ejecutado cuando sub-menu colapsa | index: índice del sub-menu colapsado, indexPath: index path del menú colapsado |

### Eventos Menu-Item
| Nombre de evento | Descripción                              | Parámetros                 |
| ---------------- | ---------------------------------------- | -------------------------- |
| click            | callback ejecutado cuando se hace click sobre menu-item | el: instancia de menu-item |

### Atributos SubMenu
| Atributo     | Descripción                              | Tipo   | Valores aceptados | Por defecto |
| ------------ | ---------------------------------------- | ------ | ----------------- | ----------- |
| index        | identificador único                      | string/null | —            | null        |
| popper-class | nombre personalizado de la clase del menú popup | string | —                 | —           |
| show-timeout | tiempo de espera antes de mostrar un submenú | number | —                 | 300         |
| hide-timeout | tiempo de espera antes de ocultar un submenú | number | —                 | 300         |
| disabled | si esta `disabled` el sub-menu | boolean | — | false |
| popper-append-to-body | si se debe agregar el menú emergente al cuerpo. Si la posición del menú es incorrecta, puede intentar ajustar este prop | boolean | - | level one Submenu: true / other Submenus: false |

### Atributos Menu-Item
| Atributo | Descripción         | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------- | ------ | ----------------- | ----------- |
| index    | identificador único | string | —                 | —           |
| route    | Objeto Vue Router   | object | —                 | —           |
| disabled | si esta `disabled` | boolean | — | false |

### Atributos Menu-Group
| Atributo | Descripción      | Tipo   | Valores aceptados | Por defecto |
| -------- | ---------------- | ------ | ----------------- | ----------- |
| title    | título del grupo | string | —                 | —           |
