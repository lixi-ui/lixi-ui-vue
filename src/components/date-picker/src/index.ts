import DatePicker from './date-picker'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

const _DatePicker = DatePicker as SFCWithInstall<typeof DatePicker>

_DatePicker.install = (app: App) => {
  app.component(_DatePicker.name, _DatePicker)
}

export default _DatePicker
export const LxDatePicker = _DatePicker
