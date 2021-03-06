<template>
  <transition name="lx-scrollbar-fade">
    <div
      v-show="always || visible"
      ref="instance"
      :class="['lx-scrollbar__bar', 'is-' + bar.key]"
      @mousedown="clickTrackHandler"
    >
      <div
        ref="thumb"
        class="lx-scrollbar__thumb"
        :style="thumbStyle"
        @mousedown="clickThumbHandler"
      ></div>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { off, on } from '@lixi/utils/dom'
import { BAR_MAP, renderThumbStyle } from './util'

import type { Ref } from 'vue'
import type { Nullable } from '@lixi/utils/types'

var window: any

export default defineComponent({
  name: 'Bar',
  props: {
    vertical: Boolean,
    size: String,
    move: Number,
    ratio: Number,
    always: Boolean,
  },
  setup(props:any) {
    const instance: any = ref(null)
    const thumb: any  = ref(null)
    const scrollbar:any = inject('scrollbar', {} as Ref<Nullable<HTMLElement>>)
    const wrap:any = inject('scrollbar-wrap', {} as Ref<Nullable<HTMLElement>>)
    const bar:any = computed(() => BAR_MAP[props.vertical ? 'vertical' : 'horizontal'])
    const barStore:any = ref({})
    const cursorDown:any = ref(null)
    const cursorLeave:any = ref(null)
    const visible:any = ref(false)
    let onselectstartStore:any = null

    const offsetRatio = computed(() => {
      // offsetRatioX = original width of thumb / current width of thumb / ratioX
      // offsetRatioY = original height of thumb / current height of thumb / ratioY
      // instance height = wrap height - GAP
      return instance.value[bar.value.offset] ** 2 / wrap.value[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]
    })

    const clickThumbHandler = (e: any) => {
      // prevent click event of middle and right button
      e.stopPropagation()
      if (e.ctrlKey || [1, 2].includes(e.button)) {
        return
      }
      window.getSelection().removeAllRanges()
      startDrag(e)
      barStore.value[bar.value.axis] = (e.currentTarget[bar.value.offset] - (e[bar.value.client] - (e.currentTarget as HTMLElement).getBoundingClientRect()[bar.value.direction]))
    }

    const clickTrackHandler = (e: any) => {
      const offset = Math.abs((e.target as HTMLElement).getBoundingClientRect()[bar.value.direction] - e[bar.value.client])
      const thumbHalf = (thumb.value[bar.value.offset] / 2)
      const thumbPositionPercentage = ((offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset])

      wrap.value[bar.value.scroll] = (thumbPositionPercentage * wrap.value[bar.value.scrollSize] / 100)
    }

    const startDrag = (e: any) => {
      e.stopImmediatePropagation()
      cursorDown.value = true
      on(document, 'mousemove', mouseMoveDocumentHandler)
      on(document, 'mouseup', mouseUpDocumentHandler)
      onselectstartStore = document.onselectstart
      document.onselectstart = () => false
    }

    const mouseMoveDocumentHandler = (e: any) => {
      if (cursorDown.value === false) return
      const prevPage = barStore.value[bar.value.axis]
      if (!prevPage) return

      const offset = ((instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1)
      const thumbClickPosition = (thumb.value[bar.value.offset] - prevPage)
      const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset])
      wrap.value[bar.value.scroll] = (thumbPositionPercentage * wrap.value[bar.value.scrollSize] / 100)
    }

    const mouseUpDocumentHandler = () => {
      cursorDown.value = false
      barStore.value[bar.value.axis] = 0
      off(document, 'mousemove', mouseMoveDocumentHandler)
      off(document, 'mouseup', mouseUpDocumentHandler)
      document.onselectstart = onselectstartStore
      if (cursorLeave.value) {
        visible.value = false
      }
    }

    const thumbStyle = computed(() => renderThumbStyle({
      size: props.size,
      move: props.move,
      bar: bar.value,
    }))

    const mouseMoveScrollbarHandler = () => {
      cursorLeave.value = false
      visible.value = !!props.size
    }

    const mouseLeaveScrollbarHandler = () => {
      cursorLeave.value = true
      visible.value = cursorDown.value
    }

    onMounted(() => {
      on(scrollbar.value, 'mousemove', mouseMoveScrollbarHandler)
      on(scrollbar.value, 'mouseleave', mouseLeaveScrollbarHandler)
    })

    onBeforeUnmount(() => {
      off(document, 'mouseup', mouseUpDocumentHandler)
      off(scrollbar.value, 'mousemove', mouseMoveScrollbarHandler)
      off(scrollbar.value, 'mouseleave', mouseLeaveScrollbarHandler)
    })

    return {
      instance,
      thumb,
      bar,
      clickTrackHandler,
      clickThumbHandler,
      thumbStyle,
      visible,
    }
  },
})

</script>
