<template>
  <lx-popper
    v-model:visible="visible"
    trigger="click"
    :effect="Effect.LIGHT"
    popper-class="lx-popover"
    append-to-body
    :fallback-placements="['bottom' ,'top', 'right', 'left']"
  >
    <div class="lx-popconfirm">
      <p class="lx-popconfirm__main">
        <i
          v-if="!hideIcon"
          :class="icon"
          class="lx-popconfirm__icon"
          :style="{color: iconColor}"
        ></i>
        {{ title }}
      </p>
      <div class="lx-popconfirm__action">
        <lx-button
          size="mini"
          :type="cancelButtonType"
          @click="cancel"
        >
          {{ cancelButtonText_ }}
        </lx-button>
        <lx-button
          size="mini"
          :type="confirmButtonType"
          @click="confirm"
        >
          {{ confirmButtonText_ }}
        </lx-button>
      </div>
    </div>
    <template #trigger>
      <slot name="reference"></slot>
    </template>
  </lx-popper>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import LxButton from '@lixi/components/button/src'
import LxPopper, { Effect } from '@lixi/components/popper/src'
import { useLocaleInject } from '@lixi/hooks'

import type { PropType } from 'vue'
import type { ButtonType } from '@lixi/components/button/src/types'

export default defineComponent({
  name: 'LxPopconfirm',

  components: {
    LxButton,
    LxPopper,
  },

  props: {
    title: {
      type: String,
    },
    confirmButtonText: {
      type: String,
    },
    cancelButtonText: {
      type: String,
    },
    confirmButtonType: {
      type: String as PropType<ButtonType>,
      default: 'primary' as ButtonType,
    },
    cancelButtonType: {
      type: String as PropType<ButtonType>,
      default: 'text' as ButtonType,
    },
    icon: {
      type: String,
      default: 'lx-icon-question',
    },
    iconColor: {
      type: String,
      default: '#f90',
    },
    hideIcon: {
      type: Boolean,
      default: false,
    },
  },
  emits:['confirm','cancel'],
  setup(props,{ emit }){
    const { t } = useLocaleInject()
    const visible = ref(false)
    const confirm = () => {
      visible.value = false
      emit('confirm')
    }
    const cancel = () => {
      visible.value = false
      emit('cancel')
    }
    const confirmButtonText_ = computed(() => {
      return props.confirmButtonText || t('el.popconfirm.confirmButtonText')
    })
    const cancelButtonText_ = computed(() => {
      return props.cancelButtonText || t('el.popconfirm.cancelButtonText')
    })
    return {
      Effect,
      visible,
      confirm,
      cancel,
      confirmButtonText_,
      cancelButtonText_,
    }
  },
})
</script>
