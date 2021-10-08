## Breadcrumb

Displays the location of the current page, making it easier to browser back.

### Basic usage


:::demo In `lx-breadcrumb`, each `lx-breadcrumb-item` is a tag that stands for every level starting from homepage. This component has a `String` attribute `separator`, and it determines the separator. Its default value is '/'.

```html
<lx-breadcrumb separator="/">
  <lx-breadcrumb-item :to="{ path: '/' }">homepage</lx-breadcrumb-item>
  <lx-breadcrumb-item><a href="/">promotion management</a></lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion list</lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion detail</lx-breadcrumb-item>
</lx-breadcrumb>
```
:::

### Icon separator

:::demo Set `separator-class` to use `iconfont` as the separator，it will cover `separator`

```html
<lx-breadcrumb separator-class="lx-icon-arrow-right">
  <lx-breadcrumb-item :to="{ path: '/' }">homepage</lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion management</lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion list</lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion detail</lx-breadcrumb-item>
</lx-breadcrumb>
```
:::

### Breadcrumb Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | separator character | string | — | / |
| separator-class | class name of icon separator | string | — | - |

### Breadcrumb Item Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | target route of the link, same as `to` of `vue-router` | string/object | — | — |
| replace | if `true`, the navigation will not leave a history record | boolean | — | false |





