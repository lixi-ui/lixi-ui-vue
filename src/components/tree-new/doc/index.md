## tree

:::demo

```html
<div class="block">
  <lx-tree :data="data"></lx-tree>
</div>
<script>
  export default {
    data () {
      return {
        data: [{
          key: 'k_1',
          value: 'v_1',
          children: [{
            key: 'k_1_1',
            value: 'v_1_1'
          }]
        }]
      }
    },
    created() {
      setTimeout(() => {
        this.data[0].children = []
      }, 5000)
    }
  }
</script>
```
:::

### Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| data        | 数据           | array  | -                                                   | —      |
