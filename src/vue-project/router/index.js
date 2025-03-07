import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '@/vue-project/pages/home/index.vue'
import RenderToMain from '@/vue-project/pages/renderToMain/OneWay.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/renderToMain', component: RenderToMain },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;