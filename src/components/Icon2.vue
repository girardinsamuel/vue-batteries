<template>
  <component
    :is="iconComponent"
    role="img"
  />
</template>

<script>
import { defineAsyncComponent } from "vue"
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconComponent () {
      // eslint-disable-next-line no-unused-expressions
      this.name // Trigger the name as a dependency for change detection
      return defineAsyncComponent(() => import(
        /* webpackChunkName: "icon-[request]" */
        "@/assets/icons/" + this.name + ".svg"
      ))
    },
  },
}
</script>
