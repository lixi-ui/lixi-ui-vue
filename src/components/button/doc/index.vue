<template>
  <div class="demo-block demo-button">
    <Md/>
  </div>
</template>

<script>
  import Md from './index.zh-CN.md'

  export default {
    name : 'ButtonMd2',
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
    },
    methods: {
      message(){
        console.log(this.$message)
        this.$message
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
