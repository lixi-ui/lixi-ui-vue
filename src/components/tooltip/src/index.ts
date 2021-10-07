import Tooltip from './tooptip'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Tooltip.install = (app: App): void => {
  app.component(Tooltip.name, Tooltip)
}

const _Tooltip = Tooltip as SFCWithInstall<typeof Tooltip>

export default _Tooltip
export const LxTooltip = _Tooltip
