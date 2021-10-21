<template>
  <template v-if="descriptions.direction === 'vertical'">
    <tr>
      <template v-for="(cell, index) in row" :key="`tr1-${index}`">
        <lx-descriptions-cell :cell="cell" tag="th" type="label" />
      </template>
    </tr>
    <tr>
      <template v-for="(cell, index) in row" :key="`tr2-${index}`">
        <lx-descriptions-cell :cell="cell" tag="td" type="content" />
      </template>
    </tr>
  </template>
  <tr v-else>
    <template v-for="(cell, index) in row" :key="`tr3-${index}`">
      <template v-if="descriptions.border">
        <lx-descriptions-cell :cell="cell" tag="td" type="label" />
        <lx-descriptions-cell :cell="cell" tag="td" type="content" />
      </template>
      <lx-descriptions-cell
        v-else
        :cell="cell"
        tag="td"
        type="both"
      />
    </template>
  </tr>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import DescriptionsCell from './descriptions-cell'
import { lxDescriptionsKey } from './token'

import type { IDescriptionsInject } from './descriptions.type'

export default defineComponent({
  name: 'LxDescriptionsRow',
  components: {
    [DescriptionsCell.name]: DescriptionsCell,
  },
  props: {
    row: {
      type: Array,
    },
  },
  setup() {
    const descriptions = inject(lxDescriptionsKey, {} as IDescriptionsInject)

    return {
      descriptions,
    }
  },
})
</script>
