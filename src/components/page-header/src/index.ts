import PageHeader from './index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

PageHeader.install = (app: App): void => {
  app.component(PageHeader.name, PageHeader)
}

const _PageHeader = PageHeader as SFCWithInstall<typeof PageHeader>

export default _PageHeader
export const LxPageHeader = _PageHeader
