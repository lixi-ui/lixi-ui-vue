import Breadcrumb from './index.vue'
import BreadcrumbItem from './item.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Breadcrumb.install = (app: App): void => {
  app.component(Breadcrumb.name, Breadcrumb)
  app.component(BreadcrumbItem.name, BreadcrumbItem)
}

Breadcrumb.BreadcrumbItem = BreadcrumbItem

const _Breadcrumb = Breadcrumb as any as SFCWithInstall<typeof Breadcrumb> & {
  BreadcrumbItem: typeof BreadcrumbItem
}

export default _Breadcrumb
export const LxBreadcrumb = _Breadcrumb
export const LxBreadcrumbItem = BreadcrumbItem
