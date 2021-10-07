import { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'
import CascaderPanel from './index.vue'


CascaderPanel.install = (app: App): void => {
  app.component(CascaderPanel.name, CascaderPanel)
}

const _CascaderPanel = CascaderPanel as SFCWithInstall<typeof CascaderPanel>

export default _CascaderPanel
export const LxCascaderPanel = _CascaderPanel
export * from './types'
export * from './config'
