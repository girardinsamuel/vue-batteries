import { computed } from '@vue/composition-api'
import { useComponentClasses } from '../../api/theme'

export const useSelect = (props, context) => {
  // Styling
  const { styling, componentClasses, setElementClasses } = useComponentClasses(
    props,
    'select'
  )
  const rootClass = computed(() => {
    return styling && componentClasses.root
  })
  const containerClass = computed(() => {
    return styling && componentClasses.container
  })

  const inputClass = computed(() => {
    return setElementClasses(
      'input',
      'multiple' in context.attrs || props.multiple ? 'base_multiple' : 'base',
      {
        disabled: props.disabled,
        [props.status]: props.status,
        readonly: Object.prototype.hasOwnProperty.call(
          context.attrs,
          'readonly'
        )
      }
    )
  })
  const labelClass = computed(() => {
    return setElementClasses('label', 'base', {
      disabled: props.disabled,
      [props.status]: props.status
    })
  })
  const helpClass = computed(() => {
    return setElementClasses('help', 'base', {
      disabled: props.disabled,
      [props.status]: props.status
    })
  })
  const leadingIconContainerClass = computed(() => {
    return setElementClasses('leadingIcon', 'container')
  })
  const leadingIconClass = computed(() => {
    return setElementClasses('leadingIcon', 'base', {
      disabled: props.disabled,
      [props.status]: props.status
    })
  })

  // events
  const fieldInput = event => {
    context.emit('input', event.target.value)
  }
  const fieldListeners = computed(() => {
    // eslint-disable-next-line no-unused-vars
    const { input, ...listeners } = context.listeners
    return listeners
  })

  return {
    // events
    fieldInput,
    fieldListeners,
    // style
    rootClass,
    inputClass,
    containerClass,
    labelClass,
    leadingIconClass,
    leadingIconContainerClass,
    helpClass
  }
}
