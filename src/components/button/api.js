import { ref, computed } from '@vue/composition-api'
import { getConfig } from '../../config'

// eslint-disable-next-line no-unused-vars
export const useButton = (props, context) => {
  const $config = ref(getConfig())
  const styling = $config.value.styling
  const classes = { ...$config.value.theme.button, ...props.classes }
  const buttonClass = computed(() => {
    if (!styling && !props.classes) {
      return ''
    } else {
      return [classes.base, props.status ? classes[props.status] : '']
    }
  })
  const leadingIconClass = computed(() => {
    return styling ? classes.leadingIcon : ''
  })
  const trailingIconClass = computed(() => {
    return styling ? classes.trailingIcon : ''
  })

  return {
    buttonClass,
    leadingIconClass,
    trailingIconClass
  }
}
