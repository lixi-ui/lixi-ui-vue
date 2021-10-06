import Switch from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Switch.install = (app: App): void => {
  app.component(Switch.name, Switch)
}

const _Switch = Switch as SFCWithInstall<typeof Switch>

export default _Switch
export const LxSwitch = _Switch
