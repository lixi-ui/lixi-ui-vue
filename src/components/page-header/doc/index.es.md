## PageHeader

If path of the page is simple, it is recommended to use PageHeader instead of the Breadcrumb.

### Basic usage

:::demo
```html
<lx-page-header @back="goBack" content="detail">
</lx-page-header>

<script>
  export default {
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const goBack = () => {
        console.log('go back');
      };

      return {
        goBack,
      };
    },
  });

</setup>
-->
```
:::

### Custom icon

:::demo
```html
<lx-page-header icon="lx-icon-arrow-left" content="detail"></lx-page-header>
```
:::

### Attributes
| Attribute | Description   | Type      | Accepted Values               | Default |
|---------- |-------------- |---------- |------------------------------ | ------ |
| icon     |  icon    | string    |  —                            | lx-icon-back   |
| title     | main title    | string    |  —                            | Back   |
| content   | content       | string    |  —                            | —      |

### Events
| Event Name | Description   | Parameters |
|----------- |-------------- |----------- |
| back       | triggers when right side is clicked | — |

### Slots
| Name      | Description            |
|---------- | ---------------------- |
| icon     | custom icon          |
| title     | title content          |
| content   | content                |
