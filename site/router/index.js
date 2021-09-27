import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import routes from './router.config.js'

var router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 0
      }
    }
  },
  routes
})

export default router;