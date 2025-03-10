<template>
  <h1>😊 Settings Render Process</h1>
  <div style="padding-bottom: 10px;">Received message from the main window process：<span style="color: #71C25C;">{{
    message
  }}</span>
  </div>
  <div style="display: flex; gap: 10px;">
    <input v-model="inputVal" />
    <button @click="onClick">Send to Main window</button>
  </div>
</template>

<script setup>
import { ref, onUnmounted, onMounted } from 'vue'
const message = ref('')
const inputVal = ref('')

const onClick = () => {
  electronSettingAPI.pushMessageEvent(inputVal.value)
}

let removeLister = null

onMounted(() => {
  removeLister = electronSettingAPI.onMessagePort((value) => {
    message.value = value
    electronSettingAPI.pushMessageEvent(`👋 Hello main window, I have received your message, message is ${message.value}`)
  })
})

onUnmounted(() => {
  removeLister()
})
</script>