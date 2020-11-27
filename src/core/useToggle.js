import { computed, ref, watch } from "vue"

export default (props, { emit }) => {
  const internalValue = ref(props.modelValue)
  // after mounted, input will hold $refs.input from template
  const input = ref(null)
  const isChecked = computed(() => {
    if (props.modelValue === undefined) {
      return props.checked
    }
    if (Array.isArray(props.modelValue)) {
      return props.modelValue.indexOf(props.value) >= 0
    }
    return props.modelValue === internalValue.value
  })

  watch(isChecked, (isChecked, previsChecked) => {
    if (input.value.checked !== isChecked) {
      input.value.checked = isChecked
    }
  })
  // watchEffect(() => {
  //   if (!input.value) {
  //     return
  //   }
  //   if (input.value.checked !== isChecked.value) {
  //     input.value.checked = isChecked.value
  //   }
  // })

  const toggle = (event) => {
    if (props.disabled) {
      return
    }
    const isInputChecked = event.target.checked
    let localValue
    if (Array.isArray(props.modelValue)) {
      const localValue = [...props.modelValue]
      console.log(localValue)
      const index = localValue.indexOf(props.value)
      console.log(index)
      if (isInputChecked && index < 0) {
        localValue.push(props.value)
      } else if (!isInputChecked && index >= 0) {
        localValue.splice(index, 1)
      }
    } else {
      localValue = isInputChecked ? props.value : props.uncheckedValue
    }
    internalValue.value = localValue

    emit("update:modelValue", internalValue.value)
    emit("change", internalValue.value)
    emit("update:checked", isInputChecked) // this.$emit('update:checked', isChecked);
  }

  return {
    toggle,
    isChecked,
    internalValue,
    input,
  }
}
