import Empty from './index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Empty.install = (app: App): void => {
  app.component(Empty.name, Empty)
}

const _Empty = Empty as SFCWithInstall<typeof Empty>

export default _Empty
export const LxEmpty = _Empty
