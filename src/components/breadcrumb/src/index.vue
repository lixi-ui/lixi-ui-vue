<template>
  <div
    ref="breadcrumb"
    class="lx-breadcrumb"
    aria-label="Breadcrumb"
    role="navigation"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, onMounted } from 'vue'
import type { IBreadcrumbProps } from './breadcrumb'

export default defineComponent({
  name: 'LxBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/',
    },
    separatorClass: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const breadcrumb:any = ref(null)

    provide<IBreadcrumbProps>('breadcrumb', props)

    onMounted(() => {
      const items = breadcrumb.value.querySelectorAll('.lx-breadcrumb__item')
      if (items.length) {
        items[items.length - 1].setAttribute('aria-current', 'page')
      }
    })

    return {
      breadcrumb,
    }
  },
})
</script>
