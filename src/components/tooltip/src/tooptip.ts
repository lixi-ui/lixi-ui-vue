import { defineComponent, h, ref, cloneVNode } from 'vue'
import { default as LxPopper, popperDefaultProps } from '@lixi/components/popper/src/index'
import { UPDATE_MODEL_EVENT } from '@lixi/utils/constants'
import throwError from '@lixi/utils/error'
import { getFirstValidNode } from '@lixi/utils/vnode'

/**
 * LxTooltip
 * Tooltip is essentially an upper layer for Popper, due to popper has already implemented so many functionalities and Popper is essentially a component shared internally
 * Tooltip also does the API translation work for popper.
 * Tooltip shares the exact same API which v2 has, so that the user should be able to
 */
export default defineComponent({
  name: 'LxTooltip',
  components: {
    LxPopper,
  },
  props: {
    ...popperDefaultProps,
    manual: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      validator: (val: unknown) => {
        return typeof val === 'boolean'
      },
      default: undefined,
    },
    // This API should be decaprecate since it's confusing with close-delay
    openDelay: {
      type: Number,
      default: 0,
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    tabindex: {
      type: [String, Number],
      default: '0',
    },
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props:any, ctx) {
    // when manual mode is true, v-model must be passed down
    if (props.manual && typeof props.modelValue === 'undefined') {
      throwError('[ElTooltip]', 'You need to pass a v-model to lx-tooltip when `manual` is true')
    }

    const popper:any = ref(null)

    const onUpdateVisible = val => {
      ctx.emit(UPDATE_MODEL_EVENT, val)
    }

    const updatePopper = () => {
      return popper.value.update()
    }

    return {
      popper,
      onUpdateVisible,
      updatePopper,
    }
  },
  render() {
    const {
      $slots,
      content,
      manual,
      openDelay,
      onUpdateVisible,
      showAfter,
      visibleArrow,
      modelValue,
      tabindex,
    } = this

    const throwErrorTip = () => {
      throwError('[ElTooltip]', 'you need to provide a valid default slot.')
    }

    const popper = h(
      LxPopper,
      {
        ...Object.keys(popperDefaultProps).reduce((result, key) => {
          return { ...result, [key]: this[key] }
        }, {}),
        ref: 'popper',
        manualMode: manual,
        showAfter: openDelay || showAfter, // this is for mapping API due to we decided to rename the current openDelay API to showAfter for better readability,
        showArrow: visibleArrow,
        visible: modelValue,
        'onUpdate:visible': onUpdateVisible,
      },
      {
        default: () => ($slots.content ? $slots.content() : content),
        trigger: () => {
          if ($slots.default) {
            const firstVnode = getFirstValidNode($slots.default(), 1)
            if (!firstVnode) throwErrorTip()
            return cloneVNode(firstVnode, { tabindex }, true)
          }
          throwErrorTip()
        },
      },
    )

    return popper
  },
})
