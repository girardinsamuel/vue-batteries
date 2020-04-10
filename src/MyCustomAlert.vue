<template>
  <div v-if="value && !dismissed">
    <h1>Alerte {{ status }}!</h1>
    <p><slot /></p>
    <button @click="close">Fermer</button>
  </div>
</template>

<script>
import { useAlert } from './index'
import { propsAlert } from './index'

export default {
  name: 'MyCustomAlert',
  // here we could even rename props to our convenance and merge this through setup() with base setupAlert() definition
  mixins: [propsAlert],
  setup(props, context) {
    return {
      ...useAlert(props, context)
    }
    // const { close, visible, dismissed, status } = useAlert(props, context)
    // return {
    //   close,
    //   visible,
    //   dismissed,
    //   status
    // }
  }
}
</script>
