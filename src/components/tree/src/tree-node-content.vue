<script lang='ts'>
import { h, defineComponent, inject } from 'vue'

import type { ComponentInternalInstance } from 'vue'
import type { RootTreeType } from './tree.type'

export default defineComponent({
  name: 'LxTreeNodeContent',
  props: {
    node: {
      type: Object,
      required: true,
    },
    renderContent: Function,
  },
  setup(props) {
    const nodeInstance = inject<ComponentInternalInstance>('NodeInstance')
    const tree:any = inject<RootTreeType>('RootTree')
    return () => {
      const node = props.node
      const { data, store } = node
      return (
        props.renderContent
          ? props.renderContent(h, { _self: nodeInstance, node, data, store })
          : tree.ctx.slots.default
            ? tree.ctx.slots.default({ node, data })
            : h('span', { class: 'lx-tree-node__label' }, [node.label])
      )
    }
  },
})
</script>
