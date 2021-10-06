## Button

広く使われている button です。

### 基本的な使い方

:::demo Button のスタイルを定義するには `type`, `plain`, `round`, `circle` を使います。

```html
<lx-row>
  <lx-button>Default</lx-button>
  <lx-button type="primary">Primary</lx-button>
  <lx-button type="success">Success</lx-button>
  <lx-button type="info">Info</lx-button>
  <lx-button type="warning">Warning</lx-button>
  <lx-button type="danger">Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button plain>Plain</lx-button>
  <lx-button type="primary" plain>Primary</lx-button>
  <lx-button type="success" plain>Success</lx-button>
  <lx-button type="info" plain>Info</lx-button>
  <lx-button type="warning" plain>Warning</lx-button>
  <lx-button type="danger" plain>Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button round>Round</lx-button>
  <lx-button type="primary" round>Primary</lx-button>
  <lx-button type="success" round>Success</lx-button>
  <lx-button type="info" round>Info</lx-button>
  <lx-button type="warning" round>Warning</lx-button>
  <lx-button type="danger" round>Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button icon="el-icon-search" circle></lx-button>
  <lx-button type="primary" icon="el-icon-edit" circle></lx-button>
  <lx-button type="success" icon="el-icon-check" circle></lx-button>
  <lx-button type="info" icon="el-icon-message" circle></lx-button>
  <lx-button type="warning" icon="el-icon-star-off" circle></lx-button>
  <lx-button type="danger" icon="el-icon-delete" circle></lx-button>
</lx-row>
```

:::

### 無効化 button

`disabled` 属性は button が無効になっているかどうかを判定します。

:::demo button が無効になっているかどうかを判断するには `disabled` 属性を用いる。これは `Boolean` 値を受け取ります。

```html
<lx-row>
  <lx-button disabled>Default</lx-button>
  <lx-button type="primary" disabled>Primary</lx-button>
  <lx-button type="success" disabled>Success</lx-button>
  <lx-button type="info" disabled>Info</lx-button>
  <lx-button type="warning" disabled>Warning</lx-button>
  <lx-button type="danger" disabled>Danger</lx-button>
</lx-row>

<lx-row>
  <lx-button plain disabled>Plain</lx-button>
  <lx-button type="primary" plain disabled>Primary</lx-button>
  <lx-button type="success" plain disabled>Success</lx-button>
  <lx-button type="info" plain disabled>Info</lx-button>
  <lx-button type="warning" plain disabled>Warning</lx-button>
  <lx-button type="danger" plain disabled>Danger</lx-button>
</lx-row>
```

:::

### テキスト button

枠線と背景のない button です。

:::demo

```html
<lx-button type="text">Text Button</lx-button>
<lx-button type="text" disabled>Text Button</lx-button>
```

:::

### アイコン button

アイコンを使って Button にさらに意味を持たせましょう。アイコンだけでスペースを確保したり、テキストと一緒に使うこともできます。

:::demo アイコンを追加するには `icon` 属性を使います。アイコンのリストは要素のアイコンコンポーネントにあります。テキストの右側にアイコンを追加するには、`<i>` タグを使用します。カスタムアイコンも使用できます。

```html
<lx-button type="primary" icon="el-icon-edit"></lx-button>
<lx-button type="primary" icon="el-icon-share"></lx-button>
<lx-button type="primary" icon="el-icon-delete"></lx-button>
<lx-button type="primary" icon="el-icon-search">Search</lx-button>
<lx-button type="primary"
  >Upload<i class="el-icon-upload el-icon-right"></i
></lx-button>
```

:::

### button グループ

button グループとして表示され、同じよう操作をグループ化することができます。

:::demo button をグループ化するにはタグ `<lx-button-group>` を使用します。

```html
<lx-button-group>
  <lx-button type="primary" icon="el-icon-arrow-left">Previous Page</lx-button>
  <lx-button type="primary"
    >Next Page<i class="el-icon-arrow-right el-icon-right"></i
  ></lx-button>
</lx-button-group>
<lx-button-group>
  <lx-button type="primary" icon="el-icon-edit"></lx-button>
  <lx-button type="primary" icon="el-icon-share"></lx-button>
  <lx-button type="primary" icon="el-icon-delete"></lx-button>
</lx-button-group>
```

:::

### 読み込み button

button をクリックしてデータを読み込むと、読み込み状態が表示されます。

:::demo ロード状態を表示するために `loading` 属性を `true` に設定します。

```html
<lx-button type="primary" :loading="true">Loading</lx-button>
```

:::

### サイズ

Button コンポーネントにはデフォルトサイズの他に、3 つの追加サイズが用意されており、異なるシナリオの中から選択することができます。

:::demo 追加のサイズを `medium`, `small`, `mini` で設定するには、属性 `size` を使用します。

```html
<lx-row>
  <lx-button>Default</lx-button>
  <lx-button size="medium">Medium</lx-button>
  <lx-button size="small">Small</lx-button>
  <lx-button size="mini">Mini</lx-button>
</lx-row>
<lx-row>
  <lx-button round>Default</lx-button>
  <lx-button size="medium" round>Medium</lx-button>
  <lx-button size="small" round>Small</lx-button>
  <lx-button size="mini" round>Mini</lx-button>
</lx-row>
<lx-row>
  <lx-button icon="el-icon-search" circle></lx-button>
  <lx-button icon="el-icon-search" size="medium" circle></lx-button>
  <lx-button icon="el-icon-search" size="small" circle></lx-button>
  <lx-button icon="el-icon-search" size="mini" circle></lx-button>
</lx-row>
```

:::

### Button 属性

| Attribute   | Description                                    | Type    | Accepted values                                    | Default |
| ----------- | ---------------------------------------------- | ------- | -------------------------------------------------- | ------- |
| size        | button サイズ                                  | string  | medium / small / mini                              | —       |
| type        | button タイプ                                  | string  | primary / success / warning / danger / info / text | —       |
| plain       | プレーン button か判定する                     | boolean | —                                                  | false   |
| round       | ラウンド(丸みを持った)button か判定する        | boolean | —                                                  | false   |
| circle      | サークル(丸)button か判定する                  | boolean | —                                                  | false   |
| loading     | 読み込み中か判定する                           | boolean | —                                                  | false   |
| disabled    | button を無効化する                            | boolean | —                                                  | false   |
| icon        | アイコンクラス名                               | string  | —                                                  | —       |
| autofocus   | ネイティブ button の `オートフォーカス` と同じ | boolean | —                                                  | false   |
| native-type | ネイティブ button の `タイプ` と同じ           | string  | button / submit / reset                            | button  |

### Button-Group 属性

| Attribute | Description                                      | Type   | Accepted Values       | Default |
| --------- | ------------------------------------------------ | ------ | --------------------- | ------- |
| size      | control the size of buttons in this button-group | string | medium / small / mini | —       |

### Button-Group スロット

| Name    | Description                    |
| ------- | ------------------------------ |
| default | customize button group content |
