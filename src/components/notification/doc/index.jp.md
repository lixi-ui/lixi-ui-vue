## 通知

ページの隅にグローバル通知メッセージを表示します。

### 基本的な使い方

:::demo 要素は `$notify` メソッドを登録し、そのパラメータとしてオブジェクトを受け取ります。最も単純な例では、`title` フィールドと `message` フィールドに通知のタイトルと本文を設定することができます。デフォルトでは、通知は4500ms後に自動的に閉じますが、`duration` を設定することでその期間を制御することができます。具体的には、`0`に設定すると自動的に閉じません。`duration` はミリ秒単位の `Number` を受け取ることに注意すること。

```html
<template>
  <lx-button
    plain
    @click="open1">
    Closes automatically
  </lx-button>
  <lx-button
    plain
    @click="open2">
    Won't close automatically
    </lx-button>
</template>

<script>
  import { h } from 'vue';

  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Title',
          message: h('i', { style: 'color: teal' }, 'This is a reminder')
        });
      },

      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent, h } from 'vue';
  import { LxNotification } from 'lixi-ui-vue';

  export default defineComponent({
    setup() {
      
      const open1 = () => {
        LxNotification({
          title: 'Title',
          message: h('i', { style: 'color: teal' }, 'This is a reminder')
        });
      };

      const open2 = () => {
        LxNotification({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        });
      };
      return {
        open1,
        open2,
      };
    },
  });

</setup>
-->
```
:::

### タイプがある場合

success, warning, info, errorの4種類を提供しています。

:::demo要素は4つの通知タイプを提供します。`success`, `warning`, `info`, `error` です。これらは `type` フィールドで設定され、他の値は無視される。また、`open3` や `open4` のように `type` フィールドを渡さずに直接呼び出すことができるメソッドも登録した。
```html
<template>
  <lx-button
    plain
    @click="open1">
    Success
  </lx-button>
  <lx-button
    plain
    @click="open2">
    Warning
  </lx-button>
  <lx-button
    plain
    @click="open3">
    Info
  </lx-button>
  <lx-button
    plain
    @click="open4">
    Error
  </lx-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
      },

      open2() {
        this.$notify({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      },

      open3() {
        this.$notify.info({
          title: 'Info',
          message: 'This is an info message'
        });
      },

      open4() {
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { LxNotification } from 'lixi-ui-vue';

  export default defineComponent({
    setup() {
      
      const open1 = () => {
        LxNotification({
          title: 'Success',
          message: 'This is a success message',
          type: 'success',
        });
      };

      const open2 = () => {
        LxNotification({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning',
        });
      };

      const open3 = () => {
        LxNotification({
          title: 'Info',
          message: 'This is an info message',
        });
      };

      const open4 = () => {
        LxNotification({
          title: 'Error',
          message: 'This is an error message',
        });
      };
      return {
        open1,
        open2,
        open3,
        open4,
      };
    },
  });

</setup>
-->
```
:::

### カスタム位置

通知は好きなコーナーから出現させることができます。

:::demo `position` 属性は、通知がどのコーナーをスライドするかを定義します。`右上`, `左上`, `右下`, `左下`のいずれかです。デフォルトは `右上`です。
```html
<template>
  <lx-button
    plain
    @click="open1">
    Top Right
  </lx-button>
  <lx-button
    plain
    @click="open2">
    Bottom Right
  </lx-button>
  <lx-button
    plain
    @click="open3">
    Bottom Left
  </lx-button>
  <lx-button
    plain
    @click="open4">
    Top Left
  </lx-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top right corner'
        });
      },

      open2() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom right corner',
          position: 'bottom-right'
        });
      },

      open3() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom left corner',
          position: 'bottom-left'
        });
      },

      open4() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top left corner',
          position: 'top-left'
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { LxNotification } from 'lixi-ui-vue';

  export default defineComponent({
    setup() {
      
      const open1 = () => {
        LxNotification({
          title: 'Custom Position',
          message: 'I\'m at the top right corner',
        });
      };

      const open2 = () => {
        LxNotification({
          title: 'Custom Position',
          message: 'I\'m at the bottom right corner',
          position: 'bottom-right',
        });
      };

      const open3 = () => {
        LxNotification({
          title: 'Custom Position',
          message: 'I\'m at the bottom left corner',
          position: 'bottom-left',
        });
      };

      const open4 = () => {
        LxNotification({
          title: 'Custom Position',
          message: 'I\'m at the top left corner',
          position: 'top-left',
        });
      };
      return {
        open1,
        open2,
        open3,
        open4,
      };
    },
  });

</setup>
-->
```
:::

### オフセット付き

通知の画面端からのオフセットをカスタマイズします。

:::demo 通知の画面端からのオフセットをカスタマイズするために `offset` 属性を設定します。同じ瞬間のすべての Notification インスタンスは同じオフセットを持つべきであることに注意してください。
```html
<template>
  <lx-button
    plain
    @click="open">
    Notification with offset
  </lx-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Success',
          message: 'This is a success message',
          offset: 100
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { LxNotification } from 'lixi-ui-vue';

  export default defineComponent({
    setup() {
      
      const open = () => {
        LxNotification.success({
          title: 'Success',
          message: 'This is a success message',
          offset: 100,
        });
      };

      return {
        open,
      };
    },
  });

</setup>
-->
```
:::

### HTML文字列を使用します。
`message` は HTML 文字列をサポートしています。

:::demo `dangerouslyUseHTMLString` を true に設定すると、`message` は HTML 文字列として扱われます。
```html
<template>
  <lx-button
    plain
    @click="open">
    Use HTML String
  </lx-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify({
          title: 'HTML String',
          dangerouslyUseHTMLString: true,
          message: '<strong>This is <i>HTML</i> string</strong>'
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { LxNotification } from 'lixi-ui-vue';

  export default defineComponent({
    setup() {
      
      const open = () => {
        LxNotification({
          title: 'HTML String',
          dangerouslyUseHTMLString: true,
          message: '<strong>This is <i>HTML</i> string</strong>',
        });
      };

      return {
        open,
      };
    },
  });

</setup>
-->
```
:::

:::warning
`message`プロパティはHTML文字列をサポートしていますが、任意のHTMLを動的にレンダリングすると[XSS攻撃](https://en.wikipedia.org/wiki/Cross-site_scripting)につながりやすく、非常に危険です。したがって、`dangerouslyUseHTMLString`がオンの場合は、`message`の内容が信頼できるものであることを確認し、**決して**ユーザが提供したコンテンツに`message`を代入しないようにしてください。
:::

### 閉じるボタンを隠す

閉じるボタンを非表示にすることができます

:::demo Set the `showClose` attribute to `false` so the notification cannot be closed by the user.
```html
<template>
  <lx-button
    plain
    @click="open">
    Hide close button
    </lx-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Info',
          message: 'This is a message without close button',
          showClose: false
        });
      }
    }
  }
</script>
<!--
<setup>

  import { defineComponent } from 'vue';
  import { LxNotification } from 'lixi-ui-vue';

  export default defineComponent({
    setup() {
      
      const open = () => {
        LxNotification.success({
          title: 'Info',
          message: 'This is a message without close button',
          showClose: false,
        });
      };

      return {
        open,
      };
    },
  });

</setup>
-->
```
:::

### グローバルメソッド

要素には、Vue.prototype用のグローバルメソッド `$notify` が追加されました。これにより、Vueのインスタンスでは、このページで行ったように `Notification` を呼び出すことができるようになります。

### ローカルインポート

```javascript
import { LxNotification } from 'lixi-ui-vue';
```

この場合は `ElNotification(options)` を呼び出す必要があります。また、`ElNotification.success(options)`のように、異なるタイプのメソッドも登録しています。すべてのインスタンスを手動で閉じるには、`ElNotification.closeAll()` を呼び出すことができます。

### オプション
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | タイトル | string | — | — |
| message | デスクリプションテキスト | string/Vue.VNode | — | — |
| dangerouslyUseHTMLString | `message` を HTML 文字列として扱うかどうか | boolean | — | false |
| type | 通知タイプ | string | success/warning/info/error | — |
| iconClass | カスタムアイコンのクラスを指定します。これは `type` によってオーバーライドされます。 | string | — | — |
| customClass | 通知用カスタムクラス名 | string | — | — |
| duration | 閉じる前の期間、0に設定すると自動的には閉じません。 | number | — | 4500 |
| position | カスタムポジション | string | top-right/top-left/bottom-right/bottom-left | top-right |
| showClose | 閉じるボタンを表示するかどうか | boolean | — | true |
| onClose | 閉じる時のコールバック関数 | function | — | — |
| onClick | 通知クリック時のコールバック機能 | function | — | — |
| offset | 画面の上端からスクロールします。同時刻の各通知インスタンスは、常に同じスクロールでなければなりません。 | number | — | 0 |

### メソッド
`通知`と `this.$notify` は現在の通知インスタンスを返します。インスタンスを手動で閉じるには、そのインスタンスに対して `close` を呼び出すことができます。
| Method | Description |
| ---- | ---- |
| close | 通知を閉じる |
