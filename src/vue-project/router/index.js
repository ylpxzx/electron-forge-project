import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '@/vue-project/pages/home/index.vue'
import MainToRender from '@/vue-project/pages/mainToRender/index.vue'
import RenderToMainTwoWay from '@/vue-project/pages/renderToMain/TwoWay.vue'
import RenderToMain from '@/vue-project/pages/renderToMain/OneWay.vue'
import SettingsView from '@/vue-project/pages/settings/index.vue'
import EmptyView from '@/vue-project/pages/empty/index.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/settings', component: SettingsView },
  { path: '/empty', component: EmptyView },
  // 注册示例页面路由
  { path: '/mainToRender', component: MainToRender },
  { path: '/renderToMainTwoWay', component: RenderToMainTwoWay },
  { path: '/renderToMain', component: RenderToMain },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;