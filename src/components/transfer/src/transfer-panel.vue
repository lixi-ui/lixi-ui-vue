<template>
  <div class="lx-transfer-panel">
    <p class="lx-transfer-panel__header">
      <lx-checkbox
        v-model="allChecked"
        :indeterminate="isIndeterminate"
        @change="handleAllCheckedChange"
      >
        {{ title }}
        <span>{{ checkedSummary }}</span>
      </lx-checkbox>
    </p>

    <div
      :class="['lx-transfer-panel__body', hasFooter ? 'is-with-footer' : '']"
    >
      <lx-input
        v-if="filterable"
        v-model="query"
        class="lx-transfer-panel__filter"
        size="small"
        :placeholder="placeholder"
        @mouseenter="inputHover = true"
        @mouseleave="inputHover = false"
      >
        <template #prefix>
          <i
            :class="['lx-input__icon', 'lx-icon-' + inputIcon]"
            @click="clearQuery"
          ></i>
        </template>
      </lx-input>
      <lx-checkbox-group
        v-show="!hasNoMatch && data.length > 0"
        v-model="checked"
        :class="{ 'is-filterable': filterable }"
        class="lx-transfer-panel__list"
      >
        <lx-checkbox
          v-for="item in filteredData"
          :key="item[keyProp]"
          class="lx-transfer-panel__item"
          :label="item[keyProp]"
          :disabled="item[disabledProp]"
        >
          <option-content
            :option="optionRender(item)"
          />
        </lx-checkbox>
      </lx-checkbox-group>
      <p v-show="hasNoMatch || data.length === 0" class="lx-transfer-panel__empty">
        {{ hasNoMatch ? t('el.transfer.noMatch') : t('el.transfer.noData') }}
      </p>
    </div>
    <p v-if="hasFooter" class="lx-transfer-panel__footer">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { useLocaleInject } from '@lixi/hooks'
import { LxCheckbox, LxCheckboxGroup } from '@lixi/components/checkbox/src'
import LxInput from '@lixi/components/input/src'
import { useCheck, useCheckProps, CHECKED_CHANGE_EVENT } from './useCheck'

export default defineComponent({
  name: 'LxTransferPanel',

  components: {
    LxCheckboxGroup,
    LxCheckbox,
    LxInput,
    OptionContent: ({ option }) => option,
  },

  props: useCheckProps,

  emits: [CHECKED_CHANGE_EVENT],

  setup(props, { slots }) {
    const { t } = useLocaleInject()

    const panelState = reactive({
      checked: [],
      allChecked: false,
      query: '',
      inputHover: false,
      checkChangeByUser: true,
    })

    const {
      labelProp,
      keyProp,
      disabledProp,
      filteredData,
      checkedSummary,
      isIndeterminate,
      handleAllCheckedChange,
    } = useCheck(props, panelState)

    const hasNoMatch = computed(() => {
      return panelState.query.length > 0 && filteredData.value.length === 0
    })

    const inputIcon = computed(() => {
      return panelState.query.length > 0 && panelState.inputHover
        ? 'circle-close'
        : 'search'
    })

    const hasFooter = computed(() => !!slots.default()[0].children.length)

    const clearQuery = () => {
      if (inputIcon.value === 'circle-close') {
        panelState.query = ''
      }
    }

    const {
      checked,
      allChecked,
      query,
      inputHover,
      checkChangeByUser,
    } = toRefs(panelState)

    return {
      labelProp,
      keyProp,
      disabledProp,
      filteredData,
      checkedSummary,
      isIndeterminate,
      handleAllCheckedChange,

      checked,
      allChecked,
      query,
      inputHover,
      checkChangeByUser,

      hasNoMatch,
      inputIcon,
      hasFooter,
      clearQuery,

      t,
    }
  },
})
</script>
