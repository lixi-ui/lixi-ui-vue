<template>
  <li class="lx-menu-item-group">
    <div
      class="lx-menu-item-group__title"
      :style="{ paddingLeft: levelPadding + 'px' }"
    >
      <template v-if="!slots.title">{{ title }}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  getCurrentInstance,
  inject,
  reactive,
} from 'vue'

import type { IMenuGroupProps, RootMenuProvider } from './menu.type'

export default defineComponent({
  name: 'LxMenuItemGroup',
  componentName: 'LxMenuItemGroup',

  props: {
    title: {
      type: String,
    },
  },
  setup(props: any, { slots }) {
    // data
    const data = reactive({
      paddingLeft: 20,
    })
    const instance:any = getCurrentInstance()
    // computed
    const levelPadding = computed(() => {
      let padding = 20
      let parent:any = instance.parent
      if (rootProps.collapse) return 20
      while (parent && parent.type.name !== 'LxMenu') {
        if (parent.type.name === 'LxSubMenu') {
          padding += 20
        }
        parent = parent.parent
      }
      return padding
    })

    // inject
    const _rootMenu:any = inject('rootMenu')
    const rootProps:any = _rootMenu?.props
    
    return {
      data,
      levelPadding,
      props,
      slots,
    }
  },
})
</script>
