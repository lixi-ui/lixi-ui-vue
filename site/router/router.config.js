import { defineAsyncComponent } from 'vue';
import Home from "../pages/home/index.vue";
import Doc from "../pages/doc/index.vue";
import docRouter from '../pages/doc/doc-router';
// import Material from '../pages/material/index.vue';
// import materialConfig from '../../material/index';
// import nav from './nav.config';

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

const load = (lang, page) => {
  LOAD_MAP[lang](page)
}

const LOAD_DOC_MAP = {
  // [Language.CN]: path => {
  //   return getAsyncComponent(() => import(/* webpackChunkName: "DOCS zh-CN" */ `./docs/zh-CN${path}.md`))
  // },
  // [Language.ES]: path => {
  //   return getAsyncComponent(() => import(/* webpackChunkName: "DOCS en-US" */ `./docs/en-US${path}.md`))
  // }
}

const loadDoc = (lang, page) => {
  LOAD_DOC_MAP[lang](page)
}

var registerRoute =  (nav) => {
  var routes = [];
  Object.keys(nav).forEach((lang, index)=> {
    var obj = {
      name: lang,
      path: lang,
      component: load(lang, lang)
    }
    if (nav[lang].children) {
      var childrenArr = []
      for (var i = 0; i < nav[lang].children.length; i++) {
        var childrenObj = {
          name: lang,
          path: lang,
          component: loadDoc(lang, lang)
        }
        childrenArr.push(childrenObj)
      }
      obj.children = childrenArr
    }
    routes.push(obj)
  })
}

// var routes = registerRoute(nav)

var routes = [
  {
    path: "/",
    redirect: '/home'
  },
  {
    path: "/home",
    name: 'name',
    component: Home
  },
  {
    path: "/doc",
    name: 'doc',
    redirect: '/doc/introduce',
    component: Doc,
    children: docRouter
  },
  // {
  //   path: '/material',
  //   name: 'materila',
  //   component: Material,
  //   children: materialConfig
  // }
]

export default routes;