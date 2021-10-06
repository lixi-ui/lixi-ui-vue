## ナビゲーションメニュー

ウェブサイトのナビゲーションを提供するメニュー。

### トップバー

トップバーのナビゲーションメニューは、様々なシーンで使用することができます。

:::demo デフォルトではメニューは縦長ですが、モードプロップを'horizontal'に設定することで横長にすることができます。また、サブメニューコンポーネントを使って第2階層のメニューを作成することもできます。メニューには `background-color`, `text-color`, `active-text-color` が用意されており、色をカスタマイズすることができます。
```html
<lx-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <lx-menu-item index="1">Processing Center</lx-menu-item>
  <lx-sub-menu index="2">
    <template #title>Workspace</template>
    <lx-menu-item index="2-1">item one</lx-menu-item>
    <lx-menu-item index="2-2">item two</lx-menu-item>
    <lx-menu-item index="2-3">item three</lx-menu-item>
    <lx-sub-menu index="2-4">
      <template #title>item four</template>
      <lx-menu-item index="2-4-1">item one</lx-menu-item>
      <lx-menu-item index="2-4-2">item two</lx-menu-item>
      <lx-menu-item index="2-4-3">item three</lx-menu-item>
    </lx-sub-menu>
  </lx-sub-menu>
  <lx-menu-item index="3" disabled>Info</lx-menu-item>
  <lx-menu-item index="4">Orders</lx-menu-item>
</lx-menu>
<div class="line"></div>
<lx-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <lx-menu-item index="1">Processing Center</lx-menu-item>
  <lx-sub-menu index="2">
    <template #title>Workspace</template>
    <lx-menu-item index="2-1">item one</lx-menu-item>
    <lx-menu-item index="2-2">item two</lx-menu-item>
    <lx-menu-item index="2-3">item three</lx-menu-item>
    <lx-sub-menu index="2-4">
      <template #title>item four</template>
      <lx-menu-item index="2-4-1">item one</lx-menu-item>
      <lx-menu-item index="2-4-2">item two</lx-menu-item>
      <lx-menu-item index="2-4-3">item three</lx-menu-item>
    </lx-sub-menu>
  </lx-sub-menu>
  <lx-menu-item index="3" disabled>Info</lx-menu-item>
  <lx-menu-item index="4">Orders</lx-menu-item>
</lx-menu>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const activeIndex = ref('1');
      const activeIndex2 = ref('1');
      const handleSelect = (key, keyPath) => {
        console.log(key, keyPath);
      };
      return {
        activeIndex,
        activeIndex2,
        handleSelect,
      };
    },
  });

</setup>
-->
```
:::

### サイドバー

Vサブメニューのある縦型ナビメニュー。

:::demo el-menu-item-groupコンポーネントを使ってメニューグループを作成することができ、グループの名前はタイトルプロップか名前付きスロットで決まります。
```html
<lx-row class="tac">
  <lx-col :span="12">
    <h5>Default colors</h5>
    <lx-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <lx-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <lx-menu-item-group title="Group One">
          <lx-menu-item index="1-1">item one</lx-menu-item>
          <lx-menu-item index="1-2">item one</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="Group Two">
          <lx-menu-item index="1-3">item three</lx-menu-item>
        </lx-menu-item-group>
        <lx-sub-menu index="1-4">
          <template #title>item four</template>
          <lx-menu-item index="1-4-1">item one</lx-menu-item>
        </lx-sub-menu>
      </lx-sub-menu>
      <lx-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </lx-menu-item>
      <lx-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </lx-menu-item>
      <lx-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </lx-menu-item>
    </lx-menu>
  </lx-col>
  <lx-col :span="12">
    <h5>Custom colors</h5>
    <lx-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <lx-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <lx-menu-item-group title="Group One">
          <lx-menu-item index="1-1">item one</lx-menu-item>
          <lx-menu-item index="1-2">item one</lx-menu-item>
        </lx-menu-item-group>
        <lx-menu-item-group title="Group Two">
          <lx-menu-item index="1-3">item three</lx-menu-item>
        </lx-menu-item-group>
        <lx-sub-menu index="1-4">
          <template #title>item four</template>
          <lx-menu-item index="1-4-1">item one</lx-menu-item>
        </lx-sub-menu>
      </lx-sub-menu>
      <lx-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </lx-menu-item>
      <lx-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </lx-menu-item>
      <lx-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </lx-menu-item>
    </lx-menu>
  </lx-col>
</lx-row>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const handleOpen = (key, keyPath) => {
        console.log(key, keyPath);
      };
      const handleClose = (key, keyPath) => {
        console.log(key, keyPath);
      };
      return {
        handleOpen,
        handleClose,
      };
    },
  });

</setup>
-->
```
:::

### コラプス

縦型のナビメニューを潰すことも出来ます。

:::demo
```html
<lx-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <lx-radio-button :label="false">expand</lx-radio-button>
  <lx-radio-button :label="true">collapse</lx-radio-button>
</lx-radio-group>
<lx-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <lx-sub-menu index="1">
    <template #title>
      <i class="el-icon-location"></i>
      <span>Navigator One</span>
    </template>
    <lx-menu-item-group>
      <template #title><span>Group One</span></template>
      <lx-menu-item index="1-1">item one</lx-menu-item>
      <lx-menu-item index="1-2">item two</lx-menu-item>
    </lx-menu-item-group>
    <lx-menu-item-group title="Group Two">
      <lx-menu-item index="1-3">item three</lx-menu-item>
    </lx-menu-item-group>
    <lx-sub-menu index="1-4">
      <template #title><span>item four</span></template>
      <lx-menu-item index="1-4-1">item one</lx-menu-item>
    </lx-sub-menu>
  </lx-sub-menu>
  <lx-menu-item index="2">
    <i class="el-icon-menu"></i>
    <template #title>Navigator Two</template>
  </lx-menu-item>
  <lx-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <template #title>Navigator Three</template>
  </lx-menu-item>
  <lx-menu-item index="4">
    <i class="el-icon-setting"></i>
    <template #title>Navigator Four</template>
  </lx-menu-item>
</lx-menu>

<style>
  .lx-menu-vertical-demo:not(.lx-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const isCollapse = ref(true);
      const handleOpen = (key, keyPath) => {
        console.log(key, keyPath);
      };
      const handleClose = (key, keyPath) => {
        console.log(key, keyPath);
      };
      return {
        isCollapse,
        handleOpen,
        handleClose,
      };
    },
  });

</setup>
-->
```
:::

### メニュー属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | メニュー表示モード   | string  |   horizontal / vertical   | vertical |
| collapse  | メニューが折りたたまれているかどうか (垂直モードでのみ利用可能) | boolean  |   —   | false |
| background-color  | メニューの背景色(16進数形式)  | string |   —   | #ffffff |
| text-color  | メニューのテキストカラー(16進数形式) | string |   —   | #303133 |
| active-text-color  | 現在アクティブなメニュー項目のテキスト色 (16進数形式) | string |   —   | #409EFF |
| default-active | アクティブメニューのインデックス | string    | — | — |
| default-openeds | 現在アクティブなサブメニューのインデックスを含む配列  | Array    | — | — |
| unique-opened  |  一つのサブメニューだけをアクティブにすることができるかどうか  | boolean   | — | false   |
| menu-trigger | サブメニューのトリガ方法、`mode` が 'horizontal' の時のみ動作する | string    | hover / click | hover |
| router  | `vue-router` モードを有効にしているかどうかを示します。true の場合、インデックスはルートアクションを有効にするための 'path' として使われます。 | boolean   | — | false   |
| collapse-transition  | 折りたたみ遷移を有効にするかどうか | boolean   | — | true   |

### メニューメソッド
| Methods Name | Description | Parameters |
|---------- |-------- |---------- |
| open  | 特定のサブメニューを開く | index: index of the sub-menu to open |
| close  | 特定のサブメニューを閉じる | index: index of the sub-menu to close |

### メニューイベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| select  | メニュー起動時コールバック機能 | index: index of activated menu, indexPath: index path of activated menu, item: 選択されたメニュー項目, routeResult: `router` が有効な場合に `vue-router` が返す結果  |
| open  | サブメニュー展開したときのコールバック関数 | index: index of expanded sub-menu, indexPath: index path of expanded sub-menu |
| close  | サブメニューを折りたたんだ時のコールバック関数 | index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu |

### メニューアイテムイベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| click  | メニュー項目がクリックされたときのコールバック関数 | el: menu-item instance  |

### サブメニュー属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| index     | ユニークアイデンティフィケーション   | string  | — | — |
| popper-class | ポップアップメニューのカスタムクラス名 | string | — | — |
| show-timeout | サブメニュー表示前のタイムアウト | number | — | 300 |
| hide-timeout | サブメニューを隠す前のタイムアウト | number | — | 300 |
| disabled | サブメニューが無効化されているかどうか | boolean | — | false |
| popper-append-to-body | ポップアップメニューをボディに追加するかどうかを指定します。メニューの位置が正しくない場合は、このpropを調整してみてください。 | boolean | - | level one SubMenu: true / other SubMenus: false |

### メニューアイテム属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| index     | ユニークアイデンティフィケーション   | string/null  | — | null |
| route     | Vue Routerオブジェクト   | object | — | — |
| disabled | 無効化かどうか | boolean | — | false |

### メニューグループ属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| title     | グループタイトル   | string  | — | — |
