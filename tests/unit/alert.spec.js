import { defineComponent, ref } from "vue"
import { render } from "../utils"
import { shallowMount } from "@vue/test-utils"
import { CellAlert } from "@/components"

function renderTemplate (input) {
  const defaultComponents = { CellAlert }

  if (typeof input === "string") {
    return render(defineComponent({ template: input, components: defaultComponents }))
  }

  return render(
    defineComponent(
      Object.assign({}, input, {
        components: { ...defaultComponents, ...input.components },
      }),
    ),
  )
}

describe("Given component CellAlert.vue", () => {
  it("should be possible to render an alert without crashing", () => {
    renderTemplate({
      template: "<CellAlert v-model=\"visible\"  />",
      setup: () => ({ visible: ref(true) }),
    })
  })

  it("should be possible to hide an alert with v-model", () => {
    renderTemplate({
      template: "<CellAlert v-model=\"visible\"  />",
      setup: () => ({ visible: ref(false) }),
    })
  })

  // it("it renders the default slot content", () => {
  //   const wrapper = shallowMount(CellAlert, {
  //     slots: {
  //       default: "I am an alert",
  //     },
  //   })
  //   expect(wrapper.get("span").text()).toBe("I am an alert")
  // })

  // it("it renders close button according to closable", () => {
  // // it("it renders close button according to closable", async () => {
  //   const wrapper = shallowMount(CellAlert)
  //   const closeButton = wrapper.find("button")
  //   expect(closeButton.exists()).toBe(true)
  //   wrapper.setProps({ closable: false })
  //   // await Vue.nextTick()
  //   const newCloseButton = wrapper.find("button")
  //   expect(newCloseButton.exists()).toBe(false)
  // })

  // it("clicking on close button hides the alert", () => {
  //   const wrapper = shallowMount(CellAlert)
  //   // wrapper.get("button").trigger("click")
  //   wrapper.setValue(false)
  //   // expect(wrapper.isVisible()).toBe(false)
  //   // await Vue.nextTick()
  //   // expect(wrapper.vm.$el.innerHTML).toBe(undefined)
  //   console.log(wrapper.vm.$el.innerHTML)
  //   expect(wrapper.text()).toBe("<!---->")
  //   // waitForUpdate(() => {
  //   //   expect(wrapper.vm.$el.innerHTML).toBe("<!---->")
  //   // })
  // })
})
