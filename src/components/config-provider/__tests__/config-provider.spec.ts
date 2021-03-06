import { h, ref, inject } from 'vue'
import { mount } from '@vue/test-utils'
import { LocaleInjectionKey } from '@lixi/hooks'
import Chinese from '@lixi/locale/lang/zh-cn'
import English from '@lixi/locale/lang/en'
import { ConfigProvider } from '../config-provider'

import type { Language } from '@lixi/locale'

const TestComp = {
  setup() {
    const { t } = inject(LocaleInjectionKey)
    return () => {
      return h('div', t('el.popconfirm.confirmButtonText'))
    }
  },
}

describe('config-provider', () => {
  describe('locale-provider', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount({
        components: {
          'lx-test': TestComp,
          [ConfigProvider.name]: ConfigProvider,
        },
        setup() {
          const currentLocale = ref<Language>(English)
          const oppositeLocale = ref<Language>(Chinese)
          return {
            currentLocale,
            oppositeLocale,
            toEn() {
              currentLocale.value = English
              oppositeLocale.value = Chinese
            },
            toZh() {
              currentLocale.value = Chinese
              oppositeLocale.value = English
            },
          }
        },
        template: `
          <lx-config-provider :locale="currentLocale">
            <lx-test class="current-locale" />
            <lx-config-provider :locale="oppositeLocale">
              <lx-test class="opposite-locale" />
            </lx-config-provider>
          </lx-config-provider>

          <button @click="toEn" class="to-en">toEn</button>
          <button @click="toZh" class="to-zh">toZh</button>
        `,
      })
    })

    afterEach(() => {
      wrapper.unmount()
    })

    it('should provide locale properly', async () => {
      expect(wrapper.find('.current-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText,
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText,
      )
    })

    it('should reactively update the text on page', async () => {
      expect(wrapper.find('.current-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText,
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText,
      )

      await wrapper.find('.to-zh').trigger('click')

      expect(wrapper.find('.current-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText,
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText,
      )
    })
  })
})
