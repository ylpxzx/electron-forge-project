import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '@/vue-project/pages/home/index.vue'
import SettingsView from '@/vue-project/pages/settings/index.vue'
import EmptyView from '@/vue-project/pages/empty/index.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/settings', component: SettingsView },
  { path: '/empty', component: EmptyView },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;