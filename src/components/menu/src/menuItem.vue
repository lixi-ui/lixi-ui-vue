<template>
  <li
    class="lx-menu-item"
    role="menuitem"
    tabindex="-1"
    :style="[paddingStyle, itemStyle, { backgroundColor }]"
    :class="{
      'is-active': active,
      'is-disabled': disabled,
    }"
    @click="handleClick"
    @mouseenter="onMouseEnter"
    @focus="onMouseEnter"
    @blur="onMouseLeave"
    @mouseleave="onMouseLeave"
  >
    <lx-tooltip
      v-if="
        parentMenu.type.name === 'LxMenu' &&
          rootMenu.props.collapse &&
          slots.title
      "
      :effect="Effect.DARK"
      placement="right"
    >
      <template #content>
        <slot name="title"></slot>
      </template>
      <div
        style="position: absolute;left: 0;top: 0;height: 100%;width: 100%;display: inline-block;box-sizing: border-box;padding: 0 20px;"
      >
        <slot></slot>
      </div>
    </lx-tooltip>
    <template v-else>
      <slot></slot>
      <slot name="title"></slot>
    </template>
  </li>
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  onBeforeUnmount,
  inject,
  getCurrentInstance,
} from 'vue'
import LxTooltip from '@lixi/components/tooltip/src'
import { Effect } from '@lixi/components/popper/src'
import useMenu from './useMenu'

import type { RootMenuProvider, SubMenuProvider } from './menu.type'

export default defineComponent({
  name: 'LxMenuItem',

  // componentName: 'LxMenuItem',

  components: { LxTooltip },

  props: {
    index: {
      type: String,
      default: null,
    },
    route: [String, Object],
    disabled: Boolean,
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const instance:any = getCurrentInstance()
    const rootMenu:any = inject<RootMenuProvider>('rootMenu')
    const _useMenu:any = useMenu(
      instance,
      computed(() => props.index),
    )
    const parentMenu:any = _useMenu.parentMenu
    const paddingStyle:any = _useMenu.paddingStyle
    const indexPath:any = _useMenu.indexPath
    const _SubMenuProvider:any = inject<SubMenuProvider>(
      `subMenu:${parentMenu.value.uid}`,
    )
    const addSubMenu:any = _SubMenuProvider.addSubMenu
    const removeSubMenu:any = _SubMenuProvider.removeSubMenu
    const active = computed(() => {
      return props.index === rootMenu.activeIndex.value
    })
    const hoverBackground = computed(() => {
      return rootMenu.hoverBackground.value
    })
    const backgroundColor = computed(() => {
      return rootMenu.props.backgroundColor || ''
    })
    const activeTextColor = computed(() => {
      return rootMenu.props.activeTextColor || ''
    })
    const textColor = computed(() => {
      return rootMenu.props.textColor || ''
    })
    const mode = computed(() => {
      return rootMenu.props.mode
    })
    const isNested = computed(() => {
      return parentMenu.value.type.name !== 'LxMenu'
    })

    const itemStyle = computed(() => {
      const style = {
        color: active.value ? activeTextColor.value : textColor.value,
        borderBottomColor: '',
      }
      if (mode.value === 'horizontal' && !isNested.value) {
        style.borderBottomColor = active.value
          ? rootMenu.props.activeTextColor
            ? activeTextColor.value
            : ''
          : 'transparent'
      }
      return style
    })

    const onMouseEnter = () => {
      if (mode.value === 'horizontal' && !rootMenu.props.backgroundColor) return
      instance.vnode.el.style.backgroundColor = hoverBackground.value
    }
    const onMouseLeave = () => {
      if (mode.value === 'horizontal' && !rootMenu.props.backgroundColor) return
      instance.vnode.el.style.backgroundColor = backgroundColor.value
    }
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.rootMenuEmit('menuItem:item-click', {
          index: props.index,
          indexPath,
          route: props.route,
        })
        emit('click', {
          index: props.index,
          indexPath: indexPath.value,
        })
      }
    }

    onMounted(() => {
      addSubMenu({ index: props.index, indexPath, active })
      rootMenu.methods.addMenuItem({ index: props.index, indexPath, active })
    })

    onBeforeUnmount(() => {
      removeSubMenu({ index: props.index, indexPath, active })
      rootMenu.methods.removeMenuItem({ index: props.index, indexPath, active })
    })

    return {
      Effect,
      parentMenu,
      rootMenu,
      slots,

      paddingStyle,
      itemStyle,
      backgroundColor,
      active,
      handleClick,
      onMouseEnter,
      onMouseLeave,
    }
  },
})
</script>
