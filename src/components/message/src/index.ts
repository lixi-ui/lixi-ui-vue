import Message from './src/message'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

const _Message = Message as SFCWithInstall<typeof Message>

_Message.install = (app: App) => {
  app.config.globalProperties.$message = _Message
}

export default _Message
export const LxMessage = _Message

export * from './src/types'

