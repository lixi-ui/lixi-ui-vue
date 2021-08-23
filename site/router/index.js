import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/home/index.vue";
import Doc from "../pages/doc/index.vue";
import Login from "../pages/login/index.vue";


import Button from '../../src/components/button/doc/index.vue'

var router = createRouter({
  history: createWebHashHistory(),
  routes: [
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
        }
      ]
    },
    {
      path: "/login",
      name: 'login',
      component: Login
    }
  ]
})

export default router;