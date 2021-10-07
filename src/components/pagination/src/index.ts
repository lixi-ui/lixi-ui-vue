import Pagination from './indexjs'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

const _Pagination = Pagination as SFCWithInstall<typeof Pagination>

_Pagination.install = (app: App) => {
  app.component(_Pagination.name, _Pagination)
}

export default _Pagination
export const LxPagination = _Pagination

export * from './pagination'
