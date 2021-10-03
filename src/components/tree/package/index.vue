<template>
  <div>
    <div v-for="(item,index) in treeData" :key="index">
      <tree-item :node="item"/>
    </div>
  </div>
</template>

<script>

import { ref, provide, reactive } from 'vue';
import { t } from '../../../i18n/index';
import { TreeStore } from "./modal/store.js"

import treeItem from './tree-item.vue';

export default {
  name: 'LvTree',
  components: {
    treeItem
  },
  data() {
    return {
    }
  },
  setup (props, ctx) {
    var treeData = reactive([])

    var treeStore = TreeStore([{
      key: 'k_1',
      value: 'v_1',
      children: [{
        key: 'k_1_1',
        value: 'v_1_1'
      }]
    }])
    treeData = treeStore.state.treeData;
    var store = reactive(treeStore);
    provide('treeStore', store);

    return {
      treeData
    }
  }
}
</script>
