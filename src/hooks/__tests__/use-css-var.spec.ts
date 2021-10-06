import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import { useCssVar } from '..'

describe('usecssvar', () => {
  test('Set css var on rootElement', () => {
    mount({
      template: `
        <span></span>
      `,
      setup() {
        const themeVars = ref({
          '--lx-button-default-background-color': '#f44336',
          '--lx-button-default-font-color': '#2196f3',
        })

        useCssVar(themeVars)
      },
    })

    const rootElement = window.document.documentElement

    expect(rootElement.style.getPropertyValue('--lx-button-default-background-color')).toBe('#f44336')
    expect(rootElement.style.getPropertyValue('--lx-button-default-font-color')).toBe('#2196f3')
  })

  test('Set css var on custom Element', () => {
    const wrapper = mount({
      template: `
        <span ref="elRef"></span>
      `,
      setup() {
        const themeVars = ref({
          '--lx-span-default-background-color': '#f44336',
          '--lx-span-default-font-color': '#2196f3',
        })
        const elRef = ref(null)

        useCssVar(themeVars, elRef)

        return {
          elRef,
        }
      },
    })

    const customElement = wrapper.find('span').element

    expect(customElement.style.getPropertyValue('--lx-span-default-background-color')).toBe('#f44336')
    expect(customElement.style.getPropertyValue('--lx-span-default-font-color')).toBe('#2196f3')
  })
})
