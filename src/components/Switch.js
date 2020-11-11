import { defineComponent, computed, h } from "vue"

import useClasses from "../core/useClasses"
import useToggle from "../core/useToggle"
import { baseProps } from "../utils/baseProps"

export const Switch = defineComponent({
  name: "Alert",
  props: {
    ...baseProps,
    /**
     * Use this directive to create two-way data bindings with the component.
     * It automatically picks the correct way to update the element based on the input type.
     * @model
     */
    modelValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    help: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: null,
      validator: function (value) {
        return (
          value === null ||
          ["error", "warning", "success", "info"].indexOf(value) !== -1
        )
      },
    },
    /** Define is switch is on the left or right, default is right.
    @default false
    */
    reverse: {
      type: Boolean,
      default: false,
    },
    values: {
      type: Array,
      default: () => [false, true],
    },
  },
  render () {
    // switch
    const switchComponent = h("span",
      { className: this.backClass, onClick: this.toggle, value: this.$props.modelValue, role: "checkbox" },
      [h("span", { ariaHidden: true, className: this.frontClass })],
    )
    // label
    let labelComponent = null
    const hasLabel = this.$slots.default !== undefined
    if (hasLabel) {
      labelComponent = h("label", { className: this.labelClass, htmlFor: this.$attrs.name, checked: this.checked }, [switchComponent, this.$slots.default({ checked: this.checked })])
    }

    // help
    const renderHelp = this.$props.help || "help" in this.$slots
    const helpComponent = "help" in this.$slots ? this.$slots.help({ className: this.helpClass, checked: this.checked }) : h("span", { className: this.helpClass }, this.$props.help)

    return h("div", { className: this.rootClass }, [
      hasLabel ? labelComponent : switchComponent,
      renderHelp && helpComponent,
    ])
  },
  setup (props, context) {
    // Behaviour

    const { toggle, checked, valIndex } = useToggle(props, context)

    // Styling
    const { styling, setElementClasses, componentClasses } = useClasses(
      props,
      "switch",
    )
    const rootClass = computed(() => {
      return styling && componentClasses.root
    })
    const labelClass = computed(() => {
      return setElementClasses("label", "base", {
        disabled: props.disabled,
        [props.status]: props.status && !props.disabled,
      })
    })
    const helpClass = computed(() => {
      return setElementClasses("help", "base", {
        disabled: props.disabled,
        [props.status]: props.status && !props.disabled,
      })
    })

    const frontClass = computed(() => {
      return setElementClasses("front", "base", {
        disabled: props.disabled,
        checked: checked.value,
        unchecked: !checked.value,
      })
    })

    const backClass = computed(() => {
      return setElementClasses("back", "base", {
        disabled: props.disabled,
        checked: checked.value,
        unchecked: !checked.value,
      })
    })
    return {
      rootClass,
      labelClass,
      backClass,
      frontClass,
      helpClass,
      toggle,
      checked,
      value: valIndex,
    }
  },
})
