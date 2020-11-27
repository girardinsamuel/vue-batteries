<template>
  <div>
    <slot />
  </div>
</template>

<script>
import useGroup from "./core/useGroup"

export default {
  name: "TogglableGroup",
  inheritAttrs: false,
  emits: ["update:modelValue"],
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [Array, Boolean, String, Number],
      default: null,
    },
  },
  setup (props, context) {
    return {
      ...useGroup(props, context, props.multiple),
    }
  },
}
</script>
