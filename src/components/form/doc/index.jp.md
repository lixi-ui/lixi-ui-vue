## フォーム

フォームは `input`, `radio`, `select`, `checkbox` などから構成されています。フォームを使うと、データを収集したり、検証したり、送信したりすることができます。

:::tip
The component has been upgraded with a flex layout to replace the old float layout.
:::

### 基本フォーム

これには、`input`, `select`, `radio`, `checkbox` などのあらゆる種類の入力項目が含まれます。

:::demo 各 `form` コンポーネントには、入力項目のコンテナとなる `form-item` フィールドが必要です。

```html
<lx-form ref="form" :model="form" label-width="120px">
  <lx-form-item label="Activity name">
    <lx-input v-model="form.name"></lx-input>
  </lx-form-item>
  <lx-form-item label="Activity zone">
    <lx-select v-model="form.region" placeholder="please select your zone">
      <lx-option label="Zone one" value="shanghai"></lx-option>
      <lx-option label="Zone two" value="beijing"></lx-option>
    </lx-select>
  </lx-form-item>
  <lx-form-item label="Activity time">
    <lx-col :span="11">
      <lx-date-picker
        type="date"
        placeholder="Pick a date"
        v-model="form.date1"
        style="width: 100%;"
      ></lx-date-picker>
    </lx-col>
    <lx-col class="line" :span="2">-</lx-col>
    <lx-col :span="11">
      <lx-time-picker
        placeholder="Pick a time"
        v-model="form.date2"
        style="width: 100%;"
      ></lx-time-picker>
    </lx-col>
  </lx-form-item>
  <lx-form-item label="Instant delivery">
    <lx-switch v-model="form.delivery"></lx-switch>
  </lx-form-item>
  <lx-form-item label="Activity type">
    <lx-checkbox-group v-model="form.type">
      <lx-checkbox label="Online activities" name="type"></lx-checkbox>
      <lx-checkbox label="Promotion activities" name="type"></lx-checkbox>
      <lx-checkbox label="Offline activities" name="type"></lx-checkbox>
      <lx-checkbox label="Simple brand exposure" name="type"></lx-checkbox>
    </lx-checkbox-group>
  </lx-form-item>
  <lx-form-item label="Resources">
    <lx-radio-group v-model="form.resource">
      <lx-radio label="Sponsor"></lx-radio>
      <lx-radio label="Venue"></lx-radio>
    </lx-radio-group>
  </lx-form-item>
  <lx-form-item label="Activity form">
    <lx-input type="textarea" v-model="form.desc"></lx-input>
  </lx-form-item>
  <lx-form-item>
    <lx-button type="primary" @click="onSubmit">Create</lx-button>
    <lx-button>Cancel</lx-button>
  </lx-form-item>
</lx-form>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
    },
  }
</script>
```

:::

:::tip
[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) は規制しているのは

> <i>フォーム内に 1 つの単一行テキスト入力フィールドしかない場合、ユーザエージェントは、そのフィールドでの Enter をフォームの送信要求として受け入れるべきである。</i>

この動作を防ぐには、`<lx-form>` に `@submit.prevent` を追加します。
:::

### インラインフォーム

縦のスペースが限られていて、比較的シンプルな形の場合は、一行にまとめることができます。

:::demo `inline` 属性を `true` に設定すると、フォームがインラインになります。

```html
<lx-form :inline="true" :model="formInline" class="demo-form-inline">
  <lx-form-item label="Approved by">
    <lx-input v-model="formInline.user" placeholder="Approved by"></lx-input>
  </lx-form-item>
  <lx-form-item label="Activity zone">
    <lx-select v-model="formInline.region" placeholder="Activity zone">
      <lx-option label="Zone one" value="shanghai"></lx-option>
      <lx-option label="Zone two" value="beijing"></lx-option>
    </lx-select>
  </lx-form-item>
  <lx-form-item>
    <lx-button type="primary" @click="onSubmit">Query</lx-button>
  </lx-form-item>
</lx-form>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: '',
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
    },
  }
</script>
```

:::

### アライメント

デザインに応じて、ラベル要素を揃える方法はいくつかあります。

:::demo `label-position` 属性はラベルの配置を決定します。`top`に設定すると、ラベルはフォームフィールドの一番上に配置されます。

```html
<lx-radio-group v-model="labelPosition" size="small">
  <lx-radio-button label="left">Left</lx-radio-button>
  <lx-radio-button label="right">Right</lx-radio-button>
  <lx-radio-button label="top">Top</lx-radio-button>
</lx-radio-group>
<div style="margin: 20px;"></div>
<lx-form
  :label-position="labelPosition"
  label-width="100px"
  :model="formLabelAlign"
>
  <lx-form-item label="Name">
    <lx-input v-model="formLabelAlign.name"></lx-input>
  </lx-form-item>
  <lx-form-item label="Activity zone">
    <lx-input v-model="formLabelAlign.region"></lx-input>
  </lx-form-item>
  <lx-form-item label="Activity form">
    <lx-input v-model="formLabelAlign.type"></lx-input>
  </lx-form-item>
</lx-form>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: '',
        },
      }
    },
  }
</script>
```

:::

### バリデーション

フォームコンポーネントを使用すると、データを検証してエラーを発見したり修正したりすることができます。

:::demo `Form` コンポーネントに `rules` 属性を追加して検証ルールを渡し、`Form-Item`に `prop` 属性を検証が必要な特定のキーとして設定するだけです。詳細は [async-validator](https://github.com/yiminghe/async-validator) を参照してください。

```html
<lx-form
  :model="ruleForm"
  :rules="rules"
  ref="ruleForm"
  label-width="120px"
  class="demo-ruleForm"
>
  <lx-form-item label="Activity name" prop="name">
    <lx-input v-model="ruleForm.name"></lx-input>
  </lx-form-item>
  <lx-form-item label="Activity zone" prop="region">
    <lx-select v-model="ruleForm.region" placeholder="Activity zone">
      <lx-option label="Zone one" value="shanghai"></lx-option>
      <lx-option label="Zone two" value="beijing"></lx-option>
    </lx-select>
  </lx-form-item>
  <lx-form-item label="Activity time" required>
    <lx-col :span="11">
      <lx-form-item prop="date1">
        <lx-date-picker
          type="date"
          placeholder="Pick a date"
          v-model="ruleForm.date1"
          style="width: 100%;"
        ></lx-date-picker>
      </lx-form-item>
    </lx-col>
    <lx-col class="line" :span="2">-</lx-col>
    <lx-col :span="11">
      <lx-form-item prop="date2">
        <lx-time-picker
          placeholder="Pick a time"
          v-model="ruleForm.date2"
          style="width: 100%;"
        ></lx-time-picker>
      </lx-form-item>
    </lx-col>
  </lx-form-item>
  <lx-form-item label="Instant delivery" prop="delivery">
    <lx-switch v-model="ruleForm.delivery"></lx-switch>
  </lx-form-item>
  <lx-form-item label="Activity type" prop="type">
    <lx-checkbox-group v-model="ruleForm.type">
      <lx-checkbox label="Online activities" name="type"></lx-checkbox>
      <lx-checkbox label="Promotion activities" name="type"></lx-checkbox>
      <lx-checkbox label="Offline activities" name="type"></lx-checkbox>
      <lx-checkbox label="Simple brand exposure" name="type"></lx-checkbox>
    </lx-checkbox-group>
  </lx-form-item>
  <lx-form-item label="Resources" prop="resource">
    <lx-radio-group v-model="ruleForm.resource">
      <lx-radio label="Sponsorship"></lx-radio>
      <lx-radio label="Venue"></lx-radio>
    </lx-radio-group>
  </lx-form-item>
  <lx-form-item label="Activity form" prop="desc">
    <lx-input type="textarea" v-model="ruleForm.desc"></lx-input>
  </lx-form-item>
  <lx-form-item>
    <lx-button type="primary" @click="submitForm('ruleForm')">Create</lx-button>
    <lx-button @click="resetForm('ruleForm')">Reset</lx-button>
  </lx-form-item>
</lx-form>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        rules: {
          name: [
            {
              required: true,
              message: 'Please input Activity name',
              trigger: 'blur',
            },
            {
              min: 3,
              max: 5,
              message: 'Length should be 3 to 5',
              trigger: 'blur',
            },
          ],
          region: [
            {
              required: true,
              message: 'Please select Activity zone',
              trigger: 'change',
            },
          ],
          date1: [
            {
              type: 'date',
              required: true,
              message: 'Please pick a date',
              trigger: 'change',
            },
          ],
          date2: [
            {
              type: 'date',
              required: true,
              message: 'Please pick a time',
              trigger: 'change',
            },
          ],
          type: [
            {
              type: 'array',
              required: true,
              message: 'Please select at least one activity type',
              trigger: 'change',
            },
          ],
          resource: [
            {
              required: true,
              message: 'Please select activity resource',
              trigger: 'change',
            },
          ],
          desc: [
            {
              required: true,
              message: 'Please input activity form',
              trigger: 'blur',
            },
          ],
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
    },
  }
</script>
```

:::

### カスタムバリデーションルール

この例では、独自の検証ルールをカスタマイズして、2 ファクタのパスワード検証を完了させる方法を示しています。

:::demo ここでは、検証結果をアイコンとして反映させるために `status-icon` を用いる。

```html
<lx-form
  :model="ruleForm"
  status-icon
  :rules="rules"
  ref="ruleForm"
  label-width="120px"
  class="demo-ruleForm"
>
  <lx-form-item label="Password" prop="pass">
    <lx-input
      type="password"
      v-model="ruleForm.pass"
      autocomplete="off"
    ></lx-input>
  </lx-form-item>
  <lx-form-item label="Confirm" prop="checkPass">
    <lx-input
      type="password"
      v-model="ruleForm.checkPass"
      autocomplete="off"
    ></lx-input>
  </lx-form-item>
  <lx-form-item label="Age" prop="age">
    <lx-input v-model.number="ruleForm.age"></lx-input>
  </lx-form-item>
  <lx-form-item>
    <lx-button type="primary" @click="submitForm('ruleForm')">Submit</lx-button>
    <lx-button @click="resetForm('ruleForm')">Reset</lx-button>
  </lx-form-item>
</lx-form>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'))
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'))
            } else {
              callback()
            }
          }
        }, 1000)
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'))
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'))
        } else if (value !== this.ruleForm.pass) {
          callback(new Error("Two inputs don't match!"))
        } else {
          callback()
        }
      }
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
        },
        rules: {
          pass: [{ validator: validatePass, trigger: 'blur' }],
          checkPass: [{ validator: validatePass2, trigger: 'blur' }],
          age: [{ validator: checkAge, trigger: 'blur' }],
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
    },
  }
</script>
```

:::

:::tip
カスタムバリデートコールバック関数を呼び出す必要があります。より高度な使い方は [async-validator](https://github.com/yiminghe/async-validator) を参照してください。
:::

### フォーム項目を動的に削除または追加

:::demo フォームコンポーネントにすべてのバリデーションルールを一度に渡すことに加えて、単一のフォームフィールドにバリデーションルールを動的に渡したり削除したりすることもできます。

```html
<lx-form
  :model="dynamicValidateForm"
  ref="dynamicValidateForm"
  label-width="120px"
  class="demo-dynamic"
>
  <lx-form-item
    prop="email"
    label="Email"
    :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
  >
    <lx-input v-model="dynamicValidateForm.email"></lx-input>
  </lx-form-item>
  <lx-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'Domain' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: 'domain can not be null', trigger: 'blur'
    }"
  >
    <lx-input v-model="domain.value"></lx-input
    ><lx-button @click.prevent="removeDomain(domain)">Delete</lx-button>
  </lx-form-item>
  <lx-form-item>
    <lx-button type="primary" @click="submitForm('dynamicValidateForm')"
      >Submit</lx-button
    >
    <lx-button @click="addDomain">New domain</lx-button>
    <lx-button @click="resetForm('dynamicValidateForm')">Reset</lx-button>
  </lx-form-item>
</lx-form>
<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [
            {
              key: 1,
              value: '',
            },
          ],
          email: '',
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
          value: '',
        })
      },
    },
  }
</script>
```

:::

### ナンバーの検証(Number Validate)

:::demo Number Validate では、入力された `v-model` バインディングに `.number` という修飾子を追加する必要がありますが、これは文字列の値を Vuejs が提供する数値に変換するために使われます。

```html
<lx-form
  :model="numberValidateForm"
  ref="numberValidateForm"
  label-width="100px"
  class="demo-ruleForm"
>
  <lx-form-item
    label="age"
    prop="age"
    :rules="[
      { required: true, message: 'age is required'},
      { type: 'number', message: 'age must be a number'}
    ]"
  >
    <lx-input
      type="age"
      v-model.number="numberValidateForm.age"
      autocomplete="off"
    ></lx-input>
  </lx-form-item>
  <lx-form-item>
    <lx-button type="primary" @click="submitForm('numberValidateForm')"
      >Submit</lx-button
    >
    <lx-button @click="resetForm('numberValidateForm')">Reset</lx-button>
  </lx-form-item>
</lx-form>
<script>
  export default {
    data() {
      return {
        numberValidateForm: {
          age: '',
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
    },
  }
</script>
```

:::

:::tip
`lx-form-item` が別の `lx-form-item` に入れ子になっている場合、そのラベルの幅は `0` になります。必要であれば、その `lx-form-item` に `label-width` を設定することもできる。
:::

### サイズコントロール

フォームのすべてのコンポーネントはそのフォームから `size` 属性を継承します。同様に、FormItem にも `size` 属性があります。

:::demo それでも、コンポーネントのサイズを From や FormIten から継承させたくない場合は、各コンポーネントの `size` を微調整することができます。

```html
<lx-form ref="form" :model="sizeForm" label-width="120px" size="mini">
  <lx-form-item label="Activity name">
    <lx-input v-model="sizeForm.name"></lx-input>
  </lx-form-item>
  <lx-form-item label="Activity zone">
    <lx-select v-model="sizeForm.region" placeholder="please select your zone">
      <lx-option label="Zone one" value="shanghai"></lx-option>
      <lx-option label="Zone two" value="beijing"></lx-option>
    </lx-select>
  </lx-form-item>
  <lx-form-item label="Activity time">
    <lx-col :span="11">
      <lx-date-picker
        type="date"
        placeholder="Pick a date"
        v-model="sizeForm.date1"
        style="width: 100%;"
      ></lx-date-picker>
    </lx-col>
    <lx-col class="line" :span="2">-</lx-col>
    <lx-col :span="11">
      <lx-time-picker
        placeholder="Pick a time"
        v-model="sizeForm.date2"
        style="width: 100%;"
      ></lx-time-picker>
    </lx-col>
  </lx-form-item>
  <lx-form-item label="Activity type">
    <lx-checkbox-group v-model="sizeForm.type">
      <lx-checkbox-button
        label="Online activities"
        name="type"
      ></lx-checkbox-button>
      <lx-checkbox-button
        label="Promotion activities"
        name="type"
      ></lx-checkbox-button>
    </lx-checkbox-group>
  </lx-form-item>
  <lx-form-item label="Resources">
    <lx-radio-group v-model="sizeForm.resource" size="medium">
      <lx-radio border label="Sponsor"></lx-radio>
      <lx-radio border label="Venue"></lx-radio>
    </lx-radio-group>
  </lx-form-item>
  <lx-form-item size="large">
    <lx-button type="primary" @click="onSubmit">Create</lx-button>
    <lx-button>Cancel</lx-button>
  </lx-form-item>
</lx-form>

<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
    },
  }
</script>
```

:::

### フォーム属性

| Attribute               | Description                                                                                                                                                               | Type            | Accepted Values       | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------------- | ------- |
| model                   | フォームコンポーネントのデータ                                                                                                                                            | object          | —                     | —       |
| rules                   | フォームのバリデーションルール                                                                                                                                            | object          | —                     | —       |
| inline                  | フォームがインラインであるかどうか                                                                                                                                        | boolean         | —                     | false   |
| label-position          | ラベルの位置。’left'、’right’ もしくは`label-width`が設定されている場合は prop も必要です。                                                                               | string          | left / right / top    | right   |
| label-width             | ラベルの幅、例えば '50px'。直接の子フォーム項目はすべてこの値を継承します。Width `auto` がサポートされています。                                                          | string / number | —                     | —       |
| label-suffix            | ラベルの接尾辞                                                                                                                                                            | string          | —                     | —       |
| hide-required-asterisk  | 必須フィールドのラベルの横に赤いアスタリスク（星）を付けるかどうか                                                                                                        | boolean         | —                     | false   |
| show-message            | エラーメッセージを表示するかどうか                                                                                                                                        | boolean         | —                     | true    |
| inline-message          | エラーメッセージをフォーム項目とインラインで表示するかどうか。                                                                                                            | boolean         | —                     | false   |
| status-icon             | バリデーション結果を示すアイコンを表示するかどうか                                                                                                                        | boolean         | —                     | false   |
| validate-on-rule-change | `rules` prop が変更されたときにバリデーションをトリガするかどうか。                                                                                                       | boolean         | —                     | true    |
| size                    | コンポーネントのサイズを制御する形式                                                                                                                                      | string          | medium / small / mini | —       |
| disabled                | このフォームのすべてのコンポーネントを無効にするかどうかを指定します。true に設定されている場合、内部のコンポーネントの `disabled` プロップで上書きすることはできません。 | boolean         | —                     | false   |

### フォームメソッド

| Method        | Description                                                                                                                                                                                                                                               | Parameters                                                                 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | バリデートはフォーム全体を検証します。パラメータとしてコールバックを受け取ります。バリデーションが通過したかどうかを示すブール値と、バリデーションに失敗したすべてのフィールドを含むオブジェクトです。コールバックが省略された場合は promise を返します。 | Function(callback: Function(boolean, object))                              |
| validateField | フォーム項目を検証する                                                                                                                                                                                                                                    | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields   | すべてのフィールドをリセットし、検証結果を削除します。                                                                                                                                                                                                    | —                                                                          |
| scrollToField | 指定されたフォームフィールドまでスクロールします                                                                                                                                                                                                          | Function(prop: string)                                                     |
| clearValidate | 特定のフィールドのバリデーションメッセージをクリアします。パラメータは prop 名、または検証メッセージが削除されるフォーム項目の prop 名の配列です。省略された場合、すべてのフィールドのバリデーションメッセージがクリアされます。                          | Function(props: string \| array)                                           |

### フォームイベント

| Event Name | Description                                    | Parameters                                                                                            |
| ---------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| validate   | フォーム項目バリデーション後にトリガされます。 | prop name of the form item being validated, whether validation is passed and the error message if not |

### フォームアイテム属性

| Attribute      | Description                                                                                                  | Type            | Accepted Values                     | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------ | --------------- | ----------------------------------- | ------- |
| prop           | `model` のキーです。validate メソッドと resetFields メソッドを利用する際には、この属性が必須です。           | string          | keys of model that passed to `form` |
| label          | ラベル                                                                                                       | string          | —                                   | —       |
| label-width    | ラベルの幅。Width `auto` がサポートされています。                                                            | string / number | —                                   | —       |
| required       | フィールドが必須かどうか、省略された場合はバリデーションルールによって決定されます。                         | boolean         | —                                   | false   |
| rules          | フォームのバリデーションルール                                                                               | object / array  | —                                   | —       |
| error          | フィールドのエラーメッセージ、値を設定すると、フィールドはエラーを検証し、このメッセージをすぐに表示します。 | string          | —                                   | —       |
| show-message   | エラーメッセージを表示するかどうか                                                                           | boolean         | —                                   | true    |
| inline-message | インラインスタイルバリデートメッセージ                                                                       | boolean         | —                                   | false   |
| size           | フォームアイテムのコンポーネントのサイズを制御します。                                                       | string          | medium / small / mini               | —       |

### Rules

| Attribute | Description                    | Type   | Accepted Values | Default |
| --------- | ------------------------------ | ------ | --------------- | ------- |
| trigger   | how the validator is triggered | string | blur / change   | —       |

### フォームアイテムスロット

| Name  | Description                                                                    |
| ----- | ------------------------------------------------------------------------------ |
| —     | フォームアイテムの内容                                                         |
| label | Custom content to display on label. The scope parameter is { label }           |
| error | Custom content to display validation message. The scope parameter is { error } |

### フォームアイテムのメソッド

| Method        | Description                                                | Parameters |
| ------------- | ---------------------------------------------------------- | ---------- |
| resetField    | 現在のフィールドをリセットしてバリデーション結果を削除する | —          |
| clearValidate | フィールドのバリデーションステータスを削除する             | —          |
