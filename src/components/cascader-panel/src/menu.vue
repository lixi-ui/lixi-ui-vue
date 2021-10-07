<template>
  <lx-scrollbar
    :id="menuId"
    tag="ul"
    role="menu"
    class="lx-cascader-menu"
    wrap-class="lx-cascader-menu__wrap"
    :view-class="[
      'lx-cascader-menu__list',
      isEmpty && 'is-empty'
    ]"
    @mousemove="handleMouseMove"
    @mouseleave="clearHoverZone"
  >
    <lx-cascader-node
      v-for="node in nodes"
      :key="node.uid"
      :node="node"
      :menu-id="menuId"
      @expand="handleExpand"
    />
    <div
      v-if="isEmpty"
      class="lx-cascader-menu__empty-text"
    >
      {{ t('el.cascader.noData') }}
    </div>
    <svg
      v-else-if="panel.isHoverMenu"
      ref="hoverZone"
      class="lx-cascader-menu__hover-zone"
    />
  </lx-scrollbar>
</template>

<script lang="ts">
import {
  computed, defineComponent, getCurrentInstance,
  inject, ref,
} from 'vue'
import LxScrollbar from '@lixi/components/scrollbar/src'
import { useLocaleInject } from '@lixi/hooks'
import { generateId } from '@lixi/utils/util'
import LxCascaderNode from './node.vue'
import { default as CascaderNode } from './node'
import {
  CASCADER_PANEL_INJECTION_KEY,
} from './types'

import type { PropType } from 'vue'
import type { TimeoutHandle, Nullable } from '@lixi/utils/types'

export default defineComponent({
  name: 'LxCascaderMenu',

  components: {
    LxScrollbar,
    LxCascaderNode,
  },

  props: {
    nodes: {
      type: Array as PropType< CascaderNode[]>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  setup (props) {
    const instance = getCurrentInstance()
    const { t } = useLocaleInject()
    const id = generateId()
    let activeNode: Nullable<HTMLElement> = null
    let hoverTimer: Nullable<TimeoutHandle> = null

    const panel = inject(CASCADER_PANEL_INJECTION_KEY)

    const hoverZone = ref(null)

    const isEmpty = computed(() => !props.nodes.length)
    const menuId = computed(() => `cascader-menu-${id}-${props.index}`)

    const handleExpand = (e: MouseEvent) => {
      activeNode = e.target as HTMLElement
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!panel.isHoverMenu || !activeNode || !hoverZone.value) return

      if (activeNode.contains(e.target as HTMLElement)) {
        clearHoverTimer()

        const el = instance.vnode.el as HTMLElement
        const { left } = el.getBoundingClientRect()
        const { offsetWidth, offsetHeight } = el
        const startX = e.clientX - left
        const top = activeNode.offsetTop
        const bottom = top + activeNode.offsetHeight

        hoverZone.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top} L${offsetWidth} 0 V${top} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom} L${offsetWidth} ${offsetHeight} V${bottom} Z" />
        `
      } else if (!hoverTimer) {
        hoverTimer = window.setTimeout(clearHoverZone, panel.config.hoverThreshold)
      }
    }

    const clearHoverTimer = () => {
      if (!hoverTimer) return
      clearTimeout(hoverTimer)
      hoverTimer = null
    }

    const clearHoverZone = () => {
      if (!hoverZone.value) return
      hoverZone.value.innerHTML = ''
      clearHoverTimer()
    }

    return {
      panel,
      hoverZone,
      isEmpty,
      menuId,
      t,
      handleExpand,
      handleMouseMove,
      clearHoverZone,
    }
  },
})

</script>

