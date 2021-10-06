## Alert

重要なalertメッセージを表示します。

### 基本的な使い方

alertコンポーネントは、自動的には消えないページ内の非オーバーレイ要素です。

:::demo alertは `type` で定義された4種類のテーマを提供しており、デフォルト値は `info` です。

```html
<template>
  <lx-alert
    title="success alert"
    type="success">
  </lx-alert>
  <lx-alert
    title="info alert"
    type="info">
  </lx-alert>
  <lx-alert
    title="warning alert"
    type="warning">
  </lx-alert>
  <lx-alert
    title="error alert"
    type="error">
  </lx-alert>
</template>
```
:::

### テーマ

alertは、`ライト`と`ダーク`の2つの異なるテーマを提供しています。

:::demo テーマを変更するために `effect` を設定します。
```html
<template>
  <lx-alert
    title="success alert"
    type="success"
    effect="dark">
  </lx-alert>
  <lx-alert
    title="info alert"
    type="info"
    effect="dark">
  </lx-alert>
  <lx-alert
    title="warning alert"
    type="warning"
    effect="dark">
  </lx-alert>
  <lx-alert
    title="error alert"
    type="error"
    effect="dark">
  </lx-alert>
</template>
```
:::

### カスタマイズ可能なクローズボタン

閉じるボタンをテキストや他の記号にカスタマイズします。

:::demo alertでは、クローズ可能かどうかを設定することができます。閉じるボタンのテキストや閉じるコールバックもカスタマイズ可能です。`closable`属性はコンポーネントを閉じられるかどうかを決める。戻り値は `boolean` で、デフォルトは `true` です。`close-text` 属性を設定することで、デフォルトの十字マークを閉じるボタンに置き換えることができます。`close-text` は文字列でなければならないので注意が必要である。コンポーネントが閉じられたときに `close` イベントが発生する。

```html
<template>
  <lx-alert
    title="unclosable alert"
    type="success"
    :closable="false">
  </lx-alert>
  <lx-alert
    title="customized close-text"
    type="info"
    close-text="Gotcha">
  </lx-alert>
  <lx-alert
    title="alert with callback"
    type="warning"
    @close="hello">
  </lx-alert>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    setup() {
      const hello = () => {
        alert('Hello World!');
      }
      return {
        hello
      }
    }
  })
</script>
```
:::

### アイコン付き

アイコンを表示することで可読性が向上します。

:::demo `show-icon` 属性を設定すると、現在のalertタイプに対応するアイコンを表示します。

```html
<template>
  <lx-alert
    title="success alert"
    type="success"
    show-icon>
  </lx-alert>
  <lx-alert
    title="info alert"
    type="info"
    show-icon>
  </lx-alert>
  <lx-alert
    title="warning alert"
    type="warning"
    show-icon>
  </lx-alert>
  <lx-alert
    title="error alert"
    type="error"
    show-icon>
  </lx-alert>
</template>
```
:::

## 中央揃えのテキスト

テキストを中央に配置するには `center` 属性を使用します。

:::demo

```html
<template>
  <lx-alert
    title="success alert"
    type="success"
    center
    show-icon>
  </lx-alert>
  <lx-alert
    title="info alert"
    type="info"
    center
    show-icon>
  </lx-alert>
  <lx-alert
    title="warning alert"
    type="warning"
    center
    show-icon>
  </lx-alert>
  <lx-alert
    title="error alert"
    type="error"
    center
    show-icon>
  </lx-alert>
</template>
```
:::

### 説明文付き

説明には、より詳細な情報が記載されたメッセージが含まれています。

:::demo 必須の `title` 属性の他に、`description` 属性を追加することで、alertをより詳細に説明することができます。説明はテキスト文字列のみを格納することができ、自動的にワードラップされます。

```html
<template>
  <lx-alert
    title="with description"
    type="success"
    description="This is a description.">
  </lx-alert>
</template>
```
:::

### アイコンと説明文付き

:::demo 最後に、アイコンと説明文の例です。

```html
<template>
  <lx-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon>
  </lx-alert>
  <lx-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon>
  </lx-alert>
  <lx-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon>
  </lx-alert>
  <lx-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon>
  </lx-alert>
</template>
```
:::

### 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | タイトル         | string | — | — |
| type | コンポーネントタイプ | string | success/warning/info/error | info |
| description | 説明的なテキスト。デフォルトのスロット | string | — | — |
| closable | クローズ可能な場合かどうか | boolean | — | true |
| center | テキストを中央に配置するかどうか | boolean | — | false |
| close-text | カスタマイズしたクローズボタンのテキスト | string | — | — |
| show-icon | タイプアイコンが表示されているま | boolean | — | false |
| effect | テーマを選ぶ  | string | light/dark | light |

### スロット

| Name | Description |
|------|--------|
| — | description |
| title | alertタイトルの内容 |

### イベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| close | alertが閉じたときにトリガーされます | — |
