import Image from './index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Image.install = (app: App): void => {
  app.component(Image.name, Image)
}

const _Image = Image as SFCWithInstall<typeof Image>

export default _Image
export const LxImage = _Image
