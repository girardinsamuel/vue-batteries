import { ref, computed } from "vue"

export default (context, initialValue, values) => {
  const internalValue = ref(initialValue || values[0])

  const toggle = () => {
    if (internalValue.value === values[0]) {
      internalValue.value = values[1]
    } else {
      internalValue.value = values[0]
    }
    context.emit("update:modelValue", internalValue.value)
    context.emit("change", internalValue.value)
  }
  const isChecked = computed(() => internalValue.value === values[1])

  return {
    // state
    value: internalValue,
    // methods
    toggle,
    isChecked,
  }
}
