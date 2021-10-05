<template>
  <div>
    {{ pageName }}
    <Md/>
  </div>
</template>

<script>
  import Md from './index.md'

  export default {
    name : 'LinkMd',
    components: {
      Md
    },
    data () {
      return {
        pageName: 'link - doc',
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
