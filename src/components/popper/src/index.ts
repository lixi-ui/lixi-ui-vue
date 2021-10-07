import Popper from './index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Popper.install = (app: App): void => {
  app.component(Popper.name, Popper)
}

const _Popper = Popper as SFCWithInstall<typeof Popper>

export default _Popper
export const LxPopper = _Popper

export { default as popperDefaultProps, Effect } from './use-popper/defaults'
export * from './renderers'
export { default as usePopper } from './use-popper'
export type { Placement, Options } from '@popperjs/core'
export type { EmitType } from './use-popper'
export type { TriggerType, IPopperOptions, PopperInstance } from './use-popper/defaults'
