<template>
  <div>
    
    <Md/>
  </div>
</template>

<script>
  import Md from './index.md'

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

<style>
 .lx-button{
   margin-right: 5px;
 }
 .block{
   margin: 10px;
 }
</style>
