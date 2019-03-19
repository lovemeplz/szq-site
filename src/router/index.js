import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    name: 'home',
    path: '/',
    redirect: '',
    component: () => import("@/views/home/home.vue"),
    chunkName: 'views/home/home.uve',
    hidden: true
  }]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

