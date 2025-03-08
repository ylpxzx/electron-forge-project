<template>
  <div>
    <button type="button" @click="onClick" id="btn">Open a File</button>
    <div>
      File path: <strong>{{ inputVal }}</strong>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const inputVal = ref('')
const onClick = async () => {
  const filePath = await electronAPI.openFile()
  inputVal.value = filePath
}
</script>