import { computed } from '@vue/composition-api'
import { useComponentClasses } from '../../api/theme'

// eslint-disable-next-line no-unused-vars
export const useButton = (props, context) => {
  const { styling, componentClasses } = useComponentClasses(props, 'button')

  const buttonClass = computed(() => {
    if (styling) {
      return [
        componentClasses.base,
        componentClasses.variants.root[props.mode],
        props.disabled ? componentClasses.variants.root.disabled : '',
        props.variant
          ? componentClasses.variants[props.variant][props.mode]
          : '',
        props.disabled ? componentClasses.variants[props.variant].disabled : '',
        props.block ? componentClasses.block : componentClasses.inline
      ]
    } else {
      return ''
    }
  })

  const leadingIconClass = computed(() => {
    return styling && componentClasses.leadingIcon
  })
  const trailingIconClass = computed(() => {
    return styling && componentClasses.trailingIcon
  })

  // components to render
  return {
    buttonClass,
    leadingIconClass,
    trailingIconClass
  }
}
