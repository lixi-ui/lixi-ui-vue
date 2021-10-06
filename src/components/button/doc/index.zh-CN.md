## Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<lx-row>
  <lx-button>默认按钮</lx-button>
  <lx-button type="primary">主要按钮</lx-button>
  <lx-button type="success">成功按钮</lx-button>
  <lx-button type="info">信息按钮</lx-button>
  <lx-button type="warning">警告按钮</lx-button>
  <lx-button type="danger">危险按钮</lx-button>
</lx-row>

<lx-row>
  <lx-button plain>朴素按钮</lx-button>
  <lx-button type="primary" plain>主要按钮</lx-button>
  <lx-button type="success" plain>成功按钮</lx-button>
  <lx-button type="info" plain>信息按钮</lx-button>
  <lx-button type="warning" plain>警告按钮</lx-button>
  <lx-button type="danger" plain>危险按钮</lx-button>
</lx-row>

<lx-row>
  <lx-button round>圆角按钮</lx-button>
  <lx-button type="primary" round>主要按钮</lx-button>
  <lx-button type="success" round>成功按钮</lx-button>
  <lx-button type="info" round>信息按钮</lx-button>
  <lx-button type="warning" round>警告按钮</lx-button>
  <lx-button type="danger" round>危险按钮</lx-button>
</lx-row>

<lx-row>
  <lx-button icon="lx-icon-search" circle></lx-button>
  <lx-button type="primary" icon="lx-icon-edit" circle></lx-button>
  <lx-button type="success" icon="lx-icon-check" circle></lx-button>
  <lx-button type="info" icon="lx-icon-message" circle></lx-button>
  <lx-button type="warning" icon="lx-icon-star-off" circle></lx-button>
  <lx-button type="danger" icon="lx-icon-delete" circle></lx-button>
</lx-row>
```

:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<lx-row>
  <lx-button disabled>默认按钮</lx-button>
  <lx-button type="primary" disabled>主要按钮</lx-button>
  <lx-button type="success" disabled>成功按钮</lx-button>
  <lx-button type="info" disabled>信息按钮</lx-button>
  <lx-button type="warning" disabled>警告按钮</lx-button>
  <lx-button type="danger" disabled>危险按钮</lx-button>
</lx-row>

<lx-row>
  <lx-button plain disabled>朴素按钮</lx-button>
  <lx-button type="primary" plain disabled>主要按钮</lx-button>
  <lx-button type="success" plain disabled>成功按钮</lx-button>
  <lx-button type="info" plain disabled>信息按钮</lx-button>
  <lx-button type="warning" plain disabled>警告按钮</lx-button>
  <lx-button type="danger" plain disabled>危险按钮</lx-button>
</lx-row>
```

:::

### 文字按钮

没有边框和背景色的按钮。

:::demo

```html
<lx-button type="text">文字按钮</lx-button>
<lx-button type="text" disabled>文字按钮</lx-button>
```

:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，icon 的列表可以参考 Lxement Plus 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<lx-button type="primary" icon="lx-icon-edit"></lx-button>
<lx-button type="primary" icon="lx-icon-share"></lx-button>
<lx-button type="primary" icon="lx-icon-delete"></lx-button>
<lx-button type="primary" icon="lx-icon-search">搜索</lx-button>
<lx-button type="primary"
  >上传<i class="lx-icon-upload lx-icon--right"></i
></lx-button>
```

:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`<lx-button-group>`标签来嵌套你的按钮。

```html
<lx-button-group>
  <lx-button type="primary" icon="lx-icon-arrow-left">上一页</lx-button>
  <lx-button type="primary"
    >下一页<i class="lx-icon-arrow-right lx-icon--right"></i
  ></lx-button>
</lx-button-group>
<lx-button-group>
  <lx-button type="primary" icon="lx-icon-edit"></lx-button>
  <lx-button type="primary" icon="lx-icon-share"></lx-button>
  <lx-button type="primary" icon="lx-icon-delete"></lx-button>
</lx-button-group>
```

:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<lx-button type="primary" :loading="true">加载中</lx-button>
```

:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<lx-row>
  <lx-button>默认按钮</lx-button>
  <lx-button size="medium">中等按钮</lx-button>
  <lx-button size="small">小型按钮</lx-button>
  <lx-button size="mini">超小按钮</lx-button>
</lx-row>
<lx-row>
  <lx-button round>默认按钮</lx-button>
  <lx-button size="medium" round>中等按钮</lx-button>
  <lx-button size="small" round>小型按钮</lx-button>
  <lx-button size="mini" round>超小按钮</lx-button>
</lx-row>
<lx-row>
  <lx-button icon="lx-icon-search" circle></lx-button>
  <lx-button icon="lx-icon-search" size="medium" circle></lx-button>
  <lx-button icon="lx-icon-search" size="small" circle></lx-button>
  <lx-button icon="lx-icon-search" size="mini" circle></lx-button>
</lx-row>
```

:::

### Button Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸           | string  | medium / small / mini                              | —      |
| type        | 类型           | string  | primary / success / warning / danger / info / text | —      |
| plain       | 是否朴素按钮   | boolean | —                                                  | false  |
| round       | 是否圆角按钮   | boolean | —                                                  | false  |
| circle      | 是否圆形按钮   | boolean | —                                                  | false  |
| loading     | 是否加载中状态 | boolean | —                                                  | false  |
| disabled    | 是否禁用状态   | boolean | —                                                  | false  |
| icon        | 图标类名       | string  | —                                                  | —      |
| autofocus   | 是否默认聚焦   | boolean | —                                                  | false  |
| native-type | 原生 type 属性 | string  | button / submit / reset                            | button |

### Button-Group Attributes

| 参数 | 说明                         | 类型   | 可选值                | 默认值 |
| ---- | ---------------------------- | ------ | --------------------- | ------ |
| size | 用于控制该按钮组内按钮的尺寸 | string | medium / small / mini | —      |

### Button-Group Slots

| Name    | Description      |
| ------- | ---------------- |
| default | 自定义按钮组内容 |