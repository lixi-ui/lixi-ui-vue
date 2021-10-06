## ラジオ

複数の選択肢の中から1つを選択することができます。

### 基本的な使い方

ラジオにはあまり多くのオプションを持たせてはいけません。多くのオプションを持つなら代わりにSelectコンポーネントを使用します。

:::demo radioコンポーネントの作成は簡単で、Radioの `v-model` に変数をバインドするだけです。これは選択したラジオの `label` の値に等しくなります。ラベルの型は `String`, `Number`, `Boolean` のいずれかです。
```html
<template>
  <div>
    <lx-radio v-model="radio1" label="1">Option 1</lx-radio>
    <lx-radio v-model="radio1" label="2">Option 2</lx-radio>
  </div>
  <div>
    <lx-radio v-model="radio2" label="1" size="medium">Option 1</lx-radio>
    <lx-radio v-model="radio2" label="2" size="medium">Option 2</lx-radio>
  </div>
  <div>
    <lx-radio v-model="radio3" label="1" size="small">Option 1</lx-radio>
    <lx-radio v-model="radio3" label="2" size="small">Option 2</lx-radio>
  </div>
  <div>
    <lx-radio v-model="radio4" label="1" size="mini">Option 1</lx-radio>
    <lx-radio v-model="radio4" label="2" size="mini">Option 2</lx-radio>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1',
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio1: ref('1'),
        radio2: ref('1'),
        radio3: ref('1'),
        radio4: ref('1'),
      }
    }
  })
</setup>
-->
```
:::

### 無効化

ラジオを無効にするには `disabled` 属性を用います。

:::demo `disabled`属性を追加する必要があります。
```html
<template>
  <lx-radio disabled v-model="radio" label="disabled">Option A</lx-radio>
  <lx-radio disabled v-model="radio" label="selected and disabled">Option B</lx-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: 'selected and disabled'
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio: ref('selected and disabled'),
      }
    }
  })
</setup>
-->
```
:::

### ラジオボタングループ

相互に関連し、排他的なオプションから一つのボタンを選択するのに適しています。

:::demo `el-radio-group` と `el-radio` を組み合わせてラジオグループを表示する。`el-radio-group` 要素の `v-model` を変数にバインドし、ラベルの値を `el-radio` に設定する。また、現在の値をパラメータとした `change` イベントも提供する。

```html
<lx-radio-group v-model="radio">
  <lx-radio :label="3">Option A</lx-radio>
  <lx-radio :label="6">Option B</lx-radio>
  <lx-radio :label="9">Option C</lx-radio>
</lx-radio-group>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio: ref(3),
      }
    }
  })
</setup>
-->
```
:::

### ボタンスタイル

ボタンスタイルのラジオ。

:::demo `el-radio` 要素を `el-radio-button` 要素に変更すればよい。また、`size`属性も用意している。
```html
<template>
  <div>
    <lx-radio-group v-model="radio1">
      <lx-radio-button label="New York"></lx-radio-button>
      <lx-radio-button label="Washington"></lx-radio-button>
      <lx-radio-button label="Los Angeles"></lx-radio-button>
      <lx-radio-button label="Chicago"></lx-radio-button>
    </lx-radio-group>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio2" size="medium">
      <lx-radio-button label="New York" ></lx-radio-button>
      <lx-radio-button label="Washington"></lx-radio-button>
      <lx-radio-button label="Los Angeles"></lx-radio-button>
      <lx-radio-button label="Chicago"></lx-radio-button>
    </lx-radio-group>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio3" size="small">
      <lx-radio-button label="New York"></lx-radio-button>
      <lx-radio-button label="Washington" disabled ></lx-radio-button>
      <lx-radio-button label="Los Angeles"></lx-radio-button>
      <lx-radio-button label="Chicago"></lx-radio-button>
    </lx-radio-group>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio4" disabled size="mini">
      <lx-radio-button label="New York"></lx-radio-button>
      <lx-radio-button label="Washington"></lx-radio-button>
      <lx-radio-button label="Los Angeles"></lx-radio-button>
      <lx-radio-button label="Chicago"></lx-radio-button>
    </lx-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York'
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio1: ref('New York'),
        radio2: ref('New York'),
        radio3: ref('New York'),
        radio4: ref('New York'),
      }
    }
  })
</setup>
-->
```
:::

### ボーダーを付ける

:::demo `border` 属性はラジオにボーダーをつけます。
```html
<template>
  <div>
    <lx-radio v-model="radio1" label="1" border>Option A</lx-radio>
    <lx-radio v-model="radio1" label="2" border>Option B</lx-radio>
  </div>
  <div style="margin-top: 20px">
    <lx-radio v-model="radio2" label="1" border size="medium">Option A</lx-radio>
    <lx-radio v-model="radio2" label="2" border size="medium">Option B</lx-radio>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio3" size="small">
      <lx-radio label="1" border>Option A</lx-radio>
      <lx-radio label="2" border disabled>Option B</lx-radio>
    </lx-radio-group>
  </div>
  <div style="margin-top: 20px">
    <lx-radio-group v-model="radio4" size="mini" disabled>
      <lx-radio label="1" border>Option A</lx-radio>
      <lx-radio label="2" border>Option B</lx-radio>
    </lx-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
</script>
<!--
<setup>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      return {
        radio1: ref('1'),
        radio2: ref('1'),
        radio3: ref('1'),
        radio4: ref('1'),
      }
    }
  })
</setup>
-->
```
:::

### ラジオ属性

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
model-value / v-model | バインド値 | string / number / boolean | — | —
label | ラジオの値 | string / number / boolean | — | —
disabled | ラジオが無効になっているかどうか | boolean | — | false
border  | ラジオの周りにボーダーを追加するかどうか  | boolean   | — | false
size  | ラジオのサイズ  | string  | medium / small / mini | —
name | ネイティブ 'name' 属性 | string    |      —         |     —

### ラジオイベント

| Event Name | Description | Parameters |
| --- | --- | --- |
| change | バウンド値が変更された場合にトリガされます。 | 選択されたラジオのラベル値  |

### ラジオグループ属性

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
model-value / v-model | バインディング値 | string / number / boolean | — | —
size | ラジオボタンの大きさ | string | medium / small / mini | —
disabled  | ネストしたラジオが無効になっているかどうか | boolean   | — | false
text-color | ボタンがアクティブなときのフォント色 | string   | — | #ffffff   |
fill  | ボタンがアクティブなときの境界線と背景色 | string   | — | #409EFF   |

### ラジオグループイベント

| Event Name | Description | Parameters |
| --- | --- | --- |
| change | バウンド値が変更された場合にトリガされます。 | 選択されたラジオのラベル値 |

### ラジオボタン属性

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
label | ラジオの値 | string / number | — | —
disabled | ラジオが無効かどうか | boolean | — | false
name | ネイティブ 'name' 属性 | string    |      —         |     —
