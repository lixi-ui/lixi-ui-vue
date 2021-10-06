import { ref, computed, inject } from 'vue'
import { elFormKey, elFormItemKey } from '@element-plus/tokens'
import { useGlobalConfig } from '@element-plus/utils/util'
import radioGroupKey from './token'

import type { ComputedRef, WritableComputedRef } from 'vue'
import type { LxFormContext, LxFormItemContext } from '@element-plus/tokens'
import type { RadioGroupContext } from './token'

export const useRadio = () => {

  const ELEMENT = useGlobalConfig()
  const elForm = inject(elFormKey, {} as LxFormContext)
  const elFormItem = inject(elFormItemKey, {} as LxFormItemContext)
  const radioGroup = inject(radioGroupKey, {} as RadioGroupContext)
  const focus = ref(false)
  const isGroup = computed(() => radioGroup?.name === 'LxRadioGroup')
  const elFormItemSize = computed(() => elFormItem.size || ELEMENT.size)

  return {
    isGroup,
    focus,
    radioGroup,
    elForm,
    ELEMENT,
    elFormItemSize,
  }
}

interface IUseRadioAttrsProps {
  disabled?: boolean
  label: string | number | boolean
}

interface IUseRadioAttrsState {
  isGroup: ComputedRef<boolean>
  radioGroup: RadioGroupContext
  elForm: LxFormContext
  model: WritableComputedRef<string | number | boolean>
}

export const useRadioAttrs = (props: IUseRadioAttrsProps, {
  isGroup,
  radioGroup,
  elForm,
  model,
}: IUseRadioAttrsState) => {
  const isDisabled = computed(() => {
    return isGroup.value
      ? radioGroup.disabled || props.disabled || elForm.disabled
      : props.disabled || elForm.disabled
  })

  const tabIndex = computed(() => {
    return (isDisabled.value || (isGroup.value && model.value !== props.label)) ? -1 : 0
  })

  return {
    isDisabled,
    tabIndex,
  }

}
