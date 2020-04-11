import Vue from 'vue'
import CompositionApi from '@vue/composition-api'
Vue.use(CompositionApi)

import { shallowMount } from '@vue/test-utils'
import { CellAlert } from '../../src/components'

describe('Given component CellAlert.vue', () => {
  it('it renders', () => {
    const wrapper = shallowMount(CellAlert)
    expect(wrapper.contains('div')).toBe(true)
  })

  it('it renders the default slot content', () => {
    const wrapper = shallowMount(CellAlert, {
      slots: {
        default: 'I am an alert'
      }
    })
    expect(wrapper.get('p').text()).toBe('I am an alert')
  })

  it('it renders close button according to closable', async () => {
    const wrapper = shallowMount(CellAlert)
    expect(wrapper.contains('button')).toBe(true)
    wrapper.setProps({ closable: false })
    await Vue.nextTick()
    expect(wrapper.contains('button')).toBe(false)
  })

  it('clicking on close button hides the alert', async () => {
    const wrapper = shallowMount(CellAlert)
    wrapper.get('button').trigger('click')
    await Vue.nextTick()
    expect(wrapper.vm.$el.innerHTML).toBe(undefined)
  })

  // TODO : put that test in button.spec.js
  // it('renders router/nuxt-link when prop to is defined', () => {
  //   const wrapper = shallowMount(CellAlert, {
  //     stubs: {
  //       RouterLink: RouterLinkStub
  //     },
  //     propsData: {
  //       to: '/test-route'
  //     }
  //   })
  //   expect(wrapper.find(RouterLinkStub).props().to).toBe('/test-route')
  // })

  // it('it call the timeout method when timeout', () => {
  //   const initTimeoutStub = jest.fn()

  //   const wrapper = shallowMount(CellAlert, {
  //     propsData: {
  //       timeout: 1,
  //       show: true
  //     },
  //     methods: {
  //       initTimeout: initTimeoutStub
  //     }
  //   })

  //   expect(initTimeoutStub).toHaveBeenCalledTimes(1)
  // })
})
