import { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'
import Button from './button.vue'
import ButtonGroup from './button-group.vue'

Button.install = (app: App): void => {
  app.component(Button.name, Button)
  app.component(ButtonGroup.name, ButtonGroup)
}

Button.ButtonGroup = ButtonGroup

const _Button = Button as any as SFCWithInstall<typeof Button> & {
  ButtonGroup: typeof ButtonGroup
}

export default _Button
export const LxButton = _Button
export const LxButtonGroup = ButtonGroup
