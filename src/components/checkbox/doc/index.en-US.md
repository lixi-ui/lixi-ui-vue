## Checkbox

A group of options for multiple choices.

### Basic usage

Checkbox can be used alone to switch between two states.

:::demo Define `v-model`(bind variable) in `el-checkbox`. The default value is a `Boolean` for single `checkbox`, and it becomes `true` when selected. Content inside the `el-checkbox` tag will become the description following the button of the checkbox.

```html
<template>
  <div>
    <lx-checkbox v-model="checked1" label="Option 1"></lx-checkbox>
    <lx-checkbox v-model="checked2" label="Option 2"></lx-checkbox>
  </div>
  <div>
    <lx-checkbox v-model="checked3" label="Option 1" size="medium"></lx-checkbox>
    <lx-checkbox v-model="checked4" label="Option 2" size="medium"></lx-checkbox>
  </div>
  <div>
    <lx-checkbox v-model="checked5" label="Option 1" size="small"></lx-checkbox>
    <lx-checkbox v-model="checked6" label="Option 2" size="small"></lx-checkbox>
  </div>
  <div>
    <lx-checkbox v-model="checked7" label="Option 1" size="mini"></lx-checkbox>
    <lx-checkbox v-model="checked8" label="Option 2" size="mini"></lx-checkbox>
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

### Disabled State

Disabled state for checkbox.

:::demo Set the `disabled` attribute.

```html
<template>
  <lx-checkbox v-model="checked1" disabled>Option</lx-checkbox>
  <lx-checkbox v-model="checked2" disabled>Option</lx-checkbox>
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

### Checkbox group

It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.

:::demo `checkbox-group` element can manage multiple checkboxes in one group by using `v-model` which is bound as an `Array`. Inside the `el-checkbox` element, `label` is the value of the checkbox. If no content is nested in that tag, `label` will be rendered as the description following the button of the checkbox. `label` also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.

```html
<template>
  <lx-checkbox-group v-model="checkList">
    <lx-checkbox label="Option A"></lx-checkbox>
    <lx-checkbox label="Option B"></lx-checkbox>
    <lx-checkbox label="Option C"></lx-checkbox>
    <lx-checkbox label="disabled" disabled></lx-checkbox>
    <lx-checkbox label="selected and disabled" disabled></lx-checkbox>
  </lx-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['selected and disabled','Option A']
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const checkList = ref(['selected and disabled','Option A']);
      return {
        checkList,
      };
    },
  });

</setup>
-->

```
:::

### Indeterminate

The `indeterminate` property can help you to achieve a 'check all' effect.

:::demo

```html
<template>
  <lx-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</lx-checkbox>
  <lx-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <lx-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</lx-checkbox>
  </lx-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
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

  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default defineComponent({
    setup() {
      const state = reactive({
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
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

### Minimum / Maximum items checked

The `min` and `max` properties can help you to limit the number of checked items.

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
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default defineComponent({
    setup() {
      const state = reactive({
        checkedCities: ['Shanghai', 'Beijing'],
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

### Button style

Checkbox with button styles.

:::demo You just need to change `el-checkbox` element into `el-checkbox-button` element. We also provide `size` attribute.
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
      <lx-checkbox-button v-for="city in cities" :label="city" :disabled="city === 'Beijing'" :key="city">{{city}}</lx-checkbox-button>
    </lx-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
      <lx-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lx-checkbox-button>
    </lx-checkbox-group>
  </div>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default {
    data () {
      return {
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Shanghai'],
        checkboxGroup3: ['Shanghai'],
        checkboxGroup4: ['Shanghai'],
        cities: cityOptions
      };
    }
  }
</script>
<!--
<setup>

import { defineComponent, reactive, toRefs } from 'vue';

const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

export default defineComponent({
  setup() {
    const state = reactive({
      checkboxGroup1: ['Shanghai'],
      checkboxGroup2: ['Shanghai'],
      checkboxGroup3: ['Shanghai'],
      checkboxGroup4: ['Shanghai'],
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

### With borders

:::demo The `border` attribute adds a border to Checkboxes.
```html
<template>
  <div>
    <lx-checkbox v-model="checked1" label="Option1" border></lx-checkbox>
    <lx-checkbox v-model="checked2" label="Option2" border></lx-checkbox>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox v-model="checked3" label="Option1" border size="medium"></lx-checkbox>
    <lx-checkbox v-model="checked4" label="Option2" border size="medium"></lx-checkbox>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox-group v-model="checkboxGroup1" size="small">
      <lx-checkbox label="Option1" border></lx-checkbox>
      <lx-checkbox label="Option2" border disabled></lx-checkbox>
    </lx-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <lx-checkbox label="Option1" border></lx-checkbox>
      <lx-checkbox label="Option2" border></lx-checkbox>
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
| Attribute      | Description         | Type    | Accepted Values                    | Default|
|---------- |-------- |---------- |-------------  |-------- |
| model-value / v-model | binding value | string / number / boolean | — | — |
| label     | value of the Checkbox when used inside a `checkbox-group`   | string / number / boolean / object   |       —        |     —    |
| true-label | value of the Checkbox if it's checked   | string / number    |       —        |     —    |
| false-label | value of the Checkbox if it's not checked   | string / number    |      —         |     —    |
| disabled  | whether the Checkbox is disabled   | boolean   |  — | false   |
| border  | whether to add a border around Checkbox  | boolean   | — | false   |
| size  | size of the Checkbox  | string  | medium / small / mini | — |
| name | native 'name' attribute | string    |      —         |     —    |
| checked  | if the Checkbox is checked   | boolean   |  — | false   |
| indeterminate  | same as `indeterminate` in native checkbox | boolean   |  — | false   |

### Checkbox Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the binding value changes | the updated value |

### Checkbox-group Attributes
| Attribute      | Description         | Type    | Accepted Values         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| model-value / v-model | binding value | array | — | — |
|size | size of checkbox | string | medium / small / mini | — |
| disabled  | whether the nesting checkboxes are disabled | boolean   | — | false   |
| min     | minimum number of checkbox checked   | number    |       —        |     —    |
| max     | maximum number of checkbox checked   | number    |       —        |     —    |
|text-color | font color when button is active | string   | — | #ffffff   |
|fill  | border and background color when button is active | string   | — | #409EFF   |

### Checkbox-group Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the binding value changes | the updated value |

### Checkbox-button Attributes
| Attribute      | Description         | Type    | Accepted Values        | Default|
|---------- |-------- |---------- |-------------  |-------- |
| label     | value of the checkbox when used inside a `checkbox-group` | string / number / boolean / object  |       —        |     —    |
| true-label | value of the checkbox if it's checked | string / number | — |     —    |
| false-label | value of the checkbox if it's not checked | string / number    |      —         |     —    |
| disabled  | whether the checkbox is disabled | boolean   |  — | false   |
| name | native 'name' attribute | string    |      —         |     —    |
| checked  | if the checkbox is checked | boolean   |  — | false   |
