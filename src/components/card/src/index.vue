<template>
  <div class="lx-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div v-if="$slots.header || header" class="lx-card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="lx-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { StyleValue } from '@lixi/utils/types'

export default defineComponent({
  name: 'LxCard',
  props: {
    header: {
      type: String,
      default: '',
    },
    bodyStyle: {
      type: [String, Object, Array] as PropType<StyleValue>,
      default: '' as StyleValue,
    },
    shadow: {
      type: String,
      default: '',
    },
  },
})
</script>
