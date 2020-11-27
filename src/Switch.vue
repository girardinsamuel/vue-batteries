<template>
  <div>
    <div :class="rootClass">
      <button type="button" aria-pressed="false" aria-labelledby="toggleLabel" :class="backClass" @click="toggle">
        <span class="sr-only">{{ label }}</span>
        <span aria-hidden="true" :class="frontClass"></span>
      </button>
      <span class="ml-3" id="toggleLabel">
        <span :class="labelClass"><slot>{{ label }}</slot></span>
      </span>
    </div>
    <span :class="helpClass">{{ errorMessage || help }}</span>
  </div>
</template>

<script>
import { computed } from "vue"
import { useClasses, useApi, Switch } from "./components/Switch"
import { useField } from "vee-validate"

export default {
  name: "MySwitch",
  extends: Switch,
  setup (props, context) {
    const { handleChange: validateChange, errorMessage, meta } = useField(context.attrs.name, undefined, { initialValue: props.modelValue, type: "checkbox" })
    const realStatus = computed(() => errorMessage.value ? "error" : meta ? meta.valid ? "success" : props.status : props.status)
    const { isChecked, toggle: baseToggle, ...api } = useApi(props, context, realStatus)

    const toggle = event => {
      baseToggle(event)
      validateChange(props.modelValue)
    }

    return {
      // handleBlur,
      toggle,
      errorMessage,
      realStatus,
      ...api,
      isChecked,
      ...useClasses(props, context, realStatus, isChecked),
    }
  },
}
</script>
