<template>
  <header class="lx-header" :style="style">
    <slot></slot>
  </header>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'LxHeader',
  props: {
    height: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return {
      style: computed(() => (
        props.height ? {
          '--lx-header-height': props.height,
        } : {}
      ) as CSSProperties),
    }
  },
})
</script>
