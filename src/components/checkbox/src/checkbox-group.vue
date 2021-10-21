<template>
  <div class="lx-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, provide, nextTick, toRefs } from 'vue'
import { UPDATE_MODEL_EVENT } from '@lixi/utils/constants'
import { isValidComponentSize } from '@lixi/utils/validators'
import { useCheckboxGroup } from './useCheckbox'

import type { PropType } from 'vue'
import type { ComponentSize } from '@lixi/utils/types'

export default defineComponent({
  name: 'LxCheckboxGroup',

  props: {
    modelValue: {
      type: [Object, Boolean, Array],
      default: () => undefined,
    },
    disabled: Boolean,
    min: {
      type: Number,
      default: undefined,
    },
    max: {
      type: Number,
      default: undefined,
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    fill: {
      type: String,
      default: undefined,
    },
    textColor: {
      type: String,
      default: undefined,
    },
  },

  emits: [UPDATE_MODEL_EVENT, 'change'],

  setup(props:any, ctx) {
    const { lxFormItem, lxFormItemSize, ELEMENT } = useCheckboxGroup()
    const checkboxGroupSize = computed(() => props.size || lxFormItemSize.value || ELEMENT.size)

    const changeEvent = value => {
      ctx.emit(UPDATE_MODEL_EVENT, value)
      nextTick(() => {
        ctx.emit('change', value)
      })
    }

    const modelValue = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        changeEvent(val)
      },
    })

    provide('CheckboxGroup', {
      name: 'LxCheckboxGroup',
      modelValue,
      ...toRefs(props),
      checkboxGroupSize,
      changeEvent,
    })

    watch(() => props.modelValue, val => {
      lxFormItem.formItemMitt?.emit('el.form.change', [val])
    })
  },
})
</script>
