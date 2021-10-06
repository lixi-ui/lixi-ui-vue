<template>
  <span
    v-if="!disableTransitions"
    :class="classes"
    :style="{ backgroundColor: color }"
    @click="handleClick"
  >
    <slot></slot>
    <i
      v-if="closable"
      class="lx-tag__close lx-icon-close"
      @click="handleClose"
    ></i>
  </span>
  <transition v-else name="lx-zoom-in-center">
    <span
      :class="classes"
      :style="{ backgroundColor: color }"
      @click="handleClick"
    >
      <slot></slot>
      <i
        v-if="closable"
        class="lx-tag__close lx-icon-close"
        @click="handleClose"
      ></i>
    </span>
  </transition>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useGlobalConfig } from '@lixi/utils/util'
import { isValidComponentSize } from '@lixi/utils/validators'

import type { PropType } from 'vue'
import type { ComponentSize } from '@lixi/utils/types'

export default defineComponent({
  name: 'LxTag',
  props: {
    closable: Boolean,
    type: {
      type: String as PropType<'success' | 'info' | 'warning' | 'danger' | ''>,
      default: '',
    },
    hit: Boolean,
    disableTransitions: Boolean,
    color: {
      type: String,
      default: '',
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    effect: {
      type: String,
      default: 'light',
      validator: (val: string): boolean => {
        return ['dark', 'light', 'plain'].indexOf(val) !== -1
      },
    },
  },
  emits: ['close','click'],
  setup(props, ctx) {
    const ELEMENT = useGlobalConfig()

    const tagSize = computed(() => {
      return props.size || ELEMENT.size
    })
    const classes = computed(() => {
      const { type, hit, effect } = props
      return [
        'lx-tag',
        type ? `el-tag--${type}` : '',
        tagSize.value ? `el-tag--${tagSize.value}` : '',
        effect ? `el-tag--${effect}` : '',
        hit && 'is-hit',
      ]
    })

    // methods
    const handleClose = event => {
      event.stopPropagation()
      ctx.emit('close', event)
    }

    const handleClick = event => {
      ctx.emit('click', event)
    }

    return {
      tagSize,
      classes,
      handleClose,
      handleClick,
    }
  },
})
</script>
