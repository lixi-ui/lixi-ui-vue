import Scrollbar from './index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Scrollbar.install = (app: App): void => {
  app.component(Scrollbar.name, Scrollbar)
}

const _Scrollbar = Scrollbar as SFCWithInstall<typeof Scrollbar>

export default _Scrollbar
export const LxScrollbar = _Scrollbar

export * from './util.ts'
