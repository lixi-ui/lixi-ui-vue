import Alert from './index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Alert.install = (app: App): void => {
  app.component(Alert.name, Alert)
}

const _Alert = Alert as SFCWithInstall<typeof Alert>

export default _Alert
export const LxAlert = _Alert
