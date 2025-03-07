<template>
  <h1>🖥️ Hello World!</h1>
  <p>Welcome to your Electron application.</p>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <div>
      <RouterLink to="/">Go to Home</RouterLink>
    </div>
    <div>
      <RouterLink to="/mainToRender">Main-Process --> Render-Process</RouterLink>
    </div>
  </nav>
  <div style="margin-top: 20px; border: 1px solid grey; padding: 20px; border-radius: 10px;">
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>