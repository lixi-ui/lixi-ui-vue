<template>
  <div>
    {{ pageName }}
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
</style>
