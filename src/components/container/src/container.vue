<template>
  <section class="lx-container" :class="{'is-vertical': isVertical}">
    <slot></slot>
  </section>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'

import type { Component, VNode } from 'vue'

export default defineComponent({
  name: 'LxContainer',
  props: {
    direction: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true
      } else if (props.direction === 'horizontal') {
        return false
      }
      if (slots && slots.default) {
        const vNodes: VNode[] = slots.default()
        return vNodes.some(vNode => {
          const tag = (vNode.type as Component).name
          return tag === 'LxHeader' || tag === 'LxFooter'
        })
      } else {
        return false
      }
    })
    return {
      isVertical,
    }
  },
})
</script>
