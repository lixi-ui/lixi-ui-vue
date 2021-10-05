<template>
  <main class="lx-main">
    <slot></slot>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LxMain',
})
</script>
