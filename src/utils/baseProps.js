import { getConfig } from "../config"
const statuses = getConfig().statuses

export const baseProps = {
  /** Define which classes to merge with theme locally for this component
    @default {}
  */
  classes: {
    type: Object,
    default: () => ({}),
  },
  /** Define which classes to override locally for this component
    @default {}
  */
  classesOverride: {
    type: Object,
    default: () => ({}),
  },
  /** Decide if classes prop override theme or merge with it.
    @default false
  */
  override: {
    type: Boolean,
    default: false,
  },
  /** Override global styling parameter to disable theme styling for this
  component. classes can still be used.
    @default false
   */
  noStyling: {
    type: Boolean,
    default: false,
  },
}

export const baseInputProps = {
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  help: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "default",
    validator: function (value) {
      return statuses.indexOf(value) !== -1
    },
  },
  /** Show loading indicator in trailingIcon slot.
    @default false
    */
  loading: {
    type: Boolean,
    default: false,
  },
  /** Value of field for v-model binding
    @model
    */
  value: {
    type: [String, Number, Boolean, Array],
    default: "",
  },
}

export const optionsProps = {
  /** Name of value attribute of an option item object.
    @default 'value'
  */
  valAttrName: {
    type: String,
    default: "value",
  },
  /** Name of label attribute of an option item object.
    @default 'label'
  */
  labelAttrName: {
    type: String,
    default: "label",
  },
  /** Options array which contains option item object (with value/label attributes)
    @default []
   */
  options: {
    type: Array,
    default: () => [],
  },
}

export const valuesProps = {
  /** Define is switch is on the left or right, default is right.
    @default false
    */
  reverse: {
    type: Boolean,
    default: false,
  },
  /** Set specific checked/unchecked values instead of false/true. Array of size 2,
  with unchecked value first.
    @default [false, true]
    */
  values: {
    type: Array,
    default: () => [false, true],
    // TODO: is it possible to validate that values must be of length 2 ?
  },
}
