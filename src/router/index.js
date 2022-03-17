import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/',
    component:()=>import('../views/load.vue')
  },
  {
    path:'/know',
    component:()=>import('../views/know.vue')
  },
  {
    path:'/sign',
    component:()=>import('../views/sign.vue')
  },
  {
    path:'/success',
    component:()=>import('../views/success.vue')
  },
  {
    path:'/chartView',
    component:()=>import('../views/chartView'),
    children:[
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path:'/chart',
        component:()=>import('../views/chart.vue')
      }

    ]
  }
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
