import { baseInputProps, baseProps, valuesProps } from '../props'

export default {
  props: {
    ...baseProps,
    ...baseInputProps,
    ...valuesProps,
    // TODO: get rid of that ? use same checkbox system
    checked: {
      type: Boolean,
      default: false
    }
  }
}
