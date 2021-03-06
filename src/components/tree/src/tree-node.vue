<template>
  <div
    v-show="node.visible"
    ref="node$"
    class="lx-tree-node"
    :class="{
      'is-expanded': expanded,
      'is-current': node.isCurrent,
      'is-hidden': !node.visible,
      'is-focusable': !node.disabled,
      'is-checked': !node.disabled && node.checked,
    }"
    role="treeitem"
    tabindex="-1"
    :aria-expanded="expanded"
    :aria-disabled="node.disabled"
    :aria-checked="node.checked"
    :draggable="tree.props.draggable"
    :data-key="getNodeKey(node)"
    @click.stop="handleClick"
    @contextmenu="handleContextMenu"
    @dragstart.stop="handleDragStart"
    @dragover.stop="handleDragOver"
    @dragend.stop="handleDragEnd"
    @drop.stop="handleDrop"
  >
    <div
      class="lx-tree-node__content"
      :style="{ paddingLeft: (node.level - 1) * tree.props.indent + 'px' }"
    >
      <span
        :class="[
          {
            'is-leaf': node.isLeaf,
            expanded: !node.isLeaf && expanded,
          },
          'lx-tree-node__expand-icon',
          tree.props.iconClass ? tree.props.iconClass : 'lx-icon-caret-right',
        ]"
        @click.stop="handleExpandIconClick"
      >
      </span>
      <lx-checkbox
        v-if="showCheckbox"
        :model-value="node.checked"
        :indeterminate="node.indeterminate"
        :disabled="!!node.disabled"
        @click.stop
        @change="handleCheckChange"
      />
      <span
        v-if="node.loading"
        class="lx-tree-node__loading-icon lx-icon-loading"
      >
      </span>
      <node-content :node="node" :render-content="renderContent" />
    </div>
    <lx-collapse-transition>
      <div
        v-if="!renderAfterExpand || childNodeRendered"
        v-show="expanded"
        class="lx-tree-node__children"
        role="group"
        :aria-expanded="expanded"
      >
        <lx-tree-node
          v-for="child in node.childNodes"
          :key="getNodeKey(child)"
          :render-content="renderContent"
          :render-after-expand="renderAfterExpand"
          :show-checkbox="showCheckbox"
          :node="child"
          @node-expand="handleChildNodeExpand"
        />
      </div>
    </lx-collapse-transition>
  </div>
</template>
<script lang='ts'>
import { defineComponent, getCurrentInstance, ref, watch, nextTick, inject, provide } from 'vue'
import LxCollapseTransition from '@lixi/components/collapse-transition/src'
import LxCheckbox from '@lixi/components/checkbox/src/checkbox.vue'
import NodeContent from './tree-node-content.vue'
import { getNodeKey as getNodeKeyUtil } from './model/util'
import { useNodeExpandEventBroadcast } from './model/useNodeExpandEventBroadcast'
import { useDragNodeEmitter } from './model/useDragNode'
import Node from './model/node'

import type { ComponentInternalInstance, PropType } from 'vue'
import type { Nullable } from '@lixi/utils/types'
import type { TreeOptionProps, TreeNodeData, RootTreeType } from './tree.type'

export default defineComponent({
  name: 'LxTreeNode',
  components: {
    LxCollapseTransition,
    LxCheckbox,
    NodeContent,
  },
  props: {
    node: {
      type: Node,
      default: () => ({}),
    },
    props: {
      type: Object as PropType<TreeOptionProps>,
      default: () => ({}),
    },
    accordion: Boolean,
    renderContent: Function,
    renderAfterExpand: Boolean,
    showCheckbox: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['node-expand'],
  setup(props, ctx) {
    const { broadcastExpanded } = useNodeExpandEventBroadcast(props)
    const tree:any = inject<RootTreeType>('RootTree')
    const expanded = ref(false)
    const childNodeRendered = ref(false)
    const oldChecked:any = ref(null)
    const oldIndeterminate:any = ref(null)
    const node$ = ref<Nullable<HTMLElement>>(null)
    const { emitter } = useDragNodeEmitter()
    const instance = getCurrentInstance()

    provide('NodeInstance', instance)
    if(!tree) {
      console.warn('Can not find node\'s tree.')
    }

    if(props.node.expanded) {
      expanded.value = true
      childNodeRendered.value = true
    }

    const childrenKey = tree.props['children'] || 'children'
    watch(() => {
      const children = props.node.data[childrenKey]
      return children && [...children]
    }, () => {
      props.node.updateChildren()
    })

    watch(() => props.node.indeterminate, val => {
      handleSelectChange(props.node.checked, val)
    })

    watch(() => props.node.checked, val => {
      handleSelectChange(val, props.node.indeterminate)
    })

    watch(() => props.node.expanded, val => {
      nextTick(() => expanded.value = val)
      if(val) {
        childNodeRendered.value = true
      }
    })

    const getNodeKey = (node: Node): any => {
      return getNodeKeyUtil(tree.props.nodeKey, node.data)
    }

    const handleSelectChange = (checked: boolean, indeterminate: boolean) => {
      if (oldChecked.value !== checked || oldIndeterminate.value !== indeterminate) {
        tree.ctx.emit('check-change', props.node.data, checked, indeterminate)
      }
      oldChecked.value = checked
      oldIndeterminate.value = indeterminate
    }

    const handleClick = () => {
      const store = tree.store.value
      store.setCurrentNode(props.node)
      tree.ctx.emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode)
      tree.currentNode.value = props.node

      if(tree.props.expandOnClickNode) {
        handleExpandIconClick()
      }

      if(tree.props.checkOnClickNode && !props.node.disabled) {
        handleCheckChange(null, {
          target: { checked: !props.node.checked },
        })
      }
      tree.ctx.emit('node-click', props.node.data, props.node, instance)
    }

    const handleContextMenu = (event: Event) => {
      if (tree.instance.vnode.props['onNodeContextmenu']) {
        event.stopPropagation()
        event.preventDefault()
      }
      tree.ctx.emit('node-contextmenu', event, props.node.data, props.node, instance)
    }

    const handleExpandIconClick = () => {
      if (props.node.isLeaf) return
      if (expanded.value) {
        tree.ctx.emit('node-collapse', props.node.data, props.node, instance)
        props.node.collapse()
      } else {
        props.node.expand()
        ctx.emit('node-expand', props.node.data, props.node, instance)
      }
    }

    const handleCheckChange = (value, ev) => {
      props.node.setChecked(ev.target.checked, !tree.props.checkStrictly)
      nextTick(() => {
        const store = tree.store.value
        tree.ctx.emit('check', props.node.data, {
          checkedNodes: store.getCheckedNodes(),
          checkedKeys: store.getCheckedKeys(),
          halfCheckedNodes: store.getHalfCheckedNodes(),
          halfCheckedKeys: store.getHalfCheckedKeys(),
        })
      })
    }

    const handleChildNodeExpand = (nodeData: TreeNodeData, node: Node, instance: ComponentInternalInstance) => {
      broadcastExpanded(node)
      tree.ctx.emit('node-expand', nodeData, node, instance)
    }

    const handleDragStart = (event: DragEvent) => {
      if (!tree.props.draggable) return
      emitter.emit('tree-node-drag-start', { event, treeNode: props })
    }

    const handleDragOver = (event: DragEvent) => {
      if (!tree.props.draggable) return
      emitter.emit('tree-node-drag-over', { event, treeNode: { $el: node$.value, node: props.node } })
      event.preventDefault()
    }

    const handleDrop = (event: DragEvent) => {
      event.preventDefault()
    }

    const handleDragEnd = (event: DragEvent) => {
      if (!tree.props.draggable) return
      emitter.emit('tree-node-drag-end', event)
    }

    return {
      node$,
      tree,
      expanded,
      childNodeRendered,
      oldChecked,
      oldIndeterminate,
      emitter,
      getNodeKey,
      handleSelectChange,
      handleClick,
      handleContextMenu,
      handleExpandIconClick,
      handleCheckChange,
      handleChildNodeExpand,
      handleDragStart,
      handleDragOver,
      handleDrop,
      handleDragEnd,
    }

  },
})
</script>
