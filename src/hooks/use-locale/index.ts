import {
  computed,
  getCurrentInstance,
  inject,
  provide,
  ref,
} from 'vue'
import English from '@lixi/locale/lang/en'

import type { InjectionKey, PropType, Ref } from 'vue'
import type { Language } from '@lixi/locale'

export const useLocaleProps = {
  locale: {
    type: Object as PropType<Language>,
  },
}

type Translator = (...args: any[]) => string

// export type LocaleContext = {
//   locale: Ref<Language>
//   lang: Ref<string>
//   t: Translator
// }

// export const LocaleInjectionKey = 'LxLocaleInjection' as unknown as InjectionKey<LocaleContext>
export const LocaleInjectionKey = 'LxLocaleInjection' as any

// this is meant to fix global methods like `ElMessage(opts)`, this way we can inject current locale
// into the component as default injection value.
// refer to: https://github.com/lixi-ui-vue/lixi-ui-vue/issues/2610#issuecomment-887965266
// let localeObjCache: LocaleContext
let localeObjCache: any

function translate(path, option, current) {
  const paths = path.split('.')
  let value
  for (let i = 0, j = paths.length; i < j; i++) {
    const property = paths[i]
    value = current[property]
    if (i === j - 1) return template(value, option)
    if (!value) return ''
    current = value
  }
}

export const useLocale = () => {
  const vm:any = getCurrentInstance()
  const props = vm.props as {
    locale: Language
  }

  const locale = computed(() => props.locale || English)
  const lang = computed(() => locale.value.name)

  const _translator = (...args: any[]) => {
    const [path, option] = args
    return translate(path, option, locale.value)
  }

  const t = (...args: any[]) => {
    return _translator(...args)
  }

  const provides = {
    locale,
    lang,
    t,
  }

  // this could be broken if someone tries to do following:

  /**
   * <config-provider :locale="lang1">
   *   <config-provider :locale="lang2">
   *     Something calls modal component.
   *   </config-provider>
   * </config-provider>
   */
  localeObjCache = provides
  provide(LocaleInjectionKey, provides)
}


function template(str: string, option) {
  if (!str || !option) return str
  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return option[key]
  })
}

export const localeProviderMaker = (locale = English) => {
  const lang = ref(locale.name)
  const localeRef = ref(locale)
  return {
    lang,
    locale: localeRef,
    t: (...args: any[]) => {
      const [path, option] = args
      return translate(path, option, localeRef.value)
    },
  }
}


export const useLocaleInject = () => {
  return inject(LocaleInjectionKey, localeObjCache || {
    lang: ref(English.name),
    locale: ref(English),
    t: (...args) => {
      const [path, option] = args
      return translate(path, option, English)
    },
  })
}
