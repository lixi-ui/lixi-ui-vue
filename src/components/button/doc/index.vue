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