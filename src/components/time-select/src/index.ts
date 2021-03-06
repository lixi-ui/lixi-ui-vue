import TimeSelect from './time-select.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

TimeSelect.install = (app: App): void => {
  app.component(TimeSelect.name, TimeSelect)
}

const _TimeSelect = TimeSelect as SFCWithInstall<typeof TimeSelect>

export default _TimeSelect
export const LxTimeSelect = _TimeSelect
