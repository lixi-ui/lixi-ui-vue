## aa


:::demo
```html
  <div class="demo-image__error">
    <div class="block">
      <span class="demonstration">Default</span>
    </div>
    <div class="block">
      <span class="demonstration">Custom</span>
      {{ name }}
    </div>
    <lx-button/>
    <lx-tree/>
  </div>
  <script>
    export default {
      name: 'Md11',
      data() {
        return {
          name: 'ling'
        }
      }
    }
  </script>
```
:::