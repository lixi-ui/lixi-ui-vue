<template>
  <span class="lx-pagination__jump">
    {{ t('el.pagination.goto') }}
    <lx-input
      size="mini"
      class="lx-pagination__editor is-in-pagination"
      :min="1"
      :max="pageCount"
      :disabled="disabled"
      :model-value="innerValue"
      type="number"
      @update:modelValue="handleInput"
      @change="handleChange"
    />
    {{ t('el.pagination.pageClassifier') }}
  </span>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
} from 'vue'
import { useLocaleInject } from '@lixi/hooks'
import LxInput from '@lixi/components/input/src'
import { usePagination } from './usePagination'

import type { Nullable } from '@lixi/utils/types'

export default defineComponent({
  components: {
    LxInput,
  },
  setup() {
    const { t } = useLocaleInject()
    const { pageCount, disabled, currentPage }:any = usePagination()
    const _usePagination:any = usePagination()
    const pagination:any = _usePagination.pagination
    const userInput:any = ref<Nullable<number>>(null)
    const innerValue = computed(() => userInput.value ?? currentPage.value)

    function handleInput(val: number | string) {
      userInput.value = Number(val)
    }

    function handleChange(val: number | string) {
      pagination?.changeEvent(Number(val))
      userInput.value = null
    }

    return {
      t,
      userInput,
      pageCount,
      disabled,
      handleInput,
      handleChange,
      innerValue,
    }
  },
})
</script>
