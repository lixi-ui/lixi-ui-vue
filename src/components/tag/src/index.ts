import Tag from './index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Tag.install = (app: App): void => {
  app.component(Tag.name, Tag)
}

const _Tag = Tag as SFCWithInstall<typeof Tag>

export default _Tag
export const LxTag = _Tag
