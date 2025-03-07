import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '@/vue-project/pages/home/index.vue'
import MainToRender from '@/vue-project/pages/mainToRender/index.vue'


const routes = [
  { path: '/', component: HomeView },
  // 注册示例页面路由
  { path: '/mainToRender', component: MainToRender },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;