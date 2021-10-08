## Radio 单选框

在一组备选项中进行单选

### 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

:::demo 要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。

```html
<template>
  <div>
    <lx-radio v-model="radio1" label="1">备选项1</lx-radio>
    <lx-radio v-model="radio1" label="2">备选项2</lx-radio>
  </div>
  <div>
    <lx-radio v-model="radio2" label="1" size="medium">备选项1</lx-radio>
    <lx-radio v-model="radio2" label="2" size="medium">备选项2</lx-radio>
  </div>
  <div>
    <lx-radio v-model="radio3" label="1" size="small">备选项1</lx-radio>
    <lx-radio v-model="radio3" label="2" size="small">备选项2</lx-radio>
  </div>
  <div>
    <lx-radio v-model="radio4" label="1" size="mini">备选项1</lx-radio>
    <lx-radio v-model="radio4" label="2" size="mini">备选项2</lx-radio>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1',
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio1: ref('1'),
        radio2: ref('1'),
        radio3: ref('1'),
        radio4: ref('1'),
      }
    }
  })
</setup>
-->
```
:::

### 禁用状态

单选框不可用的状态。

:::demo 只要在`lx-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。
```html
<template>
  <lx-radio disabled v-model="radio" label="禁用">备选项</lx-radio>
  <lx-radio disabled v-model="radio" label="选中且禁用">备选项</lx-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '选中且禁用'
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio: ref('选中且禁用'),
      }
    }
  })
</setup>
-->
```
:::

### 单选框组

适用于在多个互斥的选项中选择的场景

:::demo 结合`lx-radio-group`元素和子元素`lx-radio`可以实现单选组，在`lx-radio-group`中绑定`v-model`，在`lx-radio`中设置好`label`即可，无需再给每一个`lx-radio`绑定变量，另外，还提供了`change`事件来响应变化，它会传入一个参数`value`。

```html
<template>
  <lx-radio-group v-model="radio">
    <lx-radio :label="3">备选项</lx-radio>
    <lx-radio :label="6">备选项</lx-radio>
    <lx-radio :label="9">备选项</lx-radio>
  </lx-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio: ref(3),
      }
    }
  })
</setup>
-->
```
:::

### 按钮样式

按钮样式的单选组合。

:::demo 只需要把`lx-radio`元素换成`lx-radio-button`元素即可，此外，Element Plus 还提供了`size`属性。
```html
<template>
  <div>
    <lx-radio-group v-model="radio1">
      <lx-radio-button label="上海"></lx-radio-button>
      <lx-radio-button label="北京"></lx-radio-button>
      <lx-radio-button label="广州"></lx-radio-button>
      <lx-radio-button label="深圳"></lx-radio-button>
    </lx-radio-group>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio2" size="medium">
      <lx-radio-button label="上海" ></lx-radio-button>
      <lx-radio-button label="北京"></lx-radio-button>
      <lx-radio-button label="广州"></lx-radio-button>
      <lx-radio-button label="深圳"></lx-radio-button>
    </lx-radio-group>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio3" size="small">
      <lx-radio-button label="上海"></lx-radio-button>
      <lx-radio-button label="北京" disabled ></lx-radio-button>
      <lx-radio-button label="广州"></lx-radio-button>
      <lx-radio-button label="深圳"></lx-radio-button>
    </lx-radio-group>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio4" disabled size="mini">
      <lx-radio-button label="上海"></lx-radio-button>
      <lx-radio-button label="北京"></lx-radio-button>
      <lx-radio-button label="广州"></lx-radio-button>
      <lx-radio-button label="深圳"></lx-radio-button>
    </lx-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '上海',
        radio2: '上海',
        radio3: '上海',
        radio4: '上海'
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio1: ref('上海'),
        radio2: ref('上海'),
        radio3: ref('上海'),
        radio4: ref('上海'),
      }
    }
  })
</setup>
-->
```
:::

### 带有边框

:::demo 设置`border`属性可以渲染为带有边框的单选框。
```html
<template>
  <div>
    <lx-radio v-model="radio1" label="1" border>备选项1</lx-radio>
    <lx-radio v-model="radio1" label="2" border>备选项2</lx-radio>
  </div>
  <div style="margin-top: 20px">
    <lx-radio v-model="radio2" label="1" border size="medium">备选项1</lx-radio>
    <lx-radio v-model="radio2" label="2" border size="medium">备选项2</lx-radio>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio3" size="small">
      <lx-radio label="1" border>备选项1</lx-radio>
      <lx-radio label="2" border disabled>备选项2</lx-radio>
    </lx-radio-group>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio4" size="mini" disabled>
      <lx-radio label="1" border>备选项1</lx-radio>
      <lx-radio label="2" border>备选项2</lx-radio>
    </lx-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio1: ref('1'),
        radio2: ref('1'),
        radio3: ref('1'),
        radio4: ref('1'),
      }
    }
  })
</setup>
-->
```
:::

### Radio Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| model-value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | Radio 的 value   | string / number / boolean    |       —        |      —   |
| disabled  | 是否禁用    | boolean   | — | false   |
| border  | 是否显示边框  | boolean   | — | false   |
| size  | Radio 的尺寸  | string  | medium / small / mini | — |
| name | 原生 name 属性 | string    |      —         |     —    |

### Radio Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| model-value / v-model | 绑定值 | string / number / boolean | — | — |
| size     | 单选框组尺寸   | string  | medium / small / mini |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| text-color  | 按钮形式的 Radio 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Radio 激活时的填充色和边框色    | string   | — | #409EFF   |

### Radio-group Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value  | string / number  |        —       |     —    |
| disabled  | 是否禁用    | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |
