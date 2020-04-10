import { useAlert } from './api'
// Working of example of same component in JSX, but I am not fan of the syntax.
export default {
  model: {
    event: 'update',
    prop: 'visible'
  },
  props: {
    closable: {
      type: Boolean,
      default: true
    },
    renderless: {
      type: Boolean,
      default: false
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
    visible: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return {
      ...useAlert(props, context)
    }
  },
  render() {
    if (this.renderless) {
      return this.$scopedSlots.default({
        close: this.close,
        visible: this.visible,
        dismissed: this.dismissed,
        status: this.status
      })
    } else {
      const defaultScopedSlots = {
        content: () => <p class={this.contentClass}>{this.$slots.default}</p>,
        close: () => (
          <div class={this.closeClass}>
            <button onClick={this.close}>x</button>
          </div>
        )
      }
      return this.visible && !this.dismissed ? (
        <div class={this.containerClass} scopedSlots={defaultScopedSlots}>
          {this.$slots.content
            ? this.$slots.content
            : defaultScopedSlots.content()}
          {this.$scopedSlots.close && this.closable
            ? this.$scopedSlots.close({ close: this.close })
            : this.closable
            ? defaultScopedSlots.close()
            : ''}
        </div>
      ) : (
        ''
      )
    }
  }
}
