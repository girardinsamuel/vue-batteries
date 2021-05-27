<template>
  <div class="rootClass">
    <label v-if="label || $slots.label" :for="$attrs.name" class="block text-sm font-medium text-gray-700">
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <textarea
        :id="$attrs.id"
        :name="$attrs.name"
        :rows="$attrs.rows"
        :cols="$attrs.cols"
        :placeholder="$attrs.placeholder"
        v-model="value"
        :disabled="disabled"
        class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        :class="{
          'pl-10': !!leadingIcon,
          'pr-10': hasError || trailingIcon,
          'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500': !hasError,
          'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500': hasError
        }"
      />
      <div class="absolute top-0 pt-3 right-0 pr-3 flex items-center pointer-events-none" v-if="hasError">
        <!-- Trailing icon when error -->
        <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
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
import { computed } from "vue"
import { inputProps, inputIconProps } from "./utils/baseProps"

export default {
  name: "ATextarea",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: [Number, String],
      required: true,
    },
    ...inputProps,
    ...inputIconProps,
  },
  setup (props, { emit }) {
    // TODO: handle externally
    const hasError = true
    const errorMessage = ""

    // useVModel
    const key = "modelValue"
    const event = `update:${key}`
    const value = computed({
      get () {
        return props[key]
      },
      set (value) {
        emit(event, value)
      },
    })
    return {
      value,
      hasError,
      errorMessage,
    }
  },
}
</script>
