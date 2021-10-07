import Dropdown from './dropdown.vue'
import DropdownItem from './dropdown-item.vue'
import DropdownMenu from './dropdown-menu.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'


Dropdown.install = (app: App): void => {
  app.component(Dropdown.name, Dropdown)
  app.component(DropdownItem.name, DropdownItem)
  app.component(DropdownMenu.name, DropdownMenu)
}

Dropdown.DropdownItem = DropdownItem
Dropdown.DropdownMenu = DropdownMenu

const _Dropdown = Dropdown as any as SFCWithInstall<typeof Dropdown> & {
  DropdownItem: typeof DropdownItem
  DropdownMenu: typeof DropdownMenu
}

export default _Dropdown
export const LxDropdown = _Dropdown
export const LxDropdownItem = DropdownItem
export const LxDropdownMenu = DropdownMenu
