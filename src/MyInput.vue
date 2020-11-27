<template>
  <div :class="rootClass">
    <label v-if="label" :class="labelClass" :for="$attrs.name">{{ label }}</label>
    <div :class="containerClass">
      <div :class="leadingIconContainerClass" v-if="leadingIcon">
        <cell-icon :class="leadingIconClass" :name="leadingIcon" />
      </div>
      <input
        :class="inputClass"
        :name="$attrs.name"
        role="input"
        :type="fieldType"
        :value="modelValue"
        @input="handleChange"
        @blur="handleBlur"
      />
      <div :class="trailingIconContainerClass" v-if="hasTrailingIcon" @click="trailingClick">
        <cell-icon :class="trailingIconClass" :name="trailingIconName" />
      </div>
    </div>
    <span :class="helpClass">{{ errorMessage || help }}</span>
  </div>
</template>

<script>
import { computed } from "vue"
import { useClasses, useApi, Input } from "./components/Input"
import { useField } from "vee-validate"

export default {
  name: "MyInput",
  extends: Input,
  setup (props, context) {
    const { handleBlur, handleChange: validateChange, errorMessage, meta } = useField(context.attrs.name, undefined, { initialValue: props.modelValue })
    const realStatus = computed(() => errorMessage.value ? "error" : meta ? meta.valid ? "success" : props.status : props.status)

    const handleChange = event => {
      validateChange(event)
      context.emit("update:modelValue", event.target.value)
    }
    return {
      handleBlur,
      handleChange,
      errorMessage,
      realStatus,
      ...useClasses(props, context, realStatus),
      ...useApi(props, context, realStatus),
    }
  },
}
</script>
