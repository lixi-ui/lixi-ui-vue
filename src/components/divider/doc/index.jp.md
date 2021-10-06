## Divider(仕切り)

内容を区切る仕切り線。

### 基本的な使い方

異なる段落のテキストを分割します。

:::demo
```html
<template>
  <div>
    <span>I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.</span>
    <lx-divider></lx-divider>
    <span>There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.</span>
  </div>
</template>
```
:::

### カスタムコンテンツ

仕切り線の内容をカスタマイズすることができます。


:::demo
```html
<template>
  <div>
    <span>What you are you do not see, what you see is your shadow. </span>
    <lx-divider content-position="left">Rabindranath Tagore</lx-divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <lx-divider><i class="lx-icon-star-on"></i></lx-divider>
    <span>My wishes are fools, they shout across thy song, my Master. Let me but listen.</span>
    <lx-divider content-position="right">Rabindranath Tagore</lx-divider>
  </div>
</template>
```
:::

### 縦Divider(仕切り)

:::demo
```html
<template>
  <div>
    <span>Rain</span>
    <lx-divider direction="vertical"></lx-divider>
    <span>Home</span>
    <lx-divider direction="vertical"></lx-divider>
    <span>Grass</span>
  </div>
</template>
```
:::

### Divider(仕切り)属性
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| direction      | 仕切りの方向を設定  | string  |          horizontal / vertical           |    horizontal     |
| content-position      | 仕切り線の内容をカスタマイズする | String  |  left / right / center  |  center |
