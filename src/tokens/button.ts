import type { InjectionKey } from 'vue'

import type { ComponentSize } from '@lixi/utils/types'

export interface LxButtonGruopContext {
  size?: ComponentSize
}

export const lxButtonGroupKey: InjectionKey<LxButtonGruopContext> = Symbol()
