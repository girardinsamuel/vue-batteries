import { computed, onMounted } from '@vue/composition-api'
import { useComponentClasses } from '../../api/theme'

// eslint-disable-next-line no-unused-vars
export const useTextarea = (props, context) => {
  const { setElementClasses } = useComponentClasses(props, 'textarea')

  const textareaClass = computed(() => {
    return setElementClasses('textarea', 'base', {
      disabled: props.disabled,
      [props.status]: props.status,
      readonly: Object.prototype.hasOwnProperty.call(context.attrs, 'readonly')
    })
  })

  // autoresize feature
  onMounted(() => {
    if (props.autosize) {
      const autosize = require('autosize')
      autosize(context.refs.textarea)
    }
  })
  const rows = computed(() => {
    return context.attrs.rows || props.rows
  })

  return {
    textareaClass,
    rows
  }
}
