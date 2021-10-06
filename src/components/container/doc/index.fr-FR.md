## Container
Les composants Container servent à structurer la page:

`<lx-container>`: Conteneur de wrapping. Quand il est placé à l'intérieur de `<lx-header>` ou `<lx-footer>`, tous les éléments enfants seront placés verticalement. Dans le cas contraire ils seront placés horizontalement.

`<lx-header>`: Conteneur pour headers.

`<lx-aside>`: Conteneur pour section latérale (en général un menu).

`<lx-main>`: Conteneur pour la section principal.

`<lx-footer>`: Conteneur pour footers.

:::tip
Ces composants utilisent flexbox, assurez vous que le navigateur supporte cette fonctionnalité. De plus, les éléments enfants directs de `<lx-container>` doivent être un des quatre éléments précédents, leur élément père devant obligatoirement être `<lx-container>`.
:::

### Mises en page habituelles

:::demo
```html
<div class="common-layout">
  <lx-container>
    <lx-header>Header</lx-header>
    <lx-main>Main</lx-main>
  </lx-container>

  <lx-container>
    <lx-header>Header</lx-header>
    <lx-main>Main</lx-main>
    <lx-footer>Footer</lx-footer>
  </lx-container>

  <lx-container>
    <lx-aside width="200px">Aside</lx-aside>
    <lx-main>Main</lx-main>
  </lx-container>

  <lx-container>
    <lx-header>Header</lx-header>
    <lx-container>
      <lx-aside width="200px">Aside</lx-aside>
      <lx-main>Main</lx-main>
    </lx-container>
  </lx-container>

  <lx-container>
    <lx-header>Header</lx-header>
    <lx-container>
      <lx-aside width="200px">Aside</lx-aside>
      <lx-container>
        <lx-main>Main</lx-main>
        <lx-footer>Footer</lx-footer>
      </lx-container>
    </lx-container>
  </lx-container>

  <lx-container>
    <lx-aside width="200px">Aside</lx-aside>
    <lx-container>
      <lx-header>Header</lx-header>
      <lx-main>Main</lx-main>
    </lx-container>
  </lx-container>

  <lx-container>
    <lx-aside width="200px">Aside</lx-aside>
    <lx-container>
      <lx-header>Header</lx-header>
      <lx-main>Main</lx-main>
      <lx-footer>Footer</lx-footer>
    </lx-container>
  </lx-container>
</div>

<style>
  .lx-header, .lx-footer {
    background-color: #B3C0D1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }

  .lx-aside {
    background-color: #D3DCE6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
  }

  .lx-main {
    background-color: #E9EEF3;
    color: var(--el-text-color-primary);
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

### Exemple

:::demo
```html
<lx-container style="height: 500px; border: 1px solid #eee">
  <lx-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <lx-menu :default-openeds="['1', '3']">
      <lx-sub-menu index="1">
        <template #title><i class="lx-icon-message"></i>Navigator One</template>
        <lx-menu-item-group>
          <template #title>Group 1</template>
          <lx-menu-item index="1-1">Option 1</lx-menu-item>
          <lx-menu-item index="1-2">Option 2</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="Group 2">
          <lx-menu-item index="1-3">Option 3</lx-menu-item>
        </lx-menu-item-group>
        <lx-sub-menu index="1-4">
          <template #title>Option4</template>
          <lx-menu-item index="1-4-1">Option 4-1</lx-menu-item>
        </lx-sub-menu>
      </lx-sub-menu>
      <lx-sub-menu index="2">
        <template #title><i class="lx-icon-menu"></i>Navigator Two</template>
        <lx-menu-item-group>
          <template #title>Group 1</template>
          <lx-menu-item index="2-1">Option 1</lx-menu-item>
          <lx-menu-item index="2-2">Option 2</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="Group 2">
          <lx-menu-item index="2-3">Option 3</lx-menu-item>
        </lx-menu-item-group>
        <lx-sub-menu index="2-4">
          <template #title>Option 4</template>
          <lx-menu-item index="2-4-1">Option 4-1</lx-menu-item>
        </lx-sub-menu>
      </lx-sub-menu>
      <lx-sub-menu index="3">
        <template #title><i class="lx-icon-setting"></i>Navigator Three</template>
        <lx-menu-item-group>
          <template #title>Group 1</template>
          <lx-menu-item index="3-1">Option 1</lx-menu-item>
          <lx-menu-item index="3-2">Option 2</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="Group 2">
          <lx-menu-item index="3-3">Option 3</lx-menu-item>
        </lx-menu-item-group>
        <lx-sub-menu index="3-4">
          <template #title>Option 4</template>
          <lx-menu-item index="3-4-1">Option 4-1</lx-menu-item>
        </lx-sub-menu>
      </lx-sub-menu>
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
    color: var(--el-text-color-primary);
    line-height: 60px;
  }

  .lx-aside {
    color: var(--el-text-color-primary);
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

### Attributs de Container
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | Direction d'affichage pour les éléments enfants. | string | horizontal / vertical | vertical quand dans `el-header` ou `el-footer`; horizontal sinon |

### Attributs de Header
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | Hauteur du header. | string | — | 60px |

### Attributs de Aside
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | Largeur de la section. | string | — | 300px |

### Attributs de Footer
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | Hauteur du footer. | string | — | 60px |
