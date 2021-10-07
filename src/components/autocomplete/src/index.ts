import { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'
import Autocomplete from './index.vue'

Autocomplete.install = (app: App): void => {
  app.component(Autocomplete.name, Autocomplete)
}

const _Autocomplete = Autocomplete as SFCWithInstall<typeof Autocomplete>

export default _Autocomplete
export const LxAutocomplete = _Autocomplete
