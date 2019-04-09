import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

export const constantRouterMap = [
  {
    name: 'home',
    path: '/',
    redirect: '',
    component: () => import("@/views/home/home.vue"),
    chunkName: 'views/home/home.uve',
    hidden: true
  },
  {
    name: 'tech',
    path: '/tech',
    redirect: '',
    component: () => import("@/views/tech/tech.vue"),
    chunkName: 'views/tech/tech.uve',
    hidden: true
  },
  {
    name: 'music',
    path: '/music',
    redirect: '',
    component: () => import("@/views/music/music.vue"),
    chunkName: 'views/music/music.uve',
    hidden: true
  },
  {
    name: 'article',
    path: '/article',
    redirect: '',
    component: () => import("@/views/article/article.vue"),
    chunkName: 'views/article/article.uve',
    hidden: true
  },
  {
    name: 'whatever',
    path: '/whatever',
    redirect: '',
    component: () => import("@/views/whatever/whatever.vue"),
    chunkName: 'views/whatever/whatever.uve',
    hidden: true
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})




