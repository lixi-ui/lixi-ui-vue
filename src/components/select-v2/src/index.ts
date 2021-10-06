import Select from './src/select.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Select.install = (app: App): void => {
  app.component(Select.name, Select)
}

const _Select = Select as SFCWithInstall<typeof Select>

export default _Select
export const LxSelectV2 = _Select

export * from './src/token'
