import { ref, computed } from '@vue/composition-api'
import { getConfig } from '../../config'
import { useComponentClasses } from '../../api/theme'

export const useInput = (props, context) => {
  // Styling
  const { styling, componentClasses, setElementClasses } = useComponentClasses(
    props,
    'input'
  )
  const rootClass = computed(() => {
    return styling && componentClasses.root
  })
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
  const trailingIconContainerClass = computed(() => {
    return setElementClasses('trailingIcon', 'container')
  })
  const trailingIconClass = computed(() => {
    return setElementClasses('trailingIcon', 'base', {
      disabled: props.disabled,
      [props.status]: props.status
    })
  })

  // hide input value
  const visibility = ref(context.attrs.type !== 'password')
  const toggle = () => {
    if (!props.passwordToggle) {
      return
    }
    visibility.value = !visibility.value
  }
  const fieldType = computed(() => {
    if (visibility.value) {
      return context.attrs.type === 'password' ? 'text' : context.attrs.type
    } else {
      return 'password'
    }
  })

  // trailingIcon logic
  const $config = ref(getConfig())
  const trailingIconName = computed(() => {
    if (props.loading) {
      return 'loading'
    } else if (props.statusIcon && props.status !== 'default') {
      return $config.value.statusIcons[props.status]
    } else if (props.passwordToggle && context.attrs.type === 'password') {
      return visibility.value ? 'eye-off' : 'eye'
    } else if (props.trailingIcon) {
      return props.trailingIcon
    } else {
      return null
    }
  })
  const trailingIconClick = () => {
    props.passwordToggle && context.attrs.type === 'password'
      ? toggle()
      : context.emit('trailing-icon-click')
  }

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
    helpClass,
    trailingIconClass,
    trailingIconContainerClass,
    // behaviour
    trailingIconClick,
    visibility,
    fieldType,
    trailingIconName
  }
}
