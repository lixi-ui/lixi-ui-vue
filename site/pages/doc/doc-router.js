import Button from '../../../src/components/button/doc/index.vue';
import Tree from '../../../src/components/tree/doc/index.vue';
import Checkbox from '../../../src/components/checkbox/doc/index.vue';
import Icon from '../../../src/components/icon/doc/index.vue';
import Row from '../../../src/components/row/doc/index.vue';
import Container from '../../../src/components/container/doc/index.vue';
import Link from '../../../src/components/link/doc/index.vue';

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
    component: Row
  },
  {
    path: '/doc/container',
    name: 'container',
    component: Container
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
    path: '/doc/link',
    name: 'link',
    component: Link
  },
  {
    path: '/doc/checkbox',
    name: 'checkbox',
    component: Checkbox
  },
  {
    path: '/doc/tree',
    name: 'tree',
    component: Tree
  }
]

export default douRouter