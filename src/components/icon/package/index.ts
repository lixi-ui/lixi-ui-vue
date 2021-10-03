import Icon from './package/index.vue'

import type { App } from 'vue'
// import type { SFCWithInstall } from '@element-plus/utils/types'

Icon.install = (app: App): void => {
  app.component(Icon.name, Icon)
}

const _Icon = Icon

export default _Icon
export const LvIcon = _Icon
