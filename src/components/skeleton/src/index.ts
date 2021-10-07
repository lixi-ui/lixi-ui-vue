import Skeleton from './index.vue'
import SkeletonItem from './item.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Skeleton.install = (app: App): void => {
  app.component(Skeleton.name, Skeleton)
  app.component(SkeletonItem.name, SkeletonItem)
}

Skeleton.SkeletonItem = SkeletonItem

const _Skeleton = Skeleton as any as SFCWithInstall<typeof Skeleton> & {
  SkeletonItem: typeof SkeletonItem
}

export default _Skeleton
export const LxSkeleton = _Skeleton
export const LxSkeletonItem = SkeletonItem

export * from './types'
