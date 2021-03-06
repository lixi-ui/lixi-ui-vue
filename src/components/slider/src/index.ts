import Slider from './index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Slider.install = (app: App): void => {
  app.component(Slider.name, Slider)
}

const _Slider = Slider as SFCWithInstall<typeof Slider>

export default _Slider
export const LxSlider = _Slider

export * from './slider.type'
