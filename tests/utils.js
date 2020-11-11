import { mount } from "@vue/test-utils"
import { logDOM } from "@testing-library/dom"

const mountedWrappers = new Set()

export function render (
  TestComponent,
  options,
) {
  const div = document.createElement("div")
  const baseElement = document.body
  const container = baseElement.appendChild(div)

  const attachTo = document.createElement("div")
  container.appendChild(attachTo)

  const wrapper = mount(TestComponent, {
    ...options,
    attachTo,
  })

  mountedWrappers.add(wrapper)
  container.appendChild(wrapper.element)

  return {
    debug () {
      logDOM(div)
    },
  }
}
