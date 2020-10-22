import { computed, ref } from '@vue/composition-api'
import { useComponentClasses } from '../../api/theme'
// import { useChecked } from '../api'

const useToggleValues = (props, context) => {
  let currentValue = ref(props.value)
  const isChecked = computed({
    get: () => {
      if (Array.isArray(props.value)) {
        return props.value
      } else {
        return props.value === props.values[1]
      }
    },
    set(value) {
      currentValue.value = value
    }
  })

  const update = () => {
    let localValue
    // let checked
    if (Array.isArray(isChecked.value)) {
      localValue = currentValue.value
      // checked = isChecked.value.indexOf(props.values[1]) >= 0
    } else {
      localValue = currentValue.value ? props.values[1] : props.values[0]
      // checked = currentValue.value ? true : false
    }
    context.emit('input', localValue)
    context.emit('change', localValue)
    // context.emit('update:isChecked', checked)
  }

  return {
    isChecked,
    update,
    currentValue
  }
}

export const useCheckbox = (props, context) => {
  // Behaviour
  // const { toggle, isChecked } = useChecked(props, context)
  const { update, isChecked, currentValue } = useToggleValues(props, context)

  // Styling
  const { styling, componentClasses, setElementClasses } = useComponentClasses(
    props,
    'checkbox'
  )
  const containerClass = computed(() => {
    return styling && componentClasses.container
  })

  const inputClass = computed(() => {
    return setElementClasses('input', 'base', {
      disabled: props.disabled,
      [props.status]: props.status,
      readonly: Object.prototype.hasOwnProperty.call(context.attrs, 'readonly')
    })
  })

  const labelClass = computed(() => {
    return setElementClasses('label', 'base', {
      disabled: props.disabled,
      [props.status]: props.status,
      readonly: Object.prototype.hasOwnProperty.call(context.attrs, 'readonly')
    })
  })

  // events
  const fieldListeners = computed(() => {
    // eslint-disable-next-line no-unused-vars
    const { change, input, ...listeners } = context.listeners
    return listeners
  })

  return {
    // events
    fieldListeners,
    // style
    inputClass,
    containerClass,
    labelClass,
    // behaviour
    update,
    currentValue,
    isChecked
  }
}
