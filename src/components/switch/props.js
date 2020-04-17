import { baseInputProps, baseProps } from '../props'

export default {
  props: {
    ...baseProps,
    ...baseInputProps,
    /** Define is switch is on the left or right, default is right.
      @default false
     */
    reverse: {
      type: Boolean,
      default: false
    },
    /** Set specific checked/unchecked values instead of false/true. Array of size 2,
    with unchecked value first.
      @default [false, true]
     */
    values: {
      type: Array,
      default: () => [false, true]
      // TODO: is it possible to validate that values must be of length 2 ?
    }
  }
}
