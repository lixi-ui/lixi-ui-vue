## Card
cardコンテナに情報を統合する

### 基本的な使い方

cardはタイトル、内容、操作を含む。

:::demo cardは `header` と `body` からなる。ヘッダはオプションであり、その内容の分布はスロットの名前に依存します。
```html
<lx-card class="box-card">
  <template #header>
    <div class="card-header">
      <span>Card name</span>
      <lx-button class="button" type="text">Operation button</lx-button>
    </div>
  </template>
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</lx-card>

<style>
  .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
    
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### シンプルなcard

ヘッダー部分は省略可能です。

:::demo
```html
<lx-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</lx-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### 画像付き

設定を追加することで、よりリッチなコンテンツを表示することができます。

:::demo `body-style` 属性は、カスタム `body` の CSS スタイルを定義します。この例ではレイアウトにも `lx-col` を用いています。
```html
<lx-row>
  <lx-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <lx-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>Yummy hamburger</span>
        <div class="bottom">
          <time class="time">{{ currentDate }}</time>
          <lx-button type="text" class="button">Operating</lx-button>
        </div>
      </div>
    </lx-card>
  </lx-col>
</lx-row>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    padding: 0;
    min-height: auto;
  }

  .image {
    width: 100%;
    display: block;
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const currentDate = ref(new Date());

      return {
        currentDate,
      };
    },
  });

</setup>
-->
```
:::

### シャドウ

cardのシャドウを表示するタイミングを定義することができます。

:::demo `shadow` 属性は、cardの影をいつ表示するかを決定します。`always`, `hover`, `never` のいずれかです。
```html
<lx-row :gutter="12">
  <lx-col :span="8">
    <lx-card shadow="always">
      Always
    </lx-card>
  </lx-col>
  <lx-col :span="8">
    <lx-card shadow="hover">
      Hover
    </lx-card>
  </lx-col>
  <lx-col :span="8">
    <lx-card shadow="never">
      Never
    </lx-card>
  </lx-col>
</lx-row>
```
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| header | cardのタイトルを指定します。`slot#header` で渡された DOM も受け付ける。 | string| — | — |
| body-style | ボディのCSSスタイル | object| — | { padding: '20px' } |
| shadow | cardの影を表示するタイミング | string | always / hover / never | always |
