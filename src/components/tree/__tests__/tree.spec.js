import { mount } from '@vue/test-utils'
import Tree from '../package/index.vue'
import { nextTick } from 'vue'
import { sleep } from '../../../test-utils/index.js'

const getTreeVm = (props = '', options = {}) => {
  const wrapper = mount(Object.assign({
    components: {
      'lx-tree': Tree,
    },
    template: `
      <lx-tree ref="tree" :data="data" ${ props }></lx-tree>
    `,
    data() {
      return {
        data: [{
          key: 'k_1',
          value: 'v_1',
          children: [{
            key: 'k_1_1',
            value: 'v_1_1'
          }]
        }]
      }
    }
  }, options))
  return { wrapper, vm: wrapper.vm }
}

describe('Tree.vue', () => {

  test('render', async () => {
    const { wrapper, vm }  = getTreeVm()
    expect(wrapper.find('.lx-tree').exists()).toBeTruthy()
    expect(wrapper.findAll('.lx-tree .lx-tree-item').length).toEqual(2)
    vm.data[0].children = []
    await nextTick()
    expect(wrapper.findAll('.lx-tree .lx-tree-item').length).toEqual(1)
  })

  test('expandOnNodeClick', async () => {
    const { wrapper } = getTreeVm()

    const firstNodeContentWrapper = wrapper.find('.lx-tree-icon-expand')
    const firstNodeWrapper = wrapper.find('.lx-tree-icon-expand')

    await firstNodeContentWrapper.trigger('click')
    await sleep() // because node click method to expaned is async
    expect(firstNodeWrapper.find('.lx-icon-caret-bottom').exists()).toBeTruthy()
  })
})
