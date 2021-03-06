## Link 文字链接

文字超链接

### 基础用法
基础的文字链接用法。
:::demo
```html
<div>
  <lx-link href="https://element.eleme.io" target="_blank">默认链接</lx-link>
  <lx-link type="primary">主要链接</lx-link>
  <lx-link type="success">成功链接</lx-link>
  <lx-link type="warning">警告链接</lx-link>
  <lx-link type="danger">危险链接</lx-link>
  <lx-link type="info">信息链接</lx-link>
</div>
```
:::

### 禁用状态
文字链接不可用状态。
:::demo
```html
<div>
  <lx-link disabled>默认链接</lx-link>
  <lx-link type="primary" disabled>主要链接</lx-link>
  <lx-link type="success" disabled>成功链接</lx-link>
  <lx-link type="warning" disabled>警告链接</lx-link>
  <lx-link type="danger" disabled>危险链接</lx-link>
  <lx-link type="info" disabled>信息链接</lx-link>
</div>
```
:::

### 下划线
文字链接下划线。
:::demo
```html
<div>
  <lx-link :underline="false">无下划线</lx-link>
  <lx-link>有下划线</lx-link>
</div>
```
:::

### 图标

带图标的文字链接可增强辨识度。
:::demo
```html
<div>
  <lx-link icon="lx-icon-edit">编辑</lx-link>
  <lx-link>查看<i class="lx-icon-view lx-icon--right"></i> </lx-link>
</div>
```
:::

### Attributes

| 参数           | 说明                           | 类型      | 可选值                               | 默认值  |
| -------------- | ------------------------------ | --------- | ------------------------------------ | ------- |
| type           | 类型                   | string  | primary / success / warning / danger / info | default |
| underline      | 是否下划线                         | boolean | —                                    | true    |
| disabled       | 是否禁用状态                       | boolean | —                                    | false   |
| href           | 原生 href 属性                     | string  | —                                    | -       |
| icon           | 图标类名                       | string  | —                                    | -       |
