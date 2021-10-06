<template>
  <lx-popper
    ref="popper"
    v-model:visible="showPicker"
    :effect="Effect.LIGHT"
    manual-mode
    trigger="click"
    :show-arrow="false"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :offset="0"
    transition="lx-zoom-in-top"
    :gpu-acceleration="false"
    :popper-class="`el-color-picker__panel lx-color-dropdown ${popperClass}`"
    :stop-popper-mouse-event="false"
  >
    <template #default>
      <div v-click-outside="hide">
        <div class="lx-color-dropdown__main-wrapper">
          <hue-slider
            ref="hue"
            class="hue-slider"
            :color="color"
            vertical
          />
          <sv-panel ref="svPanel" :color="color" />
        </div>
        <alpha-slider v-if="showAlpha" ref="alpha" :color="color" />
        <predefine
          v-if="predefine"
          ref="predefine"
          :color="color"
          :colors="predefine"
        />
        <div class="lx-color-dropdown__btns">
          <span class="lx-color-dropdown__value">
            <lx-input
              v-model="customInput"
              :validate-event="false"
              size="mini"
              @keyup.enter="handleConfirm"
              @blur="handleConfirm"
            />
          </span>
          <lx-button
            size="mini"
            type="text"
            class="lx-color-dropdown__link-btn"
            @click="clear"
          >
            {{ t('el.colorpicker.clear') }}
          </lx-button>
          <lx-button
            plain
            size="mini"
            class="lx-color-dropdown__btn"
            @click="confirmValue"
          >
            {{ t('el.colorpicker.confirm') }}
          </lx-button>
        </div>
      </div>
    </template>
    <template #trigger>
      <div
        :class="[
          'lx-color-picker',
          colorDisabled ? 'is-disabled' : '',
          colorSize ? `el-color-picker--${ colorSize }` : ''
        ]"
      >
        <div v-if="colorDisabled" class="lx-color-picker__mask"></div>
        <div class="lx-color-picker__trigger" @click="handleTrigger">
          <span class="lx-color-picker__color" :class="{ 'is-alpha': showAlpha }">
            <span
              class="lx-color-picker__color-inner"
              :style="{
                backgroundColor: displayedColor
              }"
            ></span>
            <span v-if="!modelValue && !showPanelColor" class="lx-color-picker__empty lx-icon-close"></span>
          </span>
          <span v-show="modelValue || showPanelColor" class="lx-color-picker__icon lx-icon-arrow-down"></span>
        </div>
      </div>
    </template>
  </lx-popper>
</template>

<script lang="ts">
import { computed, defineComponent, inject, nextTick, onMounted, provide, reactive, ref, watch } from 'vue'
import debounce from 'lodash/debounce'
import LxButton from '@lixi/components/button'
import { ClickOutside } from '@lixi/directives'
import { elFormItemKey, elFormKey } from '@lixi/tokens'
import { useLocaleInject } from '@lixi/hooks'
import LxPopper, { Effect } from '@lixi/components/popper'
import LxInput from '@lixi/components/input'
import { UPDATE_MODEL_EVENT } from '@lixi/utils/constants'
import { useGlobalConfig } from '@lixi/utils/util'
import { isValidComponentSize } from '@lixi/utils/validators'
import AlphaSlider from './components/alpha-slider.vue'
import HueSlider from './components/hue-slider.vue'
import Predefine from './components/predefine.vue'
import SvPanel from './components/sv-panel.vue'
import Color from './color'
import { OPTIONS_KEY } from './useOption'

import type { PropType } from 'vue'
import type { LxFormContext, LxFormItemContext } from '@lixi/tokens'
import type { ComponentSize } from '@lixi/utils/types'
import type { IUseOptions } from './useOption'

export default defineComponent({
  name: 'LxColorPicker',
  components: {
    LxButton,
    LxPopper,
    LxInput,
    SvPanel,
    HueSlider,
    AlphaSlider,
    Predefine,
  },
  directives: {
    ClickOutside,
  },
  props: {
    modelValue: String,
    showAlpha: Boolean,
    colorFormat: String,
    disabled: Boolean,
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    popperClass: String,
    predefine: Array,
  },
  emits: ['change', 'active-change', UPDATE_MODEL_EVENT],
  setup(props, { emit }) {
    const ELEMENT = useGlobalConfig()
    const { t } = useLocaleInject()
    const elForm = inject(elFormKey, {} as LxFormContext)
    const elFormItem = inject(elFormItemKey, {} as LxFormItemContext)

    const hue = ref(null)
    const svPanel = ref(null)
    const alpha = ref(null)
    const popper = ref(null)
    // data
    const color = reactive(new Color({
      enableAlpha: props.showAlpha,
      format: props.colorFormat,
    }))
    const showPicker = ref(false)
    const showPanelColor = ref(false)
    const customInput = ref('')
    // computed
    const displayedColor = computed(() => {
      if (!props.modelValue && !showPanelColor.value) {
        return 'transparent'
      }
      return displayedRgb(color, props.showAlpha)
    })
    const colorSize = computed(() => {
      return props.size || elFormItem.size || ELEMENT.size
    })
    const colorDisabled = computed(() => {
      return props.disabled || elForm.disabled
    })

    const currentColor = computed(() => {
      return !props.modelValue && !showPanelColor.value ? '' : color.value
    })
    // watch
    watch(() => props.modelValue, newVal => {
      if (!newVal) {
        showPanelColor.value = false
      } else if (newVal && newVal !== color.value) {
        color.fromString(newVal)
      }
    })
    watch(() => currentColor.value, val => {
      customInput.value = val
      emit('active-change', val)
      // showPanelColor.value = true
    })

    watch(() => color.value, () => {
      if (!props.modelValue && !showPanelColor.value) {
        showPanelColor.value = true
      }
    })

    // methods
    function displayedRgb(color, showAlpha) {
      if (!(color instanceof Color)) {
        throw Error('color should be instance of _color Class')
      }

      const { r, g, b } = color.toRgb()
      return showAlpha
        ? `rgba(${ r }, ${ g }, ${ b }, ${ color.get('alpha') / 100 })`
        : `rgb(${ r }, ${ g }, ${ b })`
    }

    function setShowPicker(value) {
      showPicker.value = value
    }

    const debounceSetShowPicker = debounce(setShowPicker, 100)

    function hide() {
      debounceSetShowPicker(false)
      resetColor()
    }

    function resetColor() {
      nextTick(() => {
        if (props.modelValue) {
          color.fromString(props.modelValue)
        } else {
          showPanelColor.value = false
        }
      })
    }

    function handleTrigger() {
      if (colorDisabled.value) return
      debounceSetShowPicker(!showPicker.value)
    }

    function handleConfirm() {
      color.fromString(customInput.value)
    }

    function confirmValue() {
      const value = color.value
      emit(UPDATE_MODEL_EVENT, value)
      emit('change', value)
      elFormItem.formItemMitt?.emit('el.form.change', value)
      debounceSetShowPicker(false)
      // check if modelValue change, if not change, then reset color.
      nextTick(() => {
        const newColor = new Color({
          enableAlpha: props.showAlpha,
          format: props.colorFormat,
        })
        newColor.fromString(props.modelValue)
        if (!color.compare(newColor)) {
          resetColor()
        }
      })
    }

    function clear() {
      debounceSetShowPicker(false)
      emit(UPDATE_MODEL_EVENT, null)
      emit('change', null)
      if (props.modelValue !== null) {
        elFormItem.formItemMitt?.emit('el.form.change', null)
      }
      resetColor()
    }

    onMounted(() => {
      if (props.modelValue) {
        color.fromString(props.modelValue)
        customInput.value = currentColor.value
      }
    })
    watch(() => showPicker.value, () => {
      nextTick(() => {
        hue.value?.update()
        svPanel.value?.update()
        alpha.value?.update()
      })
    })

    provide<IUseOptions>(OPTIONS_KEY, {
      currentColor,
    })

    return {
      Effect,
      color: color as Color,
      colorDisabled,
      colorSize,
      displayedColor,
      showPanelColor,
      showPicker,
      customInput,
      handleConfirm,
      hide,
      handleTrigger,
      clear,
      confirmValue,
      t,
      hue,
      svPanel,
      alpha,
      popper,
    }
  },
})
</script>
