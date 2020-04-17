import { getConfig } from '../config'
const statuses = getConfig().statuses

export const baseProps = {
  /** Define which classes to merge with theme locally for this component 
    @default {}
  */
  classes: {
    type: Object,
    default: () => ({})
  },
  /** Define which classes to override locally for this component 
    @default {}
  */
  classesOverride: {
    type: Object,
    default: () => ({})
  },
  /** Decide if classes prop override theme or merge with it.
    @default false
  */
  override: {
    type: Boolean,
    default: false
  },
  /** Override global styling parameter to disable theme styling for this
  component. classes can still be used.
    @default false
   */
  noStyling: {
    type: Boolean,
    default: false
  }
}

export const baseInputProps = {
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  help: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: 'default',
    validator: function(value) {
      return statuses.indexOf(value) !== -1
    }
  },
  /** Show loading indicator in trailingIcon slot.
    @default false
    */
  loading: {
    type: Boolean,
    default: false
  },
  /** Value of field for v-model binding
    @model
    */
  value: {
    type: [String, Number, Boolean],
    default: ''
  }
}
