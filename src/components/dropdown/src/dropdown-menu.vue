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
    const { _elDropdownSize, elDropdown } = useDropdown()
    const size = _elDropdownSize.value

    function show() {
      if (['click', 'contextmenu'].includes(elDropdown.trigger.value)) return
      elDropdown.show?.()
    }
    function hide() {
      if (['click', 'contextmenu'].includes(elDropdown.trigger.value)) return
      _hide()
    }
    function _hide() {
      elDropdown.hide?.()
    }

    onMounted(() => {
      const dropdownMenu = getCurrentInstance()
      initDropdownDomEvent(dropdownMenu, elDropdown.triggerElm.value, elDropdown.instance)
    })

    return {
      size,
      show,
      hide,
      innerHide: _hide,
      triggerElm: elDropdown.triggerElm,
    }
  },
})
</script>

