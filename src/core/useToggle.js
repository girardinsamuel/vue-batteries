import { computed } from "vue"

export default (props, { emit }) => {
  const valIndex = computed(() => {
    return props.values.indexOf(props.modelValue)
  })

  const toggle = () => {
    if (props.disabled) {
      return
    }
    const index = valIndex.value === 1 ? 0 : 1
    emit("update:modelValue", props.values[index])
  }
  const checked = computed(() => {
    return props.reverse ? valIndex.value === 0 : valIndex.value === 1
  })

  return {
    toggle,
    checked,
    valIndex,
  }
}
