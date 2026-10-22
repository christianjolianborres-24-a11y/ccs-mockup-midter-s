import { createRouter, createWebHistory } from 'vue-router'

import main from '@/views/main.vue'
import bsit from '@/views/bsit.vue'
import bscs from '@/views/bscs.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'Main',
      component: main
    },
    {
      path: '/programs/bsit',
      name: 'BSIT',
      component: bsit
    },
    {
      path: '/programs/bscs',
      name: 'BSCS',
      component: bscs
    }
  ]
})

export default router