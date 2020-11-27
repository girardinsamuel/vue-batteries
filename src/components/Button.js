// import { computed, defineComponent, inject, InjectionKey, provide, ref, Ref, h } from "vue"
import { defineComponent, computed, h } from "vue"

import useClasses from "../core/useClasses"
import { baseProps } from "../utils/baseProps"
import CellIcon from "./Icon.vue"

// import { render } from "../../utils/render"
// import { useId } from "../../hooks/use-id"
// import { Keys } from "../../keyboard"

// const GroupContext = Symbol('GroupContext') as InjectionKey<StateDefinition>

// function useGroupContext(component: string) {
//   const context = inject(GroupContext, null)

//   if (context === null) {
//     const err = new Error(`<${component} /> is missing a parent <SwitchGroup /> component.`)
//     if (Error.captureStackTrace) Error.captureStackTrace(err, useGroupContext)
//     throw err
//   }

//   return context
// }

// ---

// export const ButtonGroup = defineComponent({
//   name: 'SwitchGroup',
//   props: {
//     as: { type: [Object, String], default: 'template' },
//   },
//   setup(props, { slots, attrs }) {
//     const switchRef = ref<StateDefinition['switchRef']['value']>(null)
//     const labelRef = ref<StateDefinition['labelRef']['value']>(null)

//     const api = { switchRef, labelRef }

//     provide(GroupContext, api)

//     return () => render({ props, slot: {}, slots, attrs })
//   },
// })

// // ---

export const Button = defineComponent({
  name: "Button",
  props: {
    ...baseProps,
    as: { type: [Object, String], default: "button" },
    class: { type: [String, Function], required: false },
    className: { type: [String, Function], required: false },
    mode: {
      type: String,
      default: "fill",
      validator: function (value) {
        return ["fill", "outline", "link"].indexOf(value) !== -1
      },
    },
    variant: {
      type: String,
      default: null,
      validator: function (value) {
        return value !== "root"
      },
    },
    leadingIcon: {
      type: String,
      default: "",
    },
    trailingIcon: {
      type: String,
      default: "",
    },
    block: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingMode: {
      type: String,
      default: "fill",
      validator: function (value) {
        return ["trailing", "fill", "leading"].indexOf(value) !== -1
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  render () {
    const { as, loadingMode, loading } = this.$props
    const hasTrailingComponent = "trailing" in this.$slots || !!this.trailingIcon
    const hasLeadingComponent = "leading" in this.$slots || !!this.leadingIcon
    // const icon = resolveDynamicComponent(config.iconComponent)
    const loadingComponent = h(CellIcon, { class: loadingMode === "trailing" ? this.trailingIconClass : loadingMode === "leading" ? this.leadingIconClass : "", name: "loading", loading: true })
    const trailingComponent = "trailing" in this.$slots ? this.$slots.trailing({ className: this.trailingIconClass }) : h(CellIcon, { class: this.trailingIconClass, name: this.trailingIcon })
    const leadingComponent = "leading" in this.$slots ? this.$slots.leading({ className: this.leadingIconClass }) : h(CellIcon, { class: this.leadingIconClass, name: this.leadingIcon })
    if (loading) {
      return h(as, { class: this.buttonClass }, loadingMode === "fill" ? loadingComponent : [
        loadingMode === "leading" && loadingComponent,
        hasLeadingComponent && loadingMode === "trailing" && leadingComponent,
        this.$slots.default(),
        hasTrailingComponent && loadingMode === "leading" && trailingComponent,
        loadingMode === "trailing" && loadingComponent,
      ])
    } else {
      return h(as, { class: this.buttonClass }, [
        hasLeadingComponent && leadingComponent,
        this.$slots.default(),
        hasTrailingComponent && trailingComponent,
      ])
    }
  },
  setup (props) {
    // const api = inject(GroupContext, null)
    // const config = inject("vue-batteries")

    const { styling, componentClasses } = useClasses(props, "button")

    const buttonClass = computed(() => {
      if (styling) {
        return [
          componentClasses.base,
          componentClasses.variants.root[props.mode],
          props.disabled ? componentClasses.variants.root.disabled : "",
          props.variant
            ? componentClasses.variants[props.variant][props.mode]
            : "",
          props.disabled ? componentClasses.variants[props.variant].disabled : "",
          props.block ? componentClasses.block : componentClasses.inline,
        ]
      } else {
        return ""
      }
    })

    const leadingIconClass = computed(() => {
      return styling && componentClasses.leadingIcon
    })
    const trailingIconClass = computed(() => {
      return styling && componentClasses.trailingIcon
    })
    return {
      buttonClass,
      leadingIconClass,
      trailingIconClass,
    }
  },
})