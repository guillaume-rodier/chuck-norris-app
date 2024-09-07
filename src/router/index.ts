/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/pages/IndexPage.vue'
import About from '@/components/About.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chuck-norris',
      component: IndexPage,
      meta: {
        title: 'Chuck Norris'
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About page'
      },
    },
  ],
})

export default router
