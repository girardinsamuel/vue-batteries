<template>
  <div id="app">
    <button @click="open = !open" class="mb-2 text-xs border">
      Toggle alert
    </button>
    <CellAlert v-model="open">
      I am an alert controlled with v-model !
    </CellAlert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>
