## アイコン

Element Plusは、共通のアイコンのセットを提供します。

:::warning
Element Plus team is replacing all **Font Icon** in the previously built components to **SVG Icon**, please keep you eyes on [ChangeLog](/#/jp/component/changelog), for getting latest updates, **Font Icon** will be deprecated after the first stable release.
:::

### SvgIcon Usage
- If you want to **use directly** like the example, you need to [globally register](https://v3.vuejs.org/guide/component-registration.html#global-registration) the components before using it.

- If you want to see all available SVG icons please check [@lixi/icons](https://unpkg.com/browse/@lixi/icons@latest/lib/) and the source [Github/ElementPlus/icons](https://github.com/element-plus/element-plus-icons) out or [SVG icons](/#/en-US/component/icon#svg-tu-biao-ji-he)

### Installation
The current icon is only targeted to [Vue3](https://v3.vuejs.org).
#### Using yarn
```shell
$ yarn add @lixi/icons
```

#### Using npm
```shell
$ npm install @lixi/icons
```

#### Simple usage

```html
<!-- Use lx-icon to provide attributes to SVG icon -->
<lx-icon :size="size" :color="color">
  <edit />
</lx-icon>
<!-- Or use it independently without derive attributes from parent -->
<edit />

<script lang="ts">
import { Edit } from '@lixi/icons'

export default defineComponent({
  components: {
    // Full name
    [Edit.name]: Edit,
    // or Shorthanded,
    Edit,
  },
})
</script>
```
#### Combined with `el-icon`
:::demo  `el-icon` provides extra attributes for raw SVG icon, for more detail, please read to the end.
```html
  <p>
    with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2 seconds, you can also override this
  </p>
  <lx-icon :size="20">
    <edit />
  </lx-icon>
  <lx-icon color="#409EFC" class="no-inherit">
    <share />
  </lx-icon>
  <lx-icon>
    <delete />
  </lx-icon>
  <lx-icon class="is-loading">
    <loading />
  </lx-icon>
  <lx-button type="primary">
    <lx-icon style="vertical-align: middle;">
      <search />
    </lx-icon>
    <span style="vertical-align: middle;">
      Search
    </span>
  </lx-button>
```
:::

#### Using SVG icon directly

:::demo
```html
  <div style="font-size: 20px;">
    <!-- Since svg icons do not carry any attributes by default -->
    <!-- You need to provide attributes directly -->
    <edit style="width: 1em; height: 1em; margin-right: 8px;" />
    <share style="width: 1em; height: 1em; margin-right: 8px;" />
    <delete style="width: 1em; height: 1em; margin-right: 8px;" />
    <search style="width: 1em; height: 1em; margin-right: 8px;" />
  </div>
```
:::

### SVG Icons collection
:::tip
This collection is updated after LxementPlus@1.0.2-beta.66(included), you can only use `el-icon` to wrap it after LxementPlus@1.0.2-beta.66(included), or directly use it without version constrains

**You can use SVG icon in any version as long as you install it**

**You can click the icon to copy it**
:::

<ul class="icon-list">
  <li
    v-for="component in $svgIcons"
    :key="component"
    @click="$copySvgIcon(component)">
    <span class="demo-svg-icon">
      <lx-icon color="#000">
        <component :is="component" />
      </lx-icon>
      <span class="icon-name">{{component}}</span>
    </span>
  </li>
</ul>

### Font アイコン 基本的な使い方

クラス名に `el-icon-iconName` を代入するだけで使えます。

:::demo

```html
<i class="lx-icon-edit"></i>
<i class="lx-icon-share"></i>
<i class="lx-icon-delete"></i>
<lx-button type="primary" icon="lx-icon-search">Search</lx-button>

```
:::

### アイコン

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'lx-icon-' + name"></i>
      <span class="icon-name">{{'lx-icon-' + name}}</span>
    </span>
  </li>
</ul>

### SVG Icon 属性
| Attribute      | Description    | Type      | Acceptable Value       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| color    | SVG tag's fill attribute | Pick\<CSSProperties, 'color'\> | - | inherit from color |
| size | SVG icon size, size x size | number | - | inherit from font size |
