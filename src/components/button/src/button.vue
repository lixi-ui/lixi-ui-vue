<template>
  <button
    :class="[
      'lx-button',
      type ? 'lx-button--' + type : '',
      buttonSize ? 'lx-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <i v-if="loading" class="lx-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang='ts'>
import { computed, inject, defineComponent } from 'vue'
import { lxFormKey, lxFormItemKey } from '@lixi/tokens'
import { useGlobalConfig } from '@lixi/utils/util'
import { isValidComponentSize } from '@lixi/utils/validators'
import { lxButtonGroupKey } from '@lixi/tokens'

import type { PropType } from 'vue'
import type { ComponentSize } from '@lixi/utils/types'
import type { LxFormContext, LxFormItemContext } from '@lixi/tokens'
import type { ButtonNativeType, ButtonType } from './types'

export default defineComponent({
  name: 'LxButton',

  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
      validator: (val: string) => {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'danger',
          'text',
        ].includes(val)
      },
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    icon: {
      type: String,
      default: '',
    },
    nativeType: {
      type: String as PropType<ButtonNativeType>,
      default: 'button',
      validator: (val: string) => {
        return ['button', 'submit', 'reset'].includes(val)
      },
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },

  emits: ['click'],

  setup(props, { emit }) {
    const $ELEMENT: { size?: string } = useGlobalConfig()

    const lxForm = inject(lxFormKey, {} as LxFormContext)
    const lxFormItem = inject(lxFormItemKey, {} as LxFormItemContext)
    const lxBtnGroup = inject(lxButtonGroupKey, {})

    const buttonSize = computed(() => {
      return props.size || lxBtnGroup.size || lxFormItem.size || $ELEMENT.size
    })
    const buttonDisabled = computed(() => {
      return props.disabled || lxForm.disabled
    })

    //methods
    const handleClick = (evt: MouseEvent) => {
      emit('click', evt)
    }

    return {
      buttonSize,
      buttonDisabled,
      handleClick,
    }
  },
})
</script>
