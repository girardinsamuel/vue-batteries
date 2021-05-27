<template>
  <div class="rootClass">
    <label v-if="label || $slots.label" :for="$attrs.name" class="block text-sm font-medium text-gray-700">
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="mt-1 relative">
      <div class="max-w-lg space-y-4">
        <div class="relative flex items-start" v-for="option in normalizedOptions" :key="option.value">
          <div class="flex items-center h-5">
            <input @change="selectOption(option)" type="radio" :checked="isSelected(option)" :value="option.value" class="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
          </div>
          <div class="ml-3 text-sm">
            <label for="comments" class="font-medium text-gray-700">{{ option.label }}</label>
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
import useSelect from "./core/useSelect"
import { toRefs } from "vue"
import { inputProps } from "./utils/baseProps"

export default {
  name: "ARadioGroup",
  props: {
    options: {
      type: [Array, Object],
      required: true,
    },
    modelValue: {
      type: [Number, Boolean, String, Array, Object],
      required: true,
    },
    ...inputProps,
  },
  setup (props, context) {
    // TODO: handle externally
    const hasError = true
    const errorMessage = "Il y a une erreur"
    const { modelValue, options } = toRefs(props)
    return {
      ...useSelect(context, modelValue, options),
      hasError,
      errorMessage,
    }
  },
}
</script>
