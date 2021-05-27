<template>
  <div class="rootClass">
    <label v-if="label || $slots.label" :for="$attrs.name" class="block text-sm font-medium text-gray-700">
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10" v-if="leadingIcon">
        <!-- Heroicon name: solid/mail -->
        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </div>
      <input
        :id="$attrs.id"
        :name="$attrs.name"
        :placeholder="$attrs.placeholder"
        role="input"
        :type="type"
        v-model="value"
        :disabled="disabled"
        class="shadow-sm  block w-full sm:text-sm rounded-md"
        :class="{
          'pl-10': !!leadingIcon,
          'pr-10': hasError || trailingIcon,
          'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500': !hasError,
          'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500': hasError
        }"
      />
      <div class="absolute inset-y-0 right-0 pr-8 flex items-center pointer-events-none" v-if="trailingIcon">
        <!-- Trailing icon when error -->
        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" v-if="hasError">
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
  name: "AInput",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: [Number, String],
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    ...inputProps,
    ...inputIconProps,
  },
  setup (props, { emit }) {
    // TODO: handle externally
    const hasError = true
    const errorMessage = "Erreur !"

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
