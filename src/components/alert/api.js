import { ref, computed } from '@vue/composition-api'
import { useComponentClasses } from '../../api/theme'

export const useAlert = (props, { emit }) => {
  // Styling
  const { styling, componentClasses, setElementClasses } = useComponentClasses(
    props,
    'alert'
  )
  const containerClass = computed(() => {
    return setElementClasses('container', 'base', {
      [props.status]: props.status
    })
  })

  const contentClass = computed(() => {
    return styling ? componentClasses.content : ''
  })
  const closeClass = computed(() => {
    return styling ? componentClasses.close : ''
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
