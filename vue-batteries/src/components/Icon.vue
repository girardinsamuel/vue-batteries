<template>
  <svg
    v-bind="$attrs"
    :class="[
      loading || name == 'loading' ? 'spin' : ''
    ]"
    fill="currentColor"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" :d="getPath()" />
  </svg>
</template>

<script>
import { getConfig } from "../config"

export default {
  name: "Icon",
  props: {
    name: String,
    loading: {
      type: Boolean,
      default: false,
    },
    viewBox: {
      type: String,
      default: "0 0 24 24",
    },
  },
  methods: {
    getPath () {
      return getConfig().icons[this.name]
    },
  },
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
