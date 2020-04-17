import { baseProps } from '../props'
export default {
  props: {
    ...baseProps,
    /**
     * This Boolean property indicates that the user cannot interact with the control.
     */
    closable: {
      type: Boolean,
      default: true
    },
    status: {
      type: String,
      default: null,
      validator: function(value) {
        return (
          value === null ||
          ['error', 'warning', 'success', 'info'].indexOf(value) !== -1
        )
      }
    },
    /**
     * Use this directive to create two-way data bindings with the component.
     * It automatically picks the correct way to update the element based on the input type.
     * @model
     */
    value: {
      type: Boolean,
      default: true
    }
  }
}
