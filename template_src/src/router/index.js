import Vue from 'vue'
import VueRouter from 'vue-router'

import secondView from '../views/secondView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/secondView',
    component: secondView,
    name: 'secondView'
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
