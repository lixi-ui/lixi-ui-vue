<template>
  <div>
    <Md/>
  </div>
</template>

<script>
  import Md from './index.md'

  export default {
    name : 'ButtonMd1',
    components: {
      Md
    },
    data () {
      return {
        pageName: 'button - doc',
        lang: 'zh'
      }
    },
    created() {
      var lang = window.localStorage.getItem('lv_lang')
      if (lang) {
        this.lang = lang
      } else {
        this.lang = 'zh'
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
