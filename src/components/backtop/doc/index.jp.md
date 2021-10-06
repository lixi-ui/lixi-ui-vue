## Backtop

ボタンでトップに戻る

### 基本的な使い方

下にスクロールすると右下のボタンが表示されます。
:::demo

```html
<template>
  Scroll down to see the bottom-right button.
  <lx-backtop target=".page-component__scroll .lx-scrollbar__wrap"></lx-backtop>
</template>
```

:::

### カスタマイズ

表示エリアは40px \* 40pxです。
:::demo

```html
<template>
  Scroll down to see the bottom-right button.
  <lx-backtop target=".page-component__scroll .lx-scrollbar__wrap" :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
  </lx-backtop>
</template>
```

:::

### 属性

| Attribute         | Description                                                         | Type            | Accepted Values | Default |
| ----------------- | ------------------------------------------------------------------- | --------------- | --------------- | ------- |
| target            | スクロール対象                                                        | string          |                 |         |
| visibility-height | ボタンはスクロールの高さがこの値に達するまで表示されません。                  | number |                 | 200     |
| right             | ライトディスタンス                                                     | number |                 | 40      |
| bottom            | ボトムディスタンス                                                     | number |                 | 40      |

### イベント

| Event Name | Description         | Parameters  |
| ---------- | ------------------- | ----------- |
| click      | クリックするとトリガー  | click event |
