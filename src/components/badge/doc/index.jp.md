## Badge

ボタンやアイコンの数字やステータスマーク

### 基本的な使い方

新しいメッセージの量を表示します。

:::demo 量は `value` で定義します。`value` は `Number` または `String` を受け入れる。

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
  <span class="lx-dropdown-link">
    Click Me<i class="lx-icon-caret-bottom lx-icon--right"></i>
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

### 最大値

最大値をカスタマイズすることができます。

:::demo 最大値はプロパティ `max` で定義され `Number` である。value` が `Number` である場合にのみ動作することに注意すること。

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

### カスタマイズ

数字以外のテキスト内容を表示します。

:::demo `value` が `String` の場合、カスタマイズしたテキストを表示することができる。

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

### 小さな赤い点

注目すべきコンテンツには、赤い点を使ってマークをつけましょう。

:::demo 属性 `is-dot` を用いる。`Boolean` である。

```html
<lx-badge is-dot class="item">query</lx-badge>
<lx-badge is-dot class="item">
  <lx-button class="share-button" icon="lx-icon-share" type="primary"></lx-button>
</lx-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### 属性
| Attribute     | Description     | Type            | Accepted Values       | Default |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | 表示値   | string, number  |          —            |    —    |
| max           | 最大値を超えると '{max}+' を表示します。`value` が `Number` の場合にのみ動作します。   | number  |         —              |     —    |
| is-dot        | 小さな点が表示されている場合 | boolean   |    —           |  false  |
| hidden        | かくしbadge    | boolean         |          —            |  false  |
| type          | ボタンタイプ     | string          | primary / success / warning / danger / info |   —  |
