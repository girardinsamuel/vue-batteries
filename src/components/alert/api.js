import { ref, computed } from '@vue/composition-api'
import { getConfig } from '../../config'

export const useAlert = (props, { emit }) => {
  const $config = ref(getConfig())
  // Class handling
  console.log(props)
  const styling = $config.value.styling
  const classes = { ...$config.value.theme.alert, ...props.classes }
  const containerClass = computed(() => {
    if (!styling && !props.classes) {
      return ''
    } else {
      return [
        classes.container.base,
        props.status ? classes.container[props.status] : ''
      ]
    }
  })
  const contentClass = computed(() => {
    return styling ? classes.content : ''
  })
  const closeClass = computed(() => {
    return styling ? classes.close : ''
  })

  // State
  const dismissed = ref(false)

  // Methods
  const close = () => {
    dismissed.value = true
    // for v-model to work
    emit('input', false)
  }

  return {
    styling,
    containerClass,
    contentClass,
    closeClass,
    dismissed,
    close
  }
}
