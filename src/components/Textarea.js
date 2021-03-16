import { defineComponent, computed, ref } from "vue"
import { baseProps } from "../utils/baseProps"
import useBaseClasses from "../core/useClasses"

export const useClasses = (props, context, status) => {
  const { styling, componentClasses, setElementClasses } = useBaseClasses(
    props,
    "textarea",
  )
  const rootClass = computed(() => {
    return styling && componentClasses.root
  })
  const containerClass = computed(() => {
    return styling && componentClasses.container
  })
  const inputClass = computed(() => {
    return setElementClasses("textarea", "root", {
      disabled: props.disabled,
      [status.value]: !!status.value,
      base: status.value == null,
      leading: props.leadingIcon,
      trailing: props.trailingIcon,
      readonly: Object.prototype.hasOwnProperty.call(context.attrs, "readonly"),
    })
  })
  const labelClass = computed(() => {
    return setElementClasses("label", "root", {
      disabled: props.disabled,
      [status.value]: !!status.value,
      base: status.value == null,
    })
  })
  const helpClass = computed(() => {
    return setElementClasses("help", "root", {
      disabled: props.disabled,
      [status.value]: !!status.value,
      base: status.value == null,
    })
  })
  const leadingIconContainerClass = computed(() => {
    return setElementClasses("leadingIcon", "container")
  })
  const leadingIconClass = computed(() => {
    return setElementClasses("leadingIcon", "root", {
      disabled: props.disabled,
      [status.value]: !!status.value,
      base: status.value == null,
    })
  })
  const trailingIconContainerClass = computed(() => {
    return setElementClasses("trailingIcon", "container")
  })
  const trailingIconClass = computed(() => {
    return setElementClasses("trailingIcon", "root", {
      disabled: props.disabled,
      [status.value]: !!status.value,
      base: status.value == null,
    })
  })
  const requiredClass = computed(() => {
    return styling && componentClasses.required
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
    requiredClass,
  }
}

const useApi = (props, context, status) => {
  // input value logic
  const inputValue = ref(props.modelValue)
  const onInput = event => {
    inputValue.value = event.target.value
    context.emit("update:modelValue", inputValue.value)
  }
  const onBlur = event => {
    // to implement if needed
  }
  const helpText = ref(props.help)
  const renderHelp = computed(() => { return helpText.value !== "" || "help" in context.slots })

  return {
    onInput,
    onBlur,
    helpText,
    renderHelp,
    inputValue,
  }
}

export const Textarea = defineComponent({
  name: "Textarea",
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
    required: {
      type: Boolean,
      default: false,
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
    /** Show status icon in trailingIcon slot when input status is defined. Icons can be defined in
    global input configuration object for each status. */
    statusIcon: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      default: "",
    },
  },
})

export default {
  useClasses,
  useApi,
  Textarea,
}
