import MaterialDoc from './project/lixi-material-vue/site/pages/doc/index.vue'

import Button from './project/lixi-material-vue/src/components/button/doc/index.vue'
import Tree from './project/lixi-material-vue/src/components/tree/doc/index.vue'

var douRouter = [
  {
    path: '/material/lixi-material-vue/doc/button',
    name: 'button',
    component: Button
  },
  {
    path: '/material/lixi-material-vue/doc/tree',
    name: 'tree',
    component: Tree
  }
]

var materialConfig = [
  {
    path: '/material/lixi-material-vue',
    name: 'lixi-material-vue',
    component: MaterialDoc,
    // children: douRouter
  }
]

export default materialConfig;