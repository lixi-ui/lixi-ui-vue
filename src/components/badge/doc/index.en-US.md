## Badge

A number or status mark on buttons and icons.

### Basic usage

Displays the amount of new messages.

:::demo The amount is defined with `value` which accepts `Number` or `String`.

```html
<lx-badge :value="12" class="item">
  <lx-button size="small">comments</lx-button>
</lx-badge>
<lx-badge :value="3" class="item">
  <lx-button size="small">replies</lx-button>
</lx-badge>
<lx-badge :value="1" class="item" type="primary">
  <lx-button size="small">comments</lx-button>
</lx-badge>
<lx-badge :value="2" class="item" type="warning">
  <lx-button size="small">replies</lx-button>
</lx-badge>

<lx-dropdown trigger="click">
  <span class="el-dropdown-link">
    Click Me<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item class="clearfix">
        comments
        <lx-badge class="mark" :value="12" />
      </lx-dropdown-item>
      <lx-dropdown-item class="clearfix">
        replies
        <lx-badge class="mark" :value="3" />
      </lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Max value

You can customize the max value.

:::demo The max value is defined by property `max` which is a `Number`. Note that it only works when `value` is also a `Number`.

```html
<lx-badge :value="200" :max="99" class="item">
  <lx-button size="small">comments</lx-button>
</lx-badge>
<lx-badge :value="100" :max="10" class="item">
  <lx-button size="small">replies</lx-button>
</lx-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Customizations

Displays text content other than numbers.

:::demo When `value` is a `String`, it can display customized text.

```html
<lx-badge value="new" class="item">
  <lx-button size="small">comments</lx-button>
</lx-badge>
<lx-badge value="hot" class="item">
  <lx-button size="small">replies</lx-button>
</lx-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Little red dot

Use a red dot to mark content that needs to be noticed.

:::demo Use the attribute `is-dot`. It is a `Boolean`.

```html
<lx-badge is-dot class="item">query</lx-badge>
<lx-badge is-dot class="item">
  <lx-button class="share-button" icon="el-icon-share" type="primary"></lx-button>
</lx-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributes
| Attribute     | Description     | Type            | Accepted Values       | Default |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | display value   | string / number  |          —            |    —    |
| max           |  maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number`   | number  |         —              |     —    |
| is-dot        | if a little dot is displayed | boolean   |    —           |  false  |
| hidden        | hidden badge    | boolean         |          —            |  false  |
| type          | button type     | string          | primary / success / warning / danger / info |   —  |
