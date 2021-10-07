<template>
  <div
    ref="selectRef"
    v-click-outside:[popperRef]="handleClickOutside"
    :class="[selectSize ? 'lx-select-v2--' + selectSize : '']"
    class="lx-select-v2"
    @click.stop="toggleMenu"
    @mouseenter="states.comboBoxHovering = true"
    @mouseleave="states.comboBoxHovering = false"
  >
    <lx-popper
      ref="popper"
      v-model:visible="dropdownMenuVisible"
      :append-to-body="popperAppendToBody"
      :popper-class="`el-select-v2__popper ${popperClass}`"
      :gpu-acceleration="false"
      :stop-popper-mouse-event="false"
      :popper-options="popperOptions"
      :fallback-placements="['bottom-start', 'top-start', 'right', 'left']"
      :effect="Effect.LIGHT"
      manual-mode
      placement="bottom-start"
      pure
      transition="lx-zoom-in-top"
      trigger="click"
      @before-enter="handleMenuEnter"
      @after-leave="states.inputValue = states.displayInputValue"
    >
      <template #trigger>
        <div
          ref="selectionRef"
          class="lx-select-v2__wrapper"
          :class="{
            'is-focused': states.isComposing,
            'is-hovering': states.comboBoxHovering,
            'is-filterable': filterable,
            'is-disabled': disabled,
          }"
        >
          <div v-if="$slots.prefix">
            <slot name="prefix"></slot>
          </div>
          <div v-if="multiple" class="lx-select-v2__selection">
            <template v-if="collapseTags && modelValue.length > 0">
              <div class="lx-select-v2__selected-item">
                <lx-tag
                  :closable="!selectDisabled && !states.cachedOptions[0].disable"
                  :size="collapseTagSize"
                  type="info"
                  disable-transitions
                  @close="deleteTag($event, states.cachedOptions[0])"
                >
                  <span
                    class="lx-select-v2__tags-text"
                    :style="{
                      maxWidth: `${tagMaxWidth}px`
                    }"
                  >{{ states.cachedOptions[0].label }}</span>
                </lx-tag>
                <lx-tag
                  v-if="modelValue.length > 1"
                  :closable="false"
                  :size="collapseTagSize"
                  type="info"
                  disable-transitions
                >
                  <span
                    class="lx-select-v2__tags-text"
                    :style="{
                      maxWidth: `${tagMaxWidth}px`
                    }"
                  >+ {{ modelValue.length - 1 }}</span>
                </lx-tag>
              </div>
            </template>

            <template v-else>
              <div
                v-for="(selected, idx) in states.cachedOptions"
                :key="idx"
                class="lx-select-v2__selected-item"
              >
                <lx-tag
                  :key="getValueKey(selected)"
                  :closable="!selectDisabled && !selected.disabled"
                  :size="collapseTagSize"
                  type="info"
                  disable-transitions
                  @close="deleteTag($event, selected)"
                >
                  <span
                    class="lx-select-v2__tags-text"
                    :style="{
                      maxWidth: `${tagMaxWidth}px`
                    }"
                  >{{ getLabel(selected) }}</span>
                </lx-tag>
              </div>
            </template>
            <div
              class="lx-select-v2__selected-item lx-select-v2__input-wrapper"
              :style="inputWrapperStyle"
            >
              <input
                :id="id"
                ref="inputRef"
                v-model-text="states.displayInputValue"
                :autocomplete="autocomplete"
                aria-autocomplete="list"
                aria-haspopup="listbox"
                autocapitalize="off"
                :aria-expanded="expanded"
                :aria-labelledby="label"
                class="lx-select-v2__combobox-input"
                :class="[selectSize ? `is-${ selectSize }` : '']"
                :disabled="disabled"
                role="combobox"
                :readonly="!filterable"
                spellcheck="false"
                type="text"
                :name="name"
                :unselectable="expanded ? 'on' : undefined"
                @update:modelValue="onUpdateInputValue"
                @focus="handleFocus"
                @input="onInput"
                @compositionstart="handleCompositionStart"
                @compositionupdate="handleCompositionUpdate"
                @compositionend="handleCompositionEnd"
                @keydown.up.stop.prevent="onKeyboardNavigate('backward')"
                @keydown.down.stop.prevent="onKeyboardNavigate('forward')"
                @keydown.enter.stop.prevent="onKeyboardSelect"
                @keydown.esc.stop.prevent="handleEsc"
                @keydown.delete.stop="handleDel"
              >
              <span
                v-if="filterable"
                ref="calculatorRef"
                aria-hidden="true"
                class="lx-select-v2__input-calculator"
                v-text="states.displayInputValue"
              >
              </span>
            </div>
          </div>
          <template v-else>
            <div
              class="lx-select-v2__selected-item lx-select-v2__input-wrapper"
            >
              <input
                :id="id"
                ref="inputRef"
                v-model-text="states.displayInputValue"
                aria-autocomplete="list"
                aria-haspopup="listbox"
                :aria-labelledby="label"
                :aria-expanded="expanded"
                autocapitalize="off"
                :autocomplete="autocomplete"
                class="lx-select-v2__combobox-input"
                :disabled="disabled"
                :name="name"
                role="combobox"
                :readonly="!filterable"
                spellcheck="false"
                type="text"
                :unselectable="expanded ? 'on' : undefined"
                @compositionstart="handleCompositionStart"
                @compositionupdate="handleCompositionUpdate"
                @compositionend="handleCompositionEnd"
                @focus="handleFocus"
                @input="onInput"
                @keydown.up.stop.prevent="onKeyboardNavigate('backward')"
                @keydown.down.stop.prevent="onKeyboardNavigate('forward')"
                @keydown.enter.stop.prevent="onKeyboardSelect"
                @keydown.esc.stop.prevent="handleEsc"
                @update:modelValue="onUpdateInputValue"
              >
            </div>
            <span
              v-if="filterable"
              ref="calculatorRef"
              aria-hidden="true"
              class="lx-select-v2__selected-item lx-select-v2__input-calculator"
              v-text="states.displayInputValue"
            >
            </span>
          </template>
          <span
            v-if="shouldShowPlaceholder"
            :class="{
              'lx-select-v2__placeholder': true,
              'is-transparent': states.isComposing
                || (
                  placeholder && multiple
                    ? modelValue.length === 0
                    : !modelValue
                ),
            }"
          >
            {{ currentPlaceholder }}
          </span>
          <span class="lx-select-v2__suffix">
            <i v-show="!showClearBtn" :class="['lx-select-v2__caret', 'lx-input__icon', 'lx-icon-' + iconClass]"></i>
            <i
              v-if="showClearBtn"
              :class="`el-select-v2__caret lx-input__icon ${clearIcon}`"
              @click.prevent.stop="handleClear"
            ></i>
          </span>
        </div>
      </template>
      <template #default>
        <lx-select-menu
          ref="menuRef"
          :data="filteredOptions"
          :width="popperSize"
          :hovering-index="states.hoveringIndex"
        >
          <template #default="scope">
            <slot v-bind="scope"></slot>
          </template>
          <template #empty>
            <slot name="empty">
              <p class="lx-select-v2__empty">{{ emptyText ? emptyText : '' }}</p>
            </slot>
          </template>
        </lx-select-menu>
      </template>
    </lx-popper>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
  toRefs,
  reactive,
  vModelText,
} from 'vue'
import { ClickOutside } from '@lixi/directives'
import LxPopper from '@lixi/components/popper/src'
import LxTag from '@lixi/components/tag/src'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@lixi/utils/constants'
import LxSelectMenu from './select-dropdown.vue'
import useSelect from './useSelect'
import { selectV2InjectionKey } from './token'
import { SelectProps } from './defaults'
export default defineComponent({
  name: 'LxSelectV2',
  components: {
    LxSelectMenu,
    LxTag,
    LxPopper,
  },
  directives: { ClickOutside, ModelText: vModelText },
  props: SelectProps,
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, 'remove-tag', 'clear', 'visible-change', 'focus', 'blur'],

  setup(props, { emit }) {
    const API = useSelect(props, emit)
    // TODO, remove the any cast to align the actual API.
    provide(selectV2InjectionKey, {
      props: reactive({
        ...toRefs(props),
        height: API.popupHeight,
      }),
      onSelect: API.onSelect,
      onHover: API.onHover,
      onKeyboardNavigate: API.onKeyboardNavigate,
      onKeyboardSelect: API.onKeyboardSelect,
    } as any)

    return API
  },
})
</script>
