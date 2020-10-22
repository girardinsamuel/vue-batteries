import { baseProps, baseInputProps, optionsProps } from '../props'

export default {
  props: {
    ...baseProps,
    ...baseInputProps,
    ...optionsProps,
    /** Type of group input. Checkbox will allow multiple selection when radio does not. 
      @default 'checkbox'
    */
    type: {
      type: String,
      default: 'checkbox',
      validator: function(value) {
        return ['checkbox', 'radio'].includes(value)
      }
    }
  }
}
