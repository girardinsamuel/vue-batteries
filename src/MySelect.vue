<template>
  <div :class="rootClass">
    <label :for="$attrs.name" :class="labelClass">{{ label }}</label>
    <div :class="containerClass">
      <div :class="leadingIconContainerClass" v-if="leadingIcon">
        <cell-icon :class="leadingIconClass" :name="leadingIcon" />
      </div>
      <select :id="$attrs.name" :class="selectClass" :value="value" @input="toggle" :multiple="multiple">
        <option v-for="option in normalizedOptions" :value="option.value" :key="option.value">{{ option.label }}</option>
      </select>
      <div :class="trailingIconContainerClass" v-if="hasTrailingIcon">
        <cell-icon :class="trailingIconClass" :name="trailingIconName" />
      </div>
    </div>
    <span :class="helpClass">{{ errorMessage || help }}</span>
  </div>
</template>

<script>
import { computed } from "vue"
import { useClasses, useApi, Select } from "./components/Select"
import { useField } from "vee-validate"

export default {
  name: "MySelect",
  extends: Select,
  emits: ["update:modelValue"],
  setup (props, context) {
    const { errorMessage, handleChange: validateChange, meta } = useField(context.attrs.name, undefined, { valueProp: props.modelValue })
    const realStatus = computed(() => errorMessage.value ? "error" : meta ? meta.valid ? "success" : props.status : props.status)
    // const { isSelect } = useApi(props, context, realStatus)
    const { baseToggle, ...api } = useApi(props, context, realStatus)

    const toggle = event => {
      baseToggle(event)
      validateChange(props.modelValue)
    }

    return {
      errorMessage,
      realStatus,
      toggle,
      ...api,
      ...useClasses(props, context, realStatus),
    }
  },
}
</script>
