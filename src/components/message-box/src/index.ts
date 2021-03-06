import MessageBox from './messageBox'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

const _MessageBox = MessageBox as SFCWithInstall<typeof MessageBox>

_MessageBox.install = (app: App) => {
  app.config.globalProperties.$msgbox = _MessageBox
  app.config.globalProperties.$messageBox = _MessageBox
  app.config.globalProperties.$alert = _MessageBox.alert
  app.config.globalProperties.$confirm = _MessageBox.confirm
  app.config.globalProperties.$prompt = _MessageBox.prompt
}

export default _MessageBox
export const LxMessageBox = _MessageBox

export * from './message-box.type'
