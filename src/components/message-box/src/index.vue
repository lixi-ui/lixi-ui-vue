<template>
  <transition name="fade-in-linear" @after-leave="$emit('vanish')">
    <lx-overlay
      v-show="visible"
      :z-index="zIndex"
      :overlay-class="['is-message-box', modalClass]"
      :mask="modal"
      @click.self="handleWrapperClick"
    >
      <div
        ref="root"
        v-trap-focus
        :aria-label="title || 'dialog'"
        aria-modal="true"
        :class="[
          'lx-message-box',
          customClass,
          { 'lx-message-box--center': center },
        ]"
      >
        <div
          v-if="title !== null && title !== undefined"
          class="lx-message-box__header"
        >
          <div class="lx-message-box__title">
            <div
              v-if="icon && center"
              :class="['lx-message-box__status', icon]"
            ></div>
            <span>{{ title }}</span>
          </div>
          <button
            v-if="showClose"
            type="button"
            class="lx-message-box__headerbtn"
            aria-label="Close"
            @click="
              handleAction(distinguishCancelAndClose ? 'close' : 'cancel')
            "
            @keydown.prevent.enter="
              handleAction(distinguishCancelAndClose ? 'close' : 'cancel')
            "
          >
            <i class="lx-message-box__close lx-icon-close"></i>
          </button>
        </div>
        <div class="lx-message-box__content">
          <div class="lx-message-box__container">
            <div
              v-if="icon && !center && hasMessage"
              :class="['lx-message-box__status', icon]"
            ></div>
            <div v-if="hasMessage" class="lx-message-box__message">
              <slot>
                <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
                <p v-else v-html="message"></p>
              </slot>
            </div>
          </div>
          <div v-show="showInput" class="lx-message-box__input">
            <lx-input
              ref="inputRef"
              v-model="inputValue"
              :type="inputType"
              :placeholder="inputPlaceholder"
              :class="{ invalid: validateError }"
              @keydown.prevent.enter="handleInputEnter"
            />
            <div
              class="lx-message-box__errormsg"
              :style="{
                visibility: !!editorErrorMessage ? 'visible' : 'hidden',
              }"
            >
              {{ editorErrorMessage }}
            </div>
          </div>
        </div>
        <div class="lx-message-box__btns">
          <lx-button
            v-if="showCancelButton"
            :loading="cancelButtonLoading"
            :class="[cancelButtonClass]"
            :round="roundButton"
            :size="buttonSize || 'small'"
            @click="handleAction('cancel')"
            @keydown.prevent.enter="handleAction('cancel')"
          >
            {{ cancelButtonText || t('el.messagebox.cancel') }}
          </lx-button>
          <lx-button
            v-show="showConfirmButton"
            ref="confirmRef"
            :loading="confirmButtonLoading"
            :class="[confirmButtonClasses]"
            :round="roundButton"
            :disabled="confirmButtonDisabled"
            :size="buttonSize || 'small'"
            @click="handleAction('confirm')"
            @keydown.prevent.enter="handleAction('confirm')"
          >
            {{ confirmButtonText || t('el.messagebox.confirm') }}
          </lx-button>
        </div>
      </div>
    </lx-overlay>
  </transition>
</template>
<script lang="ts">
import {
  defineComponent,
  nextTick,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  reactive,
  ref,
  toRefs,
} from 'vue'
import LxButton from '@lixi/components/button/src/'
import { TrapFocus } from '@lixi/directives'
import {
  useModal,
  useLockScreen,
  useLocaleInject,
  useRestoreActive,
  usePreventGlobal,
} from '@lixi/hooks'
import LxInput from '@lixi/components/input/src'
import { Overlay as LxOverlay } from '@lixi/components/overlay/src'
import PopupManager from '@lixi/utils/popup-manager'
import { on, off } from '@lixi/utils/dom'
import { EVENT_CODE } from '@lixi/utils/aria'
import { isValidComponentSize } from '@lixi/utils/validators'

import type { ComponentPublicInstance, PropType } from 'vue'
import type { ComponentSize, Indexable } from '@lixi/utils/types'
import type { Action, MessageBoxState, MessageBoxType } from './message-box.type'

const TypeMap: Indexable<string> = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
}

export default defineComponent({
  name: 'LxMessageBox',
  directives: {
    TrapFocus,
  },
  components: {
    LxButton,
    LxInput,
    LxOverlay,
  },
  inheritAttrs: false,
  props: {
    buttonSize: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    modal: {
      type: Boolean,
      default: true,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    closeOnHashChange: {
      type: Boolean,
      default: true,
    },
    center: Boolean,
    roundButton: {
      default: false,
      type: Boolean,
    },
    container: {
      type: String, // default append to body
      default: 'body',
    },
    boxType: {
      type: String as PropType<MessageBoxType>,
      default: '',
    },
  },
  emits: ['vanish', 'action'],
  setup(props, { emit }) {
    // const popup = usePopup(props, doClose)
    const { t } = useLocaleInject()
    const visible = ref(false)
    // s represents state
    const state:any = reactive({
      beforeClose: null,
      callback: null,
      cancelButtonText: '',
      cancelButtonClass: '',
      confirmButtonText: '',
      confirmButtonClass: '',
      customClass: '',
      dangerouslyUseHTMLString: false,
      distinguishCancelAndClose: false,
      iconClass: '',
      inputPattern: null,
      inputPlaceholder: '',
      inputType: 'text',
      inputValue: null,
      inputValidator: null,
      inputErrorMessage: '',
      message: null,
      modalFade: true,
      modalClass: '',
      showCancelButton: false,
      showConfirmButton: true,
      type: '',
      title: undefined,
      showInput: false,
      action: '' as Action,
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonDisabled: false,
      editorErrorMessage: '',
      // refer to: https://github.com/ElemeFE/element/commit/2999279ae34ef10c373ca795c87b020ed6753eed
      // seemed ok for now without this state.
      // isOnComposition: false, // temporary remove
      validateError: false,
      zIndex: PopupManager.nextZIndex(),
    })
    const icon = computed(() => state.iconClass || (state.type && TypeMap[state.type] ? `lx-icon-${TypeMap[state.type]}` : ''))
    const hasMessage = computed(() => !!state.message)
    const inputRef:any = ref(null)
    const confirmRef:any = ref(null)

    const confirmButtonClasses = computed(() => `lx-button--primary ${state.confirmButtonClass}`)

    watch(() => state.inputValue, async val => {
      await nextTick()
      if (props.boxType === 'prompt' && val !== null) {
        validate()
      }
    }, { immediate: true })

    watch(() => visible.value, val => {
      if (val) {
        if (props.boxType === 'alert' || props.boxType === 'confirm') {
          nextTick().then(() => { confirmRef.value?.$el?.focus?.() })
        }
        state.zIndex = PopupManager.nextZIndex()
      }
      if (props.boxType !== 'prompt') return
      if (val) {
        nextTick().then(() => {
          if (inputRef.value && inputRef.value.$el) {
            getInputElement().focus()
          }
        })
      } else {
        state.editorErrorMessage = ''
        state.validateError = false
      }
    })

    onMounted(async () => {
      await nextTick()
      if (props.closeOnHashChange) {
        on(window, 'hashchange', doClose)
      }
    })

    onBeforeUnmount(() => {
      if (props.closeOnHashChange) {
        off(window, 'hashchange', doClose)
      }
    })

    function doClose() {
      if (!visible.value) return
      visible.value = false
      nextTick(() => {
        if (state.action) emit('action', state.action)
      })
    }

    const handleWrapperClick = () => {
      if (props.closeOnClickModal) {
        handleAction(state.distinguishCancelAndClose ? 'close' : 'cancel')
      }
    }

    const handleInputEnter = () => {
      if (state.inputType !== 'textarea') {
        return handleAction('confirm')
      }
    }

    const handleAction = (action: Action) => {
      if (props.boxType === 'prompt' && action === 'confirm' && !validate()) {
        return
      }

      state.action = action

      if (state.beforeClose) {
        state.beforeClose?.(action, state, doClose)
      } else {
        doClose()
      }
    }

    const validate = () => {
      if (props.boxType === 'prompt') {
        const inputPattern = state.inputPattern
        if (inputPattern && !inputPattern.test(state.inputValue || '')) {
          state.editorErrorMessage = state.inputErrorMessage || t('el.messagebox.error')
          state.validateError = true
          return false
        }
        const inputValidator = state.inputValidator
        if (typeof inputValidator === 'function') {
          const validateResult = inputValidator(state.inputValue)
          if (validateResult === false) {
            state.editorErrorMessage = state.inputErrorMessage || t('el.messagebox.error')
            state.validateError = true
            return false
          }
          if (typeof validateResult === 'string') {
            state.editorErrorMessage = validateResult
            state.validateError = true
            return false
          }
        }
      }
      state.editorErrorMessage = ''
      state.validateError = false
      return true
    }

    const getInputElement = () => {
      const inputRefs = inputRef.value.$refs
      return (inputRefs.input || inputRefs.textarea) as HTMLElement
    }

    const handleClose = () => {
      handleAction('close')
    }

    // when close on press escape is disabled, pressing esc should not callout
    // any other message box and close any other dialog-ish elements
    // e.g. Dialog has a close on press esc feature, and when it closes, it calls
    // props.beforeClose method to make a intermediate state by callout a message box
    // for some verification or alerting. then if we allow global event liek this
    // to dispatch, it could callout another message box.
    if (props.closeOnPressEscape) {
      useModal({
        handleClose,
      }, visible)
    } else {
      usePreventGlobal(visible, 'keydown', (e: any) => e.code === EVENT_CODE.esc)
    }

    // locks the screen to prevent scroll
    if (props.lockScroll) {
      useLockScreen(visible)
    }

    // restore to prev active element.
    useRestoreActive(visible)

    return {
      ...toRefs(state),
      visible,
      hasMessage,
      icon,
      confirmButtonClasses,
      inputRef,
      confirmRef,
      doClose, // for outside usage
      handleClose, // for out side usage
      handleWrapperClick,
      handleInputEnter,
      handleAction,
      t,
    }
  },
})
</script>
