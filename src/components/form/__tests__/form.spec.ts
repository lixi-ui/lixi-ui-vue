import { nextTick } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import installStyle from '@lixi/test-utils/style-plugin'
import Checkbox from '@lixi/components/checkbox/src/checkbox.vue'
import CheckboxGroup from '@lixi/components/checkbox/src/checkbox-group.vue'
import Input from '@lixi/components/input/src/index.vue'
import Form from '../src/form.vue'
import FormItem from '../src/form-item.vue'

type Methods = Record<string, () => any>
function mountForm<D, M extends Methods, C>(
  config: C & { data?(): D; methods?: M; },
) {
  return mount({
    components: {
      [Form.name]: Form,
      [FormItem.name]: FormItem,
      [Input.name]: Input,
      [Checkbox.name]: Checkbox,
      [CheckboxGroup.name]: CheckboxGroup,
    },
    ...config,
  })
}

function findStyle(wrapper: VueWrapper<any>, selector: string) {
  return wrapper.find<HTMLElement>(selector).element.style
}

describe('Form', () => {
  beforeAll(installStyle)

  test('label width', async () => {
    const wrapper = mountForm({
      template: `
        <lx-form ref="form" :model="form" label-width="80px">
          <lx-form-item label="Activity Name">
            <lx-input v-model="form.name"></lx-input>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            name: '',
          },
        }
      },
    })
    expect(findStyle(wrapper, '.lx-form-item__label').width).toBe('80px')
  })

  test('auto label width', async() => {
    const wrapper = mountForm({
      template: `
        <lx-form ref="form" :model="form" label-width="auto" :label-position="labelPosition">
          <lx-form-item label="Name">
            <lx-input v-model="form.name"></lx-input>
          </lx-form-item>
          <lx-form-item label="Intro">
            <lx-input v-model="form.intro"></lx-input>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            name: '',
            intro: '',
          },
          labelPosition: 'right',
        }
      },
    })

    await nextTick()

    const formItems = wrapper.findAll<HTMLElement>('.lx-form-item__content')
    const marginLeft = parseInt(formItems[0].element.style.marginLeft, 10)
    const marginLeft1 = parseInt(formItems[1].element.style.marginLeft, 10)
    expect(marginLeft).toEqual(marginLeft1)

    wrapper.vm.labelPosition = 'left'
    await nextTick()

    const formItems1 = wrapper.findAll<HTMLElement>('.lx-form-item__content')
    const marginRight = parseInt(formItems1[0].element.style.marginRight, 10)
    const marginRight1 = parseInt(formItems1[1].element.style.marginRight, 10)
    expect(marginRight).toEqual(marginRight1)
  })

  test('form-item auto label width', async() => {
    const wrapper = mountForm({
      template: `
        <lx-form ref="form" label-position="right" label-width="150px" :model="form">
          <lx-form-item label="??????">
            <lx-input v-model="form.name" />
          </lx-form-item>
          <lx-form-item label="????????????" label-width="auto">
            <lx-input v-model="form.region" />
          </lx-form-item>
          <lx-form-item label="????????????(???????????????????????????????????????label)" label-width="auto">
            <lx-input v-model="form.type" />
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            name: '',
            region: '',
            type: '',
          },
        }
      },
    })

    await nextTick()

    const formItemLabels = wrapper.findAll<HTMLElement>('.lx-form-item__label')
    const formItemLabelWraps = wrapper.findAll<HTMLElement>('.lx-form-item__label-wrap')

    const labelWrapMarginLeft1 = formItemLabelWraps[0].element.style.marginLeft
    const labelWrapMarginLeft2 = formItemLabelWraps[1].element.style.marginLeft
    expect(labelWrapMarginLeft1).toEqual(labelWrapMarginLeft2)
    expect(labelWrapMarginLeft2).toEqual('')

    const labelWidth0 = parseInt(formItemLabels[0].element.style.width, 10)
    expect(labelWidth0).toEqual(150)
    const labelWidth1 = formItemLabels[1].element.style.width
    const labelWidth2 = formItemLabels[2].element.style.width
    expect(labelWidth1).toEqual(labelWidth2)
    expect(labelWidth2).toEqual('auto')
  })

  test('inline form', () => {
    const wrapper = mountForm({
      template: `
        <lx-form ref="form" :model="form" inline>
          <lx-form-item>
            <lx-input v-model="form.name"></lx-input>
          </lx-form-item>
          <lx-form-item>
            <lx-input v-model="form.address"></lx-input>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            name: '',
            address: '',
          },
        }
      },
    })
    expect(wrapper.classes()).toContain('lx-form--inline')
  })

  test('label position', () => {
    const wrapper = mountForm({
      template: `
        <div>
          <lx-form :model="form" label-position="top" ref="labelTop">
            <lx-form-item>
              <lx-input v-model="form.name"></lx-input>
            </lx-form-item>
            <lx-form-item>
              <lx-input v-model="form.address"></lx-input>
            </lx-form-item>
          </lx-form>
          <lx-form :model="form" label-position="left" ref="labelLeft">
            <lx-form-item>
              <lx-input v-model="form.name"></lx-input>
            </lx-form-item>
            <lx-form-item>
              <lx-input v-model="form.address"></lx-input>
            </lx-form-item>
          </lx-form>
        </div>
      `,
      data() {
        return {
          form: {
            name: '',
            address: '',
          },
        }
      },
    })
    expect(wrapper.findComponent({ ref: 'labelTop' }).classes()).toContain('lx-form--label-top')
    expect(wrapper.findComponent({ ref: 'labelLeft' }).classes()).toContain('lx-form--label-left')
  })

  test('label size', () => {
    const wrapper = mountForm({
      template: `
        <div>
          <lx-form :model="form" size="mini" ref="labelMini">
            <lx-form-item>
              <lx-input v-model="form.name"></lx-input>
            </lx-form-item>
          </lx-form>
        </div>
      `,
      data() {
        return {
          form: {
            name: '',
          },
        }
      },
    })
    expect(wrapper.findComponent(FormItem).classes()).toContain('lx-form-item--mini')
  })

  test('show message', done => {
    const wrapper = mountForm({
      template: `
        <lx-form :model="form" ref="form">
          <lx-form-item label="Name" prop="name" :show-message="false"
            :rules="{
              required: true,
              message: 'Please input name',
              trigger: 'change',
              min: 3,
              max: 6
            }"
          >
            <lx-input v-model="form.name"></lx-input>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            name: '',
          },
        }
      },
    })
    const form: any = wrapper.findComponent(Form).vm
    form.validate(async valid => {
      expect(valid).toBe(false)
      await nextTick()
      expect(wrapper.find('.lx-form-item__error').exists()).toBe(false)
      done()
    })
  })

  test('reset field', async () => {
    const wrapper = mountForm({
      template: `
        <lx-form ref="form" :model="form" :rules="rules">
          <lx-form-item label="name" prop="name">
            <lx-input v-model="form.name" ref="fieldName"></lx-input>
          </lx-form-item>
          <lx-form-item label="address" prop="address">
            <lx-input v-model="form.address" ref="fieldAddr"></lx-input>
          </lx-form-item>
          <lx-form-item label="type" prop="type">
            <lx-checkbox-group v-model="form.type">
              <lx-checkbox label="type1" name="type"></lx-checkbox>
              <lx-checkbox label="type2" name="type"></lx-checkbox>
              <lx-checkbox label="type3" name="type"></lx-checkbox>
              <lx-checkbox label="type4" name="type"></lx-checkbox>
            </lx-checkbox-group>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            name: '',
            address: '',
            type: [],
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'blur' },
            ],
            address: [
              { required: true, message: 'Please input address', trigger: 'change' },
            ],
            type: [
              { type: 'array', required: true, message: 'Please input type', trigger: 'change' },
            ],
          },
        }
      },
      methods: {
        setValue() {
          this.form.name = 'jack'
          this.form.address = 'aaaa'
          this.form.type.push('type1')
        },
      },
    })
    const vm = wrapper.vm
    vm.setValue()
    const form: any = wrapper.findComponent({ ref: 'form' }).vm
    form.resetFields()
    await nextTick()
    expect(vm.form.name).toBe('')
    expect(vm.form.address).toBe('')
    expect(vm.form.type.length).toBe(0)
  })

  test('clear validate', async () => {
    const wrapper = mountForm({
      template: `
        <lx-form ref="form" :model="form" :rules="rules">
          <lx-form-item label="name" prop="name" ref="name">
            <lx-input v-model="form.name"></lx-input>
          </lx-form-item>
          <lx-form-item label="address" prop="address" ref="address">
            <lx-input v-model="form.address"></lx-input>
          </lx-form-item>
          <lx-form-item label="type" prop="type">
            <lx-checkbox-group v-model="form.type">
              <lx-checkbox label="type1" name="type"></lx-checkbox>
              <lx-checkbox label="type2" name="type"></lx-checkbox>
              <lx-checkbox label="type3" name="type"></lx-checkbox>
              <lx-checkbox label="type4" name="type"></lx-checkbox>
            </lx-checkbox-group>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            name: '',
            address: '',
            type: [],
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'blur' },
            ],
            address: [
              { required: true, message: 'Please input address', trigger: 'change' },
            ],
            type: [
              { type: 'array', required: true, message: 'Please input type', trigger: 'change' },
            ],
          },
        }
      },
    })
    const form: any = wrapper.findComponent({ ref: 'form' }).vm
    const nameField: any = wrapper.findComponent({ ref: 'name' }).vm
    const addressField: any = wrapper.findComponent({ ref: 'address' }).vm
    await form.validate().catch(() => undefined)
    await nextTick()
    expect(nameField.validateMessage).toBe('Please input name')
    expect(addressField.validateMessage).toBe('Please input address')
    form.clearValidate(['name'])
    await nextTick()
    expect(nameField.validateMessage).toBe('')
    expect(addressField.validateMessage).toBe('Please input address')
    form.clearValidate()
    await nextTick()
    expect(addressField.validateMessage).toBe('')
  })

  test('scroll to field', () => {
    const wrapper = mountForm({
      template: `
        <div>
          <lx-form ref="form">
            <lx-form-item prop="name" ref="formItem">
              <lx-input></lx-input>
            </lx-form-item>
          </lx-form>
        </div>
      `,
      data() {
        return {
          form: {
            name: '',
          },
        }
      },
    })

    const oldScrollIntoView = window.HTMLElement.prototype.scrollIntoView

    const scrollIntoViewMock = jest.fn()
    window.HTMLElement.prototype.scrollIntoView = function() { scrollIntoViewMock(this) }

    const form: any = wrapper.findComponent({ ref: 'form' }).vm
    form.scrollToField('name')
    expect(scrollIntoViewMock).toHaveBeenCalledWith(wrapper.findComponent({ ref: 'formItem' }).element)

    window.HTMLElement.prototype.scrollIntoView = oldScrollIntoView
  })

  /*
  test('form item nest', done => {
    const wrapper = mountForm({
      template: `
        <lx-form ref="form" :model="form" :rules="rules">
          <lx-form-item label="????????????" required>
            <lx-col :span="11">
              <lx-form-item prop="date1">
                <lx-date-picker type="date" placeholder="????????????" v-model="form.date1" style="width: 100%"></lx-date-picker>
              </lx-form-item>
            </lx-col>
            <lx-col class="line" :span="2">-</lx-col>
            <lx-col :span="11">
              <lx-form-item prop="date2">
                <lx-time-picker placeholder="????????????" v-model="form.date2" style="width: 100%"></lx-time-picker>
              </lx-form-item>
            </lx-col>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            date1: '',
            date2: ''
          },
          rules: {
            date1: [
              { type: 'date', required: true, message: '???????????????', trigger: 'change' }
            ]
          }
        }
      },
      methods: {
        setValue() {
          this.name = 'jack'
          this.address = 'aaaa'
        }
      }
    })
    vm.$refs.form.validate(valid => {
      expect(valid).to.not.true
      done()
    })
  })
  */


  /*
  test('validate event', async done => {
    const wrapper = mountForm({
      template: `
          <lx-form :model="form" :rules="rules" ref="form" @validate="onValidate">
            <lx-form-item label="name" prop="name" ref="name">
              <lx-input v-model="form.name"></lx-input>
            </lx-form-item>
            <lx-form-item label="????????????" prop="addr" ref="addr">
              <lx-input v-model="form.addr"></lx-input>
            </lx-form-item>
          </lx-form>
        `,
      data() {
        return {
          form: {
            name: '',
            addr: ''
          },
          valid: {
            name: null,
            addr: null
          },
          error: {
            name: null,
            addr: null
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'change', min: 3, max: 6 }
            ],
            addr: [
              { required: true, message: 'Please input name', trigger: 'change' }
            ]
          }
        }
      },
      methods: {
        onValidate(prop, valid, msg) {
          this.valid[prop] = valid
          this.error[prop] = msg
        },
        setValue(prop, value) {
          this.form[prop] = value
        }
      }
    })
    const vm = wrapper.vm
    vm.setValue('name', '1')
    await nextTick()
    expect(vm.valid.name).toBe(false)
    expect(vm.error.name).toBe('Please input name')
    vm.setValue('addr', '1')
    await nextTick()
    expect(vm.valid.addr).toBe(true)
    expect(vm.error.addr).toBe(null)
    vm.setValue('name', '111')
    await nextTick()
    expect(vm.valid.name).toBe(true)
    expect(vm.error.name).toBe(null)
    done()
  })
  */
})

/*
awaiting other components complete
describe('validate', () => {
  test('input', async () => {
    const wrapper = mountForm({
      template: `
        <lx-form :model="form" :rules="rules" ref="form">
          <lx-form-item label="name" prop="name" ref="field">
            <lx-input v-model="form.name"></lx-input>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            name: ''
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'change', min: 3, max: 6 }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.name = value
        }
      }
    })
    const vm = wrapper.vm
    const form: any = wrapper.findComponent({ref: 'form'}).vm
    const valid = await form.validate()
      .then(() => true)
      .catch(e => false)
    expect(valid).toBe(false)
    const field: any = wrapper.findComponent({ref: 'field'}).vm
    expect(field.validateMessage).toBe('Please input name')
    vm.setValue('aaaaa')
    await nextTick()
    expect(field.validateMessage).toBe('')
    vm.setValue('aa')
    await nextTick()
    expect(field.validateMessage).toBe('Please input name')
  })

  test('textarea', async () => {
    const wrapper = mountForm({
      template: `
        <lx-form :model="form" :rules="rules" ref="form">
          <lx-form-item label="name" prop="name" ref="field">
            <lx-input type="textarea" v-model="form.name"></lx-input>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            name: ''
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'change', min: 3, max: 6 }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.name = value
        }
      }
    })
    const vm = wrapper.vm
    const form: any = wrapper.findComponent({ref: 'form'}).vm
    const valid = await form.validate()
      .then(() => true)
      .catch(e => false)
    expect(valid).toBe(false)
    const field: any = wrapper.findComponent({ref: 'field'}).vm
    await nextTick()
    expect(field.validateMessage).toBe('Please input name')
    vm.setValue('aaaaa')
    await nextTick()
    expect(field.validateMessage).toBe('')
    vm.setValue('aa')
    await nextTick()
    expect(field.validateMessage).toBe('Please input name')
  })

  test('selector', done => {
    const wrapper = mountForm({
      template: `
        <lx-form :model="form" :rules="rules" ref="form">
          <lx-form-item label="????????????" prop="region" ref="field">
            <lx-select v-model="form.region" placeholder="?????????????????????">
              <lx-option label="?????????" value="shanghai"></lx-option>
              <lx-option label="?????????" ref="opt" value="beijing"></lx-option>
            </lx-select>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            region: ''
          },
          rules: {
            region: [
              {required: true, message: '?????????????????????', trigger: 'change' }
            ]
          }
        }
      }
    })
    vm.$refs.form.validate(valid => {
      let field = vm.$refs.field
      expect(valid).to.false
      setTimeout(_ => {
        expect(field.validateMessage).toBe('?????????????????????')
        // programatic modification triggers change validation
        vm.form.region = 'shanghai'
        setTimeout(_ => {
          expect(field.validateMessage).toBe('')
          vm.form.region = ''
          setTimeout(_ => {
            expect(field.validateMessage).toBe('?????????????????????')
            // user modification of bound value triggers change validation
            vm.$refs.opt.$el.click()
            setTimeout(_ => {
              expect(field.validateMessage).toBe('')
              done()
            }, 100)
          }, 100)
        }, 100)
      }, 100)
    })
  })
  test('datepicker', done => {
    const wrapper = mountForm({
      template: `
        <lx-form :model="form" :rules="rules" ref="form">
          <lx-form-item label="????????????" prop="date" ref="field">
            <lx-date-picker type="date" ref="picker" placeholder="????????????" v-model="form.date" style="width: 100%"></lx-date-picker>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            date: ''
          },
          rules: {
            date: [
              {type: 'date', required: true, message: '???????????????', trigger: 'change' }
            ]
          }
        }
      }
    })
    vm.$refs.form.validate(valid => {
      let field = vm.$refs.field
      expect(valid).to.not.true
      setTimeout(_ => {
        expect(field.validateMessage).toBe('???????????????')
        // programatic modification triggers change validation
        vm.form.date = new Date()
        setTimeout(_ => {
          expect(field.validateMessage).toBe('')
          vm.form.date = ''
          // user modification triggers change
          const input = vm.$refs.picker.$el.querySelector('input')
          input.blur()
          input.focus()
          setTimeout(_ => {
            const keyDown = (el, keyCode) => {
              const evt = document.createEvent('Events')
              evt.initEvent('keydown')
              evt.keyCode = keyCode
              el.dispatchEvent(evt)
            }
            keyDown(input, 37)
            setTimeout(_ => {
              keyDown(input, 13)
              setTimeout(_ => {
                expect(field.validateMessage).toBe('')
                done()
              }, DELAY)
            }, DELAY)
          }, DELAY)
        }, DELAY)
      }, DELAY)
    })
  })
  test('timepicker', done => {
    const wrapper = mountForm({
      template: `
        <lx-form :model="form" :rules="rules" ref="form">
          <lx-form-item label="????????????" prop="date" ref="field">
            <lx-time-picker ref="picker" placeholder="????????????" v-model="form.date" style="width: 100%"></lx-time-picker>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            date: ''
          },
          rules: {
            date: [
              {type: 'date', required: true, message: '???????????????', trigger: 'change' }
            ]
          }
        }
      }
    })
    vm.$refs.form.validate(valid => {
      let field = vm.$refs.field
      expect(valid).to.not.true
      setTimeout(_ => {
        expect(field.validateMessage).toBe('???????????????')
        // programatic modification does not trigger change
        vm.value = new Date()
        setTimeout(_ => {
          expect(field.validateMessage).toBe('???????????????')
          vm.value = ''
          // user modification triggers change
          const input = vm.$refs.picker.$el.querySelector('input')
          input.blur()
          input.focus()
          setTimeout(_ => {
            vm.$refs.picker.picker.$el.querySelector('.confirm').click()
            setTimeout(_ => {
              expect(field.validateMessage).toBe('')
              done()
            }, DELAY)
          }, DELAY)
        }, DELAY)
      }, DELAY)
    })
  })
  test('checkbox', async done => {
    const wrapper = mountForm({
      template: `
        <lx-form :model="form" :rules="rules" ref="form">
          <lx-form-item label="Accept Term" prop="accept" ref="field">
            <lx-checkbox v-model="form.accept">
              <span>Accept</span>
            </lx-checkbox>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            accept: true
          },
          rules: {
            accept: [
              {
                validator: (rule, value, callback) => {
                  value ? callback() : callback(new Error('You need accept terms'))
                },
                trigger: 'change'
              }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.accept = value
        }
      }
    })
    const vm = wrapper.vm
    vm.form.accept = false
    await nextTick()
    expect(vm.$refs.field.validateMessage).toBe('You need accept terms')
    const valid = await vm.$refs.form.validate()
      .then(() => true, () => false)
      expect(valid).toBe(false)
      let field: any = vm.$refs.field
      expect(field.validateMessage).toBe('You need accept terms')
      await nextTick()
      vm.setValue(true)
      await nextTick()
      expect(field.validateMessage).toBe('')
  })

  test('checkbox group', done => {
    const wrapper = mountForm({
      template: `
        <lx-form :model="form" :rules="rules" ref="form">
          <lx-form-item label="name" prop="type" ref="field">
            <lx-checkbox-group v-model="form.type">
              <lx-checkbox label="type1" name="type"></lx-checkbox>
              <lx-checkbox label="type2" name="type"></lx-checkbox>
              <lx-checkbox label="type3" name="type"></lx-checkbox>
              <lx-checkbox label="type4" name="type"></lx-checkbox>
            </lx-checkbox-group>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            type: []
          },
          rules: {
            type: [
              { type: 'array', required: true, message: 'Please select type', trigger: 'change' }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.type = value
        }
      }
    })
    const vm = wrapper.vm
    const form: any = wrapper.findComponent({ref: 'form'}).vm
    form.validate(async valid => {
      let field: any = vm.$refs.field
      expect(valid).toBe(false)
      await nextTick()
      expect(field.validateMessage).toBe('Please select type')
      vm.setValue(['type4'])
      await nextTick()
      expect(field.validateMessage).toBe('')
      done()
    })
  })

  test('radio group', done => {
    const wrapper = mountForm({
      template: `
        <lx-form :model="form" :rules="rules" ref="form">
          <lx-form-item label="name" prop="type" ref="field">
            <lx-radio-group v-model="form.type">
              <lx-radio label="type1"></lx-radio>
              <lx-radio label="type2"></lx-radio>
            </lx-radio-group>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            type: ''
          },
          rules: {
            type: [
              { required: true, message: 'Please select type', trigger: 'change' }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.type = value
        }
      }
    })
    const vm = wrapper.vm
    const form: any = wrapper.findComponent({ref: 'form'}).vm
    form.validate(async valid => {
      let field: any = vm.$refs.field
      expect(valid).toBe(false)
      await nextTick()
      expect(field.validateMessage).toBe('Please select type')
      vm.setValue(['type2'])
      await nextTick()
      expect(field.validateMessage).toBe('')
      done()
    })
  })

  test('validate field', done => {
    const wrapper = mountForm({
      template: `
        <lx-form :model="form" :rules="rules" ref="form">
          <lx-form-item label="name" prop="name" ref="field">
            <lx-input v-model="form.name"></lx-input>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            name: ''
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'change', min: 3, max: 6 }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.name = value
        }
      }
    })
    const vm: any = wrapper.vm
    vm.$refs.form.validateField('name', valid => {
      expect(valid).toBe(false)
      done()
    })
  })

  test('custom validate', done => {
    var checkName = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('length must be at least 5'))
      } else {
        callback()
      }
    }
    const wrapper = mountForm({
      template: `
        <lx-form :model="form" :rules="rules" ref="form">
          <lx-form-item label="name" prop="name" ref="field">
            <lx-input v-model="form.name"></lx-input>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            name: ''
          },
          rules: {
            name: [
              { validator: checkName, trigger: 'change' }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.name = value
        }
      }
    })
    const vm: any = wrapper.vm

    vm.$refs.form.validate(async valid => {
      let field = vm.$refs.field
      expect(valid).toBe(false)
      await nextTick()
      expect(field.validateMessage).toBe('length must be at least 5')
      vm.setValue('aaaaaa')
      await nextTick()
      expect(field.validateMessage).toBe('')
      done()
    })
  })

  test('error', done => {
    const wrapper = mountForm({
      template: `
        <lx-form :model="form" :rules="rules" ref="form">
          <lx-form-item label="name" prop="name" :error="error" ref="field">
            <lx-input v-model="form.name"></lx-input>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          error: 'dsad',
          form: {
            name: 'sada'
          },
          rules: {
            name: [
              { required: true, message: 'Please input name', trigger: 'change', min: 3, max: 6 }
            ]
          }
        }
      },
      methods: {
        setValue(value) {
          this.form.name = value
        }
      }
    })
    const vm: any = wrapper.vm
    vm.$refs.form.validate(async valid => {
      let field = vm.$refs.field
      expect(valid).toBe(true)
      vm.error = 'illegal input'
      await nextTick()
      expect(field.validateState).toBe('error')
      expect(field.validateMessage).toBe('illegal input')
      done()
    })
  })

  test('invalid fields', done => {
    var checkName = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('length must be at least 5'))
      } else {
        callback()
      }
    }
    const wrapper = mountForm({
      template: `
        <lx-form :model="form" :rules="rules" ref="form">
          <lx-form-item label="name" prop="name" ref="field">
            <lx-input v-model="form.name"></lx-input>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            name: ''
          },
          rules: {
            name: [
              { validator: checkName, trigger: 'change' }
            ]
          }
        }
      }
    })
    const vm: any = wrapper.vm
    vm.$refs.form.validate((valid, invalidFields) => {
      expect(invalidFields.name.length).toBe(1)
      done()
    })
  })

  test('validate return promise', async done => {
    var checkName = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('length must be at least 5'))
      } else {
        callback()
      }
    }
    const wrapper = mountForm({
      template: `
        <lx-form :model="form" :rules="rules" ref="form">
          <lx-form-item label="name" prop="name" ref="field">
            <lx-input v-model="form.name"></lx-input>
          </lx-form-item>
        </lx-form>
      `,
      data() {
        return {
          form: {
            name: ''
          },
          rules: {
            name: [
              { validator: checkName, trigger: 'change' }
            ]
          }
        }
      }
    })
    const vm: any = wrapper.vm
    try {
      vm.$refs.form.validate()
    } catch (e) {
      expect(e).toBeDefined()
      done()
    }
  })
})
*/
