<template>
  <!-- <a-alert status="error">
    I am an alert
    <template #close="{ close, className }">
      <button :class="className" @click="close">Close</button>
    </template>
  </a-alert>
  <a-alert v-model="visible">
    <template #content="{ className }">
      <div>
        <p :class="className">I am an alert</p>
      </div>
    </template>
    <template #close="{ close, className }">
      <button :class="className" @click="close">Close</button>
    </template>
  </a-alert>
  <button @click="toggle">toggle</button> -->
  <a-alert v-model="visible2">I am not visible</a-alert>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      visible: true,
      visible2: false,
    }
  },
  methods: {
    toggle () {
      this.visible = !this.visible
    },
  },
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
