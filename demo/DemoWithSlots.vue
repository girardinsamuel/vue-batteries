<template>
  <div class="demo">
    <h1>vue-batteries Demo</h1>
    <Alert>
      I am a CellAlert !
      <template #close="{close}">
        <button @click="close">Fermer</button>
      </template>
    </Alert>
    <!-- <Alert2>I am a CellAlert 2!</Alert2> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
