import { defineComponent, computed, h, ref } from "vue"

import useClasses from "../core/useClasses"
import { baseProps } from "../utils/baseProps"
import { getConfig } from "../config"
import CellIcon from "./Icon.vue"

export const useInputClasses = (props, context) => {
  const { styling, componentClasses, setElementClasses } = useClasses(
    props,
    "input",
  )
  const rootClass = computed(() => {
    return styling && componentClasses.root
  })
  const containerClass = computed(() => {
    return styling && componentClasses.container
  })
  const inputClass = computed(() => {
    debugger
    return setElementClasses("input", "root", {
      disabled: props.disabled,
      [props.status]: !!props.status,
      base: props.status == null,
      leading: props.leadingIcon,
      trailing: props.trailingIcon,
      readonly: Object.prototype.hasOwnProperty.call(context.attrs, "readonly"),
    })
  })
  const labelClass = computed(() => {
    return setElementClasses("label", "root", {
      disabled: props.disabled,
      [props.status]: props.status,
      base: props.status == null,
    })
  })
  const helpClass = computed(() => {
    debugger
    return setElementClasses("help", "root", {
      disabled: props.disabled,
      [props.status]: props.status,
      base: props.status == null,
    })
  })
  const leadingIconContainerClass = computed(() => {
    return setElementClasses("leadingIcon", "container")
  })
  const leadingIconClass = computed(() => {
    return setElementClasses("leadingIcon", "root", {
      disabled: props.disabled,
      [props.status]: props.status,
      base: props.status == null,
    })
  })
  const trailingIconContainerClass = computed(() => {
    return setElementClasses("trailingIcon", "container")
  })
  const trailingIconClass = computed(() => {
    return setElementClasses("trailingIcon", "root", {
      disabled: props.disabled,
      [props.status]: props.status,
      base: props.status == null,
    })
  })
  return {
    trailingIconClass,
    trailingIconContainerClass,
    leadingIconClass,
    leadingIconContainerClass,
    labelClass,
    helpClass,
    inputClass,
    rootClass,
    containerClass,
  }
}

export const useInputApi = (props, context) => {
  const config = getConfig()

  // hide input value
  const visibility = ref(props.type !== "password")
  const toggle = () => {
    visibility.value = !visibility.value
  }
  const fieldType = computed(() => {
    if (visibility.value) {
      return props.type === "password" ? "text" : props.type
    } else {
      return "password"
    }
  })
  // const fieldStatus = ref(props.status)

  // trailingIcon logic
  const trailingIconName = computed(() => {
    if (props.loading) {
      return "loading"
    } else if (props.statusIcon && !!props.status) {
      return config.statusIcons[props.status]
    } else if (props.passwordToggle && props.type === "password") {
      return visibility.value ? "eye-off" : "eye"
    } else if (props.trailingIcon) {
      return props.trailingIcon
    } else {
      return null
    }
  })
  const trailingClick = $event => {
    props.passwordToggle && props.type === "password"
      ? toggle()
      : context.emit("trailing-icon-click")
  }
  const onInput = event => {
    context.emit("update:modelValue", event.target.value)
  }
  const onBlur = event => {
    // to implement if needed
  }
  const inputValue = props.modelValue
  const helpText = ref(props.help)
  const renderHelp = computed(() => { return helpText.value !== "" || "help" in context.slots })
  const hasTrailingIcon = computed(() => { return (props.passwordToggle && props.type === "password") || !!trailingIconName.value })

  return {
    visibility,
    fieldType,
    trailingIconName,
    trailingClick,
    onInput,
    onBlur,
    helpText,
    renderHelp,
    inputValue,
    hasTrailingIcon,
    // fieldStatus,
  }
}

export const Input = defineComponent({
  name: "Input",
  emits: ["update:modelValue"],
  props: {
    ...baseProps,
    /**
     * Use this directive to create two-way data bindings with the component.
     * It automatically picks the correct way to update the element based on the input type.
     * @model
     */
    modelValue: {
      type: [String, Number],
      default: "",
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
    // Input specific props
    /** Name of leading icon. This is using Icon component that you can configure to
    suit your own set of icons (or to use an external library).
    */
    leadingIcon: {
      type: String,
      default: "",
    },
    trailingIcon: {
      type: String,
      default: "",
    },
    /** Allow user to show input content for password type's input by clicking on the trailingIcon. Only shown if
    input type is password.
      @default true
    */
    passwordToggle: {
      type: Boolean,
      default: true,
    },
    /** Show status icon in trailingIcon slot when input status is defined. Icons can be defined in
    global input configuration object for each status. */
    statusIcon: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
  },
  // render () {
  //   let trailingComponent = null
  //   let leadingComponent = null

  //   const getIcon = (className, name) => {
  //     return h(CellIcon, { class: className, name: name })
  //   }
  //   const hasTrailingIcon = (this.passwordToggle && this.$props.type === "password") || this.trailingIconName
  //   if ("trailing" in this.$slots) {
  //     trailingComponent = this.$slots.trailing({ className: this.trailingIconContainerClass })
  //   } else if (hasTrailingIcon) {
  //     trailingComponent = h("div", { className: this.trailingIconContainerClass, onClick: this.trailingClick }, [getIcon(this.trailingIconClass, this.trailingIconName)])
  //   }
  //   if ("leading" in this.$slots) {
  //     leadingComponent = this.$slots.leading({ className: this.leadingIconContainerClass })
  //   } else if (this.$props.leadingIcon) {
  //     leadingComponent = h("div", { className: this.leadingIconContainerClass }, [getIcon(this.leadingIconClass, this.$props.leadingIcon)])
  //   }

  //   // input
  //   const inputComponent = h("input", {
  //     className: [this.inputClass, leadingComponent !== null ? "pl-8" : "", hasTrailingIcon ? "pr-8" : ""].join(" "),
  //     // for v-model
  //     // value: this.$props.modelValue,
  //     value: this.inputValue,
  //     role: "input",
  //     type: this.fieldType,
  //     onInput: this.onInput,
  //     onBlur: this.onBlur,
  //   })
  //   // label
  //   const hasLabel = "label" in this.$slots || this.$props.label
  //   // TODO: make slot
  //   const labelComponent = h("label", { className: this.labelClass, htmlFor: this.$attrs.name }, this.$props.label)

  //   // help
  //   const helpComponent = "help" in this.$slots ? this.$slots.help({ className: this.helpClass, checked: this.checked }) : h("span", { className: this.helpClass }, this.helpText)

  //   return h("div", { className: this.rootClass }, [
  //     hasLabel && labelComponent,
  //     h("div", { className: this.containerClass }, [
  //       leadingComponent !== null && leadingComponent,
  //       inputComponent,
  //       hasTrailingIcon && trailingComponent,
  //     ]),
  //     this.renderHelp && helpComponent,
  //   ])
  // },
  setup (props, context) {
    // Behaviour
    const {
      fieldType,
      trailingIconName,
      trailingClick,
      onInput,
      onBlur,
      hasTrailingIcon,
    } = useInputApi(props, context)

    const {
      trailingIconClass,
      trailingIconContainerClass,
      leadingIconClass,
      leadingIconContainerClass,
      labelClass,
      helpClass,
      inputClass,
      rootClass,
      containerClass,
    } = useInputClasses(props, context)
    // return {
    //   // events
    //   // fieldInput,
    //   // fieldListeners,
    //   // style
    //   helpText,
    //   ...inputApi,
    //   fieldStatus,
    //   ...useInputClasses(props, context, fieldStatus.value),
    // }
    // Render ------
    // let trailingComponent = null
    let leadingComponent = null
    const getIcon = (className, name) => {
      return h(CellIcon, { class: className, name: name })
    }
    // if ("trailing" in context.slots) {
    //   trailingComponent = context.slots.trailing({ className: trailingIconContainerClass.value })
    // } else if (hasTrailingIcon.value) {
    // }
    const trailingComponent = computed(() => {
      return "trailing" in context.slots ? context.slots.trailing({ className: trailingIconContainerClass.value }) : h("div", { className: trailingIconContainerClass.value, onClick: trailingClick }, [getIcon(trailingIconClass.value, trailingIconName.value)])
    })

    if ("leading" in context.slots) {
      leadingComponent = context.slots.leading({ className: leadingIconContainerClass.value })
    } else if (props.leadingIcon) {
      leadingComponent = h("div", { className: leadingIconContainerClass.value }, [getIcon(leadingIconClass.value, props.leadingIcon)])
    }

    // input
    const fullInputClass = computed(() => [inputClass.value, leadingComponent !== null ? "pl-8" : "", hasTrailingIcon.value ? "pr-8" : ""].join(" "))
    const inputComponent = computed(() => h("input", {
      className: fullInputClass.value,
      // for v-model
      // value: props.modelValue,
      // value: inputValue,
      // {
      value: props.modelValue,
      // }
      role: "input",
      type: fieldType.value,
      onInput: onInput,
      onBlur: onBlur,
    }))

    // label
    const hasLabel = "label" in context.slots || !!props.label
    const labelComponent = computed(() => h("label", { className: labelClass.value, htmlFor: context.attrs.name }, props.label))

    // help
    const helpComponent = computed(() => "help" in context.slots ? context.slots.help({ className: helpClass.value }) : h("span", { className: helpClass.value }, props.help))

    return () => h("div", { className: rootClass.value }, [
      hasLabel && labelComponent.value,
      h("div", { className: containerClass.value }, [
        leadingComponent !== null && leadingComponent,
        inputComponent.value,
        hasTrailingIcon.value && trailingComponent.value,
      ]),
      !!props.help && helpComponent.value,
    ])
  },
})
