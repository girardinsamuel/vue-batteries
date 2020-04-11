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
// import { useAlert } from './api'
// import propsAlert from './props'

export default {
  props: {
    closable: {
      type: Boolean,
      default: true
    },
    status: {
      type: String,
      default: null,
      validator: function(value) {
        return (
          value === null ||
          ['error', 'warning', 'success', 'info'].indexOf(value) !== -1
        )
      }
    },
    classes: {
      type: Object,
      default: () => {}
    },
    value: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dismissed: false
    }
  },
  computed: {
    closeClass() {
      return ''
    },
    contentClass() {
      return ''
    },
    containerClass() {
      return ''
    }
  },
  methods: {
    close() {
      this.dismissed = true
      this.$emit('input', false)
    }
  }
}
</script>
