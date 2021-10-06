<template>
  <div class='lx-tree'>
    <div v-for="(item,index) in treeData.list" :key="index">
      <tree-item :node="item"/>
    </div>
  </div>
</template>

<script>

import { ref, provide, reactive, watch } from 'vue';
import { t } from '../../../i18n/index';
import { TreeStore } from "./modal/store.js"

import treeItem from './tree-item.vue';

export default {
  name: 'LxTree',
  components: {
    treeItem
  },
  data() {
    return {
    }
  },
  props: {
    data: {
      type: Array,
      default: function () {return []}
    }
  },
  setup (props, ctx) {
    var treeStore = TreeStore(props.data);
    var treeData = reactive({ list: treeStore.state.treeData });
    var store = reactive(treeStore);
    provide('treeStore', store);

    watch(() => props.data, newVal => {
      store.dispatch({
        type: 'update',
        data: newVal
      })
      treeData.list = treeStore.state.treeData
    }, { deep: true })

    return {
      treeData
    }
  }
}
</script>
