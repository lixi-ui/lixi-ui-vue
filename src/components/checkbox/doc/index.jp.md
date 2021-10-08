## Checkbox

複数の選択肢がある場合の選択肢グループ

### 基本的な使い方

checkbox単独で使用して2つの状態を切り替えることができます。

:::demo `lx-checkbox` の `v-model` バインド変数)を定義する。デフォルト値は単一の `checkbox` の場合、 `Boolean` で、チェックを選択した場合は `true` になります。el-checkbox`タグ内の内容は、checkboxのボタンに続く説明文になります。

```html
<template>
  <div>
    <lx-checkbox v-model="checked1" label="Option 1"></lx-checkbox>
    <lx-checkbox v-model="checked2" label="Option 2"></lx-checkbox>
  </div>
  <div>
    <lx-checkbox v-model="checked3" label="Option 1" size="medium"></lx-checkbox>
    <lx-checkbox v-model="checked4" label="Option 2" size="medium"></lx-checkbox>
  </div>
  <div>
    <lx-checkbox v-model="checked5" label="Option 1" size="small"></lx-checkbox>
    <lx-checkbox v-model="checked6" label="Option 2" size="small"></lx-checkbox>
  </div>
  <div>
    <lx-checkbox v-model="checked7" label="Option 1" size="mini"></lx-checkbox>
    <lx-checkbox v-model="checked8" label="Option 2" size="mini"></lx-checkbox>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const checked1 = ref(true);
      const checked2 = ref(false);
      const checked3 = ref(false);
      const checked4 = ref(false);
      const checked5 = ref(false);
      const checked6 = ref(false);
      const checked7 = ref(false);
      const checked8 = ref(false);
      return {
        checked1,
        checked2,
        checked3,
        checked4,
        checked5,
        checked6,
        checked7,
        checked8,
      };
    },
  });

</setup>
-->
```
:::

### 無効状態

checkboxを無効にした状態。

:::demo `disabled` 属性を設定する。

```html
<template>
  <lx-checkbox v-model="checked1" disabled>Option</lx-checkbox>
  <lx-checkbox v-model="checked2" disabled>Option</lx-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const checked1 = ref(false);
      const checked2 = ref(true);
      return {
        checked1,
        checked2,
      };
    },
  });
</setup>
-->
```
:::

### Checkboxグループ

1つのグループに固定された複数のcheckboxに使用され、選択肢が選択されているかどうかをチェックして表示します。

:::demo `checkbox-group` 要素は `Array` としてバインドされた `v-model` を用いて複数のcheckboxを一つのグループにまとめて管理することができる。`lx-checkbox` 要素の内部では、`label` がcheckboxの値である。このタグにコンテンツが入れ子になっていない場合、`label` はcheckboxのボタンに続く説明文としてレンダリングされます。`label` は配列の要素の値にも対応する。 指定された値が配列に存在する場合は選択され、その逆(指定されていない値は選択されない)も同様である。

```html
<template>
  <lx-checkbox-group v-model="checkList">
    <lx-checkbox label="Option A"></lx-checkbox>
    <lx-checkbox label="Option B"></lx-checkbox>
    <lx-checkbox label="Option C"></lx-checkbox>
    <lx-checkbox label="disabled" disabled></lx-checkbox>
    <lx-checkbox label="selected and disabled" disabled></lx-checkbox>
  </lx-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['selected and disabled','Option A']
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const checkList = ref(['selected and disabled','Option A']);
      return {
        checkList,
      };
    },
  });

</setup>
-->
```
:::

### 不確定

`indeterminate`プロパティは「すべてをチェックする」効果を加えるのに役立ちます。

:::demo

```html
<template>
  <lx-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</lx-checkbox>
  <lx-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <lx-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</lx-checkbox>
  </lx-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default defineComponent({
    setup() {
      const state = reactive({
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
        isIndeterminate: true,
      });
      const handleCheckAllChange = (val) => {
        state.checkedCities = val ? cityOptions : [];
        state.isIndeterminate = false;
      };
      const handleCheckedCitiesChange = (value) => {
        const checkedCount = value.length;
        state.checkAll = checkedCount === state.cities.length;
        state.isIndeterminate = checkedCount > 0 && checkedCount < state.cities.length;
      };
      return {
        ...toRefs(state),
        handleCheckAllChange,
        handleCheckedCitiesChange,
      };
    },
  });

</setup>
-->
```
:::

### 最小/最大チェック項目

`min` と `max` プロパティは、チェックする項目の数を制限するのに役立つ。

:::demo

```html
<template>
  <lx-checkbox-group
    v-model="checkedCities"
    :min="1"
    :max="2">
    <lx-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</lx-checkbox>
  </lx-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions
      };
    }
  };
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default defineComponent({
    setup() {
      const state = reactive({
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
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

### ボタンスタイル

ボタンスタイルのcheckbox。

:::demo `EL-CHECKBOX` 要素を `EL-CHECKBOX-BUTTON` 要素に変更すればよい。また、`size` 属性も提供されています。
```html
<template>
  <div>
    <lx-checkbox-group v-model="checkboxGroup1">
      <lx-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lx-checkbox-button>
    </lx-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox-group v-model="checkboxGroup2" size="medium">
      <lx-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lx-checkbox-button>
    </lx-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox-group v-model="checkboxGroup3" size="small">
      <lx-checkbox-button v-for="city in cities" :label="city" :disabled="city === 'Beijing'" :key="city">{{city}}</lx-checkbox-button>
    </lx-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
      <lx-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lx-checkbox-button>
    </lx-checkbox-group>
  </div>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default {
    data () {
      return {
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Shanghai'],
        checkboxGroup3: ['Shanghai'],
        checkboxGroup4: ['Shanghai'],
        cities: cityOptions
      };
    }
  }
</script>
<!--
<setup>

import { defineComponent, reactive, toRefs } from 'vue';

const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

export default defineComponent({
  setup() {
    const state = reactive({
      checkboxGroup1: ['Shanghai'],
      checkboxGroup2: ['Shanghai'],
      checkboxGroup3: ['Shanghai'],
      checkboxGroup4: ['Shanghai'],
      cities: cityOptions,
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

### 境界線をつける

:::demo `border`属性はcheckboxに境界線を追加することができます。
```html
<template>
  <div>
    <lx-checkbox v-model="checked1" label="Option1" border></lx-checkbox>
    <lx-checkbox v-model="checked2" label="Option2" border></lx-checkbox>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox v-model="checked3" label="Option1" border size="medium"></lx-checkbox>
    <lx-checkbox v-model="checked4" label="Option2" border size="medium"></lx-checkbox>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox-group v-model="checkboxGroup1" size="small">
      <lx-checkbox label="Option1" border></lx-checkbox>
      <lx-checkbox label="Option2" border disabled></lx-checkbox>
    </lx-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <lx-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <lx-checkbox label="Option1" border></lx-checkbox>
      <lx-checkbox label="Option2" border></lx-checkbox>
    </lx-checkbox-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: []
      };
    }
  }
</script>
<!--
<setup>

  import { defineComponent, reactive, toRefs } from 'vue';

  export default defineComponent({
    setup() {
      const state = reactive({
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: [],
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

### Checkbox属性
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| model-value / v-model | バインディング値 | string / number / boolean | — | — |
| label     | `checkbox-group` の中で使われる場合のcheckboxの値   | string / number / boolean / object   |       —        |     —    |
| true-label | checkboxがチェックされている場合は、checkboxの値   | string / number    |       —        |     —    |
| false-label | checkboxがチェックされていない場合のcheckboxの値   | string / number    |      —         |     —    |
| disabled  | checkboxを無効にするかどうか   | boolean   |  — | false   |
| border  | checkboxの周りにボーダーを追加するかどうか  | boolean   | — | false   |
| size  | checkboxのサイズ  | string  | medium / small / mini | — |
| name | ネイティブ 'name' 属性 | string    |      —         |     —    |
| checked  | checkboxがチェックされているかどうか  | boolean   |  — | false   |
| indeterminate  | ネイティブcheckboxの `indeterminate` と同じ | boolean   |  — | false   |

### Checkboxのイベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | バインディング値が変更された場合にトリガされます。 | the updated value |

### Checkboxグループの属性
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| model-value / v-model | バインディング値 | array | — | — |
|size | checkboxの大きさ | string | medium / small / mini | — |
| disabled  | ネスティングcheckboxを無効にするかどうか | boolean   | — | false   |
| min     | checkboxの最小チェック数   | number    |       —        |     —    |
| max     | checkboxの最大チェック数   | number    |       —        |     —    |
|text-color | ボタンがアクティブなときのフォント色 | string   | — | #ffffff   |
|fill  | ボタンがアクティブなときの境界線と背景色 | string   | — | #409EFF   |

### Checkboxグループのイベント
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | バインディング値が変更された場合にトリガされます。 | the updated value |

### Checkboxボタンの属性
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| label     | `checkbox-group` の中で使われる場合のcheckboxの値 | string / number / boolean / object  |       —        |     —    |
| true-label | チェックされている場合の、checkboxの値 | string / number | — |     —    |
| false-label | チェックされていない場合の、checkboxの値 | string / number    |      —         |     —    |
| disabled  | checkboxを無効にするかどうか | boolean   |  — | false   |
| name | ネイティブ 'name' 属性 | string    |      —         |     —    |
| checked  | checkboxがチェックされているかどうか | boolean   |  — | false   |
