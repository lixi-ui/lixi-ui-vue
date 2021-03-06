import Space from './space'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

const _Space = Space as SFCWithInstall<typeof Space>

_Space.install = (app: App) => {
  app.component(_Space.name, _Space)
}

export default _Space
export const LxSpace = _Space
