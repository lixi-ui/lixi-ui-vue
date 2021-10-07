<template>
  <div class="lx-button-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, reactive, toRef } from 'vue'
import { lxButtonGroupKey } from '@lixi/tokens'
import { isValidComponentSize } from '@lixi/utils/validators'

import type { PropType } from 'vue'
import type { ComponentSize } from '@lixi/utils/types'

export default defineComponent({
  name: 'LxButtonGroup',
  props: {
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
  },
  setup(props){
    provide(lxButtonGroupKey, reactive({
      size: toRef(props,'size'),
    }))
  },
})
</script>
