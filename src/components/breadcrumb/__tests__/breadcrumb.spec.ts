import { mount } from '@vue/test-utils'
import Breadcrumb from '../src/index.vue'
import BreadcrumbItem from '../src/item.vue'

const _mount = (template: string) => mount({
  components: {
    'el-breadcrumb': Breadcrumb,
    'el-breadcrumb-item': BreadcrumbItem,
  },
  template,
}, {
  global: {
    provide: {
      breadcrumb: {},
    },
  },
})

describe('Breadcrumb.vue', () => {
  test('separator', () => {
    const wrapper = _mount(`
      <lx-breadcrumb separator="?">
        <lx-breadcrumb-item>A</lx-breadcrumb-item>
      </lx-breadcrumb>
    `)
    expect(wrapper.find('.lx-breadcrumb__separator').text()).toBe('?')
  })

  test('separatorClass', () => {
    const wrapper = _mount(`
      <lx-breadcrumb separator="?" separatorClass="test">
        <lx-breadcrumb-item>A</lx-breadcrumb-item>
      </lx-breadcrumb>
    `)
    expect(wrapper.find('.lx-breadcrumb__separator').text()).toBe('')
    expect(wrapper.find('.lx-breadcrumb__separator').classes()).toContain('test')
  })

  test('to', () => {
    const wrapper = _mount(`
      <lx-breadcrumb separator="?" separatorClass="test">
        <lx-breadcrumb-item to="/index">A</lx-breadcrumb-item>
      </lx-breadcrumb>
    `)
    expect(wrapper.find('.lx-breadcrumb__inner').classes()).toContain('is-link')
  })

  test('single', () => {
    const wrapper = _mount('<lx-breadcrumb-item>A</lx-breadcrumb-item>')
    expect(wrapper.find('.lx-breadcrumb__inner').text()).toBe('A')
    expect(wrapper.find('.lx-breadcrumb__separator').text()).toBe('')
  })
})
