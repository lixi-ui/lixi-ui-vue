import Input from './index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Input.install = (app: App): void => {
  app.component(Input.name, Input)
}

const _Input = Input as SFCWithInstall<typeof Input>

export default _Input
export const LxInput = _Input
