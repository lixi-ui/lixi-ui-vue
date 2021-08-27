<template>
  <div>
    {{ pageName }}
    <Md/>
  </div>
</template>

<script>
  import Md from './index.md'
  export default {
    name : 'ButtonMd',
    components: {
      Md
    },
    data () {
      return {
        pageName: 'button - doc'
      }
    }
  }
</script>

<style>
 .lv-button{
   margin-right: 5px;
 }
 .block{
   margin: 10px;
 }
</style>
