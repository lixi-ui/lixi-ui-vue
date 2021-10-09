import InfiniteScroll from './infinite-scroll'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

const _InfiniteScroll = InfiniteScroll as SFCWithInstall<typeof InfiniteScroll>

_InfiniteScroll.install = (app: App) => {
  app.directive('InfiniteScroll', _InfiniteScroll)
}

export default _InfiniteScroll
export const LxInfiniteScroll = _InfiniteScroll
