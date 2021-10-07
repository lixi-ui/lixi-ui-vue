import { App } from 'vue'
import CheckTag from './index.vue'
import type { SFCWithInstall } from '@lixi/utils/types'

CheckTag.install = (app: App): void => {
  app.component(CheckTag.name, CheckTag)
}

const _CheckTag = CheckTag as SFCWithInstall<typeof CheckTag>

export default _CheckTag
export const LxCheckTag = _CheckTag
