<template>
  <div class="home">
    {{ pageName }}---------
    <div class="test">blue</div>
    <img src="../../assets/lixi-logo.png" alt="">
  </div>
</template>

<script>
  import "./index.scss";
  // import Logo from '../../assets/lixi-logo.png';

  export default {
    name: 'Home',
    data(){
      return {
        pageName: "home",
        // Logo: Logo
      }
    }
  }
</script>