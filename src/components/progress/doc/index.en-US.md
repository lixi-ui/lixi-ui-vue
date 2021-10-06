## Progress

Progress is used to show the progress of current operation, and inform the user the current status.

### Linear progress bar

:::demo Use `percentage` attribute to set the percentage. It's **required** and must be between `0-100`. You can custom text format by setting `format`.
```html
<lx-progress :percentage="50"></lx-progress>
<lx-progress :percentage="100" :format="format"></lx-progress>
<lx-progress :percentage="100" status="success"></lx-progress>
<lx-progress :percentage="100" status="warning"></lx-progress>
<lx-progress :percentage="50" status="exception"></lx-progress>

<script>
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`;
      }
    }
  };
</script>
<!--
<setup>

  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`);
      return {
        format,
      };
    },
  });

</setup>
-->
```
:::

### Internal percentage

In this case the percentage takes no additional space.

:::demo `stroke-width` attribute decides the `width` of progress bar, and use `text-inside` attribute to put description inside the progress bar.
```html
<lx-progress :text-inside="true" :stroke-width="26" :percentage="70"></lx-progress>
<lx-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></lx-progress>
<lx-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></lx-progress>
<lx-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></lx-progress>
```
:::

### Custom color

You can use `color` attr to set the progress bar color. it accepts color string, function, or array.

:::demo

```html
<lx-progress :percentage="percentage" :color="customColor"></lx-progress>

<lx-progress :percentage="percentage" :color="customColorMethod"></lx-progress>

<lx-progress :percentage="percentage" :color="customColors"></lx-progress>
<lx-progress :percentage="percentage2" :color="customColors"></lx-progress>
<div>
  <lx-button-group>
    <lx-button icon="lx-icon-minus" @click="decrease"></lx-button>
    <lx-button icon="lx-icon-plus" @click="increase"></lx-button>
  </lx-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 20,
        percentage2: 0,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    },
    mounted() {
      setInterval(() => {
        this.percentage2 = (this.percentage2 % 100) + 10
      }, 500)
    }
  }
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          { color: '#f56c6c', percentage: 20 },
          { color: '#e6a23c', percentage: 40 },
          { color: '#5cb87a', percentage: 60 },
          { color: '#1989fa', percentage: 80 },
          { color: '#6f7ad3', percentage: 100 },
        ],
      });
      const customColorMethod = (percentage) => {
        if (percentage < 30) {
          return '#909399';
        } if (percentage < 70) {
          return '#e6a23c';
        }
        return '#67c23a';
      };
      const increase = () => {
        state.percentage += 10;
        if (state.percentage > 100) {
          state.percentage = 100;
        }
      };
      const decrease = () => {
        state.percentage -= 10;
        if (state.percentage < 0) {
          state.percentage = 0;
        }
      };
      return {
        ...toRefs(state),
        customColorMethod,
        increase,
        decrease,
      };
    },
  });

</setup>
-->
```
:::

### Circular progress bar

:::demo You can specify `type` attribute to `circle` to use circular progress bar, and use `width` attribute to change the size of circle.
```html
<lx-progress type="circle" :percentage="0"></lx-progress>
<lx-progress type="circle" :percentage="25"></lx-progress>
<lx-progress type="circle" :percentage="100" status="success"></lx-progress>
<lx-progress type="circle" :percentage="70" status="warning"></lx-progress>
<lx-progress type="circle" :percentage="50" status="exception"></lx-progress>
```
:::

### Dashboard progress bar

You also can specify `type` attribute to `dashboard` to use dashboard progress bar.

:::demo

```html
<lx-progress type="dashboard" :percentage="percentage" :color="colors"></lx-progress>
<lx-progress type="dashboard" :percentage="percentage2" :color="colors"></lx-progress>
<div>
  <lx-button-group>
    <lx-button icon="lx-icon-minus" @click="decrease"></lx-button>
    <lx-button icon="lx-icon-plus" @click="increase"></lx-button>
  </lx-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 10,
        percentage2: 0,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    },
    mounted() {
      setInterval(() => {
        this.percentage2 = (this.percentage2 % 100) + 10
      }, 500)
    }
  }
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs, onMounted } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        percentage: 10,
        percentage2: 0,
        colors: [
          { color: '#f56c6c', percentage: 20 },
          { color: '#e6a23c', percentage: 40 },
          { color: '#5cb87a', percentage: 60 },
          { color: '#1989fa', percentage: 80 },
          { color: '#6f7ad3', percentage: 100 },
        ],
      });
      const increase = () => {
        state.percentage += 10;
        if (state.percentage > 100) {
          state.percentage = 100;
        }
      };
      const decrease = () => {
        state.percentage -= 10;
        if (state.percentage < 0) {
          state.percentage = 0;
        }
      };
      onMounted(() => {
        setInterval(() => {
          state.percentage2 = (state.percentage2 % 100) + 10
        }, 500)
      });
      return {
        ...toRefs(state),
        increase,
        decrease,
      };
    },
  });

</setup>
-->
```
:::

### Customized content

:::demo Use default slot to add customized content.

```html
<lx-progress :percentage="50">
  <lx-button type="text">Content</lx-button>
</lx-progress>
<lx-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception">
  <span>Content</span>
</lx-progress>
<lx-progress type="circle" :percentage="100" status="success">
  <lx-button type="success" icon="lx-icon-check" circle></lx-button>
</lx-progress>
<lx-progress type="dashboard" :percentage="80">
  <template #default="{ percentage }">
    <span class="percentage-value">{{ percentage }}%</span>
    <span class="percentage-label">Progressing</span>
  </template>
</lx-progress>
```
:::

### Indeterminate progress

:::demo Use `indeterminate` attribute to set indeterminate progress, with `duration` to control the animation duration.

```html
<lx-progress :percentage="50" :indeterminate="true"></lx-progress>
<lx-progress :percentage="100" :format="format" :indeterminate="true"></lx-progress>
<lx-progress :percentage="100" status="success" :indeterminate="true" :duration="5"></lx-progress>
<lx-progress :percentage="100" status="warning" :indeterminate="true" :duration="1"></lx-progress>
<lx-progress :percentage="50" status="exception" :indeterminate="true"></lx-progress>

<script>
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`;
      }
    }
  };
</script>
<!--
<setup>

  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`);
      return {
        format,
      };
    },
  });

</setup>
-->
```
:::

### Attributes
| Attribute      | Description                                                                           | Type                  | Accepted Values           | Default |
| -------------- | ------------------------------------------------------------------------------------- | --------------------- | ------------------------- | ------- |
| **percentage** | percentage, **required**                                                              | number                | 0-100                     | 0       |
| type           | the type of progress bar                                                              | string                | line/circle/dashboard     | line    |
| stroke-width   | the width of progress bar                                                             | number                | —                         | 6       |
| text-inside    | whether to place the percentage inside progress bar, only works when `type` is 'line' | boolean               | —                         | false   |
| status         | the current status of progress bar                                                    | string                | success/exception/warning | —       |
| indeterminate  | set indeterminate progress                                                            | boolean               | -                         | false   |
| duration       | control the animation duration of indeterminate progress                              | number                | -                         | 3       |
| color          | background color of progress bar. Overrides `status` prop                             | string/function/array | —                         | ''      |
| width          | the canvas width of circle progress bar                                               | number                | —                         | 126     |
| show-text      | whether to show percentage                                                            | boolean               | —                         | true    |
| stroke-linecap | circle/dashboard type shape at the end path                                           | string                | butt/round/square         | round   |
| format         | custom text format                                                                    | function(percentage)  | —                         | —       |

### Slots
| Name    | Description                                     |
| ------- | ----------------------------------------------- |
| default | Customized content, parameter is { percentage } |
