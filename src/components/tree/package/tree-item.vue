<template>
  <div v-show='node._expand'>
    <span class="lv-tree-icon-level" :style="{display: 'inline-block', width: node._level * 16 + 'px'}"></span>
    <span class="lv-tree-icon-expand lv-icon-caret-right" @click="expand()">
    </span>
    <span class="check">
      <!-- <button @click="plusOne()">+</button> -->
    </span>
    <span>{{ node.value }}</span>
    <span></span>
  </div>
</template>

<script lang="ts">
  import { inject } from 'vue';
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
        console.log('props.node', props.node)
        console.log('treeStore', treeStore)
        treeStore.dispatch({
          type: 'expand',
          node: props.node
        })
      }
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