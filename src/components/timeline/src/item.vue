<template>
  <li class="lx-timeline-item">
    <div class="lx-timeline-item__tail"></div>

    <div
      v-if="!$slots.dot"
      class="lx-timeline-item__node"
      :class="[
        `lx-timeline-item__node--${size || ''}`,
        `lx-timeline-item__node--${type || ''}`
      ]"
      :style="{
        backgroundColor: color
      }"
    >
      <i
        v-if="icon"
        class="lx-timeline-item__icon"
        :class="icon"
      ></i>
    </div>
    <div v-if="$slots.dot" class="lx-timeline-item__dot">
      <slot name="dot"></slot>
    </div>

    <div class="lx-timeline-item__wrapper">
      <div
        v-if="!hideTimestamp && placement === 'top'"
        class="lx-timeline-item__timestamp is-top"
      >
        {{ timestamp }}
      </div>

      <div class="lx-timeline-item__content">
        <slot></slot>
      </div>

      <div
        v-if="!hideTimestamp && placement === 'bottom'"
        class="lx-timeline-item__timestamp is-bottom"
      >
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>

<script lang='ts'>
import { inject, defineComponent } from 'vue'

export default defineComponent({
  name: 'LxTimelineItem',
  props: {
    timestamp: {
      type: String,
      default: '',
    },
    hideTimestamp: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    type: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'normal',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  setup() {
    inject('timeline')
  },
})
</script>
