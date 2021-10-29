// import { defineAsyncComponent } from 'vue'

import components from './components.js'

// import Button from `../../../src/components/button/doc/index.vue`

// const LoadingComponent = {
//   template: `<div v-loading="true" style="min-height: 500px; width: 100%;"></div>`,
// }
// const ErrorComponent = {
//   template: `
//     <div style="text-align: center;padding: 100px 0;">Loading error. Please refresh the page and try again</div>`,
// }
// const getAsyncComponent = func => {
//   return defineAsyncComponent({
//     loader: func,
//     delay: 0,
//     timeout: 30000,
//     errorComponent: ErrorComponent,
//     loadingComponent: LoadingComponent,
//   })
// }

import Introduce from './introduce/index.vue';

var componentsRouters = []

components.forEach(item => { // ./pages/${item}.vue
  var routerObj = {
    path: '/doc/' + item.name,
    name: item.name,
    title: item.title || item.name,
    component: () => import(/* webpackChunkName: "doc" */ `../../../src/components/${item.name}/doc/index.vue`)
  }
  componentsRouters.push(routerObj)
})

var douRouter = [
  {
    path: '/doc/introduce',
    name: 'introduce',
    title: 'introduce 介绍',
    component: Introduce
  },
  ...componentsRouters
]

export default douRouter