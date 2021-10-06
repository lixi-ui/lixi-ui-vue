## Empty

Placeholder hints for empty states.

### Basic usage

:::demo

```html
<lx-empty description="description"></lx-empty>
```
:::

### Custom image

Use `image` prop to set image URL.

:::demo

```html
<lx-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"></lx-empty>
```
:::

### Image size

Use `image-size` prop to control image size.

:::demo

```html
<lx-empty :image-size="200"></lx-empty>
```
:::

### Bottom content

Use the default slot to insert content at the bottom.

:::demo
```html
<lx-empty>
  <lx-button type="primary">Button</lx-button>
</lx-empty>
```
:::

### Empty Attributes
| Attribute       | Description      | Type         | Acceptable Value    | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| image          | image URL       | string  |          —             |    —     |
| image-size    | image size (width)  | number | — |    —  |
| description  | description    | string  |    —  |  — |

### Empty Slots

| Name | Description |
|------|--------|
| default | Custom bottom content  |
| image | Custom image     |
| description | Custom description     |
