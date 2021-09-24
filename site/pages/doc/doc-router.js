import Button from '../../../src/components/button/doc/index.vue'
import Tree from '../../../src/components/tree/doc/index.vue'
import Introduce from './introduce/index.vue'

var douRouter = [
  {
    path: '/doc/introduce',
    name: 'introduce',
    component: Introduce
  },
  {
    path: '/doc/button',
    name: 'button',
    component: Button
  },
  {
    path: '/doc/tree',
    name: 'tree',
    component: Tree
  }
]

export default douRouter