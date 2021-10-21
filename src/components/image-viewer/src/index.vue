<template>
  <transition name="viewer-fade">
    <div
      ref="wrapper"
      :tabindex="-1"
      class="lx-image-viewer__wrapper"
      :style="{ zIndex }"
    >
      <div
        class="lx-image-viewer__mask"
        @click.self="hideOnClickModal && hide()"
      >
      </div>
      <!-- CLOSE -->
      <span class="lx-image-viewer__btn lx-image-viewer__close" @click="hide">
        <i class="lx-icon-close"></i>
      </span>
      <!-- ARROW -->
      <template v-if="!isSingle">
        <span
          class="lx-image-viewer__btn lx-image-viewer__prev"
          :class="{ 'is-disabled': !infinite && isFirst }"
          @click="prev"
        >
          <i class="lx-icon-arrow-left"></i>
        </span>
        <span
          class="lx-image-viewer__btn lx-image-viewer__next"
          :class="{ 'is-disabled': !infinite && isLast }"
          @click="next"
        >
          <i class="lx-icon-arrow-right"></i>
        </span>
      </template>
      <!-- ACTIONS -->
      <div class="lx-image-viewer__btn lx-image-viewer__actions">
        <div class="lx-image-viewer__actions__inner">
          <i class="lx-icon-zoom-out" @click="handleActions('zoomOut')"></i>
          <i class="lx-icon-zoom-in" @click="handleActions('zoomIn')"></i>
          <i class="lx-image-viewer__actions__divider"></i>
          <i :class="mode.icon" @click="toggleMode"></i>
          <i class="lx-image-viewer__actions__divider"></i>
          <i class="lx-icon-refresh-left" @click="handleActions('anticlocelise')"></i>
          <i class="lx-icon-refresh-right" @click="handleActions('clocelise')"></i>
        </div>
      </div>
      <!-- CANVAS -->
      <div class="lx-image-viewer__canvas">
        <img
          v-for="(url, i) in urlList"
          v-show="i === index"
          ref="img"
          :key="url"
          :src="url"
          :style="imgStyle"
          class="lx-image-viewer__img"
          @load="handleImgLoad"
          @error="handleImgError"
          @mousedown="handleMouseDown"
        >
      </div>
    </div>
  </transition>
</template>

<script lang='ts'>

import { defineComponent, computed, ref, onMounted, watch, nextTick } from 'vue'
import { useLocaleInject } from '@lixi/hooks'
import { EVENT_CODE } from '@lixi/utils/aria'
import { on, off } from '@lixi/utils/dom'
import { rafThrottle, isFirefox } from '@lixi/utils/util'

import type { PropType, CSSProperties } from 'vue'

const Mode = {
  CONTAIN: {
    name: 'contain',
    icon: 'lx-icon-full-screen',
  },
  ORIGINAL: {
    name: 'original',
    icon: 'lx-icon-c-scale-to-original',
  },
}

const mousewheelEventName = isFirefox() ? 'DOMMouseScroll' : 'mousewheel'
const CLOSE_EVENT = 'close'
const SWITCH_EVENT = 'switch'
export type ImageViewerAction = 'zoomIn' | 'zoomOut' | 'clocelise' | 'anticlocelise'

export default defineComponent({
  name: 'LxImageViewer',
  props: {
    urlList: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    zIndex: {
      type: Number,
      default: 2000,
    },
    initialIndex: {
      type: Number,
      default: 0,
    },
    infinite: {
      type: Boolean,
      default: true,
    },
    hideOnClickModal: {
      type: Boolean,
      default: false,
    },
  },

  emits: [CLOSE_EVENT, SWITCH_EVENT],

  setup(props, { emit }) {
    const { t } = useLocaleInject()

    let _keyDownHandler:any = null
    let _mouseWheelHandler:any = null
    let _dragHandler:any = null

    const loading = ref(true)
    const index = ref(props.initialIndex)
    const wrapper:any = ref(null)
    const img:any = ref(null)
    const mode = ref(Mode.CONTAIN)
    let transform = ref({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false,
    })

    const isSingle = computed(() => {
      const { urlList } = props
      return urlList.length <= 1
    })

    const isFirst = computed(() => {
      return index.value === 0
    })

    const isLast = computed(() => {
      return index.value === props.urlList.length - 1
    })

    const currentImg = computed(() => {
      return props.urlList[index.value]
    })

    const imgStyle = computed(() => {
      const { scale, deg, offsetX, offsetY, enableTransition } = transform.value
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg)`,
        transition: enableTransition ? 'transform .3s' : '',
        marginLeft: `${offsetX}px`,
        marginTop: `${offsetY}px`,
      } as CSSProperties
      if (mode.value.name === Mode.CONTAIN.name) {
        style.maxWidth = style.maxHeight = '100%'
      }
      return style
    })

    function hide() {
      deviceSupportUninstall()
      emit(CLOSE_EVENT)
    }

    function deviceSupportInstall() {
      _keyDownHandler = rafThrottle((e: KeyboardEvent) => {
        switch (e.code) {
          // ESC
          case EVENT_CODE.esc:
            hide()
            break
          // SPACE
          case EVENT_CODE.space:
            toggleMode()
            break
          // LEFT_ARROW
          case EVENT_CODE.left:
            prev()
            break
          // UP_ARROW
          case EVENT_CODE.up:
            handleActions('zoomIn')
            break
          // RIGHT_ARROW
          case EVENT_CODE.right:
            next()
            break
          // DOWN_ARROW
          case EVENT_CODE.down:
            handleActions('zoomOut')
            break
        }
      })

      _mouseWheelHandler = rafThrottle(e => {
        const delta = e.wheelDelta ? e.wheelDelta : -e.detail
        if (delta > 0) {
          handleActions('zoomIn', {
            zoomRate: 0.015,
            enableTransition: false,
          })
        } else {
          handleActions('zoomOut', {
            zoomRate: 0.015,
            enableTransition: false,
          })
        }
      })
      on(document, 'keydown', _keyDownHandler)
      on(document, mousewheelEventName, _mouseWheelHandler)
    }

    function deviceSupportUninstall() {
      off(document, 'keydown', _keyDownHandler)
      off(document, mousewheelEventName, _mouseWheelHandler)
      _keyDownHandler = null
      _mouseWheelHandler = null
    }

    function handleImgLoad() {
      loading.value = false
    }

    function handleImgError(e) {
      loading.value = false
      e.target.alt = t('el.image.error')
    }

    function handleMouseDown(e: MouseEvent) {
      if (loading.value || e.button !== 0) return

      const { offsetX, offsetY } = transform.value
      const startX = e.pageX
      const startY = e.pageY

      const divLeft = wrapper.value.clientLeft
      const divRight = wrapper.value.clientLeft + wrapper.value.clientWidth
      const divTop = wrapper.value.clientTop
      const divBottom = wrapper.value.clientTop + wrapper.value.clientHeight

      _dragHandler = rafThrottle(ev => {
        transform.value = {
          ...transform.value,
          offsetX: offsetX + ev.pageX - startX,
          offsetY: offsetY + ev.pageY - startY,
        }
      })
      on(document, 'mousemove', _dragHandler)
      on(document, 'mouseup', (e: any) => {
        const mouseX = e.pageX
        const mouseY = e.pageY
        if (mouseX < divLeft || mouseX > divRight || mouseY < divTop || mouseY > divBottom){
          reset()
        }
        off(document, 'mousemove', _dragHandler)
      })

      e.preventDefault()
    }

    function reset() {
      transform.value = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false,
      }
    }

    function toggleMode() {
      if (loading.value) return

      const modeNames = Object.keys(Mode)
      const modeValues = Object.values(Mode)
      const currentMode = mode.value.name
      const index = modeValues.findIndex(i => i.name === currentMode)
      const nextIndex = (index + 1) % modeNames.length
      mode.value = Mode[modeNames[nextIndex]]
      reset()
    }

    function prev() {
      if (isFirst.value && !props.infinite) return
      const len = props.urlList.length
      index.value = (index.value - 1 + len) % len
    }

    function next() {
      if (isLast.value && !props.infinite) return
      const len = props.urlList.length
      index.value = (index.value + 1) % len
    }

    function handleActions(action: ImageViewerAction, options = {}) {
      if (loading.value) return
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: 0.2,
        rotateDeg: 90,
        enableTransition: true,
        ...options,
      }
      switch (action) {
        case 'zoomOut':
          if (transform.value.scale > 0.2) {
            transform.value.scale = parseFloat((transform.value.scale - zoomRate).toFixed(3))
          }
          break
        case 'zoomIn':
          transform.value.scale = parseFloat((transform.value.scale + zoomRate).toFixed(3))
          break
        case 'clocelise':
          transform.value.deg += rotateDeg
          break
        case 'anticlocelise':
          transform.value.deg -= rotateDeg
          break
      }
      transform.value.enableTransition = enableTransition
    }

    watch(currentImg, () => {
      nextTick(() => {
        const $img = img.value
        if (!$img.complete) {
          loading.value = true
        }
      })
    })

    watch(index, val => {
      reset()
      emit(SWITCH_EVENT, val)
    })

    onMounted(() => {
      deviceSupportInstall()
      // add tabindex then wrapper can be focusable via Javascript
      // focus wrapper so arrow key can't cause inner scroll behavior underneath
      wrapper.value?.focus?.()
    })

    return {
      index,
      wrapper,
      img,
      isSingle,
      isFirst,
      isLast,
      currentImg,
      imgStyle,
      mode,
      handleActions,
      prev,
      next,
      hide,
      toggleMode,
      handleImgLoad,
      handleImgError,
      handleMouseDown,
    }
  },
})
</script>
