import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Steps from '../src/index.vue'
import Step from '../src/item.vue'

const _mount = (template: string) => mount({
  components: {
    'el-steps': Steps,
    'el-step': Step,
  },
  template,
}, {
  attachTo: document.body,
  global: {
    provide: {
      LxSteps: {},
    },
  },
})

describe('Steps.vue', () => {
  test('render', () => {
    const wrapper = _mount(`
      <lx-steps>
        <lx-step />
        <lx-step />
        <lx-step />
      </lx-steps>
    `)
    expect(wrapper.findAll('.lx-step').length).toBe(3)
    expect(wrapper.classes()).toContain('el-steps--horizontal')
    expect(wrapper.find('.lx-step').classes()).toContain('is-horizontal')
  })

  test('space', () => {
    const wrapper = _mount(`
      <lx-steps :space="100">
        <lx-step />
      </lx-steps>
    `)
    expect(wrapper.find('.lx-step').attributes('style')).toMatch('flex-basis: 100px;')
  })

  test('alignCenter', () => {
    const wrapper = _mount(`
      <lx-steps alignCenter>
        <lx-step />
      </lx-steps>
    `)
    expect(wrapper.find('.lx-step').classes()).toContain('is-center')
  })

  test('direction', () => {
    const wrapper = _mount(`
      <lx-steps direction="vertical">
        <lx-step />
      </lx-steps>
    `)
    expect(wrapper.classes()).toContain('el-steps--vertical')
    expect(wrapper.find('.lx-step').classes()).toContain('is-vertical')
  })

  test('simple', () => {
    const wrapper = _mount(`
      <lx-steps simple direction="vertical" :space="100" alignCenter>
        <lx-step />
      </lx-steps>
    `)
    expect(wrapper.classes()).toContain('el-steps--simple')
    expect(wrapper.find('is-center').exists()).toBe(false)
    expect(wrapper.find('is-vertical').exists()).toBe(false)
  })

  test('active', async () => {
    const wrapper = _mount(`
      <lx-steps :active="0">
        <lx-step />
        <lx-step />
        <lx-step />
      </lx-steps>
    `)
    await nextTick()
    expect(wrapper.findAll('.lx-step')[0].find('.lx-step__head').classes()).toContain('is-process')
    expect(wrapper.findAll('.lx-step')[1].find('.lx-step__head').classes()).toContain('is-wait')
    expect(wrapper.findAll('.lx-step')[2].find('.lx-step__head').classes()).toContain('is-wait')
    await wrapper.setProps({ active: 1 })
    expect(wrapper.findAll('.lx-step')[0].find('.lx-step__head').classes()).toContain('is-finish')
    expect(wrapper.findAll('.lx-step')[1].find('.lx-step__head').classes()).toContain('is-process')
    expect(wrapper.findAll('.lx-step')[2].find('.lx-step__head').classes()).toContain('is-wait')
    await wrapper.setProps({ active: 2 })
    expect(wrapper.findAll('.lx-step')[0].find('.lx-step__head').classes()).toContain('is-finish')
    expect(wrapper.findAll('.lx-step')[1].find('.lx-step__head').classes()).toContain('is-finish')
    expect(wrapper.findAll('.lx-step')[2].find('.lx-step__head').classes()).toContain('is-process')
    await wrapper.setProps({ active: 3 })
    expect(wrapper.findAll('.lx-step')[2].find('.lx-step__head').classes()).toContain('is-finish')
  })

  test('process-status', async () => {
    const wrapper = _mount(`
      <lx-steps :active="2" process-status="success">
        <lx-step />
        <lx-step />
        <lx-step />
      </lx-steps>
    `)
    await nextTick()
    expect(wrapper.findAll('.lx-step')[2].find('.lx-step__head').classes()).toContain('is-success')
    await wrapper.setProps({ processStatus: 'error' })
    expect(wrapper.findAll('.lx-step')[2].find('.lx-step__head').classes()).toContain('is-error')
  })

  test('finish-status', async () => {
    const wrapper = _mount(`
      <lx-steps :active="2" finish-status="error">
        <lx-step />
        <lx-step />
        <lx-step />
      </lx-steps>
    `)
    await nextTick()
    expect(wrapper.findAll('.lx-step')[0].find('.lx-step__head').classes()).toContain('is-error')
    await wrapper.setProps({ finishStatus: 'success' })
    expect(wrapper.findAll('.lx-step')[0].find('.lx-step__head').classes()).toContain('is-success')
  })

  test('step attribute', () => {
    const wrapper = _mount(`
      <lx-steps :active="0">
        <lx-step icon="el-icon-edit" title="title" description="description" status="wait" />
      </lx-steps>
    `)
    expect(wrapper.find('.lx-step__head').classes()).toContain('is-wait')
    expect(wrapper.find('.lx-icon-edit').exists()).toBe(true)
    expect(wrapper.find('.lx-step__title').text()).toBe('title')
    expect(wrapper.find('.lx-step__description').text()).toBe('description')
  })

  test('step slot', () => {
    const wrapper = _mount(`
      <lx-steps :active="0">
        <lx-step>
          <template #title>A</template>
          <template #description>B</template>
        </lx-step>
      </lx-steps>
    `)
    expect(wrapper.find('.lx-step__title').text()).toBe('A')
    expect(wrapper.find('.lx-step__description').text()).toBe('B')
  })
})
