import { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'

Collapse.install = (app: App): void => {
  app.component(Collapse.name, Collapse)
  app.component(CollapseItem.name, CollapseItem)
}

Collapse.CollapseItem = CollapseItem

const _Collapse = Collapse as any as SFCWithInstall<typeof Collapse> & {
  CollapseItem: typeof CollapseItem
}

export default _Collapse
export const LxCollapse = _Collapse
export const LxCollapseItem = CollapseItem
