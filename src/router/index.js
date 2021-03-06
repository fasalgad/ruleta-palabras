import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
 /* {
    path: '/',
    name: 'Home',
    component: Home
  },*/
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ //'../views/About.vue')
 // }, */
  {
    path: '/ruleta',
    name: 'ruleta',
    component: () => import(/* webpackChunkName: "ruleta" */ '../views/Ruleta.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  },

  {
    path: '/',
    name: 'juegos',
    component: () => import(/* webpackChunkName: "juegos" */ '../views/Juegos.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
