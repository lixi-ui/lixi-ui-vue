import { mount } from '@vue/test-utils'
import CheckTag from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('CheckTag.vue', () => {
  test('render test', async () => {
    const wrapper = mount(CheckTag, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)

    expect(wrapper.classes()).toContain('el-check-tag')
  })


  test('functionality', async () => {
    const wrapper = mount({
      template: `<lx-check-tag @change="checked = !checked" :checked="checked">
        ${AXIOM}
      </lx-check-tag>`,
      components: {
        'el-check-tag': CheckTag,
      },
      data() {
        return {
          checked: false,
        }
      },
    }, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)

    await wrapper.find('.lx-check-tag').trigger('click')

    expect(wrapper.vm.checked).toBe(true)

    await wrapper.find('.lx-check-tag').trigger('click')

    expect(wrapper.vm.checked).toBe(false)

  })


})
