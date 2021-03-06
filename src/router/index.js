import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    components: {
      default: () => import('@/components/layout/MainLayout.vue')
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/forms',
        name: 'Forms',
        component: () => import('../views/Forms.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
