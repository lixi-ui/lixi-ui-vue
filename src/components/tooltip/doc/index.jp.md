## ツールチップ

マウスホバーのプロンプト情報を表示します。

### 基本的な使い方

ツールチップの配置は9箇所です。

:::demo ホバー時の表示内容を設定するには、属性 `content` を用いる。属性 `placement` はツールチップの位置を決める。値は `[orientation]-[alignment]` で、方向は `top`, `left`, `right`, `bottom` の4つ、アライメントは `start`, `end`, `null` の3つで、デフォルトのアライメントはnullです。例えば、`placement="left-end"` を例にとると、ツールチップはホバリングしている要素の左側に表示され、ツールチップの下端は要素の下端に合わせて配置されます。
```html
<div class="box">
  <div class="top">
    <lx-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">
      <lx-button>top-start</lx-button>
    </lx-tooltip>
    <lx-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">
      <lx-button>top</lx-button>
    </lx-tooltip>
    <lx-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">
      <lx-button>top-end</lx-button>
    </lx-tooltip>
  </div>
  <div class="left">
    <lx-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">
      <lx-button>left-start</lx-button>
    </lx-tooltip>
    <lx-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">
      <lx-button>left</lx-button>
    </lx-tooltip>
    <lx-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
      <lx-button>left-end</lx-button>
    </lx-tooltip>
  </div>

  <div class="right">
    <lx-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">
      <lx-button>right-start</lx-button>
    </lx-tooltip>
    <lx-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">
      <lx-button>right</lx-button>
    </lx-tooltip>
    <lx-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
      <lx-button>right-end</lx-button>
    </lx-tooltip>
  </div>
  <div class="bottom">
    <lx-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
      <lx-button>bottom-start</lx-button>
    </lx-tooltip>
    <lx-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
      <lx-button>bottom</lx-button>
    </lx-tooltip>
    <lx-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
      <lx-button>bottom-end</lx-button>
    </lx-tooltip>
  </div>
</div>

<style>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 110px;
    }

    .right {
      float: right;
      width: 110px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .lx-tooltip__popper,
    .right .lx-tooltip__popper {
      padding: 8px 10px;
    }

    .lx-button {
      width: 110px;
    }
  }
</style>
```
:::


### テーマ

ツールチップには、`dark` と `light` の2つのテーマがあります。

:::demo テーマを変更するには `effect` を設定します。デフォルト値は`dark`です。
```html
<lx-tooltip content="Top center" placement="top">
  <lx-button>Dark</lx-button>
</lx-tooltip>
<lx-tooltip content="Bottom center" placement="bottom" effect="light">
  <lx-button>Light</lx-button>
</lx-tooltip>
```
:::

### コンテンツを追加します。

複数行のテキストを表示し、そのフォーマットを設定します。

:::demo `lx-tooltip` の `content` という名前のスロットを追加して `lx-tooltip` の `content` 属性をオーバーライドします。
```html
<lx-tooltip placement="top">
  <template #content>
    multiple lines<br/>second line
  </template>
  <lx-button>Top center</lx-button>
</lx-tooltip>
```
:::

### 高度な使用法

基本的な使い方に加えて、自分でカスタマイズできる属性がいくつかあります。:

`transition` 属性はツールチップの表示・非表示のアニメーションをカスタマイズすることができ、デフォルト値は lx-fade-in-linear です。

デフォルト値は lx-faade-in-linear です。 `disabled` 属性は `tooltip` を無効にします。`true`に設定すればよいだけです。

実際、ツールチップは[Vue-popper](https://github.com/element-component/vue-popper)をベースにした拡張機能なので、Vue-popperで許可されている属性なら何でも使えます。

:::demo
```html
<template>
  <lx-tooltip :disabled="disabled" content="click to close tooltip function" placement="bottom" effect="light">
    <lx-button @click="disabled = !disabled">click to {{disabled ? 'active' : 'close'}} tooltip function</lx-button>
  </lx-tooltip>
</template>

<script>
  export default {
    data() {
      return {
        disabled: false
      };
    }
  };
</script>

<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .expand-fade-leave-active {
    margin-left: 20px;
    opacity: 0;
  }
</style>
```
:::


:::tip
ツールチップでは `router-link` コンポーネントはサポートされていないので、`vm.$router.push` を使用してください。

無効化されたフォーム要素は、Tooltipではサポートされていません。詳細は[Mdn](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter)を参照してください。Tooltipが動作するためには、無効化されたフォーム要素をコンテナ要素で包む必要があります。
:::


### 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|----------------|---------|-----------|-------------|--------|
| append-to-body | dialog自身をボディに追加するかどうかを指定します。入れ子になったdialogは、この属性を `true` に設定しなければなりません。 | boolean   | — | true |
|  effect   |  ツールチップのテーマ  | string   | dark/light  | dark  |
|  content  | コンテンツを表示、`slot#content` で上書きすることができます。 | String   | — | — |
|  placement | ツールチップの位置   | string    |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  model-value / v-model | ツールチップの可視性 | boolean           | — |  false |
|  disabled       |  ツールチップが無効になっているかどうか  | boolean    | — |  false |
|  offset        |  ツールチップのオフセット   | number    | — |  0 |
|  transition     |  アニメーション名 | string             | — | lx-fade-in-linear |
|  visible-arrow   |  矢印が表示されているかどうかを指定します。詳しくは、[Vue-popper](https://github.com/element-component/vue-popper)のページを参照してください。 | boolean | — | true |
|  popper-options        | [popper.js](https://popper.js.org/documentation.html) parameters | Object            | refer to [popper.js](https://popper.js.org/documentation.html) doc | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| show-after | ミリ秒単位の出現の遅延 | number | — | 0 |
| hide-after | ミリ秒単位の消えるの遅延 | number | — | 0 |
| auto-close | ツールチップを非表示にするタイムアウト（ミリ秒単位） | number | — | 0 |
| manual | ツールチップを手動で制御するかどうかを指定します。`true` に設定すると `mouseenter` と `mouseleave` は効果を持ちません。 | boolean | — | false |
|  popper-class  |  ツールチップのポッパーのカスタムクラス名 | string | — | — |
| enterable | マウスがツールチップに入るかどうか | Boolean | — | true |
| tabindex   | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) のツールチップ | number | — | 0 |
