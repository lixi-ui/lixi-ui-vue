## Space (Translation needed)
Even though we have [Divider](#/en-US/component/divider), but sometimes we need more than one [Divider](#/en-US/component/divider) to split the elements apart, so we stack each elements upon [Divider](#/en-US/component/divider), but doing so not only makes our code ugly but also makes it difficult to maintain. **Space** is this kind of component provides us both productivity and elegance.

### Basic usage
The basic use case is using this component to provide unified space between each components

:::demo Using Space to provide space

```html
<template>
  <lx-space wrap>
    <lx-card class="box-card" style="width: 250px" v-for="i in 3" :key="i">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <lx-button class="button" type="text">Operation button</lx-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </lx-card>
  </lx-space>
</template>
```
:::

### Vertical layout
Using `direction` attribute to control the layout, we use `flex-direction` to implement this.

:::demo We also provide vertical layout.

```html
<template>
  <lx-space direction="vertical">
    <lx-card class="box-card" style="width: 250px" v-for="i in 2" :key="i">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <lx-button class="button" type="text">Operation button</lx-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </lx-card>
  </lx-space>
</template>
```

:::

### Control the size of the space
Control the space size via `size` API.

You can set the size with built-in sizes `mini`, `small`, `medium`, `large`, these size coresponds to `4px`, `8px`, `12px`, `16px`. The default size is `small`, A.K.A. `8px`

You can also using customized size to override it. Refer to the next part.

:::demo
```html
<template>
  <lx-space direction="vertical" alignment="start" :size="30">
  <lx-radio-group v-model="size">
    <lx-radio :label="'mini'">mini</lx-radio>
    <lx-radio :label="'small'">small</lx-radio>
    <lx-radio :label="'medium'">medium</lx-radio>
    <lx-radio :label="'large'">large</lx-radio>
  </lx-radio-group>

  <lx-space wrap :size="size">
    <lx-card class="box-card" style="width: 250px" v-for="i in 3" :key="i">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <lx-button class="button" type="text">Operation button</lx-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </lx-card>
  </lx-space>
  </lx-space>
</template>

<script>

export default {

  data() {
    return {
      size: 'mini',
    }
  }
}
</script>
```
:::

### Customized Size
Sometimes built-in sizes could not meet the business needs, we can use custom size (number type) to control the space between items.

:::demo
```html
<template>
  <lx-slider v-model="size" />
  <lx-space wrap :size="size">
    <lx-card class="box-card" style="width: 250px" v-for="i in 2" :key="i">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <lx-button class="button" type="text">Operation button</lx-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </lx-card>
  </lx-space>
</template>

<script>
export default {

  data() {
    return {
      size: 20,
    }
  }
}
</script>
```
:::

:::tip
Do not use `ElSpace` with components that depend on ancestor width (height), e.g. `ElSlider`, in this case when you drag the trigger button the bar will grow which causes misplacement between cursor and trigger button.
:::

### Auto wrapping
When in **horizontal** mode, using `wrap` (**bool type**) to control auto wrapping behavior.

:::demo Using `wrap` to control line wrap

```html
<lx-space wrap>
  <div v-for="i in 20" :key="i">
    <lx-button type="text">
      Text button
    </lx-button>
  </div>
</lx-space>
```
:::

### Spacer
Sometimes we want something more than blank space, so we have (spacer) to help us.

#### Literal type spacer

:::demo

```html
<template>
 <lx-space :size="size" spacer="|">
    <div v-for="i in 2" :key="i">
      <lx-button>
        button {{ i }}
      </lx-button>
    </div>
  </lx-space>
</template>

<script>

export default {
  data() {
    return {
      size: 10,
    }
  },
}
</script>
```
:::

#### Spacer can also be VNode

:::demo
```html
<template>
 <lx-space :size="size" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <lx-button>
        button {{ i }}
      </lx-button>
    </div>
  </lx-space>
</template>

<script>
import { h, resolveComponent } from 'vue'
import { LxDivider } from 'lixi-ui-vue'
export default {
  data() {
    return {
      size: 10,
      spacer: h(ElDivider, { direction: 'vertical' }),
    }
  },
}
</script>

```
:::

### Alignment
Setting this attribute can adjust the alignment of child nodes, the desirable value can be found at [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).

:::demo Using `alignment`

```html

<template>
  <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
    <lx-space>
      string
      <lx-button>
        button
      </lx-button>
      <lx-card>
        <template #header>
          header
        </template>
        body
      </lx-card>
    </lx-space>
  </div>
  <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
    <lx-space alignment="flex-start">
      string
      <lx-button>
        button
      </lx-button>
      <lx-card>
        <template #header>
          header
        </template>
        body
      </lx-card>
    </lx-space>
  </div>
  <div style="width: 240px;margin-bottom: 20px;padding: 8px;border: 1px solid #ccc;">
    <lx-space alignment="flex-end">
      string
      <lx-button>
        button
      </lx-button>
      <lx-card>
        <template #header>
          header
        </template>
        body
      </lx-card>
    </lx-space>
  </div>
</template>

```
:::

### Fill the container

Through the `fill` **(Boolean type)** parameter, you can control whether the child node automatically fills the container.

In the following example, when set to `fill`, the width of the child node will automatically adapt to the width of the container.

:::demo Use fill to automatically fill the container with child nodes

```html
<template>
  <div>
  <div style="margin-bottom:15px">
    fill:  <lx-switch v-model="fill"></lx-switch>
  </div>
  <lx-space :fill="fill" wrap>
    <lx-card class="box-card" v-for="i in 3" :key="i">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <lx-button class="button" type="text">Operation button</lx-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </lx-card>
  </lx-space>
  </div>
</template>

<script>

export default {
  data() {
    return { fill: true }
  },
}
</script>
```
:::

You can also use the `fillRatio` parameter to customize the filling ratio. The default value is `100`, which represents filling based on the width of the parent container at `100%`.

It should be noted that the expression of horizontal layout and vertical layout is slightly different, the specific effect can be viewed in the following example.

:::demo Use fillRatio to customize the fill ratio

```html
<template>
  <div>
  <div style="margin-bottom: 15px">
    direction:
    <lx-radio v-model="direction" label="horizontal">horizontal</lx-radio>
    <lx-radio v-model="direction" label="vertical">vertical</lx-radio>
  </div>
  <div style="margin-bottom: 15px">
    fillRatio:<lx-slider v-model="fillRatio"></lx-slider>
  </div>
  <lx-space fill wrap :fillRatio="fillRatio" :direction="direction" style=" width: 100%">
    <lx-card class="box-card" v-for="i in 5" :key="i">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <lx-button class="button" type="text">Operation button</lx-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </lx-card>
  </lx-space>
  </div>
</template>

<script>

export default {
  data() {
    return { direction: 'horizontal', fillRatio: 30 }
  },
}
</script>
```
:::

### Space Attributes

| Attribute | Description   | Type      | Available value       | Defaults   |
|---------- |-------- |---------- |-------------  |-------- |
| alignment | Controls the alignment of items | string | [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)| 'center' |
| class     | Classname | string / Array<Object \| String> / Object | - | - |
| direction | Placement direction | string | vertical/horizontal | horizontal |
| prefixCls | Prefix for space-items | string | lx-space | - |
| style     | Extra style rules  | string / Array<Object \| String> / Object | - | - |
| spacer    | Spacer    | string / number / VNode | - | - |
| size      | Spacing size   | string / number / [number, number] | - | 'small' |
| wrap      | Auto wrapping | boolean | true / false  | false |
| fill      | Whether to fill the container | boolean | true / false  | false |
| fillRatio | Ratio of fill  | number | - | 100 |
### Space Slot
| name | description  |
|----|----|
| default | Items to be spaced |
