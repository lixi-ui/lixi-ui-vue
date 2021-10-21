import {
  ref,
  computed,
  inject,
  getCurrentInstance,
  watch,
} from 'vue'
import { toTypeString } from '@vue/shared'
import { UPDATE_MODEL_EVENT } from '@lixi/utils/constants'
import { useGlobalConfig } from '@lixi/utils/util'
import { lxFormKey, lxFormItemKey } from '@lixi/tokens'

import type { ExtractPropTypes } from 'vue'
import type { LxFormContext, LxFormItemContext } from '@lixi/tokens'
import type { PartialReturnType } from '@lixi/utils/types'
import type { ICheckboxGroupInstance } from './checkbox.type'

export const useCheckboxProps = {
  modelValue: {
    type: [Boolean, Number, String],
    default: () => undefined,
  },
  label: {
    type: [String, Boolean, Number, Object],
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: undefined,
  },
  trueLabel: {
    type: [String, Number],
    default: undefined,
  },
  falseLabel: {
    type: [String, Number],
    default: undefined,
  },
  size: String,
}

export type IUseCheckboxProps = ExtractPropTypes<typeof useCheckboxProps>

export const useCheckboxGroup = () => {
  const ELEMENT = useGlobalConfig()
  const lxForm = inject(lxFormKey, {} as LxFormContext)
  const lxFormItem = inject(lxFormItemKey, {} as LxFormItemContext)
  const checkboxGroup = inject<ICheckboxGroupInstance>('CheckboxGroup', {})
  const isGroup = computed(() => checkboxGroup && checkboxGroup?.name === 'LxCheckboxGroup')
  const lxFormItemSize = computed(() => {
    return lxFormItem.size
  })
  return {
    isGroup,
    checkboxGroup,
    lxForm,
    ELEMENT,
    lxFormItemSize,
    lxFormItem,
  }
}

const useModel = (props: IUseCheckboxProps) => {
  const selfModel = ref(false)
  const vm:any = getCurrentInstance()
  const emit:any = vm.emit
  const { isGroup, checkboxGroup } = useCheckboxGroup()
  const isLimitExceeded = ref(false)
  const store = computed(() => checkboxGroup ? checkboxGroup.modelValue?.value : props.modelValue)
  const model = computed({
    get() {
      return isGroup.value
        ? store.value
        : props.modelValue ?? selfModel.value
    },

    set(val: unknown) {
      if (isGroup.value && Array.isArray(val)) {
        isLimitExceeded.value = false

        if (checkboxGroup.min !== undefined && val.length < checkboxGroup.min.value) {
          isLimitExceeded.value = true
        }
        if (checkboxGroup.max !== undefined && val.length > checkboxGroup.max.value) {
          isLimitExceeded.value = true
        }

        isLimitExceeded.value === false && checkboxGroup?.changeEvent?.(val)
      } else {
        emit(UPDATE_MODEL_EVENT, val)
        selfModel.value = val as boolean
      }
    },
  })

  return {
    model,
    isLimitExceeded,
  }
}

const useCheckboxStatus = (props: IUseCheckboxProps, { model }: any) => {
  const { isGroup, checkboxGroup, lxFormItemSize, ELEMENT } = useCheckboxGroup()
  const focus = ref(false)
  const size = computed<string | undefined>(() => checkboxGroup?.checkboxGroupSize?.value || lxFormItemSize.value || ELEMENT.size)
  const isChecked = computed<boolean>(() => {
    const value = model.value
    if (toTypeString(value) === '[object Boolean]') {
      return value
    } else if (Array.isArray(value)) {
      return value.includes(props.label)
    } else if (value !== null && value !== undefined) {
      return value === props.trueLabel
    } else {
      return !!value
    }
  })
  const checkboxSize = computed(() => {
    const temCheckboxSize = props.size || lxFormItemSize.value || ELEMENT.size
    return isGroup.value
      ? checkboxGroup?.checkboxGroupSize?.value || temCheckboxSize
      : temCheckboxSize
  })

  return {
    isChecked,
    focus,
    size,
    checkboxSize,
  }
}

const useDisabled = (
  props: IUseCheckboxProps,
  { model, isChecked }: any & any,
) => {
  const { lxForm, isGroup, checkboxGroup } = useCheckboxGroup()
  const isLimitDisabled = computed(() => {
    const max:any = checkboxGroup.max?.value
    const min:any = checkboxGroup.min?.value
    return !!(max || min) && (model.value.length >= max && !isChecked.value) ||
      (model.value.length <= min && isChecked.value)
  })
  const isDisabled = computed(() => {
    const disabled = props.disabled || lxForm.disabled
    return isGroup.value
      ? checkboxGroup.disabled?.value || disabled || isLimitDisabled.value
      : props.disabled || lxForm.disabled
  })

  return {
    isDisabled,
    isLimitDisabled,
  }
}

const setStoreValue = (props: IUseCheckboxProps, { model }: any) => {
  function addToStore() {
    if (
      Array.isArray(model.value) &&
      !model.value.includes(props.label)
    ) {
      model.value.push(props.label)
    } else {
      model.value = props.trueLabel || true
    }
  }
  props.checked && addToStore()
}

// const useEvent = (props: IUseCheckboxProps, { isLimitExceeded }: PartialReturnType<typeof useModel>) => {
const useEvent = (props: IUseCheckboxProps, { isLimitExceeded }: any) => {
  const { lxFormItem } = useCheckboxGroup()
  const vm:any = getCurrentInstance()
  const emit:any = vm.emit
  function handleChange(e: InputEvent) {
    if (isLimitExceeded.value) return
    const target = e.target as HTMLInputElement
    const value = target.checked
      ? props.trueLabel ?? true
      : props.falseLabel ?? false

    emit('change', value, e)
  }

  watch(() => props.modelValue, val => {
    lxFormItem.formItemMitt?.emit('el.form.change', [val])
  })

  return {
    handleChange,
  }
}

export const useCheckbox = (props: IUseCheckboxProps) => {
  const { model, isLimitExceeded } = useModel(props)
  const { focus, size, isChecked, checkboxSize } = useCheckboxStatus(props, { model })
  const { isDisabled } = useDisabled(props, { model, isChecked })
  const { handleChange } = useEvent(props, { isLimitExceeded })

  setStoreValue(props, { model })

  return {
    isChecked,
    isDisabled,
    checkboxSize,
    model,
    handleChange,
    focus,
    size,
  }
}
