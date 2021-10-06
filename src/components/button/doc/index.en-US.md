## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

```html
<lx-row>
  <lx-button>Default</lx-button>
  <lx-button type="primary">Primary</lx-button>
  <lx-button type="success">Success</lx-button>
  <lx-button type="info">Info</lx-button>
  <lx-button type="warning">Warning</lx-button>
  <lx-button type="danger">Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button plain>Plain</lx-button>
  <lx-button type="primary" plain>Primary</lx-button>
  <lx-button type="success" plain>Success</lx-button>
  <lx-button type="info" plain>Info</lx-button>
  <lx-button type="warning" plain>Warning</lx-button>
  <lx-button type="danger" plain>Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button round>Round</lx-button>
  <lx-button type="primary" round>Primary</lx-button>
  <lx-button type="success" round>Success</lx-button>
  <lx-button type="info" round>Info</lx-button>
  <lx-button type="warning" round>Warning</lx-button>
  <lx-button type="danger" round>Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button icon="el-icon-search" circle></lx-button>
  <lx-button type="primary" icon="el-icon-edit" circle></lx-button>
  <lx-button type="success" icon="el-icon-check" circle></lx-button>
  <lx-button type="info" icon="el-icon-message" circle></lx-button>
  <lx-button type="warning" icon="el-icon-star-off" circle></lx-button>
  <lx-button type="danger" icon="el-icon-delete" circle></lx-button>
</lx-row>
```

:::

### Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```html
<lx-row>
  <lx-button disabled>Default</lx-button>
  <lx-button type="primary" disabled>Primary</lx-button>
  <lx-button type="success" disabled>Success</lx-button>
  <lx-button type="info" disabled>Info</lx-button>
  <lx-button type="warning" disabled>Warning</lx-button>
  <lx-button type="danger" disabled>Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button plain disabled>Plain</lx-button>
  <lx-button type="primary" plain disabled>Primary</lx-button>
  <lx-button type="success" plain disabled>Success</lx-button>
  <lx-button type="info" plain disabled>Info</lx-button>
  <lx-button type="warning" plain disabled>Warning</lx-button>
  <lx-button type="danger" plain disabled>Danger</lx-button>
</lx-row>
```

:::

### Text Button

Buttons without border and background.

:::demo

```html
<lx-button type="text">Text Button</lx-button>
<lx-button type="text" disabled>Text Button</lx-button>
```

:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Lxement Plus icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<lx-button type="primary" icon="el-icon-edit"></lx-button>
<lx-button type="primary" icon="el-icon-share"></lx-button>
<lx-button type="primary" icon="el-icon-delete"></lx-button>
<lx-button type="primary" icon="el-icon-search">Search</lx-button>
<lx-button type="primary"
  >Upload<i class="el-icon-upload el-icon-right"></i
></lx-button>
```

:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<lx-button-group>` to group your buttons.

```html
<lx-button-group>
  <lx-button type="primary" icon="el-icon-arrow-left">Previous Page</lx-button>
  <lx-button type="primary"
    >Next Page<i class="el-icon-arrow-right el-icon-right"></i
  ></lx-button>
</lx-button-group>
<lx-button-group>
  <lx-button type="primary" icon="el-icon-edit"></lx-button>
  <lx-button type="primary" icon="el-icon-share"></lx-button>
  <lx-button type="primary" icon="el-icon-delete"></lx-button>
</lx-button-group>
```

:::

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<lx-button type="primary" :loading="true">Loading</lx-button>
```

:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<lx-row>
  <lx-button>Default</lx-button>
  <lx-button size="medium">Medium</lx-button>
  <lx-button size="small">Small</lx-button>
  <lx-button size="mini">Mini</lx-button>
</lx-row>
<lx-row>
  <lx-button round>Default</lx-button>
  <lx-button size="medium" round>Medium</lx-button>
  <lx-button size="small" round>Small</lx-button>
  <lx-button size="mini" round>Mini</lx-button>
</lx-row>
<lx-row>
  <lx-button icon="el-icon-search" circle></lx-button>
  <lx-button icon="el-icon-search" size="medium" circle></lx-button>
  <lx-button icon="el-icon-search" size="small" circle></lx-button>
  <lx-button icon="el-icon-search" size="mini" circle></lx-button>
</lx-row>
```

:::

### Button Attributes

| Attribute   | Description                            | Type    | Accepted Values                                    | Default |
| ----------- | -------------------------------------- | ------- | -------------------------------------------------- | ------- |
| size        | button size                            | string  | medium / small / mini                              | —       |
| type        | button type                            | string  | primary / success / warning / danger / info / text | —       |
| plain       | determine whether it's a plain button  | boolean | —                                                  | false   |
| round       | determine whether it's a round button  | boolean | —                                                  | false   |
| circle      | determine whether it's a circle button | boolean | —                                                  | false   |
| loading     | determine whether it's loading         | boolean | —                                                  | false   |
| disabled    | disable the button                     | boolean | —                                                  | false   |
| icon        | icon class name                        | string  | —                                                  | —       |
| autofocus   | same as native button's `autofocus`    | boolean | —                                                  | false   |
| native-type | same as native button's `type`         | string  | button / submit / reset                            | button  |

### Button-Group Attributes

| Attribute | Description                                      | Type   | Accepted Values       | Default |
| --------- | ------------------------------------------------ | ------ | --------------------- | ------- |
| size      | control the size of buttons in this button-group | string | medium / small / mini | —       |

### Button-Group Slots

| Name    | Description                    |
| ------- | ------------------------------ |
| default | customize button group content |
