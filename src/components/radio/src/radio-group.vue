<template>
  <div
    ref="radioGroup"
    class="lx-radio-group"
    role="radiogroup"
    @keydown="handleKeydown"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  computed,
  provide,
  onMounted,
  inject,
  ref,
  reactive,
  toRefs,
  watch,
} from 'vue'
import { EVENT_CODE } from '@lixi/utils/aria'
import { UPDATE_MODEL_EVENT } from '@lixi/utils/constants'
import { isValidComponentSize } from '@lixi/utils/validators'
import { lxFormItemKey } from '@lixi/tokens'
import radioGroupKey from './token'

import type { PropType } from 'vue'
import type { LxFormItemContext } from '@lixi/tokens'
import type { ComponentSize } from '@lixi/utils/types'

export default defineComponent({
  name: 'LxRadioGroup',

  componentName: 'LxRadioGroup',

  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: '',
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    fill: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: '',
    },
    disabled: Boolean,
  },

  emits: [UPDATE_MODEL_EVENT, 'change'],

  setup(props, ctx) {
    const radioGroup:any = ref(null)

    const lxFormItem:any = inject(lxFormItemKey, {} as LxFormItemContext)

    const radioGroupSize = computed<ComponentSize>(() => {
      return props.size || lxFormItem.size
    })

    // methods
    const changeEvent = value => {
      ctx.emit(UPDATE_MODEL_EVENT, value)
      nextTick(() => {
        ctx.emit('change', value)
      })
    }

    provide(radioGroupKey, reactive({
      name: 'LxRadioGroup',
      ...toRefs(props),
      radioGroupSize: radioGroupSize,
      changeEvent: changeEvent,
    } as any))

    watch(() => props.modelValue, val => {
      lxFormItem.formItemMitt?.emit('el.form.change', [val])
    })

    const handleKeydown = e => { // 左右上下按键 可以在radio组内切换不同选项
      const target = e.target
      const className = target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]'
      const radios = radioGroup.value.querySelectorAll(className)
      const length = radios.length
      const index = Array.from(radios).indexOf(target)
      const roleRadios = radioGroup.value.querySelectorAll('[role=radio]')
      let nextIndex:any = null
      switch (e.code) {
        case EVENT_CODE.left:
        case EVENT_CODE.up:
          e.stopPropagation()
          e.preventDefault()
          nextIndex = index === 0 ? length - 1 : index - 1
          break
        case EVENT_CODE.right:
        case EVENT_CODE.down:
          e.stopPropagation()
          e.preventDefault()
          nextIndex = (index === (length - 1)) ? 0 : index + 1
          break
        default:
          break
      }
      if (nextIndex === null) return
      roleRadios[nextIndex].click()
      roleRadios[nextIndex].focus()
    }

    onMounted(() => {
      const radios:any = radioGroup.value.querySelectorAll('[type=radio]')
      const firstLabel = radios[0]
      if (!Array.from(radios).some((radio: any) => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0
      }
    })
    return {
      handleKeydown,
      radioGroupSize,
      radioGroup,
    }
  },
})
</script>

