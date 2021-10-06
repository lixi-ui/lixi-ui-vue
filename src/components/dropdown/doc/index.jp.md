## Dropdown
リンクとアクションのリストを表示するためのトグルメニュー

### 基本的な使い方
dropdownメニューの上にカーソルを置くと、より多くのアクションが展開されます。

:::demo トリガ要素はデフォルトの `slot` でレンダリングされ、dropdown部分は `dropdown` という名前の `slot` でレンダリングされます。デフォルトでは、トリガーとなる要素にカーソルを合わせたときにdropdownリストが表示され、クリックする必要はありません。

```html
<lx-dropdown>
  <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item disabled>Action 4</lx-dropdown-item>
      <lx-dropdown-item divided>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
  .lx-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
</style>

```

:::

### トリガー要素

dropdownリストを起動するには、ボタンを使用します。

:::demo トリガ要素をボタングループに分割するには `split-button` を使います。項目3と項目4の間に区切り線を挿入したい場合は、項目4にクラス `divider` を追加します。
```html
<lx-dropdown>
  <lx-button type="primary">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </lx-button>
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
      <lx-dropdown-item>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>
<lx-dropdown split-button type="primary" @click="handleClick">
  Dropdown List
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
      <lx-dropdown-item>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
  .lx-dropdown {
    vertical-align: top;
  }
  .lx-dropdown + .lx-dropdown {
    margin-left: 15px;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const handleClick = () => {
        alert('button click');
      };
      return {
        handleClick,
      };
    },
  });

</setup>
-->
```
:::

### トリガーのかけ方

トリガー要素をクリックするか、その上にカーソルを置きます。

:::demo アトリビュート `trigger` を用いる。デフォルトでは `hover` である。

```html
<lx-row class="block-col-2">
  <lx-col :span="8">
    <span class="demonstration">hover to trigger</span>
    <lx-dropdown>
      <span class="el-dropdown-link">
        Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <lx-dropdown-menu>
          <lx-dropdown-item icon="el-icon-plus">Action 1</lx-dropdown-item>
          <lx-dropdown-item icon="el-icon-circle-plus">Action 2</lx-dropdown-item>
          <lx-dropdown-item icon="el-icon-circle-plus-outline">Action 3</lx-dropdown-item>
          <lx-dropdown-item icon="el-icon-check">Action 4</lx-dropdown-item>
          <lx-dropdown-item icon="el-icon-circle-check">Action 5</lx-dropdown-item>
        </lx-dropdown-menu>
      </template>
    </lx-dropdown>
  </lx-col>
  <lx-col :span="8">
    <span class="demonstration">click to trigger</span>
    <lx-dropdown trigger="click">
      <span class="el-dropdown-link">
        Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <lx-dropdown-menu>
          <lx-dropdown-item icon="el-icon-plus">Action 1</lx-dropdown-item>
          <lx-dropdown-item icon="el-icon-circle-plus">Action 2</lx-dropdown-item>
          <lx-dropdown-item icon="el-icon-circle-plus-outline">Action 3</lx-dropdown-item>
          <lx-dropdown-item icon="el-icon-check">Action 4</lx-dropdown-item>
          <lx-dropdown-item icon="el-icon-circle-check">Action 5</lx-dropdown-item>
        </lx-dropdown-menu>
      </template>
    </lx-dropdown>
  </lx-col>
  <lx-col :span="8">
    <span class="demonstration">right click to trigger</span>
    <lx-dropdown trigger="contextmenu">
      <span class="el-dropdown-link">
        Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <lx-dropdown-menu>
          <lx-dropdown-item icon="el-icon-plus">Action 1</lx-dropdown-item>
          <lx-dropdown-item icon="el-icon-circle-plus">Action 2</lx-dropdown-item>
          <lx-dropdown-item icon="el-icon-circle-plus-outline">Action 3</lx-dropdown-item>
          <lx-dropdown-item icon="el-icon-check">Action 4</lx-dropdown-item>
          <lx-dropdown-item icon="el-icon-circle-check">Action 5</lx-dropdown-item>
        </lx-dropdown-menu>
      </template>
    </lx-dropdown>
  </lx-col>
</lx-row>

<style>
  .lx-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
```
:::

### メニューを非表示にする動作

クリックしたときにメニューが閉じるかどうかを定義するには `hide-on-click` を用いる。

:::demo デフォルトではメニュー項目をクリックするとメニューが閉じますが、hide-on-clickをfalseにすることでオフにできます。
```html
<lx-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item disabled>Action 4</lx-dropdown-item>
      <lx-dropdown-item divided>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
  .lx-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
</style>
```
:::

### コマンドイベント

各dropdown項目をクリックすると、各項目に割り当てられたパラメータを持つイベントが発生します。

:::demo
```html
<lx-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item command="a">Action 1</lx-dropdown-item>
      <lx-dropdown-item command="b">Action 2</lx-dropdown-item>
      <lx-dropdown-item command="c">Action 3</lx-dropdown-item>
      <lx-dropdown-item command="d" disabled>Action 4</lx-dropdown-item>
      <lx-dropdown-item command="e" divided>Action 5</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<style>
  .lx-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .lx-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { LxMessage } from 'element-plus';

  export default defineComponent({
    setup() {

      const handleCommand = (command) => {
        LxMessage(`click on item ${command}`);
      };
      return {
        handleCommand,
      };
    },
  });

</setup>
-->
```
:::

### サイズ

デフォルトのサイズの他に、dropdownコンポーネントには3つの追加サイズが用意されており、異なるシナリオから選択することができます。

:::demo 追加のサイズを `medium`, `small`, `mini` で設定するには `size` 属性を使います。

```html
<lx-dropdown split-button type="primary">
  Default
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<lx-dropdown size="medium" split-button type="primary">
  Medium
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<lx-dropdown size="small" split-button type="primary">
  Small
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>

<lx-dropdown size="mini" split-button type="primary">
  Mini
  <template #dropdown>
    <lx-dropdown-menu>
      <lx-dropdown-item>Action 1</lx-dropdown-item>
      <lx-dropdown-item>Action 2</lx-dropdown-item>
      <lx-dropdown-item>Action 3</lx-dropdown-item>
      <lx-dropdown-item>Action 4</lx-dropdown-item>
    </lx-dropdown-menu>
  </template>
</lx-dropdown>
```
:::

### dropdown属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type          | `split-button` が `true`のとき、メニューボタンのタイプは `Button` コンポーネントを参照する。  | string  |  —   |    —     |
| size          | メニューのサイズ(分割ボタンでも動作)  | string  | medium / small / mini  |    —     |
| max-height    | the max height of menu  | string / number  |     —    |    —     |
| split-button | ボタングループの表示の有無 | boolean         |     —       | false   |
| disabled     | 無効にするかどうか | boolean | — | false |
| placement    | ポップメニューの配置 | string | top/top-start/top-end/bottom/bottom-start/bottom-end  | bottom |
| trigger       | トリガーのきっかけ     | string  |    hover/click/contextmenu  |  hover |
| hide-on-click | メニューアイテムをクリックした後にメニューを非表示にするかどうか     | boolean          | — | true |
| show-timeout | dropdownを表示するまでの遅延時間 (トリガーが `hover` の場合のみ動作) | number | — | 250 |
| hide-timeout | dropdownを非表示にするまでの遅延時間 (トリガーが `hover` の場合のみ動作) | number | — | 150 |
| tabindex     | dropdownの[tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) | number | — | 0 |

### dropdownスロット

| Name | Description |
|------|--------|
| — | dropdownの内容 Notice: トリガーリスナーをアタッチするには、有効な html dom 要素 (例: `<span>, <button> etc.`) または `el-component` でなければなりません。  |
| dropdown | dropdownメニューの内容、通常は `<lx-dropdown-menu>` 要素 |

### dropdownイベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| click | `split-button` が `true` の場合、左ボタンがクリックされたときにトリガされます。 | — |
| command | dropdown項目がクリックされたときにトリガーする | the command dispatched from the dropdown item |
| visible-change | dropdownが表示/非表示になったときにトリガされます。 | true when it appears, and false otherwise |

### dropdownメニュー項目の属性
| Attribute     | Description          | Type      | Accepted Values       | Default  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| command       | dropdownの `command` コールバックにディスパッチするコマンドを指定します。 | string/number/object  |          —             |    —     |
| disabled      | 項目が無効化されているかどうか  | boolean  |          —             |    false     |
| divided       | 仕切り表示の有無  | boolean  |          —             |    false     |
| icon          | アイコンクラス名 | string   |  —  |  —  |
