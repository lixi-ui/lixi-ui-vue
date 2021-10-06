## Checkbox 多选框
一组备选项中进行多选

### 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

:::demo 在`el-checkbox`元素中定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。

```html
<template>
  <div>
    <lx-checkbox v-model="checked1" label="备选项1"></lx-checkbox>
    <lx-checkbox v-model="checked2" label="备选项2"></lx-checkbox>
  </div>
  <div>
    <lx-checkbox v-model="checked3" label="备选项1" size="medium"></lx-checkbox>
    <lx-checkbox v-model="checked4" label="备选项2" size="medium"></lx-checkbox>
  </div>
  <div>
    <lx-checkbox v-model="checked5" label="备选项1" size="small"></lx-checkbox>
    <lx-checkbox v-model="checked6" label="备选项2" size="small"></lx-checkbox>
  </div>
  <div>
    <lx-checkbox v-model="checked7" label="备选项1" size="mini"></lx-checkbox>
    <lx-checkbox v-model="checked8" label="备选项2" size="mini"></lx-checkbox>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const checked1 = ref(true);
      const checked2 = ref(false);
      const checked3 = ref(false);
      const checked4 = ref(false);
      const checked5 = ref(false);
      const checked6 = ref(false);
      const checked7 = ref(false);
      const checked8 = ref(false);
      return {
        checked1,
        checked2,
        checked3,
        checked4,
        checked5,
        checked6,
        checked7,
        checked8,
      };
    },
  });

</setup>
-->
```
:::

### 禁用状态

多选框不可用状态。

:::demo 设置`disabled`属性即可。

```html
<template>
  <lx-checkbox v-model="checked1" disabled>备选项1</lx-checkbox>
  <lx-checkbox v-model="checked2" disabled>备选项</lx-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const checked1 = ref(false);
      const checked2 = ref(true);
      return {
        checked1,
        checked2,
      };
    },
  });
</setup>
-->
```
:::

### 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

:::demo `checkbox-group`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用`v-model`绑定`Array`类型的变量即可。 `el-checkbox` 的 `label`属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。`label`与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

```html
<template>
  <lx-checkbox-group v-model="checkList">
    <lx-checkbox label="复选框 A"></lx-checkbox>
    <lx-checkbox label="复选框 B"></lx-checkbox>
    <lx-checkbox label="复选框 C"></lx-checkbox>
    <lx-checkbox label="禁用" disabled></lx-checkbox>
    <lx-checkbox label="选中且禁用" disabled></lx-checkbox>
  </lx-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['选中且禁用','复选框 A']
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const checkList = ref(['选中且禁用', '复选框 A']);
      return {
        checkList,
      };
    },
  });

</setup>
-->
```
:::

### indeterminate 状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

:::demo

```html
<template>
  <lx-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</lx-checkbox>
  <lx-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <lx-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</lx-checkbox>
  </lx-checkbox-group>
</template>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  const cityOptions = ['上海', '北京', '广州', '深圳'];

  export default defineComponent({
    setup() {
      const state = reactive({
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
      });
      const handleCheckAllChange = (val) => {
        state.checkedCities = val ? cityOptions : [];
        state.isIndeterminate = false;
      };
      const handleCheckedCitiesChange = (value) => {
        const checkedCount = value.length;
        state.checkAll = checkedCount === state.cities.length;
        state.isIndeterminate = checkedCount > 0 && checkedCount < state.cities.length;
      };
      return {
        ...toRefs(state),
        handleCheckAllChange,
        handleCheckedCitiesChange,
      };
    },
  });

</setup>
-->
```
:::

### 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。

:::demo

```html
<template>
  <lx-checkbox-group
    v-model="checkedCities"
    :min="1"
    :max="2">
    <lx-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</lx-checkbox>
  </lx-checkbox-group>
</template>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkedCities: ['上海', '北京'],
        cities: cityOptions
      };
    }
  };
</script>

<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  const cityOptions = ['上海', '北京', '广州', '深圳'];

  export default defineComponent({
    setup() {
      const state = reactive({
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
      });

      return {
        ...toRefs(state),
      };
    },
  });

</setup>
-->
```

:::

### 按钮样式

按钮样式的多选组合。

:::demo 只需要把`el-checkbox`元素替换为`el-checkbox-button`元素即可。此外，Element Plus 还提供了`size`属性。
```html
<template>
  <div>
    <lx-checkbox-group v-model="checkboxGroup1">
      <lx-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lx-checkbox-button>
    </lx-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox-group v-model="checkboxGroup2" size="medium">
      <lx-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lx-checkbox-button>
    </lx-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox-group v-model="checkboxGroup3" size="small">
      <lx-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</lx-checkbox-button>
    </lx-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
      <lx-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lx-checkbox-button>
    </lx-checkbox-group>
  </div>
</template>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data () {
      return {
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['上海'],
        checkboxGroup3: ['上海'],
        checkboxGroup4: ['上海'],
        cities: cityOptions
      };
    }
  }
</script>

<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  const cityOptions = ['上海', '北京', '广州', '深圳'];

  export default defineComponent({
    setup() {
      const state = reactive({
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['上海'],
        checkboxGroup3: ['上海'],
        checkboxGroup4: ['上海'],
        cities: cityOptions,
      });

      return {
        ...toRefs(state),
      };
    },
  });

</setup>
-->
```
:::

### 带有边框

:::demo 设置`border`属性可以渲染为带有边框的多选框。
```html
<template>
  <div>
    <lx-checkbox v-model="checked1" label="备选项1" border></lx-checkbox>
    <lx-checkbox v-model="checked2" label="备选项2" border></lx-checkbox>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox v-model="checked3" label="备选项1" border size="medium"></lx-checkbox>
    <lx-checkbox v-model="checked4" label="备选项2" border size="medium"></lx-checkbox>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox-group v-model="checkboxGroup1" size="small">
      <lx-checkbox label="备选项1" border></lx-checkbox>
      <lx-checkbox label="备选项2" border disabled></lx-checkbox>
    </lx-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <lx-checkbox label="备选项1" border></lx-checkbox>
      <lx-checkbox label="备选项2" border></lx-checkbox>
    </lx-checkbox-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: []
      };
    }
  }
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: [],
      });

      return {
        ...toRefs(state),
      };
    },
  });

</setup>
-->
```
:::

### Checkbox Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| model-value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）| string / number / boolean / object  |       —        |     —    |
| true-label | 选中时的值   | string / number | — |     —    |
| false-label | 没有选中时的值   | string / number    |      —         |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| border  | 是否显示边框  | boolean   | — | false   |
| size  | Checkbox 的尺寸  | string  | medium / small / mini | — |
| name | 原生 name 属性 | string    |      —         |     —    |
| checked  | 当前是否勾选    | boolean   |  — | false   |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制    | boolean   |  — | false   |

### Checkbox Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| model-value / v-model | 绑定值 | array | — | — |
| size     | 多选框组尺寸   | string  | medium / small / mini  |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| min     | 可被勾选的 checkbox 的最小数量   | number    |       —        |     —    |
| max     | 可被勾选的 checkbox 的最大数量   | number    |       —        |     —    |
| text-color  | 按钮形式的 Checkbox 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Checkbox 激活时的填充色和边框色    | string   | — | #409EFF   |

### Checkbox-group Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）| string / number / boolean / object  |       —        |     —    |
| true-label | 选中时的值   | string / number | — |     —    |
| false-label | 没有选中时的值   | string / number    |      —         |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |
| checked  | 当前是否勾选    | boolean   |  — | false   |