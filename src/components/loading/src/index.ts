import Loading from './loading.ts'
import vLoading from './directive'

import type { App } from 'vue'

// installer and everything in all
const LxLoading = {
  install(app: App) {
    app.directive('loading', vLoading)
    app.config.globalProperties.$loading = Loading
  },
  directive: vLoading,
  service: Loading,
}

export default LxLoading

export {
  LxLoading,
}

export const LxLoadingDirective = vLoading
export const LxLoadingService = Loading

export * from './loading.type'
