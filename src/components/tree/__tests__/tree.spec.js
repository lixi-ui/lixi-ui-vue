import { mount } from '@vue/test-utils'
import Tree from '../package/index.vue'
import { nextTick } from 'vue'
import { sleep } from '../../../test-utils/index.js'

const getTreeVm = (props = '', options = {}) => {
  const wrapper = mount(Object.assign({
    components: {
      'lv-tree': Tree,
    },
    template: `
      <lv-tree ref="tree" :data="data" ${ props }></lv-tree>
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
    expect(wrapper.find('.lv-tree').exists()).toBeTruthy()
    expect(wrapper.findAll('.lv-tree .lv-tree-item').length).toEqual(2)
    vm.data[0].children = []
    await nextTick()
    expect(wrapper.findAll('.lv-tree .lv-tree-item').length).toEqual(1)
  })
  test('expandOnNodeClick', async () => {
    const { wrapper } = getTreeVm()

    const firstNodeContentWrapper = wrapper.find('.lv-tree-icon-expand')
    const firstNodeWrapper = wrapper.find('.lv-tree-icon-expand')

    await firstNodeContentWrapper.trigger('click')
    await sleep() // because node click method to expaned is async
    expect(firstNodeWrapper.find('.lv-icon-caret-bottom').exists()).toBeTruthy()
  })
})
