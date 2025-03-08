import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '@/vue-project/pages/home/index.vue'
import RenderToMainTwoWay from '@/vue-project/pages/renderToMain/TwoWay.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/renderToMainTwoWay', component: RenderToMainTwoWay },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;