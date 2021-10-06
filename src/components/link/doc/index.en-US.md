## Link

Text hyperlink

### Basic

Basic text link
:::demo

```html
<div>
  <lx-link href="https://element.eleme.io" target="_blank">default</lx-link>
  <lx-link type="primary">primary</lx-link>
  <lx-link type="success">success</lx-link>
  <lx-link type="warning">warning</lx-link>
  <lx-link type="danger">danger</lx-link>
  <lx-link type="info">info</lx-link>
</div>
```

:::

### Disabled

Disabled state of link
:::demo

```html
<div>
  <lx-link disabled>default</lx-link>
  <lx-link type="primary" disabled>primary</lx-link>
  <lx-link type="success" disabled>success</lx-link>
  <lx-link type="warning" disabled>warning</lx-link>
  <lx-link type="danger" disabled>danger</lx-link>
  <lx-link type="info" disabled>info</lx-link>
</div>
```

:::

### Underline

Underline of link
:::demo

```html
<div>
  <lx-link :underline="false">Without Underline</lx-link>
  <lx-link>With Underline</lx-link>
</div>
```

:::

### Icon

Link with icon
:::demo

```html
<div>
  <lx-link icon="lx-icon-edit">Edit</lx-link>
  <lx-link>Check<i class="lx-icon-view lx-icon--right"></i> </lx-link>
</div>
```

:::

### Attributes

| Attribute | Description                         | Type    | Accepted Values                             | Default |
| --------- | ----------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | type                                | string  | primary / success / warning / danger / info | default |
| underline | whether the component has underline | boolean | —                                           | true    |
| disabled  | whether the component is disabled   | boolean | —                                           | false   |
| href      | same as native hyperlink's `href`   | string  | —                                           | -       |
| icon      | class name of icon                  | string  | —                                           | -       |
