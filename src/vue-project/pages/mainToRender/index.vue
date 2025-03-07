<template>
  <div>
    <div>click menu to set counter</div>
    Current value: <strong id="counter">{{ inputVal }}</strong>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const inputVal = ref(0)
electronAPI.onUpdateCounter((value) => {
  inputVal.value = inputVal.value + value
})
</script>