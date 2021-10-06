import { mount } from '@vue/test-utils'
import { defineGetter, makeScroll } from '@lixi/test-utils'
import Affix from '../src/index.vue'

let clientHeightRestore = null

const _mount = (template: string) => mount({
  components: {
    'lx-affix': Affix,
  },
  template,
}, { attachTo: document.body })

const AXIOM = 'Rem is the best girl'

beforeAll(() => {
  clientHeightRestore = defineGetter(window.HTMLElement.prototype, 'clientHeight', 1000, 0)
})

afterAll(() => {
  clientHeightRestore()
})

describe('Affix.vue', () => {
  test('render test', async () => {
    const wrapper = _mount(`
      <lx-affix>${AXIOM}</lx-affix>
    `)
    expect(wrapper.text()).toEqual(AXIOM)
    const mockAffixRect = jest.spyOn(wrapper.find('.lx-affix').element, 'getBoundingClientRect').mockReturnValue({
      height: 40,
      width: 1000,
      top: -100,
      bottom: -80,
    } as DOMRect)
    const mockDocumentRect = jest.spyOn(document.documentElement, 'getBoundingClientRect').mockReturnValue({
      height: 200,
      width: 1000,
      top: 0,
      bottom: 200,
    } as DOMRect)
    expect(wrapper.find('.lx-affix--fixed').exists()).toBe(false)
    await makeScroll(document.documentElement, 'scrollTop', 200)
    expect(wrapper.find('.lx-affix--fixed').exists()).toBe(true)
    mockAffixRect.mockRestore()
    mockDocumentRect.mockRestore()
  })

  test('should render offset props', async () => {
    const wrapper = _mount(`
      <lx-affix :offset="30">${AXIOM}</lx-affix>
    `)
    const mockAffixRect = jest.spyOn(wrapper.find('.lx-affix').element, 'getBoundingClientRect').mockReturnValue({
      height: 40,
      width: 1000,
      top: -100,
      bottom: -80,
    } as DOMRect)
    const mockDocumentRect = jest.spyOn(document.documentElement, 'getBoundingClientRect').mockReturnValue({
      height: 200,
      width: 1000,
      top: 0,
      bottom: 200,
    } as DOMRect)
    await makeScroll(document.documentElement, 'scrollTop', 200)
    expect(wrapper.find('.lx-affix--fixed').exists()).toBe(true)
    expect(wrapper.find('.lx-affix--fixed').attributes('style')).toContain('top: 30px;')
    mockAffixRect.mockRestore()
    mockDocumentRect.mockRestore()
  })

  test('should render position props', async () => {
    const wrapper = _mount(`
      <lx-affix position="bottom" :offset="20">${AXIOM}</lx-affix>
    `)

    const mockAffixRect = jest.spyOn(wrapper.find('.lx-affix').element, 'getBoundingClientRect').mockReturnValue({
      height: 40,
      width: 1000,
      top: 2000,
      bottom: 2040,
    } as DOMRect)
    const mockDocumentRect = jest.spyOn(document.documentElement, 'getBoundingClientRect').mockReturnValue({
      height: 200,
      width: 1000,
      top: 0,
      bottom: 200,
    } as DOMRect)
    await makeScroll(document.documentElement, 'scrollTop', 0)
    expect(wrapper.find('.lx-affix--fixed').exists()).toBe(true)
    expect(wrapper.find('.lx-affix--fixed').attributes('style')).toContain('bottom: 20px;')
    mockAffixRect.mockRestore()
    mockDocumentRect.mockRestore()
  })

  test('should render target props', async () => {
    const wrapper = _mount(`
      <div class="target" style="height: 200px">
        <lx-affix target=".target">${AXIOM}</lx-affix>
      </div>
      <div style="height: 1000px"></div>
    `)

    const mockAffixRect = jest.spyOn(wrapper.find('.lx-affix').element, 'getBoundingClientRect').mockReturnValue({
      height: 40,
      width: 1000,
      top: -100,
      bottom: -60,
    } as DOMRect)
    const mockTargetRect = jest.spyOn(wrapper.find('.target').element, 'getBoundingClientRect').mockReturnValue({
      height: 200,
      width: 1000,
      top: -100,
      bottom: 100,
    } as DOMRect)
    await makeScroll(document.documentElement, 'scrollTop', 100)
    expect(wrapper.find('.lx-affix--fixed').exists()).toBe(true)
    mockAffixRect.mockReturnValue({
      height: 40,
      width: 1000,
      top: -300,
      bottom: -260,
    } as DOMRect)
    mockTargetRect.mockReturnValue({
      height: 40,
      width: 1000,
      top: -300,
      bottom: -260,
    } as DOMRect)
    await makeScroll(document.documentElement, 'scrollTop', 300)
    expect(wrapper.find('.lx-affix--fixed').exists()).toBe(false)
    mockAffixRect.mockRestore()
    mockTargetRect.mockRestore()
  })

  test('should render z-index props', async () => {
    const wrapper = _mount(`
      <lx-affix :z-index="1000">${AXIOM}</lx-affix>
    `)
    const mockAffixRect = jest.spyOn(wrapper.find('.lx-affix').element, 'getBoundingClientRect').mockReturnValue({
      height: 40,
      width: 1000,
      top: -100,
      bottom: -80,
    } as DOMRect)
    const mockDocumentRect = jest.spyOn(document.documentElement, 'getBoundingClientRect').mockReturnValue({
      height: 200,
      width: 1000,
      top: 0,
      bottom: 200,
    } as DOMRect)
    await makeScroll(document.documentElement, 'scrollTop', 200)
    expect(wrapper.find('.lx-affix--fixed').exists()).toBe(true)
    expect(wrapper.find('.lx-affix--fixed').attributes('style')).toContain('z-index: 1000;')
    mockAffixRect.mockRestore()
    mockDocumentRect.mockRestore()
  })
})
