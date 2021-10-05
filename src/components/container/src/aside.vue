<template>
  <aside class="lx-aside" :style="style">
    <slot></slot>
  </aside>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'LxAside',
  props: {
    width: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return {
      style: computed(() => {
        return props.width
          ? { '--lx-aside-width': props.width } as CSSProperties
          : {}
      }),
    }
  },
})
</script>
