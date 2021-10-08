<template>
  <div :class="['lx-steps', simple ? 'lx-steps--simple' : `lx-steps--${direction}`]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, provide } from 'vue'

import { CHANGE_EVENT } from '@lixi/utils/constants'

export default defineComponent({
  name: 'LxSteps',
  props: {
    space: {
      type: [Number, String],
      default: '',
    },
    active: {
      type: Number,
      default: 0,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: (val: string): boolean => ['horizontal', 'vertical'].includes(val),
    },
    alignCenter: {
      type: Boolean,
      default: false,
    },
    simple: {
      type: Boolean,
      default: false,
    },
    finishStatus: {
      type: String,
      default: 'finish',
      validator: (val: string): boolean => ['wait', 'process', 'finish', 'error', 'success'].includes(val),
    },
    processStatus: {
      type: String,
      default: 'process',
      validator: (val: string): boolean => ['wait', 'process', 'finish', 'error', 'success'].includes(val),
    },
  },
  emits: [CHANGE_EVENT],
  setup(props, { emit }) {
    const steps = ref([])

    watch(steps, () => {
      steps.value.forEach((instance, index) => {
        instance.setIndex(index)
      })
    })

    provide('LxSteps', { props, steps })

    watch(() => props.active, (newVal, oldVal) => {
      emit(CHANGE_EVENT, newVal, oldVal)
    })

    return {
      steps,
    }
  },
})
</script>
