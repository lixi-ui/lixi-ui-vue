import type { InjectionKey } from 'vue'
import type { ComponentSize } from '@lixi/utils/types'

type IModelType = boolean | string | number

export interface RadioGroupContext {
  name: 'LxRadioGroup'
  modelValue: IModelType
  fill: string
  textColor: string
  disabled: boolean
  size: ComponentSize
  radioGroupSize: ComponentSize
  changeEvent: (val: IModelType) => void
}

const radioGroupKey: InjectionKey<RadioGroupContext> = 'RadioGroup' as any

export default radioGroupKey
