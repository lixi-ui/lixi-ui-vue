<template>
  <div
    class="lx-select-dropdown"
    :class="[{ 'is-multiple': isMultiple }, popperClass]"
    :style="{ minWidth: minWidth }"
  >
    <slot></slot>
  </div>
</template>

<script  lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  onBeforeUnmount,
  inject,
  ref,
} from 'vue'
import { addResizeListener, removeResizeListener, ResizableElement } from '@lixi/utils/resize-event'
import {
  selectKey,
} from './token'


export default defineComponent({
  name: 'LxSelectDropdown',

  componentName: 'LxSelectDropdown',

  setup() {
    const select:any = inject(selectKey)

    // computed
    const popperClass = computed(() => select.props.popperClass)
    const isMultiple = computed(() => select.props.multiple)
    const minWidth:any = ref('')

    function updateMinWidth() {
      minWidth.value = select.selectWrapper?.getBoundingClientRect().width + 'px'
    }

    onMounted(() => {
      // TODO: updatePopper
      // popper.value.update()

      addResizeListener(select.selectWrapper as ResizableElement, updateMinWidth)
    })

    onBeforeUnmount(() => {
      removeResizeListener(select.selectWrapper as ResizableElement, updateMinWidth)
    })

    return {
      minWidth,
      popperClass,
      isMultiple,
    }
  },
})
</script>
