import { computed, ref, watch, nextTick } from 'vue'

import type { ExtractPropTypes, Ref } from 'vue'

export const useTransitionProps = {
  transitionDuration: {
    type: Number,
    default: 0.3,
  },
  transitionShow: String,
  transitionHide: String,
}

export const useTransition = (
  props: ExtractPropTypes<typeof useTransitionProps>,
  indicator: Ref<boolean>,
) => {
  const transitionState = ref(indicator.value)
  watch(indicator, val => {
    nextTick(() => transitionState.value = val)
  })

  return {
    transition: computed(() => {
      return `lx-transition--${
        transitionState.value
          ? props.transitionShow
          : props.transitionHide
      }`
    }),
    transitionStyle: computed(() =>
      `--lx-transition-duration: ${props.transitionDuration}s`,
    ),
  }
}
