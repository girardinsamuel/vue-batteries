import { defineComponent, computed, ref, h } from "vue"

import useClasses from "../core/useClasses"
import { baseProps } from "../utils/baseProps"
import CellIcon from "./Icon.vue"
import { getConfig } from "../config"

export const AlertProps = {
  props: {
    ...baseProps,
    /**
     * This Boolean property indicates that the user cannot interact with the control.
     */
    closable: {
      type: Boolean,
      default: true,
    },
    showIcon: {
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
}

export const Alert = defineComponent({
  name: "Alert",
  mixins: [AlertProps],
  emits: ["update:modelValue"],
  render () {
    const config = getConfig()
    if (this.hide) {
      return null
    }
    const showStatusIcon = this.$props.showIcon && !!this.$props.status
    const iconName = this.$props.status ? config.statusIcons[this.$props.status] : null
    const leadingIconComponent = "leadingIcon" in this.$slots ? this.$slots.leadingIcon({ className: this.leadingIconClass, icon: iconName }) : h(CellIcon, { class: this.leadingIconClass, name: iconName })
    const closeComponent = "close" in this.$slots ? this.$slots.close({ className: this.closeClass, close: this.close }) : h("div", { class: this.closeClass }, [h("button", { onClick: this.close }, "x")])
    const contentComponent = "content" in this.$slots ? this.$slots.content({ className: this.contentClass }) : h("span", { class: this.contentClass }, this.$slots.default())
    return h("div", { class: this.containerClass, role: "alert", hide: this.hide }, [
      showStatusIcon && leadingIconComponent,
      contentComponent,
      this.closable && closeComponent,
    ])
  },
  setup (props, { emit }) {
    // Styling
    const { styling, setElementClasses } = useClasses(
      props,
      "alert",
    )
    const containerClass = computed(() => {
      return setElementClasses("container", "base", {
        [props.status]: props.status,
      })
    })
    const leadingIconClass = computed(() => {
      return setElementClasses("leadingIcon", "base", {
        [props.status]: props.status,
      })
    })
    const contentClass = computed(() => {
      return setElementClasses("content", "base", {
        [props.status]: props.status,
      })
    })
    const closeClass = computed(() => {
      return setElementClasses("close", "base", {
        [props.status]: props.status,
      })
    })

    // State
    const dismissed = ref(!props.modelValue)
    const hide = computed(() => {
      return !props.modelValue || dismissed.value
    })

    // Methods
    const close = () => {
      dismissed.value = true
      // for v-model to work
      emit("update:modelValue", false)
    }
    return {
      styling,
      leadingIconClass,
      containerClass,
      contentClass,
      closeClass,
      dismissed,
      close,
      hide,
    }
  },
})
