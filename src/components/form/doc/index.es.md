## Form

Form consiste en `input`, `radio`, `select`, `checkbox`, etcétera. Con el formulario, usted puede recopilar, verificar y enviar datos.

:::tip
The component has been upgraded with a flex layout to replace the old float layout.
:::

### Form básico

Incluye todo tipo de entradas, tales como `input`, `select`, `radio` y `checkbox`.

:::demo En cada componente `form`, necesita un campo `form-item` para que sea el contenedor del ítem.

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
[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) reglamenta que

> <i>Cuando sólo hay un campo de entrada de texto de una sola línea en un formulario, el agente usuario debe aceptar <b>Enter</b> en ese campo como una solicitud para enviar el formulario.</i>

Para prevenir este comportamiento, puede agregar `@submit.prevent` on `<lx-form>`.
:::

### Formulario inline

Cuando el espacio vertical es limitado y la forma es relativamente simple, puede ponerlo en una unica línea.

:::demo Establezca el atributo `inline` como `true` y el formulario sera inline.

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

### Alineamiento

Dependiendo de su diseño, hay varias maneras diferentes de alinear el elemento de la etiqueta.

:::demo Lx atributo `label-position` decide cómo se alinean las etiquetas, puede estar `top` o `left`. Cuando se establece en `top`, las etiquetas se colocarán en la parte superior del campo de formulario.

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

### Validación

El componente `form` le permite verificar sus datos, ayudándole a encontrar y corregir errores.

:::demo Sólo tiene que añadir el atributo `rules` en el componente `Form`, pasar las reglas de validación y establecer el atributo `prop` para `Form-Item` como una clave específica que necesita ser validada. Ver más información en [async-validator](https://github.com/yiminghe/async-validator).

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

### Reglas personalizadas de validación

Este ejemplo muestra cómo personalizar sus propias reglas de validación para finalizar una verificación de contraseña de dos pasos.

:::demo Aquí utilizamos el `status-icon` para reflejar el resultado de la validación como un icono.

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
Se debe llamar a la función de validación de llamada de retorno personalizada. Ver uso más avanzado en [async-validator](https://github.com/yiminghe/async-validator).
:::

### Lximinar o agregar validaciones dinamicamente

:::demo Además de pasar todas las reglas de validación al mismo tiempo en el componente `form`, también puede pasar las reglas de validación o borrar reglas en un único campo de formulario de forma dinámica.

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

### Validación numerica

:::demo La validación numérica necesita un modificador `.number` añadido en el enlace `v-model` de entrada, sirve para transformar el valor de la cadena al número proporcionado por Vuejs.

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

Cuando un `lx-form-item` está anidado en otro `lx-form-item`, su ancho de etiqueta será 0. Si es necesario, puede establecer el ancho de etiqueta en ese `lx-form-item`.

:::

### Tamaño del control

Todos los componentes de un formulario heredan su atributo `size`. De manera similar, FormItem también tiene un atributo `size`.

:::demo Aún así, puede ajustar el `size` de cada componente si no desea que herede su tamaño de From o FormItem.

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

### Form Atributos

| Atributo                | Descripción                                                                                                                                          | Tipo            | Valores aceptados     | Por defecto |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------------- | ----------- |
| model                   | Datos del componente                                                                                                                                 | object          | —                     | —           |
| rules                   | Reglas de validación                                                                                                                                 | object          | —                     | —           |
| inline                  | Si el form es inline                                                                                                                                 | boolean         | —                     | false       |
| label-position          | Posición de la etiqueta                                                                                                                              | string          | left / right / top    | right       |
| label-width             | anchura de la etiqueta, por ejemplo, "50px". Todos sus elementos de formulario hijo directo heredarán este valor. Lx valor `auto` está soportado.    | string / number | —                     | —           |
| label-suffix            | sufijo de la etiqueta                                                                                                                                | string          | —                     | —           |
| hide-required-asterisk  | si los campos obligatorios deben tener un asterisco rojo (estrella) al lado de sus etiquetas                                                         | boolean         | —                     | false       |
| show-message            | si mostrar o no el mensaje de error                                                                                                                  | boolean         | —                     | true        |
| inline-message          | si desea visualizar el mensaje de error inline con la posición del form item                                                                         | boolean         | —                     | false       |
| status-icon             | si desea visualizar un icono que indique el resultado de la validación                                                                               | boolean         | —                     | false       |
| validate-on-rule-change | si se dispara la validación cuando el prop `rules` cambia                                                                                            | boolean         | —                     | true        |
| size                    | el tamaño de los componentes en este form                                                                                                            | string          | medium / small / mini | —           |
| disabled                | si se desactivan todos los componentes del formulario. Si esta en `true` no puede ser cambiado por el prop `disabled` individual de los componentes. | boolean         | —                     | false       |

### Form Metodos

| Metodo        | Descripción                                                                                                                                                                                                                                                                                                                           | Parametros                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| validate      | el método para validar todo el formulario. Recibe una llamada como parámetro. Después de la validación, la llamada de retorno se ejecutará con dos parámetros: un booleano que indica si la validación ha pasado, y un objeto que contiene todos los campos que fallaron en la validación. Devuelve una promesa si se omite el return | Function(callback: Function(boolean, object))                              |
| validateField | validar uno o varios elementos de formulario                                                                                                                                                                                                                                                                                          | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields   | restablece todos los campos y elimina el resultado de validación                                                                                                                                                                                                                                                                      | —                                                                          |
| scrollToField | Scroll to the specified form field                                                                                                                                                                                                                                                                                                    | Function(prop: string)                                                     |
| clearValidate | borra el mensaje de validación para determinados campos. Lx parámetro es un prop name o un array de props names de los items del formulario cuyos mensajes de validación se eliminarán. Si se omiten, se borrarán todos los mensajes de validación de los campos.                                                                     | Function(props: string \| array)                                           |

### Form Events

| Nombre   | Descripción                                          | Parametros                                                                                                                              |
| -------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| validate | se dispara después de validar un ítem del formulario | la propiedad (`prop name`) nombre del ítem del form que se esta validando, si la validación paso o no, y el mensaje de error si existe. |

### Form-Item Atributos

| Atributo       | Descripción                                                                                                          | Tipo            | Valores aceptados                          | Por defecto |
| -------------- | -------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------ | ----------- |
| prop           | un clave del modelo. En el uso del método `validate` y `resetFields`, el atributo es obligatorio.                    | string          | Clave del modelo que se ha pasado a `form` |             |
| label          | etiqueta                                                                                                             | string          | —                                          | —           |
| label-width    | ancho de la etiqueta, Ejemplo: '50px'. Lx valor `auto` esta soportado                                                | string / number | —                                          | —           |
| required       | si el campo es obligatorio o no, estará determinado por las reglas de validación si se omite.                        | boolean         | —                                          | false       |
| rules          | reglas de validación del form, ver más información en [async-validator](https://github.com/yiminghe/async-validator) | object / array  | —                                          | —           |
| error          | mensaje de error de campo, establezca su valor y el campo validará el error y mostrará este mensaje inmediatamente.  | string          | —                                          | —           |
| show-message   | si mostrar o no el mensaje de error                                                                                  | boolean         | —                                          | true        |
| inline-message | mensaje de validación estilo inline                                                                                  | boolean         | —                                          | false       |
| size           | Tamaño de los componentes en este form item                                                                          | string          | medium / small / mini                      | —           |

### Rules

| Atributo | Descripción                    | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------------------ | ------ | ----------------- | ----------- |
| trigger  | how the validator is triggered | string | blur / change     | —           |

### Form-Item Slot

| Nombre | Descripción                                                                                        |
| ------ | -------------------------------------------------------------------------------------------------- |
| —      | contenido del Form Item                                                                            |
| label  | Custom content to display on label. The scope parameter is { label }                               |
| error  | Contenido personalizado para mostrar el mensaje de validación. Lx parámetro del scope es { error } |

### Form-Item Metodo

| Metodo        | Descripción                                                 | Parametros |
| ------------- | ----------------------------------------------------------- | ---------- |
| resetField    | restablecer campo actual y eliminar resultado de validación | —          |
| clearValidate | elimina el estado de la validación de un campo              | —          |
