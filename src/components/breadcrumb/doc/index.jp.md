## Breadcrumb(パンくず)

現在のページの位置を表示し、ブラウザバックを容易にします。

### 基本的な使い方


:::demo `el-breadcrumb` では、`el-breadcrumb-item` はホームページから始まる各レベルを表すタグである。このコンポーネントは `String` 属性 `separator` を持ち、セパレータを決定する。デフォルト値は'/'である。

```html
<lx-breadcrumb separator="/">
  <lx-breadcrumb-item :to="{ path: '/' }">homepage</lx-breadcrumb-item>
  <lx-breadcrumb-item><a href="/">promotion management</a></lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion list</lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion detail</lx-breadcrumb-item>
</lx-breadcrumb>
```
:::

### アイコンセパレータ

:::demo `separator-class` を `iconfont` をセパレータとして使用するように設定します．

```html
<lx-breadcrumb separator-class="lx-icon-arrow-right">
  <lx-breadcrumb-item :to="{ path: '/' }">homepage</lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion management</lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion list</lx-breadcrumb-item>
  <lx-breadcrumb-item>promotion detail</lx-breadcrumb-item>
</lx-breadcrumb>
```
:::

### Breadcrumb(パンくず)属性
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | セパレータ文字 | string | — | / |
| separator-class | アイコンセパレータのクラス名 | string | — | - |

### Breadcrumb(パンくず)項目属性
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | リンクのターゲットルート、`vue-router` の `to` と同じ | string/object | — | — |
| replace | `true` の場合、ナビゲーションは履歴を残しません。 | boolean | — | false |





