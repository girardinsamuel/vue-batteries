<template>
  <div :class="containerClass">
    <input
      type="checkbox"
      :class="inputClass"
      :name="name"
      :id="id"
      v-model="isChecked"
      :value="values[1]"
      @change="update"
      v-bind="$attrs"
      v-on="fieldListeners"
      :disabled="disabled"
    />
    <span :class="labelClass">{{ label }}</span>
  </div>
</template>

<script>
import { useCheckbox } from './api'
import checkboxProps from './props'
export default {
  mixins: [checkboxProps],
  setup(props, context) {
    return {
      ...useCheckbox(props, context)
    }
  }
}
</script>
