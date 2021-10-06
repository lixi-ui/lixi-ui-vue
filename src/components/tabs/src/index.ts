import Tabs from './src/tabs'
import TabPane from './src/tab-pane.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Tabs.install = (app: App): void => {
  app.component(Tabs.name, Tabs)
  app.component(TabPane.name, TabPane)
}

Tabs.TabPane = TabPane

const _Tabs = Tabs as any as SFCWithInstall<typeof Tabs> & {
  TabPane: typeof TabPane
}

export default _Tabs
export const LxTabs = _Tabs
export const LxTabPane = TabPane
