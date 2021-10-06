import Checkbox from './checkbox.vue'
import CheckboxButton from './checkbox-button.vue'
import CheckboxGroup from './checkbox-group.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Checkbox.install = (app: App): void => {
  app.component(Checkbox.name, Checkbox)
  app.component(CheckboxButton.name, CheckboxButton)
  app.component(CheckboxGroup.name, CheckboxGroup)
}

Checkbox.CheckboxButton = CheckboxButton
Checkbox.CheckboxGroup = CheckboxGroup

const _Checkbox = Checkbox as any as SFCWithInstall<typeof Checkbox> & {
  CheckboxButton: typeof CheckboxButton
  CheckboxGroup: typeof CheckboxGroup
}

export default _Checkbox
export const LxCheckbox = _Checkbox
export const LxCheckboxButton = CheckboxButton
export const LxCheckboxGroup = CheckboxGroup
