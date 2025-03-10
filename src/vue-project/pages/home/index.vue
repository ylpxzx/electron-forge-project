<template>
  <h1>😁 Main Render Process</h1>
  <div style="padding-bottom: 10px;">Receive messages from the Settings window process：<span style="color: #71C25C;">{{
    messageVal }}</span>
  </div>
  <div style="display: flex; gap: 10px;">
    <input id="inputID" ref="inputRef" v-model="inputVal" />
    <button @click="onClick">Send to Settings window</button>
  </div>
</template>

<script setup>
import { ref, onUnmounted, onMounted } from 'vue'
const inputRef = ref(null)
const inputVal = ref('')
const messageVal = ref(null)
const onClick = () => {
  // electronAPI.pushMessageEvent(document.getElementById('inputID').value)
  electronAPI.pushMessageEvent(inputVal.value)
}
let removeLister = null

onMounted(() => {
  // router-view需要keep-alive，不然切换页面会重新渲染组件，导致消息端口监听器失效
  removeLister = electronAPI.onMessagePort(async (value) => {
    // document.getElementById('inputID').value = value
    messageVal.value = value
  })
})

onUnmounted(() => {
  removeLister()
})
</script>