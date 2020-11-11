<template>
  <svg
    v-bind="$attrs"
    :class="[
      iconClass,
      loading || name == 'loading' ? 'spin' : null
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
import useClasses from "../core/useClasses"
import { computed } from "vue"
import { baseProps } from "../utils/baseProps"

export default {
  name: "Icon",
  props: {
    ...baseProps,
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
  setup (props, context) {
    const { styling, componentClasses } = useClasses(props, "icon")

    const iconClass = computed(() => {
      if (styling) {
        return [
          componentClasses.base,
        ]
      } else {
        return ""
      }
    })

    return {
      iconClass,
    }
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
