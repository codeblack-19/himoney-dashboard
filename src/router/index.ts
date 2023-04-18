// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeVue
    }
  ]
})

export default router
