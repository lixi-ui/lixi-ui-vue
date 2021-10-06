## Popover

### 基本的な使い方

Tooltipと同様に、Popoverも `Vue-popper` で構築されています。そのため、重複する属性については、Tooltipのドキュメントを参照してください。

:::demo `trigger` 属性は、popoverがどのようにトリガーされるかを定義するために使用されます: `hover`, `click`, `focus`, `manual`。それは、`#reference` という名前のスロットを使うか、`v-popover` ディレクティブを使って popover の `ref` に設定するかです。

```html
<template>
  <lx-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <lx-button>Hover to activate</lx-button>
    </template>
  </lx-popover>

  <lx-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="click"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <lx-button>Hover to activate</lx-button>
    </template>
  </lx-popover>

  <lx-popover
    ref="popover"
    placement="right"
    title="Title"
    :width="200"
    trigger="focus"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <lx-button>Focus to activate</lx-button>
    </template>
  </lx-popover>

  <lx-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="manual"
    content="this is content, this is content, this is content"
    v-model:visible="visible"
  >
    <template #reference>
      <lx-button @click="visible = !visible">Manual to activate</lx-button>
    </template>
  </lx-popover>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      return {
        visible: ref(false),
      };
    },
  });

</setup>
-->
```
:::

### 入れ子になっている情報

popoverの中には、他のコンポーネントを入れ子にすることができます。以下はネストされたテーブルの例です。

:::demo `content`属性をデフォルトの`slot`に置き換えています。

```html
<lx-popover
  placement="right"
  :width="400"
  trigger="click"
>
  <template #reference>
    <lx-button>Click to activate</lx-button>
  </template>
  <lx-table :data="gridData">
    <lx-table-column width="150" property="date" label="date"></lx-table-column>
    <lx-table-column width="100" property="name" label="name"></lx-table-column>
    <lx-table-column width="300" property="address" label="address"></lx-table-column>
  </lx-table>
</lx-popover>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City'
        }]
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        gridData: [
          {
            date: '2016-05-02',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-04',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-01',
            name: 'Jack',
            address: 'New York City',
          },
          {
            date: '2016-05-03',
            name: 'Jack',
            address: 'New York City',
          },
        ],
      });
      return {
        ...toRefs(state),
      };
    },
  });

</setup>
-->
```
:::

### 入れ子になった操作

もちろん、他の操作をネストすることもできます。ダイアログを使うよりも軽量です。

:::demo
```html
<lx-popover
  placement="top"
  :width="160"
  v-model:visible="visible"
>
  <p>Are you sure to delete this?</p>
  <div style="text-align: right; margin: 0">
    <lx-button size="mini" type="text" @click="visible = false">cancel</lx-button>
    <lx-button type="primary" size="mini" @click="visible = false">confirm</lx-button>
  </div>
  <template #reference>
    <lx-button @click="visible = true">Delete</lx-button>
  </template>
</lx-popover>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      return {
        visible: ref(false),
      };
    },
  });

</setup>
-->
```
:::

### 属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| trigger | popoverがどのようにトリガーされるか | string  | click/focus/hover/manual |    click    |
|  title              | popoverのタイトル | string | — | — |
|  content        |  popoverコンテンツ、デフォルトの `slot` で置き換えることができます。    | string            | — | — |
|  width        |  popover幅  | string, number            | — | Min width 150px |
|  placement        |  popover配置  | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  disabled       |  popoverが無効になっているかどうか  | boolean    | — |  false |
|  visible / v-model:visible  |  popoverが表示されているかどうか  | Boolean           | — |  false |
|  offset        |  popoverオフセット  | number           | — |  0 |
|  transition     |  popoverトランジションアニメーション      | string             | — | el-fade-in-linear |
|  show-arrow   |  ツールチップの矢印が表示されているかどうかを指定します。詳細については [Vue-popper](https://github.com/element-component/vue-popper) | boolean | — | true |
|  popper-options        | [popper.js](https://popper.js.org/documentation.html) のためのパラメータ | object            | please refer to [popper.js](https://popper.js.org/documentation.html) | `{ boundariesElement: 'body', gpuAcceleration: false }` |
|  popper-class        |  popover用カスタムクラス名 | string | — | — |
| show-after | ミリ秒単位の出現の遅延 | number | — | 0 |
| hide-after | ミリ秒単位の消えるの遅延 | number | — | 0 |
| auto-close | ツールチップを非表示にするタイムアウト（ミリ秒単位） | number | — | 0 |
|  tabindex          | [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) のpopover | number | — | — |

### スロット
| Name | Description |
| --- | --- |
| — | popoverのテキストコンテンツ |
| reference | popoverをトリガーするHTML要素 |

### イベント
| Event Name | Description | Parameters |
|---------|--------|---------|
| show | popoverが表示されたときにトリガー | — |
| after-enter | 入力トランジションの終了時にトリガされます。 | — |
| hide | popoverが非表示になったときにトリガー | — |
| after-leave | 離脱トランジション終了時のトリガー | — |
