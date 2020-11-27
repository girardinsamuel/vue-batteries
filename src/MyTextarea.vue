<template>
  <div :class="rootClass">
    <label v-if="label" :class="labelClass" for="test">{{ label }}</label>
    <div :class="containerClass">
      <div :class="leadingIconContainerClass" v-if="leadingIcon">
        <cell-icon :class="leadingIconClass" :name="leadingIcon" />
      </div>
      <textarea
        :class="inputClass"
        role="textarea"
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
import { useApi } from "./components/Input"
import { Textarea, useClasses } from "./components/Textarea"
import { useField } from "vee-validate"

export default {
  name: "MyTextarea",
  extends: Textarea,
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

<style>

</style>
