import { ComputedRef } from 'vue'
import { AnyFunction } from '@lixi/utils/types'
export interface ICheckboxGroupInstance {
  name?: string
  modelValue?: ComputedRef
  disabled?: ComputedRef<boolean>
  min?: ComputedRef<string | number>
  max?: ComputedRef<string | number>
  size?: ComputedRef<string>
  fill?: ComputedRef<string>
  textColor?: ComputedRef<string>
  checkboxGroupSize?: ComputedRef<string>
  changeEvent?: AnyFunction<any>
}
