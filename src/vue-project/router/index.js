import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '@/vue-project/pages/home/index.vue'

const routes = [
  { path: '/', component: HomeView },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;