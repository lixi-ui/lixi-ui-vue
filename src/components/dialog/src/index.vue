<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="dialog-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <lx-overlay
        v-show="visible"
        :mask="modal"
        :overlay-class="modalClass"
        :z-index="zIndex"
        @click="onModalClick"
      >
        <div
          ref="dialogRef"
          v-trap-focus
          :class="[
            'lx-dialog',
            {
              'is-fullscreen': fullscreen,
              'lx-dialog--center': center,
            },
            customClass,
          ]"
          aria-modal="true"
          role="dialog"
          :aria-label="title || 'dialog'"
          :style="style"
          @click.stop=""
        >
          <div class="lx-dialog__header">
            <slot name="title">
              <span class="lx-dialog__title">
                {{ title }}
              </span>
            </slot>
            <button
              v-if="showClose"
              aria-label="close"
              class="lx-dialog__headerbtn"
              type="button"
              @click="handleClose"
            >
              <i class="lx-dialog__close lx-icon lx-icon-close"></i>
            </button>
          </div>
          <template v-if="rendered">
            <div class="lx-dialog__body">
              <slot></slot>
            </div>
          </template>
          <div v-if="$slots.footer" class="lx-dialog__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </lx-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { TrapFocus } from '@lixi/directives'
import { Overlay } from '@lixi/components/overlay/src'

import {
  default as useDialog,
  useDialogProps,
  useDialogEmits,
} from './useDialog'

import type { SetupContext } from 'vue'

export default defineComponent({
  name: 'LxDialog',
  components: {
    'lx-overlay': Overlay,
  },
  directives: {
    TrapFocus,
  },
  props: useDialogProps,
  emits: useDialogEmits,
  setup(props, ctx) {
    const dialogRef = ref<HTMLElement>(null)
    return {
      ...useDialog(props, ctx as SetupContext, dialogRef),
      dialogRef,
    }
  },
})
</script>
