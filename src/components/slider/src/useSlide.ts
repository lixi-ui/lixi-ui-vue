import { computed, CSSProperties, inject, nextTick, ref, shallowRef } from 'vue'
import { CHANGE_EVENT } from '@lixi/utils/constants'
import { lxFormKey, lxFormItemKey } from '@lixi/tokens'
import type { ButtonRefs, ISliderInitData, ISliderProps } from './slider.type'

import type { LxFormContext, LxFormItemContext } from '@lixi/tokens'
import type { Nullable } from '@lixi/utils/types'

export const useSlide = (props: ISliderProps, initData: any, emit) => {
  const lxForm = inject(lxFormKey, {} as LxFormContext)
  const lxFormItem = inject(lxFormItemKey, {} as LxFormItemContext)

  const slider:any = shallowRef<Nullable<HTMLElement>>(null)

  const firstButton:any = ref(null)

  const secondButton = ref(null)

  const buttonRefs: ButtonRefs = {
    firstButton,
    secondButton,
  }

  const sliderDisabled = computed(() => {
    return props.disabled || (lxForm.disabled || false)
  })

  const minValue = computed(() => {
    return Math.min(initData.firstValue, initData.secondValue)
  })

  const maxValue = computed(() => {
    return Math.max(initData.firstValue, initData.secondValue)
  })

  const barSize = computed(() => {
    return props.range
      ? `${ 100 * (maxValue.value - minValue.value) / (props.max - props.min) }%`
      : `${ 100 * (initData.firstValue - props.min) / (props.max - props.min) }%`
  })

  const barStart = computed(() => {
    return props.range
      ? `${ 100 * (minValue.value - props.min) / (props.max - props.min) }%`
      : '0%'
  })

  const runwayStyle = computed<CSSProperties>(() => {
    return (props.vertical ? { height: props.height } : {})
  })

  const barStyle = computed<CSSProperties>(() => {
    return (props.vertical
      ? {
        height: barSize.value,
        bottom: barStart.value,
      } : {
        width: barSize.value,
        left: barStart.value,
      })
  })

  const resetSize = () => {
    if (slider.value) {
      initData.sliderSize = slider.value[`client${ props.vertical ? 'Height' : 'Width' }`]
    }
  }

  const setPosition = (percent: number) => {
    const targetValue = props.min + percent * (props.max - props.min) / 100
    if (!props.range) {
      firstButton.value.setPosition(percent)
      return
    }
    let buttonRefName: string
    if (Math.abs(minValue.value - targetValue) < Math.abs(maxValue.value - targetValue)) {
      buttonRefName = initData.firstValue < initData.secondValue ? 'firstButton' : 'secondButton'
    } else {
      buttonRefName = initData.firstValue > initData.secondValue ? 'firstButton' : 'secondButton'
    }
    buttonRefs[buttonRefName].value.setPosition(percent)
  }

  const emitChange = async () => {
    await nextTick()
    emit(CHANGE_EVENT, props.range ? [minValue.value, maxValue.value] : props.modelValue)
  }

  const onSliderClick = (event: MouseEvent) => {
    if (sliderDisabled.value || initData.dragging) return
    resetSize()
    if (props.vertical) {
      const sliderOffsetBottom = slider.value.getBoundingClientRect().bottom
      setPosition((sliderOffsetBottom - event.clientY) / initData.sliderSize * 100)
    } else {
      const sliderOffsetLeft = slider.value.getBoundingClientRect().left
      setPosition((event.clientX - sliderOffsetLeft) / initData.sliderSize * 100)
    }
    emitChange()
  }

  return {
    lxFormItem,
    slider,
    firstButton,
    secondButton,
    sliderDisabled,
    minValue,
    maxValue,
    runwayStyle,
    barStyle,
    resetSize,
    setPosition,
    emitChange,
    onSliderClick,
  }
}
