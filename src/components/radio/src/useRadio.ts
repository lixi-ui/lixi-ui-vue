import { ref, computed, inject } from 'vue'
import { lxFormKey, lxFormItemKey } from '@lixi/tokens'
import { useGlobalConfig } from '@lixi/utils/util'
import radioGroupKey from './token'

import type { ComputedRef, WritableComputedRef } from 'vue'
import type { LxFormContext, LxFormItemContext } from '@lixi/tokens'
import type { RadioGroupContext } from './token'

export const useRadio = () => {

  const ELEMENT = useGlobalConfig()
  const lxForm = inject(lxFormKey, {} as LxFormContext)
  const lxFormItem = inject(lxFormItemKey, {} as LxFormItemContext)
  const radioGroup = inject(radioGroupKey, {} as RadioGroupContext)
  const focus = ref(false)
  const isGroup = computed(() => radioGroup?.name === 'LxRadioGroup')
  const lxFormItemSize = computed(() => lxFormItem.size || ELEMENT.size)

  return {
    isGroup,
    focus,
    radioGroup,
    lxForm,
    ELEMENT,
    lxFormItemSize,
  }
}

interface IUseRadioAttrsProps {
  disabled?: boolean
  label: string | number | boolean
}

interface IUseRadioAttrsState {
  isGroup: ComputedRef<boolean>
  radioGroup: RadioGroupContext
  lxForm: LxFormContext
  model: WritableComputedRef<string | number | boolean>
}

export const useRadioAttrs = (props: IUseRadioAttrsProps, {
  isGroup,
  radioGroup,
  lxForm,
  model,
}: IUseRadioAttrsState) => {
  const isDisabled = computed(() => {
    return isGroup.value
      ? radioGroup.disabled || props.disabled || lxForm.disabled
      : props.disabled || lxForm.disabled
  })

  const tabIndex = computed(() => {
    return (isDisabled.value || (isGroup.value && model.value !== props.label)) ? -1 : 0
  })

  return {
    isDisabled,
    tabIndex,
  }

}
