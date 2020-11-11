// import { defineComponent, ref } from "vue"
// import { render } from "../utils"
import { shallowMount, mount } from "@vue/test-utils"
import { CellSwitch } from "@/components"

// function renderTemplate (input) {
//   const defaultComponents = { CellSwitch }

//   if (typeof input === "string") {
//     return render(defineComponent({ template: input, components: defaultComponents }))
//   }

//   return render(
//     defineComponent(
//       Object.assign({}, input, {
//         components: { ...defaultComponents, ...input.components },
//       }),
//     ),
//   )
// }

describe("Given component CellSwitch.vue", () => {
  it("it renders the default slot content through a label", () => {
    const wrapper = mount(CellSwitch, {
      slots: {
        default: "I am a switch",
      },
    })
    // expect(wrapper.find("label").exists()).toBe(true)
    expect(wrapper.find("label").text()).toBe("I am a switch")
  })

  it("it renders help text if defined", () => {
    const wrapper = mount(CellSwitch, {
      propsData: {
        help: "Help test text",
      },
    })
    expect(wrapper.findAll("span")[2].text()).toBe("Help test text")
  })

  it("updates text", async () => {
    const wrapper = mount(CellSwitch)
    expect(wrapper.props("modelValue")).toBe(false)
    await wrapper.trigger("click")
    // await wrapper.find("span").trigger("click")
    expect(wrapper.props("modelValue")).toBe(true)
  })
})
