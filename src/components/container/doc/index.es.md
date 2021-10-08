## Contenedor
Componentes contenedores para iniciar una estructura básica de un sitio:

`<lx-container>`: Contenedor. Cuando este elemento se anida con un `<lx-header>` o `<lx-footer>`, todos los elementos secundarios se organizan verticalmente.
De lo contrario, de forma horizontal.

`<lx-header>`: Contenedor para cabeceras.

`<lx-aside>`: Contenedor para secciones laterales (generalmente, una barra lateral).

`<lx-main>`: Contenedor para sección principal.

`<lx-footer>`: Contenedor para pie de página.

:::tip
Estos componentes utilizan flex para el diseño, así que asegúrese que el navegador lo soporta. Además, los elementos directos de `<lx-container>` tienen que ser uno o más de los últimos cuatro componentes. Y el elemento padre de los últimos cuatro componentes debe ser un `<lx-container>`.
:::

### Diseños comunes

:::demo
```html
<div class="common-layout">
  <lx-container>
    <lx-header>Cabecera</lx-header>
    <lx-main>Principal</lx-main>
  </lx-container>

  <lx-container>
    <lx-header>Cabecera</lx-header>
    <lx-main>Principal</lx-main>
    <lx-footer>Pie de página</lx-footer>
  </lx-container>

  <lx-container>
    <lx-aside width="200px">Barra lateral</lx-aside>
    <lx-main>Principal</lx-main>
  </lx-container>

  <lx-container>
    <lx-header>Cabecera</lx-header>
    <lx-container>
      <lx-aside width="200px">Barra lateral</lx-aside>
      <lx-main>Principal</lx-main>
    </lx-container>
  </lx-container>

  <lx-container>
    <lx-header>Cabecera</lx-header>
    <lx-container>
      <lx-aside width="200px">Barra lateral</lx-aside>
      <lx-container>
        <lx-main>Principal</lx-main>
        <lx-footer>Pie de página</lx-footer>
      </lx-container>
    </lx-container>
  </lx-container>

  <lx-container>
    <lx-aside width="200px">Barra lateral</lx-aside>
    <lx-container>
      <lx-header>Cabecera</lx-header>
      <lx-main>Principal</lx-main>
    </lx-container>
  </lx-container>
</div>

<style>
  .lx-header, .lx-footer {
    background-color: #B3C0D1;
    color: var(--lx-text-color-primary);
    text-align: center;
    line-height: 60px;
  }

  .lx-aside {
    background-color: #D3DCE6;
    color: var(--lx-text-color-primary);
    text-align: center;
    line-height: 200px;
  }

  .lx-main {
    background-color: #E9EEF3;
    color: var(--lx-text-color-primary);
    text-align: center;
    line-height: 160px;
  }

  body > .lx-container {
    margin-bottom: 40px;
  }

  .lx-container:nth-child(5) .lx-aside,
  .lx-container:nth-child(6) .lx-aside {
    line-height: 260px;
  }

  .lx-container:nth-child(7) .lx-aside {
    line-height: 320px;
  }
</style>
```
:::

### Ejemplo

:::demo
```html
<lx-container style="height: 500px; border: 1px solid #eee">
  <lx-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <lx-menu :default-openeds="['1', '3']">
      <lx-submenu index="1">
        <template #title><i class="lx-icon-message"></i>Navigator One</template>
        <lx-menu-item-group>
          <template #title>Group 1</template>
          <lx-menu-item index="1-1">Option 1</lx-menu-item>
          <lx-menu-item index="1-2">Option 2</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="Group 2">
          <lx-menu-item index="1-3">Option 3</lx-menu-item>
        </lx-menu-item-group>
        <lx-submenu index="1-4">
          <template #title>Option4</template>
          <lx-menu-item index="1-4-1">Option 4-1</lx-menu-item>
        </lx-submenu>
      </lx-submenu>
      <lx-submenu index="2">
        <template #title><i class="lx-icon-menu"></i>Navigator Two</template>
        <lx-menu-item-group>
          <template #title>Group 1</template>
          <lx-menu-item index="2-1">Option 1</lx-menu-item>
          <lx-menu-item index="2-2">Option 2</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="Group 2">
          <lx-menu-item index="2-3">Option 3</lx-menu-item>
        </lx-menu-item-group>
        <lx-submenu index="2-4">
          <template #title>Option 4</template>
          <lx-menu-item index="2-4-1">Option 4-1</lx-menu-item>
        </lx-submenu>
      </lx-submenu>
      <lx-submenu index="3">
        <template #title><i class="lx-icon-setting"></i>Navigator Three</template>
        <lx-menu-item-group>
          <template #title>Group 1</template>
          <lx-menu-item index="3-1">Option 1</lx-menu-item>
          <lx-menu-item index="3-2">Option 2</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="Group 2">
          <lx-menu-item index="3-3">Option 3</lx-menu-item>
        </lx-menu-item-group>
        <lx-submenu index="3-4">
          <template #title>Option 4</template>
          <lx-menu-item index="3-4-1">Option 4-1</lx-menu-item>
        </lx-submenu>
      </lx-submenu>
    </lx-menu>
  </lx-aside>

  <lx-container>
    <lx-header style="text-align: right; font-size: 12px">
      <lx-dropdown>
        <i class="lx-icon-setting" style="margin-right: 15px"></i>
        <template #dropdown>
          <lx-dropdown-menu>
              <lx-dropdown-item>View</lx-dropdown-item>
              <lx-dropdown-item>Add</lx-dropdown-item>
              <lx-dropdown-item>Delete</lx-dropdown-item>
          </lx-dropdown-menu>
        </template>
      </lx-dropdown>
      <span>Tom</span>
    </lx-header>

    <lx-main>
      <lx-table :data="tableData">
        <lx-table-column prop="date" label="Date" width="140">
        </lx-table-column>
        <lx-table-column prop="name" label="Name" width="120">
        </lx-table-column>
        <lx-table-column prop="address" label="Address">
        </lx-table-column>
      </lx-table>
    </lx-main>
  </lx-container>
</lx-container>

<style>
  .lx-header {
    background-color: #B3C0D1;
    color: var(--lx-text-color-primary);
    line-height: 60px;
  }

  .lx-aside {
    color: var(--lx-text-color-primary);
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      };

      const tableData = ref(Array(20).fill(item));

      return {
        tableData,
      };
    },
  });

</setup>
-->
```
:::

### Atributos de contenedor
| Atributo  | Descripción                              | Tipo   | Valores aceptados     | Por defecto                              |
| --------- | ---------------------------------------- | ------ | --------------------- | ---------------------------------------- |
| direction | dirección de diseño para elementos secundarios | string | horizontal / vertical | vertical cuando el elemento está anidado con `lx-header`, de lo contrario, horizontal |

### Atributos de cabecera
| Atributo | Descripción           | Tipo   | Valores aceptados | Por defecto |
| -------- | --------------------- | ------ | ----------------- | ----------- |
| height   | altura de la cabecera | string | —                 | 60px        |

### Atributos de barra lateral
| Atributo | Descripción               | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------------- | ------ | ----------------- | ----------- |
| width    | ancho de la barra lateral | string | —                 | 300px       |

### Atributos de pie de página
| Atributo | Descripción              | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------------ | ------ | ----------------- | ----------- |
| height   | altura del pie de página | string | —                 | 60px        |
