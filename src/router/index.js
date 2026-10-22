import { createRouter, createWebHistory } from 'vue-router'

import MainView from '@/views/main.vue'
import BSITView from '@/views/BSITView.vue'
import BSCSView from '@/views/BSCSView.vue'
import BSDMIAView from '@/views/BSDMIAView.vue'
import BLISView from '@/views/BLISView.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
    },
    {
      path: '/programs/bsit',
      name: 'bsit',
      component: BSITView,
    },
    {
      path: '/programs/bscs',
      name: 'bscs',
      component: BSCSView,
    },
    {
      path: '/programs/bsdmia',
      name: 'bsdmia',
      component: BSDMIAView,
    },
    {
      path: '/programs/blis',
      name: 'blis',
      component: BLISView,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})

export default router