## Descriptions

Display multiple fields in list form.

### Basic usage

:::demo

```html
<lx-descriptions title="User Info">
  <lx-descriptions-item label="Username">kooriookami</lx-descriptions-item>
  <lx-descriptions-item label="Telephone">18100000000</lx-descriptions-item>
  <lx-descriptions-item label="Place">Suzhou</lx-descriptions-item>
  <lx-descriptions-item label="Remarks">
    <lx-tag size="small">School</lx-tag>
  </lx-descriptions-item>
  <lx-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</lx-descriptions-item>
</lx-descriptions>
```
:::

### Sizes

:::demo

```html
<template>
  <lx-radio-group v-model="size">
    <lx-radio label="">Default</lx-radio>
    <lx-radio label="medium">Medium</lx-radio>
    <lx-radio label="small">Small</lx-radio>
    <lx-radio label="mini">Mini</lx-radio>
  </lx-radio-group>

  <lx-descriptions class="margin-top" title="With border" :column="3" :size="size" border>
    <template #extra>
      <lx-button type="primary" size="small">Operation</lx-button>
    </template>
    <lx-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        Username
      </template>
      kooriookami
    </lx-descriptions-item>
    <lx-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        Telephone
      </template>
      18100000000
    </lx-descriptions-item>
    <lx-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        Place
      </template>
      Suzhou
    </lx-descriptions-item>
    <lx-descriptions-item>
      <template #label>
        <i class="el-icon-tickets"></i>
        Remarks
      </template>
      <lx-tag size="small">School</lx-tag>
    </lx-descriptions-item>
    <lx-descriptions-item>
      <template #label>
        <i class="el-icon-office-building"></i>
        Address
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </lx-descriptions-item>
  </lx-descriptions>

  <lx-descriptions class="margin-top" title="Without border" :column="3" :size="size">
    <template #extra>
      <lx-button type="primary" size="small">Operation</lx-button>
    </template>
    <lx-descriptions-item label="Username">kooriookami</lx-descriptions-item>
    <lx-descriptions-item label="Telephone">18100000000</lx-descriptions-item>
    <lx-descriptions-item label="Place">Suzhou</lx-descriptions-item>
    <lx-descriptions-item label="Remarks">
      <lx-tag size="small">School</lx-tag>
    </lx-descriptions-item>
    <lx-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</lx-descriptions-item>
  </lx-descriptions>
</template>

<script>
  export default {
    data() {
      return {
        size: ''
      };
    }
  }
</script>
```
:::

### Vertical List

:::demo

```html
<lx-descriptions title="Vertical list with border" direction="vertical" :column="4" border>
  <lx-descriptions-item label="Username">kooriookami</lx-descriptions-item>
  <lx-descriptions-item label="Telephone">18100000000</lx-descriptions-item>
  <lx-descriptions-item label="Place" :span="2">Suzhou</lx-descriptions-item>
  <lx-descriptions-item label="Remarks">
    <lx-tag size="small">School</lx-tag>
  </lx-descriptions-item>
  <lx-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</lx-descriptions-item>
</lx-descriptions>

<lx-descriptions class="margin-top" title="Vertical list without border" :column="4" direction="vertical">
  <lx-descriptions-item label="Username">kooriookami</lx-descriptions-item>
  <lx-descriptions-item label="Telephone">18100000000</lx-descriptions-item>
  <lx-descriptions-item label="Place" :span="2">Suzhou</lx-descriptions-item>
  <lx-descriptions-item label="Remarks">
    <lx-tag size="small">School</lx-tag>
  </lx-descriptions-item>
  <lx-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</lx-descriptions-item>
</lx-descriptions>
```
:::

### Customized Style

:::demo

```html
<lx-descriptions title="Customized style list" :column="3" border>
  <lx-descriptions-item label="Username" label-align="right" align="center" label-class-name="my-label" class-name="my-content" width="150px">kooriookami</lx-descriptions-item>
  <lx-descriptions-item label="Telephone" label-align="right" align="center">18100000000</lx-descriptions-item>
  <lx-descriptions-item label="Place" label-align="right" align="center">Suzhou</lx-descriptions-item>
  <lx-descriptions-item label="Remarks" label-align="right" align="center">
    <lx-tag size="small">School</lx-tag>
  </lx-descriptions-item>
  <lx-descriptions-item label="Address" label-align="right" align="center">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</lx-descriptions-item>
</lx-descriptions>
```
:::

### Descriptions Attributes
| Attribute     | Description       | Type       | Accepted Values        | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| border        | with or without border      | boolean  |          —             |    false     |
| column        | numbers of `Descriptions Item` in one line  | number | — |    3  |
| direction     | direction of list  | string | vertical / horizontal |    horizontal  |
| size          | size of list    | string  |    medium / small / mini  |  — |
| title         | title text, display on the top left    | string  |    —  |  — |
| extra         | extra text, display on the top right    | string  |    —  |  — |

### Descriptions Slots

| Name | Description |
|------|--------|
| title | custom title, display on the top left  |
| extra | custom extra area, display on the top right  |

### Descriptions Item Attributes
| Attribute       | Description        | Type       | Accepted Values       | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| label          | label text         | string  |          —             |    —     |
| span          | colspan of column       | number  |          —             |    1     |
| width          | column width, the width of the same column in different rows is set by the max value (If no `border`, width contains label and content)         | string / number  |          —             |    —     |
| min-width          | column minimum width, columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion (If no`border`, width contains label and content)         | string / number  |          —             |    —     |
| align          | column content alignment (If no `border`, effective for both label and content)         | string  |          left / center / right             |    left     |
| label-align          | column label alignment, if omitted, the value of the above `align` attribute will be applied (If no `border`, please use `align` attribute)         | string  |          left / center / right             |    —     |
| class-name          | column content custom class name         | string  |          —             |    —     |
| label-class-name          | column label custom class name         | string  |          —             |    —     |

### Descriptions Item Slots

| Name | Description |
|------|--------|
| label | custom label  |
