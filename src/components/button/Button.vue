<template>
  <button
    type="button"
    :class="[baseClass, typeClass, hasTitle ? 'px-6' : 'px-3']"
    :disabled="disabled"
  >
    <slot
      name="leadingIcon"
      :leadingIcon="leadingIcon"
      :loading="loading"
      :disabled="disabled"
    >
      <icon
        v-if="leadingIcon || loading"
        :name="loading ? 'loading' : leadingIcon"
        :class="leadingIconClass"
      />
    </slot>
    <span><slot /></span>
    <slot
      name="trailingIcon"
      :leadingIcon="trailingIcon"
      :loading="loading"
      :disabled="disabled"
    >
      <icon
        v-if="trailingIcon"
        :name="trailingIcon"
        :class="trailingIconClass"
      />
    </slot>
  </button>
</template>

<script>
// <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
//   <svg class="fill-current w-4 h-4 mr-2"></svg>
//   <span>Download</span>
// </button>
import { useButton } from './api'
import propsButton from './props'

export default {
  mixins: [propsButton],
  setup(props, context) {
    return {
      ...useButton(props, context)
    }
  }
}
</script>
