import { baseInputProps, baseProps } from '../props'

export default {
  props: {
    ...baseProps,
    ...baseInputProps,
    /** Autosize textarea when writing inside textarea (up to max number of rows).
      @default true
    */
    autosize: {
      type: Boolean,
      default: true
    },
    /** Number of rows (will act as maximum row numbers if autoresize enabled).
      @default 3
    */
    rows: {
      type: Number,
      default: 3
    }
  }
}
