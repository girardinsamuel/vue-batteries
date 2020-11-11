import { defineComponent, computed, ref, h } from "vue"

import useClasses from "../core/useClasses"
import { baseProps } from "../utils/baseProps"

export const Alert = defineComponent({
  name: "Alert",
  props: {
    ...baseProps,
    /**
     * This Boolean property indicates that the user cannot interact with the control.
     */
    closable: {
      type: Boolean,
      default: true,
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
    /**
     * Use this directive to create two-way data bindings with the component.
     * It automatically picks the correct way to update the element based on the input type.
     * @model
     */
    modelValue: {
      type: Boolean,
      default: true,
    },
  },
  render () {
    const hide = !this.$props.modelValue || this.dismissed
    debugger
    if (hide) {
      return null
    }
    const closeComponent = "close" in this.$slots ? this.$slots.close({ className: this.closeClass, close: this.close }) : h("div", { class: this.closeClass }, [h("button", { onClick: this.close }, "x")])
    const contentComponent = "content" in this.$slots ? this.$slots.content({ className: this.contentClass }) : h("span", { class: this.contentClass }, this.$slots.default)

    return h("div", { class: this.containerClass, role: "alert" }, [
      contentComponent,
      this.closable && closeComponent,
    ])
  },
  setup (props, { emit }) {
    // Styling
    const { styling, componentClasses, setElementClasses } = useClasses(
      props,
      "alert",
    )
    const containerClass = computed(() => {
      return setElementClasses("container", "base", {
        [props.status]: props.status,
      })
    })

    const contentClass = computed(() => {
      return styling ? componentClasses.content : ""
    })
    const closeClass = computed(() => {
      return styling ? componentClasses.close : ""
    })

    // State
    // const show = computed(() => {
    //   return this.modelValue || !this.dismissed
    // })
    const dismissed = ref(false)

    // Methods
    const close = () => {
      dismissed.value = true
      // for v-model to work
      emit("update:modelValue", false)
    }
    debugger
    return {
      styling,
      containerClass,
      contentClass,
      closeClass,
      dismissed,
      close,
    }
  },
})
