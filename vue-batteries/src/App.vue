<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <a-button @click="$copy('copy me !')" :loading="true" loading-mode="fill" variant="dark">
    <!-- <template #trailing="{ className }"><span :class="className">Prefix</span></template> -->
    <template #trailing><a-icon name="search" class="w-5 h-5" /></template>
    Edit
    <template #leading><a-icon name="user" class="w-5 h-5" /></template>
  </a-button>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
