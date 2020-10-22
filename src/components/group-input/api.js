import { computed, ref } from '@vue/composition-api'
import { useComponentClasses } from '../../api/theme'
import { useOptionsInput } from '../../api/input'

export const useGroupInput = (props, context) => {
  let currentValue = ref(props.value)

  // component specific
  const update = value => {
    currentValue.value = value
    context.emit('input', currentValue.value)
    context.emit('change', currentValue.value)
  }
  const componentName = computed(() => {
    return props.type === 'checkbox' ? 'CellCheckbox' : 'CellRadio'
  })

  // Deal with options
  const { _normalizedOptions } = useOptionsInput(props)

  // Styling
  const { styling, componentClasses, setElementClasses } = useComponentClasses(
    props,
    'group'
  )
  const rootClass = computed(() => {
    return styling && componentClasses.root
  })
  const containerClass = computed(() => {
    return styling && componentClasses.container
  })
  /*
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
  */
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
  /*
  const leadingIconContainerClass = computed(() => {
    return setElementClasses('leadingIcon', 'container')
  })
  const leadingIconClass = computed(() => {
    return setElementClasses('leadingIcon', 'base', {
      disabled: props.disabled,
      [props.status]: props.status
    })
  })
*/
  return {
    // style
    rootClass,
    // inputClass,
    containerClass,
    labelClass,
    // leadingIconClass,
    // leadingIconContainerClass,
    helpClass,
    // behaviour
    update,
    componentName,
    // options handling
    _normalizedOptions,
    currentValue
  }
}
