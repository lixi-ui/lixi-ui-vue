import { inject, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Chinese from '@lixi/locale/lang/zh-cn'
import English from '@lixi/locale/lang/en'
import { useLocale, useLocaleProps, LocaleInjectionKey } from '../use-locale'

const TestComp = {
  setup() {
    const { t } = inject(LocaleInjectionKey)
    return () => {
      return h('div', { class: 'locale-manifest' }, t('lx.popconfirm.confirmButtonText'))
    }
  },
}

describe('use-locale', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount({
      props: useLocaleProps,
      components: {
        'lx-test': TestComp,
      },
      setup(_, { slots }) {
        useLocale()
        return () => slots.default()
      },
    },
    {
      props: {
        locale: Chinese,
      },
      slots: {
        default: () => h(TestComp),
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should provide locale correctly', async () => {
    await nextTick()
    expect(wrapper.find('.locale-manifest').text()).toBe(
      Chinese.el.popconfirm.confirmButtonText,
    )
  })

  it('should update the text reactively', async () => {
    await nextTick()
    expect(wrapper.find('.locale-manifest').text()).toBe(
      Chinese.el.popconfirm.confirmButtonText,
    )
    await wrapper.setProps({
      locale: English,
    })

    expect(wrapper.find('.locale-manifest').text()).toBe(
      English.el.popconfirm.confirmButtonText,
    )
  })
})
