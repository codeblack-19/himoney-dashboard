// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/views/Home.vue'
import LoopVue from '@/views/Loop.vue'
import SampleVue from '@/views/Sample.vue'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeVue,
      meta: {
        title: 'Himoney - Dashboard'
      }
    },{
      path: '/loop',
      component: LoopVue,
      meta: {
        title: 'Loop - Dashboard'
      }
    },{
      path: '/sample',
      component: SampleVue
    }
  ]
})

export default router
