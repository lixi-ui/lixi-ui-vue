## リンク

テキストハイパーリンク

### ベーシック

ベーシックテキストリンク
:::demo

```html
<div>
  <lx-link href="https://element.eleme.io" target="_blank">default</lx-link>
  <lx-link type="primary">primary</lx-link>
  <lx-link type="success">success</lx-link>
  <lx-link type="warning">warning</lx-link>
  <lx-link type="danger">danger</lx-link>
  <lx-link type="info">info</lx-link>
</div>
```

:::

### 無効化

リンクの無効化状態
:::demo

```html
<div>
  <lx-link disabled>default</lx-link>
  <lx-link type="primary" disabled>primary</lx-link>
  <lx-link type="success" disabled>success</lx-link>
  <lx-link type="warning" disabled>warning</lx-link>
  <lx-link type="danger" disabled>danger</lx-link>
  <lx-link type="info" disabled>info</lx-link>
</div>
```

:::

### 下線

リンクの下線
:::demo

```html
<div>
  <lx-link :underline="false">Without Underline</lx-link>
  <lx-link>With Underline</lx-link>
</div>
```

:::

### アイコン

リンク付きアイコン
:::demo

```html
<div>
  <lx-link icon="lx-icon-edit">Edit</lx-link>
  <lx-link>Check<i class="lx-icon-view lx-icon--right"></i> </lx-link>
</div>
```

:::

### 属性

| Attribute | Description                         | Type    | Options                                     | Default |
| --------- | ----------------------------------- | ------- | ------------------------------------------- | ------- |
| type      | タイプ                                | string  | primary / success / warning / danger / info | default |
| underline | コンポーネントに下線があるか | boolean | —                                           | true    |
| disabled  | コンポーネントが無効化されているか   | boolean | —                                           | false   |
| href      | ネイティブハイパーリンクの `href` と同じ   | string  | —                                           | -       |
| icon      | アイコンのクラス名                  | string  | —                                           | -       |
