<template>
  <div>
    
    <Md/>
  </div>
</template>

<script>
  import Md from './index.zh-CN.md'

  export default {
    name : 'TreeMd',
    components: {
      Md
    },
    data () {
      return {
        pageName: 'tree - doc',
        lang: 'zh'
      }
    }
  }
</script>

<style lang="scss">
 .lx-button{
   margin-right: 5px;
 }
 .block{
   margin: 10px;
 }
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
  .custom-tree-container {
    display: flex;
    /* margin: -24px; */
  }
  .custom-tree-container .block{
    width: 50%;
    padding: 8px 24px 24px;
    p{
      text-align: center;
      margin: 0;
      line-height: 4;
    }
  }

  .block:first-child{
    border-right: 1px solid #eff2f6;
  }
</style>
