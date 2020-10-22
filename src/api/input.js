import { onMounted, ref } from '@vue/composition-api'

export const useOptionsInput = props => {
  let _normalizedOptions = ref([])
  const normalizeOptions = () => {
    if (Array.isArray(props.options)) {
      props.options.forEach(opt => {
        let val, label
        if (typeof opt === 'object') {
          ;(val = opt[props.valAttrName]), (label = opt[props.labelAttrName])
        } else {
          val = opt
          label = opt
        }
        _normalizedOptions.value.push({
          value: val,
          label: label
        })
      })
    } else {
      // TODO
      return
    }
  }
  onMounted(() => {
    normalizeOptions()
  })

  return {
    _normalizedOptions
  }
}
