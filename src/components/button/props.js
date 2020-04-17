import { baseProps } from '../props'

export default {
  props: {
    ...baseProps,
    mode: {
      type: String,
      default: 'fill',
      validator: function(value) {
        return ['fill', 'outline', 'link'].indexOf(value) !== -1
      }
    },
    variant: {
      type: String,
      default: null,
      validator: function(value) {
        return value !== 'root'
      }
    },
    leadingIcon: {
      type: String,
      default: ''
    },
    trailingIcon: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    to: {
      type: Object,
      default: () => {}
    }
  }
}
