<template>
  <div class="rootClass">
    <label v-if="label || $slots.label" :for="$attrs.name" class="block text-sm font-medium text-gray-700">
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="mt-1 relative">
      <div class="max-w-lg">
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input @change="toggle" type="checkbox" :checked="isChecked" class="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 rounded">
          </div>
          <div class="ml-3 text-sm">
            <label class="font-medium text-gray-700"><slot/></label>
          </div>
        </div>
      </div>
    </div>
    <p
      class="mt-1 text-sm"
      :class="{
        'text-gray-500': !hasError,
        'text-red-600': hasError
      }"
    >{{ hasError ? errorMessage : help }}</p>
  </div>
</template>

<script>
import useToggle from "./core/useToggle"
import { toRefs } from "vue"
export default {
  name: "ACheckbox",
  props: {
    modelValue: {
      type: [Number, Boolean, String, Array, Object],
      required: true,
    },
    values: {
      type: Array,
      default: () => [false, true],
    },
    // COMMON TO all in inputs
    label: {
      type: String,
      default: "",
    },
    help: {
      type: String,
      default: "",
    },
  },
  setup (props, context) {
    // TODO: handle externally
    const hasError = false
    const errorMessage = ""
    const { modelValue, values } = toRefs(props)
    return {
      ...useToggle(context, modelValue, values),
      hasError,
      errorMessage,
    }
  },
}
</script>
