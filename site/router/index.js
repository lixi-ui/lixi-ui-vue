import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/home/index.vue";
// const Home = { template: '<div>Home</div>' }


var router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      name: 'name',
      component: Home
    },
    {
      path: "/test",
      name: 'test',
      component: Home
    }
  ]
})

export default router;