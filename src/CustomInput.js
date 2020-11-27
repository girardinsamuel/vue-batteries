import { defineComponent, computed } from "vue"
import { useField } from "vee-validate"
// import { Input } from "./index"
import { useInputClasses, useInputApi, Input } from "./components/Input"

export const CustomInput = defineComponent({
  extends: Input,
  setup (props, context) {
    const {
      helpText,
      // trailingIconName,
      renderHelp,
      inputValue,
      onInput,
      onBlur,
      fieldStatus,
      ...inputData
    } = useInputApi(props, context)
    // @OVERRIDE

    const {
      errorMessage,
      meta,
      handleChange,
      handleBlur,
      value: inputValueOverriden,
    } = useField(context.attrs.name, undefined, {
      initialValue: props.modelValue,
    })

    const belowText = computed(() => errorMessage.value || helpText)
    const hasError = computed(() => !meta.valid && errorMessage.value !== undefined)
    const hasSuccess = computed(() => meta.valid)
    const renderBelow = computed(() => hasError.value || hasSuccess.value || props.help !== "" || "help" in context.slots)
    const status = computed(() => hasSuccess.value ? "success" : hasError.value ? "error" : fieldStatus)

    return {
      helpText: belowText,
      renderHelp: renderBelow,
      onInput: handleChange,
      onBlur: handleBlur,
      fieldStatus: status,
      inputValue: inputValueOverriden,
      ...useInputClasses(props, context, status),
      ...inputData,
      errorMessage,
      meta,
      hasError,
      hasSuccess,
    }
  },
})
