export default {
  props: {
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
    classes: {
      type: Object,
      default: () => {}
    },
    value: {
      type: Boolean,
      default: true
    }
  }
}
