import { App } from 'vue'
import Backtop from './index.vue'

import type { SFCWithInstall } from '@lixi/utils/types'

Backtop.install = (app: App): void => {
  app.component(Backtop.name, Backtop)
}

const _Backtop = Backtop as SFCWithInstall<typeof Backtop>

export default _Backtop
export const LxBacktop = _Backtop
