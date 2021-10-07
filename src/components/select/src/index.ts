import Select from './select.vue'
import Option from './option.vue'
import OptionGroup from './option-group.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Select.install = (app: App): void => {
  app.component(Select.name, Select)
  app.component(Option.name, Option)
  app.component(OptionGroup.name, OptionGroup)
}

Select.Option = Option
Select.OptionGroup = OptionGroup

const _Select = Select as any as SFCWithInstall<typeof Select> & {
  Option: typeof Option
  OptionGroup: typeof OptionGroup
}

export default _Select
export const LxSelect = _Select
export const LxOption = Option
export const LxOptionGroup = OptionGroup

export * from './token'
