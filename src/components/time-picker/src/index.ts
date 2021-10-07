import TimePicker from './time-picker'
import CommonPicker from './common/picker.vue'
import TimePickPanel from './time-picker-com/panel-time-pick.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

export * from './common/date-utils'
export * from './common/constant'
export * from './common/props'

const _TimePicker = TimePicker as SFCWithInstall<typeof TimePicker>

_TimePicker.install = (app: App) => {
  app.component(_TimePicker.name, _TimePicker)
}

export { CommonPicker, TimePickPanel }
export default _TimePicker
export const LxTimePicker = _TimePicker
