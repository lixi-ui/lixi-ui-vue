import Tree from './tree.vue'

import type { App } from 'vue'
// import type { SFCWithInstall } from '@lixi/utils/types'
import type { SFCWithInstall } from '../../../utils/utils/types'

Tree.install = (app: App): void => {
  app.component(Tree.name, Tree)
}

const _Tree = Tree as SFCWithInstall<typeof Tree>

export default _Tree
export const LxTree = _Tree
