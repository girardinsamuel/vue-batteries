<template>
  <svg
    v-bind="$attrs"
    :class="[
      iconClass,
      loading || name == 'loading' ? loadingClass : null
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
      default: "0 0 20 20",
    },
  },
  setup (props, context) {
    const { styling, componentClasses } = useClasses(props, "icon")

    const loadingClass = computed(() => {
      return styling && componentClasses.loading
    })

    const iconClass = computed(() => {
      if (context.attrs.class) {
        return ""
      }
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
      loadingClass,
    }
  },
  methods: {
    getPath () {
      return getConfig().icons[this.name]
    },
  },
}
</script>
