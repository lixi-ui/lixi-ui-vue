<template>
  <transition-group
    tag="ul"
    :class="[
      'lx-upload-list',
      'lx-upload-list--' + listType,
      { 'is-disabled': disabled }
    ]"
    name="lx-list"
  >
    <li
      v-for="file in files"
      :key="file.uid || file"
      :class="['lx-upload-list__item', 'is-' + file.status, focusing ? 'focusing' : '']"
      tabindex="0"
      @keydown.delete="!disabled && handleRemove($event, file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="onFileClicked"
    >
      <slot :file="file">
        <img
          v-if="file.status !== 'uploading' && ['picture-card', 'picture'].includes(listType)"
          class="lx-upload-list__item-thumbnail"
          :src="file.url"
          alt=""
        >
        <a class="lx-upload-list__item-name" @click="handleClick(file)">
          <i class="lx-icon-document"></i>{{ file.name }}
        </a>
        <label class="lx-upload-list__item-status-label">
          <i
            :class="{
              'lx-icon-upload-success': true,
              'lx-icon-circle-check': listType === 'text',
              'lx-icon-check': ['picture-card', 'picture'].includes(listType)
            }"
          ></i>
        </label>
        <i v-if="!disabled" class="lx-icon-close" @click="handleRemove($event, file)"></i>
        <!-- Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn-->
        <!-- This is a bug which needs to be fixed -->
        <!-- TODO: Fix the incorrect navigation interaction -->
        <i v-if="!disabled" class="lx-icon-close-tip">{{ t('el.upload.deleteTip') }}</i>
        <lx-progress
          v-if="file.status === 'uploading'"
          :type="listType === 'picture-card' ? 'circle' : 'line'"
          :stroke-width="listType === 'picture-card' ? 6 : 2"
          :percentage="+file.percentage"
        />
        <span v-if="listType === 'picture-card'" class="lx-upload-list__item-actions">
          <span
            class="lx-upload-list__item-preview"
            @click="handlePreview(file)"
          >
            <i class="lx-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="lx-upload-list__item-delete"
            @click="handleRemove($event, file)"
          >
            <i class="lx-icon-delete"></i>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { NOOP } from '@vue/shared'

import { useLocaleInject } from '@lixi/hooks'
import LxProgress from '@lixi/components/progress'

import type { PropType } from 'vue'
import type { UploadFile } from './upload.type'

export default defineComponent({
  name: 'LxUploadList',
  components: { LxProgress },
  props: {
    files: {
      type: Array as PropType<UploadFile[]>,
      default: () => [] as File[],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    handlePreview: {
      type: Function as PropType<(file: UploadFile) => void>,
      default: () => NOOP,
    },
    listType: {
      type: String as PropType<'picture' | 'picture-card' | 'text'>,
      default: 'text',
    },
  },
  emits: ['remove'],
  setup(props, { emit }) {
    const { t } = useLocaleInject()

    const handleClick = (file: UploadFile) => {
      props.handlePreview(file)
    }

    const onFileClicked = (e: Event) => {
      (e.target as HTMLElement).focus()
    }

    const handleRemove = (e: Event, file: UploadFile) => {
      emit('remove', file)
    }
    return {
      focusing: ref(false),
      handleClick,
      handleRemove,
      onFileClicked,
      t,
    }
  },
})
</script>
