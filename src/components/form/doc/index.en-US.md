## Form

Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data.

:::tip
The component has been upgraded with a flex layout to replace the old float layout.
:::

### Basic form

It includes all kinds of input items, such as `input`, `select`, `radio` and `checkbox`.

:::demo In each `form` component, you need a `form-item` field to be the container of your input item.

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
[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) regulates that

> <i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i>

To prevent this behavior, you can add `@submit.prevent` on `<lx-form>`.
:::

### Inline form

When the vertical space is limited and the form is relatively simple, you can put it in one line.

:::demo Set the `inline` attribute to `true` and the form will be inline.

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

### Alignment

Depending on your design, there are several different ways to align your label element.

:::demo The `label-position` attribute decides how labels align, it can be `top` or `left`. When set to `top`, labels will be placed at the top of the form field.

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

### Validation

Form component allows you to verify your data, helping you find and correct errors.

:::demo Just add the `rules` attribute for `Form` component, pass validation rules, and set `prop` attribute for `Form-Item` as a specific key that needs to be validated. See more information at [async-validator](https://github.com/yiminghe/async-validator).

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

### Custom validation rules

This example shows how to customize your own validation rules to finish a two-factor password verification.

:::demo Here we use `status-icon` to reflect validation result as an icon.

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
Custom validate callback function must be called. See more advanced usage at [async-validator](https://github.com/yiminghe/async-validator).
:::

### Delete or add form items dynamically

:::demo In addition to passing all validation rules at once on the form component, you can also pass the validation rules or delete rules on a single form field dynamically.

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

### Number Validate

:::demo Number Validate need a `.number` modifier added on the input `v-model` binding，it's used to transform the string value to the number which is provided by Vuejs.

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
When an `lx-form-item` is nested in another `lx-form-item`, its label width will be `0`. You can set `label-width` on that `lx-form-item` if needed.
:::

### Size control

All components in a Form inherit their `size` attribute from that Form. Similarly, FormItem also has a `size` attribute.

:::demo Still you can fine tune each component's `size` if you don't want that component to inherit its size from From or FormIten.

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

### Form Attributes

| Attribute               | Description                                                                                                                       | Type            | Accepted Values       | Default |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------------- | ------- |
| model                   | data of form component                                                                                                            | object          | —                     | —       |
| rules                   | validation rules of form                                                                                                          | object          | —                     | —       |
| inline                  | whether the form is inline                                                                                                        | boolean         | —                     | false   |
| label-position          | position of label. If set to 'left' or 'right', `label-width` prop is also required                                               | string          | left / right / top    | right   |
| label-width             | width of label, e.g. '50px'. All its direct child form items will inherit this value. Width `auto` is supported.                  | string / number | —                     | —       |
| label-suffix            | suffix of the label                                                                                                               | string          | —                     | —       |
| hide-required-asterisk  | whether required fields should have a red asterisk (star) beside their labels                                                     | boolean         | —                     | false   |
| show-message            | whether to show the error message                                                                                                 | boolean         | —                     | true    |
| inline-message          | whether to display the error message inline with the form item                                                                    | boolean         | —                     | false   |
| status-icon             | whether to display an icon indicating the validation result                                                                       | boolean         | —                     | false   |
| validate-on-rule-change | whether to trigger validation when the `rules` prop is changed                                                                    | boolean         | —                     | true    |
| size                    | control the size of components in this form                                                                                       | string          | medium / small / mini | —       |
| disabled                | whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' `disabled` prop | boolean         | —                     | false   |

### Form Methods

| Method        | Description                                                                                                                                                                                                                                                                      | Parameters                                                                 |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted | Function(callback: Function(boolean, object))                              |
| validateField | validate one or several form items                                                                                                                                                                                                                                               | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields   | reset all the fields and remove validation result                                                                                                                                                                                                                                | —                                                                          |
| scrollToField | Scroll to the specified form field                                                                                                                                                                                                                                               | Function(prop: string)                                                     |
| clearValidate | clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared                                                     | Function(props: string \| array)                                           |

### Form Events

| Event Name | Description                             | Parameters                                                                                            |
| ---------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| validate   | triggers after a form item is validated | prop name of the form item being validated, whether validation is passed and the error message if not |

### Form-Item Attributes

| Attribute      | Description                                                                                                                              | Type            | Accepted Values                     | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ----------------------------------- | ------- |
| prop           | a key of `model`. In the use of validate and resetFields method, the attribute is required                                               | string          | keys of model that passed to `form` |
| label          | label                                                                                                                                    | string          | —                                   | —       |
| label-width    | width of label, e.g. '50px'. Width `auto` is supported.                                                                                  | string / number | —                                   | —       |
| required       | whether the field is required or not, will be determined by validation rules if omitted                                                  | boolean         | —                                   | false   |
| rules          | validation rules of form, see the following table, more advanced usage at [async-validator](https://github.com/yiminghe/async-validator) | object / array  | —                                   | —       |
| error          | field error message, set its value and the field will validate error and show this message immediately                                   | string          | —                                   | —       |
| show-message   | whether to show the error message                                                                                                        | boolean         | —                                   | true    |
| inline-message | inline style validate message                                                                                                            | boolean         | —                                   | false   |
| size           | control the size of components in this form-item                                                                                         | string          | medium / small / mini               | —       |

### Rules

| Attribute | Description                    | Type   | Accepted Values | Default |
| --------- | ------------------------------ | ------ | --------------- | ------- |
| trigger   | how the validator is triggered | string | blur / change   | —       |

### Form-Item Slots

| Name  | Description                                                                    |
| ----- | ------------------------------------------------------------------------------ |
| —     | content of Form Item                                                           |
| label | Custom content to display on label. The scope parameter is { label }           |
| error | Custom content to display validation message. The scope parameter is { error } |

### Form-Item Methods

| Method        | Description                                      | Parameters |
| ------------- | ------------------------------------------------ | ---------- |
| resetField    | reset current field and remove validation result | —          |
| clearValidate | remove validation status of the field            | —          |
