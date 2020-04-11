import { ref, computed } from '@vue/composition-api'
import { getConfig } from '../../config'

// eslint-disable-next-line no-unused-vars
export const useButton = (props, context) => {
  // TODO put that in a func comp api that we can reuse in all vue-batteries components
  const $config = ref(getConfig())
  const styling = $config.value.styling
  const classes = { ...$config.value.theme.button, ...props.classes }

  const buttonClass = computed(() => {
    if (!styling && !props.classes) {
      return ''
    } else {
      return [
        classes.base,
        classes.variants.root[props.mode],
        props.disabled ? classes.variants.root.disabled : '',
        props.variant ? classes.variants[props.variant][props.mode] : '',
        props.disabled ? classes.variants[props.variant].disabled : '',
        props.block ? classes.block : classes.inline
      ]
    }
  })

  const leadingIconClass = computed(() => {
    return styling ? classes.leadingIcon : ''
  })
  const trailingIconClass = computed(() => {
    return styling ? classes.trailingIcon : ''
  })

  // components to render

  return {
    buttonClass,
    leadingIconClass,
    trailingIconClass
  }
}
