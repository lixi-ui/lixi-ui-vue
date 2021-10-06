## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<lx-container>`：外层容器。当子元素中包含 `<lx-header>` 或 `<lx-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<lx-header>`：顶栏容器。

`<lx-aside>`：侧边栏容器。

`<lx-main>`：主要区域容器。

`<lx-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<lx-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<lx-container>`。
:::

### 常见页面布局

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

### 实例

:::demo
```html
<lx-container style="height: 500px; border: 1px solid #eee">
  <lx-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <lx-menu :default-openeds="['1', '3']">
      <lx-sub-menu index="1">
        <template #title><i class="el-icon-message"></i>导航一</template>
        <lx-menu-item-group>
          <template #title>分组一</template>
          <lx-menu-item index="1-1">选项1</lx-menu-item>
          <lx-menu-item index="1-2">选项2</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="分组2">
          <lx-menu-item index="1-3">选项3</lx-menu-item>
        </lx-menu-item-group>
        <lx-sub-menu index="1-4">
          <template #title>选项4</template>
          <lx-menu-item index="1-4-1">选项4-1</lx-menu-item>
        </lx-sub-menu>
      </lx-sub-menu>
      <lx-sub-menu index="2">
        <template #title><i class="el-icon-menu"></i>导航二</template>
        <lx-menu-item-group>
          <template #title>分组一</template>
          <lx-menu-item index="2-1">选项1</lx-menu-item>
          <lx-menu-item index="2-2">选项2</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="分组2">
          <lx-menu-item index="2-3">选项3</lx-menu-item>
        </lx-menu-item-group>
        <lx-sub-menu index="2-4">
          <template #title>选项4</template>
          <lx-menu-item index="2-4-1">选项4-1</lx-menu-item>
        </lx-sub-menu>
      </lx-sub-menu>
      <lx-sub-menu index="3">
        <template #title><i class="el-icon-setting"></i>导航三</template>
        <lx-menu-item-group>
          <template #title>分组一</template>
          <lx-menu-item index="3-1">选项1</lx-menu-item>
          <lx-menu-item index="3-2">选项2</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="分组2">
          <lx-menu-item index="3-3">选项3</lx-menu-item>
        </lx-menu-item-group>
        <lx-sub-menu index="3-4">
          <template #title>选项4</template>
          <lx-menu-item index="3-4-1">选项4-1</lx-menu-item>
        </lx-sub-menu>
      </lx-sub-menu>
    </lx-menu>
  </lx-aside>

  <lx-container>
    <lx-header style="text-align: right; font-size: 12px">
      <lx-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <template #dropdown>
          <lx-dropdown-menu>
              <lx-dropdown-item>查看</lx-dropdown-item>
              <lx-dropdown-item>新增</lx-dropdown-item>
              <lx-dropdown-item>删除</lx-dropdown-item>
          </lx-dropdown-menu>
        </template>
      </lx-dropdown>
      <span>王小虎</span>
    </lx-header>

    <lx-main>
      <lx-table :data="tableData">
        <lx-table-column prop="date" label="日期" width="140">
        </lx-table-column>
        <lx-table-column prop="name" label="姓名" width="120">
        </lx-table-column>
        <lx-table-column prop="address" label="地址">
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
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
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
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
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

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |
