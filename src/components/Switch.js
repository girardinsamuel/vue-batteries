import { defineComponent, computed } from "vue"

import useBaseClasses from "../core/useClasses"
import useCheck from "../core/useCheck"
import { baseProps } from "../utils/baseProps"

const useClasses = (props, context, status, isChecked) => {
  const { styling, setElementClasses, componentClasses } = useBaseClasses(
    props,
    "switch",
  )
  const rootClass = computed(() => {
    return styling && componentClasses.root
  })
  const requiredClass = computed(() => {
    return styling && componentClasses.required
  })
  const labelClass = computed(() => {
    return setElementClasses("label", "base", {
      disabled: props.disabled,
      [status.value]: status.value && !props.disabled,
    })
  })
  const helpClass = computed(() => {
    return setElementClasses("help", "root", {
      disabled: props.disabled,
      [status.value]: !!status.value,
      base: status.value == null,
    })
  })

  const frontClass = computed(() => {
    return setElementClasses("front", "base", {
      disabled: props.disabled,
      checked: isChecked.value,
      unchecked: !isChecked.value,
    })
  })

  const backClass = computed(() => {
    return setElementClasses("back", "base", {
      disabled: props.disabled,
      checked: isChecked.value,
      unchecked: !isChecked.value,
    })
  })
  return {
    rootClass,
    labelClass,
    backClass,
    frontClass,
    helpClass,
    requiredClass,
  }
}

const useApi = (props, context, status) => {
  const { toggle, isChecked, valIndex } = useCheck(props, context)
  return {
    toggle,
    isChecked,
    value: valIndex,
  }
}

const Switch = defineComponent({
  name: "Switch",
  emits: ["update:modelValue", "change"],
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
    label: {
      type: String,
      default: "",
    },
  },
  // render () {
  //   // switch
  //   const switchComponent = h("span",
  //     { className: this.backClass, onClick: this.toggle, value: this.$props.modelValue, role: "checkbox" },
  //     [h("span", { ariaHidden: true, className: this.frontClass })],
  //   )
  //   // label
  //   let labelComponent = null
  //   const hasLabel = this.$slots.default !== undefined
  //   if (hasLabel) {
  //     labelComponent = h("label", { className: this.labelClass, htmlFor: this.$attrs.name, checked: this.checked }, [switchComponent, this.$slots.default({ checked: this.checked })])
  //   }

  //   // help
  //   const renderHelp = this.$props.help || "help" in this.$slots
  //   const helpComponent = "help" in this.$slots ? this.$slots.help({ className: this.helpClass, checked: this.checked }) : h("span", { className: this.helpClass }, this.$props.help)

  //   return h("div", { className: this.rootClass }, [
  //     hasLabel ? labelComponent : switchComponent,
  //     renderHelp && helpComponent,
  //   ])
  // },
  // setup (props, context) {
  //   // Behaviour

  //   // Styling

  //   return {

  //     toggle,
  //     checked,
  //     value: valIndex,
  //   }
  // },
})

export default {
  useApi,
  useClasses,
  Switch,
}
