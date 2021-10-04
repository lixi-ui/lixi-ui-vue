<template>
  <div v-show='node._show' class="lv-tree-item">
    <span class="lv-tree-icon-level" :style="{display: 'inline-block', width: node._level * 16 + 'px'}"></span>
    <span class="lv-tree-icon-expand" @click="expand()">
      <i v-if='node._children' :class="node._expand ?  'lv-icon-caret-bottom' : 'lv-icon-caret-right'"></i>
    </span>
    <span class="check">
      <!-- <button @click="plusOne()">+</button> -->
    </span>
    <span>{{ node.value }}</span>
    <span></span>
  </div>
</template>

<script lang="ts">
  import { inject, watch } from 'vue';
  export default {
    name: 'TreeItem',
    props: {
      node: {
        type: Object,
        default: function () { return {}}
      }
    },
    setup (props, cxt) {
      var treeStore = inject('treeStore')
      function plusOne () {
        console.log('点击')
      }
      function expand () {
        treeStore.dispatch({
          type: 'expand',
          node: props.node
        })
      }
      // watch(() => props.node, (newValue)=>{
      //   console.log('update', newValue)
      // },  { deep: true })
      return {
        plusOne, expand
      }
    }
  }
</script>

<style lang="scss">
  .lv-tree-icon-expand{
    cursor: pointer;
  }
</style>