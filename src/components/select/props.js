import { baseInputProps, baseProps } from '../props'

export default {
  props: {
    ...baseProps,
    ...baseInputProps,
    /** Name of leading icon. This is using Icon component that you can configure to
    suit your own set of icons (or to use an external library). 
    */
    leadingIcon: {
      type: String,
      default: ''
    },
    /** Array of (value/label object) to populate select options.
    @default []
  */
    options: {
      type: Array,
      default: () => []
    },
    valPropName: {
      type: String,
      default: 'value'
    },
    labelPropName: {
      type: String,
      default: 'label'
    }
  }
}
