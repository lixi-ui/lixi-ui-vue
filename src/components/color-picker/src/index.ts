import ColorPicker from './index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

ColorPicker.install = (app: App): void => {
  app.component(ColorPicker.name, ColorPicker)
}

const _ColorPicker = ColorPicker as SFCWithInstall<typeof ColorPicker>

export default _ColorPicker
export const LxColorPicker = _ColorPicker
