import {
  defineComponent,
  Fragment,
  h,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  ref,
  watch,
} from 'vue'
import { addResizeListener, removeResizeListener, ResizableElement } from '@lixi/utils/resize-event'
import { lxFormItemKey, lxFormKey } from '@lixi/tokens'

import type { CSSProperties } from 'vue'
import type { Nullable } from '@lixi/utils/types'

export default defineComponent({
  name: 'LxLabelWrap',
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean,
  },
  setup(props, { slots }) {
    const el = ref<Nullable<HTMLElement>>(null)
    const lxForm = inject(lxFormKey)
    const lxFormItem = inject(lxFormItemKey)

    const computedWidth = ref(0)
    watch(computedWidth, (val, oldVal) => {
      if (props.updateAll) {
        lxForm.registerLabelWidth(val, oldVal)
        lxFormItem.updateComputedLabelWidth(val)
      }
    })

    const getLabelWidth = () => {
      if (el.value?.firstElementChild) {
        const width = window.getComputedStyle(el.value.firstElementChild)
          .width
        return Math.ceil(parseFloat(width))
      } else {
        return 0
      }
    }
    const updateLabelWidth = (action = 'update') => {
      nextTick(() => {
        if (slots.default && props.isAutoWidth) {
          if (action === 'update') {
            computedWidth.value = getLabelWidth()
          } else if (action === 'remove') {
            lxForm.deregisterLabelWidth(computedWidth.value)
          }
        }
      })
    }
    const updateLabelWidthFn = () => updateLabelWidth('update')

    onMounted(() => {
      addResizeListener(el.value.firstElementChild as ResizableElement, updateLabelWidthFn)
      updateLabelWidthFn()
    })

    onUpdated(updateLabelWidthFn)

    onBeforeUnmount(() => {
      updateLabelWidth('remove')
      removeResizeListener(el.value?.firstElementChild as ResizableElement, updateLabelWidthFn)
    })

    function render() {
      if (!slots) return null
      if (props.isAutoWidth) {
        const autoLabelWidth = lxForm.autoLabelWidth
        const style = {} as CSSProperties
        if (autoLabelWidth && autoLabelWidth !== 'auto') {
          const marginWidth = Math.max(0, parseInt(autoLabelWidth, 10) - computedWidth.value)
          const marginPosition = lxForm.labelPosition === 'left' ? 'marginRight' : 'marginLeft'
          if (marginWidth) {
            style[marginPosition] = marginWidth + 'px'
          }
        }
        return h(
          'div',
          {
            ref: el,
            class: ['lx-form-item__label-wrap'],
            style,
          },
          slots.default?.(),
        )
      } else {
        return h(Fragment, { ref: el }, slots.default?.())
      }
    }

    return render
  },
})
