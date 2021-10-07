import Descriptions from './index.vue'
import DescriptionsItem from './description-item'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'


Descriptions.install = (app: App): void => {
  app.component(Descriptions.name, Descriptions)
  app.component(DescriptionsItem.name, DescriptionsItem)
}

Descriptions.DescriptionsItem = DescriptionsItem

const _Descriptions = Descriptions as any as SFCWithInstall<typeof Descriptions> & {
  DescriptionsItem: typeof DescriptionsItem
}

export default _Descriptions
export const LxDescriptions = _Descriptions
export const LxDescriptionsItem = DescriptionsItem
