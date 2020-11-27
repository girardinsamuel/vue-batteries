<template>
  <div :class="rootClass">
    <label v-if="label" :class="labelClass" :for="$attrs.name">{{ label }}</label>
    <div :class="containerClass">
      <input :id="$attrs.name" :name="$attrs.name" type="checkbox" @change="toggle" :class="inputClass" :value="value" ref="input" :checked="isChecked">
      <span :class="textClass"><slot/></span>
    </div>
    <span :class="helpClass">{{ errorMessage || help }}</span>
  </div>
</template>

<script>
import { computed } from "vue"
import { useClasses, useApi, Togglable } from "./components/Togglable"
import { useField } from "vee-validate"

export default {
  name: "MyCheckbox",
  extends: Togglable,
  setup (props, context) {
    const { handleChange: validateChange, errorMessage, meta } = useField(context.attrs.name, undefined, { initialValue: props.modelValue, type: "checkbox" })
    const realStatus = computed(() => errorMessage.value ? "error" : meta ? meta.valid ? "success" : props.status : props.status)
    const { isChecked, toggle: baseToggle, ...api } = useApi(props, context, realStatus, "checkbox")

    const toggle = event => {
      baseToggle(event)
      validateChange(props.modelValue)
    }

    return {
      toggle,
      errorMessage,
      realStatus,
      ...api,
      isChecked,
      ...useClasses(props, context, realStatus, isChecked, "checkbox"),
    }
  },
}
</script>

<style>

</style>
