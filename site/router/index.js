import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import routes from './router.config.js'

var router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;