<template functional>
  <svg
    :class="[
      data.staticClass || data.class,
      props.loading || props.name == 'loading' ? 'spin' : ''
    ]"
    v-on="listeners"
    v-bind="data.attrs"
    fill="currentColor"
    :viewBox="props.viewBox"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" :d="$options.methods.getPath(props)" />
  </svg>
</template>

<script>
import { getConfig } from '../../config'
import iconProps from './props.js'

export default {
  name: 'Icon',
  mixins: [iconProps],
  methods: {
    getPath(props) {
      return getConfig().icons[props.name]
    }
  }
}
</script>

<style>
@keyframes loading-spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.spin {
  animation: loading-spinner 1s linear infinite;
}
</style>
