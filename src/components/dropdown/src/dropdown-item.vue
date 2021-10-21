<template>
  <li
    class="lx-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'lx-dropdown-menu__item--divided': divided
    }"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <slot></slot>
  </li>
</template>
<script lang='ts'>
import { defineComponent, getCurrentInstance } from 'vue'
import { useDropdown } from './useDropdown'

export default defineComponent({
  name: 'LxDropdownItem',
  props: {
    command: {
      type: [Object, String, Number],
      default: () => ({}),
    },
    disabled: Boolean,
    divided: Boolean,
    icon: String,
  },
  setup(props) {
    const _useDropdown = useDropdown()
    const lxDropdown:any = _useDropdown.lxDropdown
    const _instance:any = getCurrentInstance()

    function handleClick(e: UIEvent) {
      // if disabled don't collapse the drop-down list
      if (props.disabled) {
        e.stopImmediatePropagation()
        return
      }
      if (lxDropdown.hideOnClick.value) {
        lxDropdown.handleClick?.()
      }
      lxDropdown.commandHandler?.(props.command, _instance, e)
    }

    return {
      handleClick,
    }
  },
})
</script>
