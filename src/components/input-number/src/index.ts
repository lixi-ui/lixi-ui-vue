import InputNumber from './index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

InputNumber.install = (app: App): void => {
  app.component(InputNumber.name, InputNumber)
}

const _InputNumber = InputNumber as SFCWithInstall<typeof InputNumber>

export default _InputNumber
export const LxInputNumber = _InputNumber
