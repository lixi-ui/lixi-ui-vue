import { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'
import Cascader from './index.vue'

Cascader.install = (app: App): void => {
  app.component(Cascader.name, Cascader)
}

const _Cascader = Cascader as SFCWithInstall<typeof Cascader>

export default _Cascader
export const LxCascader = _Cascader

