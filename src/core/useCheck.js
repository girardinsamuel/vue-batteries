import { computed, ref } from "vue"

export default (props, { emit }) => {
  const internalValue = ref(props.values.indexOf(props.modelValue))

  // const valIndex = computed(() => {
  //   return props.values.indexOf(props.modelValue)
  // })
  // const valIndex = computed(() => {
  //   return props.values.indexOf(internalValue.value)
  // })

  const toggle = () => {
    if (props.disabled) {
      return
    }
    internalValue.value = internalValue.value === 1 ? 0 : 1
    emit("update:modelValue", props.values[internalValue.value])
    emit("change", props.values[internalValue.value])
  }
  const isChecked = computed(() => {
    return props.reverse ? internalValue.value === 0 : internalValue.value === 1
    // return props.reverse ? valIndex.value === 0 : valIndex.value === 1
  })

  return {
    toggle,
    isChecked,
    internalValue,
  }
}
