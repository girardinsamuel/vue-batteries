import { optionsProps } from '../props'

export default {
  props: {
    ...optionsProps,
    /** Value of field for v-model binding
    @model
    */
    value: {
      type: [String, Number, Boolean, Array],
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    }
  }
}
