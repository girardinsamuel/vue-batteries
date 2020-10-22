import { ref } from '@vue/composition-api'
import { useOptionsInput } from '../../api/input'

export const useGroupInput = (props, context) => {
  let currentValue = ref(props.value)

  const isChecked = value => {
    if (props.multiple) {
      return currentValue.value.includes(value)
    } else {
      return currentValue.value === value
    }
  }

  const toggle = value => {
    let localValue
    if (props.multiple) {
      localValue = currentValue.value
      if (localValue.includes(value)) {
        localValue = localValue.filter(item => item !== value)
      } else {
        localValue.push(value)
      }
    } else {
      localValue = value
    }
    currentValue.value = localValue
    context.emit('input', localValue)
    context.emit('change', localValue)
  }

  // Deal with options
  const { _normalizedOptions } = useOptionsInput(props)

  return {
    // behaviour
    toggle,
    isChecked,
    // options handling
    _normalizedOptions,
    currentValue
  }
}
