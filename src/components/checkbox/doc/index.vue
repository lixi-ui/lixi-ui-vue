<template>
  <div>
    
    <Md/>
  </div>
</template>

<script>
  import Md from './index.zh-CN.md'

  export default {
    name : 'CheckboxMd',
    components: {
      Md
    },
    data () {
      return {
        pageName: 'checkbox - doc',
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
