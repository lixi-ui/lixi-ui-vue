import { mount } from '@vue/test-utils'
import Backtop from '../src/index.vue'

const _mount = (template: string) => mount({
  components: {
    'lx-backtop': Backtop,
  },
  template,
}, { attachTo: document.body })

describe('Backtop.vue', () => {
  test('render', async () => {
    const wrapper = _mount(`
      <div class="target" style="height: 100px; overflow: auto">
        <div style="height: 10000px; width: 100%">
          <lx-backtop target=".target" :visibilityHeight="2000" :right="100" :bottom="200" />
        </div>
      </div>
    `)
    expect(wrapper.find('.lx-backtop').exists()).toBe(false)
    wrapper.element.scrollTop = 2000
    await wrapper.trigger('scroll')
    expect(wrapper.find('.lx-backtop').exists()).toBe(true)

    expect(wrapper.find('.lx-backtop').attributes('style')).toBe('right: 100px; bottom: 200px;')
    expect(wrapper.find('.lx-icon-caret-top').exists()).toBe(true)

    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
})
