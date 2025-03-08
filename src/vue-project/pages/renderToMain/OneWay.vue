<template>
  <div>
    <input v-model="inputVal" />
    <div>
      <button @click="onClick">render-process to set app title</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const inputVal = ref('')
const onClick = () => {
  electronAPI.setTitle(inputVal.value)
}
</script>