<template>
  <CellAlert2
    v-bind="$attrs"
    v-slot="{ close, visible, dismissed, status }"
    renderless
  >
    <div v-if="visible && !dismissed">
      <h1>Alerte of {{ status }}!</h1>
      <p><slot /></p>
      <button @click="close">Fermer</button>
    </div>
  </CellAlert2>
</template>

<script>
import CellAlert2 from './components/CellAlert2'

export default {
  name: 'MyRenderlessAlert',
  components: {
    CellAlert2
  }
}
</script>
