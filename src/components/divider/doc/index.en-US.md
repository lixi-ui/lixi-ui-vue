## Divider

The dividing line that separates the content.

### Basic usage

Divide the text of different paragraphs.

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

### Custom content

You can customize the content on the divider line.


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

### Vertical divider

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

### Divider Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| direction      | Set divider's direction  | string  |          horizontal / vertical           |    horizontal     |
| content-position      | customize the content on the divider line | String  |  left / right / center  |  center |