import Result from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Result.install = (app: App): void => {
  app.component(Result.name, Result)
}

const _Result = Result as SFCWithInstall<typeof Result>

export default _Result
export const LxResult = _Result
