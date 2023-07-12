// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/views/Home.vue'
import SampleVue from '@/views/Sample.vue'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeVue
    },{
      path: '/sample',
      component: SampleVue
    }
  ]
})

export default router
