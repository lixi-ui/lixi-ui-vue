import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Checkbox from '../src/checkbox.vue'
import CheckboxButton from '../src/checkbox-button.vue'
import CheckboxGroup from '../src/checkbox-group.vue'

const _mount = <D>(template: string, data: () => D, otherObj?: Record<string, unknown>) => mount<D>({
  components: {
    'lx-checkbox': Checkbox,
    'lx-checkbox-group': CheckboxGroup,
    'lx-checkbox-button': CheckboxButton,
  },
  template,
  data,
  ...otherObj,
})

describe('Checkbox', () => {
  test('create', async () => {
    const wrapper = _mount('<lx-checkbox v-model="checkbox" label="a"/>', () => ({ checkbox: false }))
    expect(wrapper.classes()).toContain('lx-checkbox')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-checked')
    await wrapper.trigger('click')
    expect(wrapper.classes('is-checked')).toBe(false)
  })

  test('no v-model', async () => {
    const wrapper = _mount('<lx-checkbox label="a"/>', () => ({ checkbox: false }))
    expect(wrapper.classes('is-checked')).toBe(false)
  })

  test('disabled', async () => {
    const wrapper = _mount('<lx-checkbox v-model="checkbox" disabled label="a"/>', () => ({ checkbox: false }))
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-disabled')
  })

  test('change event', async () => {
    const wrapper = _mount(
      `<lx-checkbox v-model="checked" @change="onChange" />`,
      () => ({
        data: null,
        checked: false,
      }),
      {
        methods: {
          onChange(val: boolean) {
            this.data = val
          },
        },
      },
    )

    const vm = wrapper.vm
    await wrapper.trigger('click')
    expect(vm.data).toBe(true)
  })

  test('checkbox group', async () => {
    const wrapper = _mount(
      `
      <lx-checkbox-group v-model="checkList">
        <lx-checkbox label="a" ref="a"></lx-checkbox>
        <lx-checkbox label="b" ref="b"></lx-checkbox>
        <lx-checkbox label="c" ref="c"></lx-checkbox>
        <lx-checkbox label="d" ref="d"></lx-checkbox>
      </lx-checkbox-group>
      `,
      () => ({ checkList: [] }),
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(0)
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    expect(vm.checkList.length).toBe(1)
    expect(vm.checkList).toContain('a')
    await wrapper.findComponent({ ref: 'b' }).trigger('click')
    expect(vm.checkList.length).toBe(2)
    expect(vm.checkList).toContain('a')
    expect(vm.checkList).toContain('b')
  })

  test('checkbox group change', async () => {
    const wrapper = _mount(
      `
      <lx-checkbox-group v-model="checkList" @change="onChange">
        <lx-checkbox label="a" ref="a"></lx-checkbox>
        <lx-checkbox label="b" ref="b"></lx-checkbox>
      </lx-checkbox-group>
      `,
      () => ({ checkList: [], data: null }),
      {
        methods: {
          onChange(val: string[]) {
            this.data = val
          },
        },
      },
    )
    const vm = wrapper.vm
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    await nextTick()
    expect(vm.data.length).toBe(1)
    expect(vm.data).toEqual(['a'])
  })

  test('nested group', async () => {
    const wrapper = _mount(
      `
      <lx-checkbox-group v-model="checkList">
        <div>
          <lx-checkbox label="a" ref="a"></lx-checkbox>
          <lx-checkbox label="b" ref="b"></lx-checkbox>
          <lx-checkbox label="c" ref="c"></lx-checkbox>
          <lx-checkbox label="d" ref="d"></lx-checkbox>
        </div>
      </lx-checkbox-group>
      `,
      () => ({ checkList: [] }),
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(0)
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    expect(vm.checkList).toEqual(['a'])
  })

  test('true false label', async () => {
    const wrapper = _mount(
      `<lx-checkbox true-label="a" :false-label="3" v-model="checked"></lx-checkbox>`,
      () => ({
        checked: 'a',
      }),
    )
    const vm = wrapper.vm
    await wrapper.trigger('click')
    expect(vm.checked).toBe(3)
  })

  test('check', () => {
    const wrapper = _mount(
      `
      <div>
        <lx-checkbox v-model="checked" checked></lx-checkbox>
        <lx-checkbox-group v-model="checklist">
          <lx-checkbox checked label="a"></lx-checkbox>
        </lx-checkbox-group>
      </div>
      `,
      () => ({
        checked: false,
        checklist: [],
      }),
    ) as any
    expect(wrapper.vm.checked).toBe(true)
    expect(wrapper.vm.checklist).toEqual(['a'])
  })

  test('label', async() => {
    const wrapper = _mount(
      `
      <div>
        <lx-checkbox-group v-model="checklist">
          <lx-checkbox label="">all</lx-checkbox>
          <lx-checkbox label="a">a</lx-checkbox>
          <lx-checkbox label="b">b</lx-checkbox>
        </lx-checkbox-group>
      </div>
      `,
      () => ({
        checked: false,
        checklist: [],
      }),
    )
    const checkbox = wrapper.find('.lx-checkbox')
    await checkbox.trigger('click')
    expect(wrapper.vm.checklist[0]).toEqual('')
  })
})

describe('check-button', () => {
  test('create', async () => {
    const wrapper = _mount('<lx-checkbox-button v-model="checkbox" label="a"/>', () => ({ checkbox: false }))
    expect(wrapper.classes()).toContain('lx-checkbox-button')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-checked')
    await wrapper.trigger('click')
    expect(wrapper.classes('is-checked')).toBe(false)
  })

  test('disabled', async () => {
    const wrapper = _mount('<lx-checkbox-button v-model="checkbox" disabled label="a"/>', () => ({ checkbox: false }))
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-disabled')
  })

  test('change event', async () => {
    const wrapper = _mount(
      `
      <lx-checkbox-button v-model="checked" @change="onChange" />
      `,
      () => ({
        data: '',
        checked: false,
      }),
      {
        methods: {
          onChange(val: boolean) {
            this.data = val
          },
        },
      },
    )

    const vm = wrapper.vm
    await wrapper.trigger('click')
    expect(vm.data).toBe(true)
  })

  test('button group change', async () => {
    const wrapper = _mount(
      `
      <lx-checkbox-group v-model="checkList" @change="onChange">
        <lx-checkbox-button label="a" ref="a"></lx-checkbox-button>
        <lx-checkbox-button label="b" ref="b"></lx-checkbox-button>
        <lx-checkbox-button label="c" ref="c"></lx-checkbox-button>
        <lx-checkbox-button label="d" ref="d"></lx-checkbox-button>
      </lx-checkbox-group>
      `,
      () => ({
        data: null,
        checkList: [],
      }),
      {
        methods: {
          onChange(val: string[]) {
            this.data = val
          },
        },
      },
    )
    const vm = wrapper.vm
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    await nextTick() // await change event
    expect(vm.data).toEqual(['a'])
    await wrapper.findComponent({ ref: 'b' }).trigger('click')
    await nextTick() // await change event
    expect(vm.data).toEqual(['a', 'b'])
  })

  test('button group props', () => {
    const wrapper = _mount(
      `
      <lx-checkbox-group v-model="checkList" size="large" fill="#FF0000" text-color="#000">
        <lx-checkbox-button label="a" ref="a"></lx-checkbox-button>
        <lx-checkbox-button label="b" ref="b"></lx-checkbox-button>
        <lx-checkbox-button label="c" ref="c"></lx-checkbox-button>
        <lx-checkbox-button label="d" ref="d"></lx-checkbox-button>
      </lx-checkbox-group>
      `,
      () => ({ checkList: ['a', 'b'] }),
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(2)
    expect((vm.$refs.a as any).$el.classList.contains('is-checked')).toBe(true)
    expect((vm.$refs.a as any).$el.querySelector('.lx-checkbox-button__inner').style.borderColor).toEqual('#ff0000')
  })

  test('button group min and max', async () => {
    const wrapper = _mount(
      `
      <lx-checkbox-group
        v-model="checkList"
        :min="1"
        :max="2"
      >
        <lx-checkbox-button label="a" ref="a"></lx-checkbox-button>
        <lx-checkbox-button label="b" ref="b"></lx-checkbox-button>
        <lx-checkbox-button label="c" ref="c"></lx-checkbox-button>
        <lx-checkbox-button label="d" ref="d"></lx-checkbox-button>
      </lx-checkbox-group>
      `,
      () => ({
        checkList: ['a'],
        lastEvent: null,
      }),
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(1)
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    vm.$nextTick(async () => {
      expect(vm.checkList.length).toBe(1)
      await wrapper.findComponent({ ref: 'b' }).trigger('click')
      expect(vm.checkList.length).toBe(2)
      await wrapper.findComponent({ ref: 'c' }).trigger('click')
      expect(vm.checkList.length).toBe(2)
      expect(vm.checkList).toEqual(['a', 'b'])
      expect((wrapper.findComponent({ ref: 'c' }).vm as any).isDisabled).toBe(true)
      expect((wrapper.findComponent({ ref: 'd' }).vm as any).isDisabled).toBe(true)
    })
  })

  test('nested group', async () => {
    const wrapper = _mount(
      `
      <lx-checkbox-group v-model="checkList">
        <div>
          <lx-checkbox-button label="a" ref="a"></lx-checkbox-button>
          <lx-checkbox-button label="b" ref="b"></lx-checkbox-button>
          <lx-checkbox-button label="c" ref="c"></lx-checkbox-button>
          <lx-checkbox-button label="d" ref="d"></lx-checkbox-button>
        </div>
      </lx-checkbox-group>
      `,
      () => ({ checkList: [] }),
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(0)
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    expect(vm.checkList).toEqual(['a'])
  })

  test('true false lable', async () => {
    const wrapper = _mount(
      `<lx-checkbox-button true-label="a" :false-label="3" v-model="checked" />`,
      () => ({
        checked: 'a',
      }),
    )
    const vm = wrapper.vm
    await wrapper.trigger('click')
    expect(vm.checked).toBe(3)
  })

  test('check', () => {
    const wrapper = _mount(
      `
      <div>
        <lx-checkbox-button v-model="checked" checked />
        <lx-checkbox-group v-model="checklist">
          <lx-checkbox-button checked label="a" />
        </lx-checkbox-group>
      </div>
      `,
      () => ({
        checked: false,
        checklist: [],
      }),
    )
    expect(wrapper.vm.checked).toBe(true)
    expect(wrapper.vm.checklist).toEqual(['a'])
  })

  test('checked', () => {
    const wrapper = _mount(
      `<lx-checkbox checked />`,
      () => ({}))
    expect(wrapper.find('.lx-checkbox').classes().toString()).toMatch('is-checked')
  })

})
