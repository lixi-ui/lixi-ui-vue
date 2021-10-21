## Switch

Switch is used for switching between two opposing states.

### Basic usage

:::demo Bind `v-model` to a `Boolean` typed variable. The `active-color` and `inactive-color` attribute decides the background color in two states.

```html
<lx-switch v-model="value1"> </lx-switch>
<lx-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
</lx-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
      }
    },
  }
</script>
```

:::

### Text description

:::demo You can add `active-text` and `inactive-text` attribute to show texts.

```html
<lx-switch
  v-model="value1"
  active-text="Pay by month"
  inactive-text="Pay by year"
>
</lx-switch>
<lx-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="Pay by month"
  inactive-text="Pay by year"
>
</lx-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true,
      }
    },
  }
</script>
```

:::

### Extended value types

:::demo You can set `active-value` and `inactive-value` attributes. They both receive a `Boolean`, `String` or `Number` typed value.

```html
<lx-tooltip :content="'Switch value: ' + value" placement="top">
  <lx-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0"
  >
  </lx-switch>
</lx-tooltip>

<script>
  export default {
    data() {
      return {
        value: '100',
      }
    },
  }
</script>
```

:::

### Disabled

:::demo Adding the `disabled` attribute disables Switch.

```html
<lx-switch v-model="value1" disabled> </lx-switch>
<lx-switch v-model="value2" disabled> </lx-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false,
      }
    },
  }
</script>
```

:::

### Loading

:::demo Setting the `loading` attribute to `true` indicates a loading state on the Switch.

```html
<lx-switch v-model="value1" loading> </lx-switch>
<lx-switch v-model="value2" loading> </lx-switch>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false,
      }
    },
  }
</script>
```

:::

### prevent switching

:::demo set the `beforeChange` property, If `false` is returned or a `Promise` is returned and then is rejected, will stop switching.

```html
<lx-switch v-model="value1" :loading="loading1" :beforeChange="beforeChange1">
</lx-switch>
<lx-switch v-model="value2" :loading="loading2" :beforeChange="beforeChange2">
</lx-switch>
<script>
  import { reactive, toRefs } from 'vue'
  import { LxMessage } from 'lixi-ui-vue'

  export default {
    setup() {
      const status1 = reactive({
        value1: false,
        loading1: false,
      })

      const beforeChange1 = () => {
        status1.loading1 = true
        return new Promise(resolve => {
          setTimeout(() => {
            status1.loading1 = false
            LxMessage.success('switch success')
            return resolve(true)
          }, 1000)
        })
      }

      const status2 = reactive({
        value2: false,
        loading2: false,
      })

      const beforeChange2 = () => {
        status2.loading2 = true
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            status2.loading2 = false
            LxMessage.error('switch failed')
            return reject(new Error('error'))
          }, 1000)
        })
      }

      return {
        ...toRefs(status1),
        ...toRefs(status2),
        beforeChange1,
        beforeChange2,
      }
    },
  }
</script>
```

:::

### Attributes

| Attribute           | Description                                                                                                                                     | Type                      | Accepted Values | Default |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | --------------- | ------- |
| model-value / v-model     | binding value, it should be equivalent to either `active-value` or `inactive-value`, by default it's `boolean` type                             | boolean / string / number | —               | —       |
| disabled            | whether Switch is disabled                                                                                                                      | boolean                   | —               | false   |
| loading             | whether Switch is in loading state                                                                                                              | boolean                   | —               | false   |
| width               | width of Switch                                                                                                                                 | number                    | —               | 40      |
| active-icon-class   | class name of the icon displayed when in `on` state, overrides `active-text`                                                                    | string                    | —               | —       |
| inactive-icon-class | class name of the icon displayed when in `off` state, overrides `inactive-text`                                                                 | string                    | —               | —       |
| active-text         | text displayed when in `on` state                                                                                                               | string                    | —               | —       |
| inactive-text       | text displayed when in `off` state                                                                                                              | string                    | —               | —       |
| active-value        | switch value when in `on` state                                                                                                                 | boolean / string / number | —               | true    |
| inactive-value      | switch value when in `off` state                                                                                                                | boolean / string / number | —               | false   |
| active-color        | background color when in `on` state                                                                                                             | string                    | —               | #409EFF |
| inactive-color      | background color when in `off` state                                                                                                            | string                    | —               | #C0CCDA |
| border-color        | border color of the switch                                                                                                                      | string                    | —               | —       |
| name                | input name of Switch                                                                                                                            | string                    | —               | —       |
| validate-event      | whether to trigger form validation                                                                                                              | boolean                   | —               | true    |
| before-change       | before-change hook before the switch state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop switching | function                  | —               | —       |

### Events

| Event Name | Description                 | Parameters           |
| ---------- | --------------------------- | -------------------- |
| change     | triggers when value changes | value after changing |

### Methods

| Method | Description                | Parameters |
| ------ | -------------------------- | ---------- |
| focus  | focus the Switch component | —          |
