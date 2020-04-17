import { computed } from '@vue/composition-api'
import { useComponentClasses } from '../../api/theme'

// eslint-disable-next-line no-unused-vars
export const useSwitch = (props, context) => {
  // behaviour
  const valIndex = computed(() => {
    return props.values.indexOf(props.value)
  })

  const toggle = () => {
    if (props.disabled) {
      return
    }
    const index = valIndex.value === 1 ? 0 : 1
    context.emit('input', props.values[index])
  }
  const isChecked = computed(() => {
    return props.reverse ? valIndex.value === 0 : valIndex.value === 1
  })

  // style

  const { styling, setElementClasses, componentClasses } = useComponentClasses(
    props,
    'switch'
  )
  const rootClass = computed(() => {
    return styling && componentClasses.root
  })
  const labelClass = computed(() => {
    return setElementClasses('label', 'base', {
      disabled: props.disabled,
      [props.status]: props.status && !props.disabled
    })
  })
  const helpClass = computed(() => {
    return setElementClasses('help', 'base', {
      disabled: props.disabled,
      [props.status]: props.status && !props.disabled
    })
  })

  const frontClass = computed(() => {
    return setElementClasses('front', 'base', {
      disabled: props.disabled,
      checked: isChecked.value,
      unchecked: !isChecked.value
    })
  })

  const backClass = computed(() => {
    return setElementClasses('back', 'base', {
      disabled: props.disabled,
      checked: isChecked.value,
      unchecked: !isChecked.value
    })
  })

  return {
    rootClass,
    labelClass,
    backClass,
    frontClass,
    helpClass,
    toggle,
    isChecked,
    valIndex
  }
}
