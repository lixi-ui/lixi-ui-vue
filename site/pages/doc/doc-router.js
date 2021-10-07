// import Button from '../../../src/components/button/doc/index.vue';
// import Tree from '../../../src/components/tree/doc/index.vue';
// import Checkbox from '../../../src/components/checkbox/doc/index.vue';
// import Icon from '../../../src/components/icon/doc/index.vue';
// import Row from '../../../src/components/row/doc/index.vue';
// import Container from '../../../src/components/container/doc/index.vue';
// import Link from '../../../src/components/link/doc/index.vue';

import { defineAsyncComponent } from 'vue'

import components from './components.js'

const LoadingComponent = {
  template: `<div v-loading="true" style="min-height: 500px; width: 100%;"></div>`,
}
const ErrorComponent = {
  template: `
    <div style="text-align: center;padding: 100px 0;">Loading error. Please refresh the page and try again</div>`,
}
const getAsyncComponent = func => {
  return defineAsyncComponent({
    loader: func,
    delay: 0,
    timeout: 30000,
    errorComponent: ErrorComponent,
    loadingComponent: LoadingComponent,
  })
}

import Introduce from './introduce/index.vue';

var componentsRouters = []

components.forEach(item => { // ./pages/${item}.vue
  var routerObj = {
    path: '/doc/' + item,
    name: item,
    component: () => import(/* webpackChunkName: "doc" */ `../../../src/components/${item}/doc/index.vue`)
  }
  componentsRouters.push(routerObj)
})

var douRouter = [
  {
    path: '/doc/introduce',
    name: 'introduce',
    component: Introduce
  },
  ...componentsRouters
  // {
  //   path: '/doc/layout',
  //   name: 'layout',
  //   component: Row
  // },
  // {
  //   path: '/doc/container',
  //   name: 'container',
  //   component: Container
  // },
  // {
  //   path: '/doc/icon',
  //   name: 'icon',
  //   component: Icon
  // },
  // {
  //   path: '/doc/button',
  //   name: 'button',
  //   component: Button
  // },
  // {
  //   path: '/doc/link',
  //   name: 'link',
  //   component: Link
  // },
  // {
  //   path: '/doc/checkbox',
  //   name: 'checkbox',
  //   component: Checkbox
  // },
  // {
  //   path: '/doc/tree',
  //   name: 'tree',
  //   component: Tree
  // }
]

export default douRouter