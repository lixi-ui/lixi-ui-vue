<template>
  <ul
    v-clickOutside:[triggerElm]="innerHide"
    :class="[size && `lx-dropdown-menu--${size}`]"
    class="lx-dropdown-menu"
    @mouseenter.stop="show"
    @mouseleave.stop="hide"
  >
    <slot></slot>
  </ul>
</template>
<script lang='ts'>
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
import { ClickOutside } from '@lixi/directives'
import { useDropdown, initDropdownDomEvent } from './useDropdown'

export default defineComponent({
  name: 'LxDropdownMenu',
  directives: {
    ClickOutside,
  },
  setup() {
    const _useDropdown = useDropdown()
    const _lxDropdownSize:any = _useDropdown._lxDropdownSize
    const lxDropdown:any = _useDropdown.lxDropdown
    const size = _lxDropdownSize.value

    function show() {
      if (['click', 'contextmenu'].includes(lxDropdown.trigger.value)) return
      lxDropdown.show?.()
    }
    function hide() {
      if (['click', 'contextmenu'].includes(lxDropdown.trigger.value)) return
      _hide()
    }
    function _hide() {
      lxDropdown.hide?.()
    }

    onMounted(() => {
      const dropdownMenu = getCurrentInstance()
      initDropdownDomEvent(dropdownMenu, lxDropdown.triggerElm.value, lxDropdown.instance)
    })

    return {
      size,
      show,
      hide,
      innerHide: _hide,
      triggerElm: lxDropdown.triggerElm,
    }
  },
})
</script>

