import { baseInputProps, baseProps } from '../props'

export default {
  props: {
    ...baseProps,
    ...baseInputProps,
    // Input specific props
    /** Name of leading icon. This is using Icon component that you can configure to
    suit your own set of icons (or to use an external library). 
    */
    leadingIcon: {
      type: String,
      default: ''
    },
    trailingIcon: {
      type: String,
      default: ''
    },
    /** Allow user to show input content for password type's input by clicking on the trailingIcon. Only shown if 
    input type is password.
      @default true
    */
    passwordToggle: {
      type: Boolean,
      default: true
    },
    /** Show status icon in trailingIcon slot when input status is defined. Icons can be defined in
    global input configuration object for each status. */
    statusIcon: {
      type: Boolean,
      default: false
    }
  }
}
