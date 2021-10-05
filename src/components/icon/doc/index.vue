<template>
  <div>
    {{ pageName }}
    <Md/>
  </div>
</template>

<script>
  import Md from './index.md'

  export default {
    name : 'IconMd',
    components: {
      Md
    },
    data () {
      return {
        pageName: 'icon - doc',
        lang: 'zh'
      }
    },
    created() {
      // var lang = window.localStorage.getItem('lv_lang')
      // if (lang) {
      //   this.lang = lang
      // } else {
      //   this.lang = 'zh'
      // }
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
