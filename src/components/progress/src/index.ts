import Progress from './index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Progress.install = (app: App): void => {
  app.component(Progress.name, Progress)
}

const _Progress = Progress as SFCWithInstall<typeof Progress>

export default _Progress
export const LxProgress = _Progress
