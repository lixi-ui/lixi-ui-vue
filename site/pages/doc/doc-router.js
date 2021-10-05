import Button from '../../../src/components/button/doc/index.vue';
import Tree from '../../../src/components/tree/doc/index.vue';
import Icon from '../../../src/components/icon/doc/index.vue';
import row from '../../../src/components/row/doc/index.vue';
import Introduce from './introduce/index.vue';

var douRouter = [
  {
    path: '/doc/introduce',
    name: 'introduce',
    component: Introduce
  },
  {
    path: '/doc/layout',
    name: 'layout',
    component: row
  },
  {
    path: '/doc/icon',
    name: 'icon',
    component: Icon
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