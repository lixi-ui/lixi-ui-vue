<template>
  <lx-popper
    ref="triggerVnode"
    v-model:visible="visible"
    :placement="placement"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :effect="effect"
    pure
    :manual-mode="true"
    :trigger="[trigger]"
    popper-class="lx-dropdown__popper"
    append-to-body
    transition="lx-zoom-in-top"
    :stop-popper-mouse-event="false"
    :gpu-acceleration="false"
  >
    <template #default>
      <lx-scrollbar
        ref="scrollbar"
        tag="ul"
        :wrap-style="wrapStyle"
        view-class="lx-dropdown__list"
      >
        <slot name="dropdown"></slot>
      </lx-scrollbar>
    </template>
    <template #trigger>
      <div :class="['lx-dropdown', dropdownSize ? 'lx-dropdown--' + dropdownSize : '']">
        <slot v-if="!splitButton" name="default"></slot>
        <template v-else>
          <lx-button-group>
            <lx-button
              :size="dropdownSize"
              :type="type"
              @click="handlerMainButtonClick"
            >
              <slot name="default"></slot>
            </lx-button>
            <lx-button
              :size="dropdownSize"
              :type="type"
              class="lx-dropdown__caret-button"
            >
              <i class="lx-dropdown__icon lx-icon-arrow-down"></i>
            </lx-button>
          </lx-button-group>
        </template>
      </div>
    </template>
  </lx-popper>
</template>
<script lang="ts">
import {
  defineComponent,
  provide,
  getCurrentInstance,
  ref,
  computed,
  watch,
  onMounted,
} from 'vue'
import type { PropType } from 'vue'
import LxButton from '@lixi/components/button'
import LxPopper, { Effect, Placement } from '@lixi/components/popper'
import LxScrollbar from '@lixi/components/scrollbar'
import { on, addClass, removeClass } from '@lixi/utils/dom'
import { addUnit } from '@lixi/utils/util'
import { useDropdown } from './useDropdown'

import type { ComponentPublicInstance } from 'vue'
import type { TriggerType } from '@lixi/hooks/use-popper/use-target-events'
import type { ButtonType } from '@lixi/components/button/src/types'

type Nullable<T> = null | T
const { ButtonGroup: LxButtonGroup } = LxButton

export default defineComponent({
  name: 'LxDropdown',
  components: {
    LxButton,
    LxButtonGroup,
    LxScrollbar,
    LxPopper,
  },
  props: {
    trigger: {
      type: String as PropType<TriggerType | 'contextmenu'>,
      default: 'hover',
    },
    type: String as PropType<ButtonType>,
    size: {
      type: String,
      default: '',
    },
    splitButton: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true,
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom',
    },
    showTimeout: {
      type: Number,
      default: 150,
    },
    hideTimeout: {
      type: Number,
      default: 150,
    },
    tabindex: {
      type: [Number, String],
      default: 0,
    },
    effect: {
      type: String as PropType<Effect>,
      default: Effect.LIGHT,
    },
    maxHeight: {
      type: [Number, String],
      default: '',
    },
  },
  emits: ['visible-change', 'click', 'command'],
  setup(props, { emit }) {
    const _instance = getCurrentInstance()
    const { ELEMENT } = useDropdown()

    const timeout = ref<Nullable<number>>(null)

    const visible = ref(false)
    const scrollbar = ref(null)
    const wrapStyle = computed(() => `max-height: ${addUnit(props.maxHeight)}`)

    watch(
      () => visible.value,
      val => {
        if (val) triggerElmFocus()
        if (!val) triggerElmBlur()
        emit('visible-change', val)
      },
    )

    const focusing = ref(false)
    watch(
      () => focusing.value,
      val => {
        const selfDefine = triggerElm.value
        if (selfDefine) {
          if (val) {
            addClass(selfDefine, 'focusing')
          } else {
            removeClass(selfDefine, 'focusing')
          }
        }
      },
    )

    const triggerVnode = ref<Nullable<ComponentPublicInstance>>(null)
    const triggerElm = computed<Nullable<HTMLButtonElement>>(() => {
      const _: any = (triggerVnode.value?.$refs.triggerRef as HTMLElement)?.children[0]
      return !props.splitButton ? _ : _?.children?.[1]
    })

    function handleClick() {
      if (triggerElm.value?.disabled) return
      if (visible.value) {
        hide()
      } else {
        show()
      }
    }

    function show() {
      if (triggerElm.value?.disabled) return
      timeout.value && clearTimeout(timeout.value)
      timeout.value = window.setTimeout(
        () => {
          visible.value = true
        },
        ['click', 'contextmenu'].includes(props.trigger) ? 0 : props.showTimeout,
      )
    }

    function hide() {
      if (triggerElm.value?.disabled) return
      removeTabindex()
      if (props.tabindex >= 0) {
        resetTabindex(triggerElm.value)
      }
      clearTimeout(timeout.value)
      timeout.value = window.setTimeout(
        () => {
          visible.value = false
        },
        ['click', 'contextmenu'].includes(props.trigger) ? 0 : props.hideTimeout,
      )
    }

    function removeTabindex() {
      triggerElm.value?.setAttribute('tabindex', '-1')
    }

    function resetTabindex(ele) {
      removeTabindex()
      ele?.setAttribute('tabindex', '0')
    }

    function triggerElmFocus() {
      triggerElm.value?.focus?.()
    }

    function triggerElmBlur() {
      triggerElm.value?.blur?.()
    }

    const dropdownSize = computed(() => props.size || ELEMENT.size)

    function commandHandler(...args) {
      emit('command', ...args)
    }

    provide('elDropdown', {
      instance: _instance,
      dropdownSize,
      visible,
      handleClick,
      commandHandler,
      show,
      hide,
      trigger: computed(() => props.trigger),
      hideOnClick: computed(() => props.hideOnClick),
      triggerElm,
    })

    onMounted(() => {
      if (!props.splitButton) {
        on(triggerElm.value, 'focus', () => {
          focusing.value = true
        })
        on(triggerElm.value, 'blur', () => {
          focusing.value = false
        })
        on(triggerElm.value, 'click', () => {
          focusing.value = false
        })
      }
      if (props.trigger === 'hover') {
        on(triggerElm.value, 'mouseenter', show)
        on(triggerElm.value, 'mouseleave', hide)
      } else if (props.trigger === 'click') {
        on(triggerElm.value, 'click', handleClick)
      } else if (props.trigger === 'contextmenu') {
        on(triggerElm.value, 'contextmenu', e => {
          e.preventDefault()
          handleClick()
        })
      }

      Object.assign(_instance, {
        handleClick,
        hide,
        resetTabindex,
      })
    })

    const handlerMainButtonClick = event => {
      emit('click', event)
      hide()
    }

    return {
      visible,
      scrollbar,
      wrapStyle,
      dropdownSize,
      handlerMainButtonClick,
      triggerVnode,
    }
  },
})
</script>
