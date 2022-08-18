import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/index.vue'
import route from './routes'

console.log(route);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    ...route
  ]
})

export default router
