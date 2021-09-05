import Home from "../pages/home/index.vue";
import Doc from "../pages/doc/index.vue";
import Login from "../pages/login/index.vue";

import Button from '../../src/components/button/doc/index.vue'
import Tree from '../../src/components/tree/doc/index.vue'

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
    children: [
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
  },
  {
    path: "/login",
    name: 'login',
    component: Login
  }
]

export default routes;