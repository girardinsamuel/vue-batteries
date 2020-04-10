<template>
  <div v-if="value && !dismissed" :class="containerClass" role="alert">
    <!-- Default slot for alert content -->
    <slot name="content" :class="contentClass">
      <p :class="contentClass"><slot /></p>
    </slot>
    <!-- closable content -->
    <slot name="close" :close="close" :class="closeClass" v-if="closable"
      ><div :class="closeClass"><button @click="close">x</button></div></slot
    >
  </div>
</template>

<script>
import { useAlert } from './api'
import propsAlert from './props'

export default {
  mixins: [propsAlert],
  // model: {
  //   event: 'update',
  //   prop: 'visible'
  // },
  setup(props, context) {
    return {
      ...useAlert(props, context)
    }
  }
}
</script>
