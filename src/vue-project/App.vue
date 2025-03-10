<template>
  <h1>🖥️ Hello World!</h1>
  <p>Welcome to your Electron application.</p>
  <p>🎉 Welcome to your Electron <span style="font-weight: 600;">{{ isMain ? 'Main' : 'Settings' }} Window </span>. 🎊
  </p>
  <nav>
    <div v-if="isMain">
      <RouterLink to="/">Go to Home</RouterLink>
    </div>
    <div v-if="isMain">
      <div>
        <RouterLink to="/empty">Go to empty page<span style="font-size: 12px; color: #999; padding-left: 10px;"></span>
        </RouterLink>
      </div>
    </div>
  </nav>
  <div
    style="margin-top: 20px; border: 1px solid grey; padding: 20px; border-radius: 6px; background-color: #23272E; color: #fff">
    <!-- 该处得加入keep-alive，否则切换路由时会重新渲染组件，导致消息端口监听器失效 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isMain = ref(true)
if (window.electronAPI) {
  isMain.value = true
} else {
  isMain.value = false
}
</script>