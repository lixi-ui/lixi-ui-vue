<template>
  <transition name="lx-message-fade" @before-leave="onClose" @after-leave="$emit('destroy')">
    <div
      v-show="visible"
      :id="id"
      :class="[
        'lx-message',
        type && !iconClass ? `lx-message--${type}` : '',
        center ? 'is-center' : '',
        showClose ? 'is-closable' : '',
        customClass,
      ]"
      :style="customStyle"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <i v-if="type || iconClass" :class="['lx-message__icon', typeClass, iconClass]"></i>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="lx-message__content">{{ message }}</p>
        <!-- Caution here, message could've been compromised, never use user's input as message -->
        <!--  eslint-disable-next-line -->
        <p v-else class="lx-message__content" v-html="message"></p>
      </slot>
      <div v-if="showClose" class="lx-message__closeBtn lx-icon-close" @click.stop="close"></div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { EVENT_CODE } from '@lixi/utils/aria'
import { on, off } from '@lixi/utils/dom'

// MessageVM is an alias of vue.VNode
import type { PropType } from 'vue'
import type { Indexable } from '@lixi/utils/types'
import type { MessageVM } from './types'
const TypeMap: Indexable<string> = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
}
export default defineComponent({
  name: 'LxMessage',
  props: {
    customClass: { type: String, default: '' },
    center: { type: Boolean, default: false },
    dangerouslyUseHTMLString: { type: Boolean, default: false },
    duration: { type: Number, default: 3000 },
    iconClass: { type: String, default: '' },
    id: { type: String, default: '' },
    message: {
      type: [String, Object] as PropType<string | MessageVM>,
      default: '',
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
    showClose: { type: Boolean, default: false },
    type: { type: String, default: 'info' },
    offset: { type: Number, default: 20 },
    zIndex: { type: Number, default: 0 },
  },
  emits: ['destroy'],
  setup(props) {
    const typeClass = computed(() => {
      const type = !props.iconClass && props.type
      return type && TypeMap[type]
        ? `lx-icon-${TypeMap[type]}`
        : ''
    })
    const customStyle = computed(() => {
      return {
        top: `${props.offset}px`,
        zIndex: props.zIndex,
      }
    })

    const visible = ref(false)
    let timer:any = null

    function startTimer() {
      if (props.duration > 0) {
        timer = setTimeout(() => {
          if (visible.value) {
            close()
          }
        }, props.duration)
      }
    }

    function clearTimer() {
      clearTimeout(timer)
      timer = null
    }

    function close() {
      visible.value = false
    }

    function keydown({ code }: any) {
      if (code === EVENT_CODE.esc) {
        // press esc to close the message
        if (visible.value) {
          close()
        }
      } else {
        startTimer() // resume timer
      }
    }

    onMounted(() => {
      startTimer()
      visible.value = true
      on(document, 'keydown', keydown)
    })

    onBeforeUnmount(() => {
      off(document, 'keydown', keydown)
    })

    return {
      typeClass,
      customStyle,
      visible,

      close,
      clearTimer,
      startTimer,
    }
  },
})
</script>
