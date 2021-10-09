import Message from './message'

// import type { App } from 'vue'
// import type { SFCWithInstall } from '@lixi/utils/types'

const _Message = Message

_Message.install = (app) => {
  app.config.globalProperties.$message = _Message
}

export default _Message
export const LxMessage = _Message

// export * from './types'

