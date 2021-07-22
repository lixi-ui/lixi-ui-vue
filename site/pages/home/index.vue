<template>
  <div class="home">{{ pageName }}---------<div class="test">blue</div></div>
</template>

<script>
  import "./index.scss";
  export default {
    name: 'Home',
    data(){
      return {
        pageName: "home"
      }
    }
  }
</script>