import type { InjectionKey } from 'vue'
import type {
  FieldErrorList,
} from 'async-validator'
import type { Emitter } from 'mitt'
import type { ComponentSize } from '@lixi/utils/types'

export interface LxFormContext {
  registerLabelWidth(width: number, oldWidth: number): void
  deregisterLabelWidth(width: number): void
  autoLabelWidth: string | undefined
  formMitt: Emitter
  emit: (evt: string, ...args: any[]) => void
  labelSuffix: string
  inline?: boolean
  inlineMessage?: boolean
  model?: Record<string, unknown>
  size?: string
  showMessage?: boolean
  labelPosition?: string
  labelWidth?: string | number
  rules?: Record<string, unknown>
  statusIcon?: boolean
  hideRequiredAsterisk?: boolean
  disabled?: boolean
}

export interface ValidateFieldCallback {
  (isValid?: string, invalidFields?: FieldErrorList): void
}

export interface LxFormItemContext {
  prop?: string
  formItemMitt: Emitter
  size?: ComponentSize
  validateState: string
  $el: HTMLDivElement
  validate(trigger: string, callback?: ValidateFieldCallback): void
  updateComputedLabelWidth(width: number): void
  addValidateEvents(): void
  removeValidateEvents(): void
  resetField(): void
  clearValidate(): void
}

// TODO: change it to symbol
export const lxFormKey: any = 'lxForm' as any

export const lxFormItemKey: any = 'lxFormItem' as any

export const lxFormEvents = {
  addField: 'lx.form.addField',
  removeField: 'lx.form.removeField',
} as const
