import Notify from './notify'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

const _Notify = Notify as SFCWithInstall<typeof Notify>

_Notify.install = (app: App) => {
  app.config.globalProperties.$notify = _Notify
}

export default _Notify
export const LxNotification = _Notify

export * from './notification.type'
