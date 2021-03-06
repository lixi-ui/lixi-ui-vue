import Transfer from './index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Transfer.install = (app: App): void => {
  app.component(Transfer.name, Transfer)
}

const _Transfer = Transfer as SFCWithInstall<typeof Transfer>

export default _Transfer
export const LxTransfer = _Transfer

export * from './transfer'
