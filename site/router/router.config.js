import { defineAsyncComponent } from 'vue'
import Home from "../pages/home/index.vue";
import Doc from "../pages/doc/index.vue";
import Material from '../pages/material/index.vue';
// import materialConfig from '../../material/index';
import Login from "../pages/login/index.vue";
import docRouter from '../pages/doc/doc-router'

const getAsyncComponent = func => {
  return defineAsyncComponent({
    loader: func,
    delay: 0,
    timeout: 30000,
    // errorComponent: ErrorComponent,
    // loadingComponent: LoadingComponent,
  })
}

const LOAD_MAP = {
  // [Language.CN]: name => {
  //   return getAsyncComponent(() => import(/* webpackChunkName: "zh-CN" */ `./pages/${name}.vue`))
  // },
  // [Language.EN]: name => {
  //   return getAsyncComponent(() => import(/* webpackChunkName: "en-US" */ `./pages/${name}.vue`))
  // },
  // [Language.ES]: name => {
  //   return getAsyncComponent(() => import(/* webpackChunkName: "es" */ `./pages/${name}.vue`))
  // },
  // [Language.FR]: name => {
  //   return getAsyncComponent(() => import(/* webpackChunkName: "fr-FR" */ `./pages/${name}.vue`))
  // },
  // [Language.JP]: name => {
  //   return getAsyncComponent(() => import(/* webpackChunkName: "jp" */ `./pages/${name}.vue`))
  // },
}

var routes = [
  {
    path: "/home",
    name: 'name',
    component: Home
  },
  {
    path: "/doc",
    name: 'doc',
    component: Doc,
    children: docRouter
  },
  {
    path: '/material',
    name: 'materila',
    component: Material,
    // children: materialConfig
  },
  {
    path: "/login",
    name: 'login',
    component: Login
  }
]

export default routes;