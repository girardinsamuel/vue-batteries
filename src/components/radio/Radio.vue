<template>
  <div :class="containerClass">
    <input
      type="radio"
      :class="inputClass"
      :name="name"
      :id="id"
      v-model="currentValue"
      :value="values[1]"
      @input="update"
      v-bind="$attrs"
      v-on="fieldListeners"
      :disabled="disabled"
    />
    <span :class="labelClass">{{ label }}</span>
  </div>
</template>

<script>
import { useRadio } from './api'
import radioProps from './props'
export default {
  mixins: [radioProps],
  setup(props, context) {
    return {
      ...useRadio(props, context)
    }
  }
}
</script>
