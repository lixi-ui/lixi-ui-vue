<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      name="lx-drawer-fade"
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
          ref="drawerRef"
          v-trap-focus
          aria-modal="true"
          aria-labelledby="lx-drawer__title"
          :aria-label="title"
          :class="['lx-drawer', direction, customClass]"
          :style="isHorizontal ? 'width: ' + drawerSize : 'height: ' + drawerSize"
          role="dialog"
          @click.stop
        >
          <header
            v-if="withHeader"
            id="lx-drawer__title"
            class="lx-drawer__header"
          >
            <slot name="title">
              <span role="heading" :title="title">
                {{ title }}
              </span>
            </slot>
            <button
              v-if="showClose"
              :aria-label="'close ' + (title || 'drawer')"
              class="lx-drawer__close-btn"
              type="button"
              @click="handleClose"
            >
              <i class="lx-drawer__close lx-icon lx-icon-close"></i>
            </button>
          </header>
          <template v-if="rendered">
            <section class="lx-drawer__body">
              <slot></slot>
            </section>
          </template>
        </div>
      </lx-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
} from 'vue'
import { Overlay } from '@lixi/components/overlay/src'
import { useDialog, useDialogProps, useDialogEmits } from '@lixi/components/dialog/src'
import { TrapFocus } from '@lixi/directives'

import type { PropType, SetupContext } from 'vue'

type DrawerDirection = 'ltr' | 'rtl' | 'ttb' | 'btt'

export default defineComponent({
  name: 'LxDrawer',
  components: {
    [Overlay.name]: Overlay,
  },
  directives: {
    TrapFocus,
  },
  props: {
    ...useDialogProps,
    direction: {
      type: String as PropType<DrawerDirection>,
      default: 'rtl',
      validator: (val: DrawerDirection) => {
        return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(val) !== -1
      },
    },
    size: {
      type: [String, Number],
      default: '30%',
    },
    withHeader: {
      type: Boolean,
      default: true,
    },
    modalFade: {
      type: Boolean,
      default: true,
    },
  },

  emits: useDialogEmits,

  setup(props, ctx) {
    const drawerRef:any = ref(null)
    return {
      ...useDialog(props, ctx as SetupContext, drawerRef),
      drawerRef,
      isHorizontal: computed(() => props.direction === 'rtl' || props.direction === 'ltr'),
      drawerSize: computed(() => typeof props.size === 'number' ? `${props.size}px` : props.size),
    }

  },
})
</script>
