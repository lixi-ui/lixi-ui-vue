<template>
  <lx-popper
    ref="popper"
    v-model:visible="suggestionVisible"
    :placement="placement"
    :popper-class="`lx-autocomplete__popper ${popperClass}`"
    :append-to-body="popperAppendToBody"
    pure
    manual-mode
    :effect="Effect.LIGHT"
    trigger="click"
    transition="lx-zoom-in-top"
    :gpu-acceleration="false"
  >
    <template #trigger>
      <div
        v-clickoutside="close"
        :class="['lx-autocomplete', $attrs.class]"
        :style="$attrs.style"
        role="combobox"
        aria-haspopup="listbox"
        :aria-expanded="suggestionVisible"
        :aria-owns="id"
      >
        <lx-input
          ref="inputRef"
          v-bind="attrs"
          :model-value="modelValue"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
          @clear="handleClear"
          @keydown.up.prevent="highlight(highlightedIndex - 1)"
          @keydown.down.prevent="highlight(highlightedIndex + 1)"
          @keydown.enter="handleKeyEnter"
          @keydown.tab="close"
        >
          <template v-if="$slots.prepend" #prepend>
            <slot name="prepend"></slot>
          </template>
          <template v-if="$slots.append" #append>
            <slot name="append"></slot>
          </template>
          <template v-if="$slots.prefix" #prefix>
            <slot name="prefix"></slot>
          </template>
          <template v-if="$slots.suffix" #suffix>
            <slot name="suffix"></slot>
          </template>
        </lx-input>
      </div>
    </template>
    <template #default>
      <div
        ref="regionRef"
        :class="['lx-autocomplete-suggestion', suggestionLoading && 'is-loading']"
        :style="{ width: dropdownWidth, outline: 'none' }"
        role="region"
      >
        <lx-scrollbar
          tag="ul"
          wrap-class="lx-autocomplete-suggestion__wrap"
          view-class="lx-autocomplete-suggestion__list"
        >
          <li v-if="suggestionLoading">
            <i class="lx-icon-loading"></i>
          </li>
          <template v-else>
            <li
              v-for="(item, index) in suggestions"
              :id="`${id}-item-${index}`"
              :key="index"
              :class="{'highlighted': highlightedIndex === index}"
              role="option"
              :aria-selected="highlightedIndex === index"
              @click="select(item)"
            >
              <slot :item="item">{{ item[valueKey] }}</slot>
            </li>
          </template>
        </lx-scrollbar>
      </div>
    </template>
  </lx-popper>
</template>

<script lang="ts">
import {
  defineComponent, ref, computed,
  onMounted, onUpdated,
  nextTick, watch,
} from 'vue'
import { NOOP } from '@vue/shared'
import debounce from 'lodash/debounce'
import { useAttrs } from '@lixi/hooks'
import { ClickOutside } from '@lixi/directives'
import { generateId, isArray } from '@lixi/utils/util'
import { UPDATE_MODEL_EVENT } from '@lixi/utils/constants'
import throwError from '@lixi/utils/error'
import LxInput from '@lixi/components/input/src'
import LxScrollbar from '@lixi/components/scrollbar/src'
import LxPopper, { Effect, Placement } from '@lixi/components/popper/src'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'LxAutocomplete',
  components: {
    LxPopper,
    LxInput,
    LxScrollbar,
  },
  directives: {
    clickoutside: ClickOutside,
  },
  inheritAttrs: false,
  props: {
    valueKey: {
      type: String,
      default: 'value',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    debounce: {
      type: Number,
      default: 300,
    },
    placement: {
      type: String as PropType<Placement>,
      validator: (val: string): boolean => {
        return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'].includes(val)
      },
      default: 'bottom-start',
    },
    fetchSuggestions: {
      type: Function as PropType<(queryString: string, cb: (data: any[]) => void) => void>,
      default: NOOP,
    },
    popperClass: {
      type: String,
      default: '',
    },
    triggerOnFocus: {
      type: Boolean,
      default: true,
    },
    selectWhenUnmatched: {
      type: Boolean,
      default: false,
    },
    hideLoading: {
      type: Boolean,
      default: false,
    },
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
    highlightFirstItem: {
      type: Boolean,
      default: false,
    },
  },
  emits: [UPDATE_MODEL_EVENT, 'input', 'change', 'focus', 'blur', 'clear', 'select'],
  setup(props, ctx) {
    const attrs = useAttrs()
    const suggestions:any = ref([])
    const highlightedIndex = ref(-1)
    const dropdownWidth = ref('')
    const activated = ref(false)
    const suggestionDisabled = ref(false)
    const loading = ref(false)
    const inputRef:any = ref(null)
    const regionRef:any = ref(null)
    const popper:any = ref(null)

    const id = computed(() => {
      return `lx-autocomplete-${generateId()}`
    })
    const suggestionVisible = computed(() => {
      const isValidData = isArray(suggestions.value) && suggestions.value.length > 0
      return (isValidData || loading.value) && activated.value
    })
    const suggestionLoading = computed(() => {
      return !props.hideLoading && loading.value
    })

    const updatePopperPosition = () => {
      nextTick(popper.value.update)
    }

    watch(suggestionVisible, () => {
      dropdownWidth.value = `${inputRef.value.$el.offsetWidth}px`
    })

    onMounted(() => {
      inputRef.value.inputOrTextarea.setAttribute('role', 'textbox')
      inputRef.value.inputOrTextarea.setAttribute('aria-autocomplete', 'list')
      inputRef.value.inputOrTextarea.setAttribute('aria-controls', 'id')
      inputRef.value.inputOrTextarea.setAttribute('aria-activedescendant', `${id.value}-item-${highlightedIndex.value}`)
      const $ul = regionRef.value.querySelector('.lx-autocomplete-suggestion__list')
      $ul.setAttribute('role', 'listbox')
      $ul.setAttribute('id', id.value)
    })

    onUpdated(updatePopperPosition)

    const getData = queryString => {
      if (suggestionDisabled.value) {
        return
      }
      loading.value = true
      updatePopperPosition()
      props.fetchSuggestions(queryString, suggestionsArg => {
        loading.value = false
        if (suggestionDisabled.value) {
          return
        }
        if (isArray(suggestionsArg)) {
          suggestions.value = suggestionsArg
          highlightedIndex.value = props.highlightFirstItem ? 0 : -1
        } else {
          throwError('LxAutocomplete', 'autocomplete suggestions must be an array')
        }
      })
    }
    const debouncedGetData = debounce(getData, props.debounce)
    const handleInput = value => {
      ctx.emit('input', value)
      ctx.emit(UPDATE_MODEL_EVENT, value)
      suggestionDisabled.value = false
      if (!props.triggerOnFocus && !value) {
        suggestionDisabled.value = true
        suggestions.value = []
        return
      }
      debouncedGetData(value)
    }
    const handleChange = value => {
      ctx.emit('change', value)
    }
    const handleFocus = e => {
      activated.value = true
      ctx.emit('focus', e)
      if (props.triggerOnFocus) {
        debouncedGetData(props.modelValue)
      }
    }
    const handleBlur = e => {
      ctx.emit('blur', e)
    }
    const handleClear = () => {
      activated.value = false
      ctx.emit(UPDATE_MODEL_EVENT, '')
      ctx.emit('clear')
    }
    const handleKeyEnter = () => {
      if (suggestionVisible.value
        && highlightedIndex.value >= 0
        && highlightedIndex.value < suggestions.value.length
      ) {
        select(suggestions.value[highlightedIndex.value])
      } else if (props.selectWhenUnmatched) {
        ctx.emit('select', { value: props.modelValue })
        nextTick(() => {
          suggestions.value = []
          highlightedIndex.value = -1
        })
      }
    }
    const close = () => {
      activated.value = false
    }
    const focus = () => {
      inputRef.value.focus()
    }
    const select = item => {
      ctx.emit('input', item[props.valueKey])
      ctx.emit(UPDATE_MODEL_EVENT, item[props.valueKey])
      ctx.emit('select', item)
      nextTick(() => {
        suggestions.value = []
        highlightedIndex.value = -1
      })
    }
    const highlight = index => {
      if (!suggestionVisible.value || loading.value) {
        return
      }
      if (index < 0) {
        highlightedIndex.value = -1
        return
      }
      if (index >= suggestions.value.length) {
        index = suggestions.value.length - 1
      }
      const suggestion = regionRef.value.querySelector('.lx-autocomplete-suggestion__wrap')
      const suggestionList = suggestion.querySelectorAll('.lx-autocomplete-suggestion__list li')
      const highlightItem = suggestionList[index]
      const scrollTop = suggestion.scrollTop
      const { offsetTop, scrollHeight } = highlightItem

      if (offsetTop + scrollHeight > (scrollTop + suggestion.clientHeight)) {
        suggestion.scrollTop += scrollHeight
      }
      if (offsetTop < scrollTop) {
        suggestion.scrollTop -= scrollHeight
      }
      highlightedIndex.value = index
      inputRef.value.inputOrTextarea.setAttribute('aria-activedescendant', `${id.value}-item-${highlightedIndex.value}`)
    }



    return {
      Effect,

      attrs,
      suggestions,
      highlightedIndex,
      dropdownWidth,
      activated,
      suggestionDisabled,
      loading,
      inputRef,
      regionRef,
      popper,

      id,
      suggestionVisible,
      suggestionLoading,

      getData,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleClear,
      handleKeyEnter,
      close,
      focus,
      select,
      highlight,
    }
  },
})
</script>
