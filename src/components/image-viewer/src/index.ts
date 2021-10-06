import ImageViewer from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

ImageViewer.install = (app: App): void => {
  app.component(ImageViewer.name, ImageViewer)
}

const _ImageViewer = ImageViewer as SFCWithInstall<typeof ImageViewer>

export default _ImageViewer
export const LxImageViewer = _ImageViewer
