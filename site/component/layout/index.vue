<template>
  <div class="lx-layout">
    <Header/>
    <slot/>
  </div>
</template>

<script>
  import Header from './header.vue';
  import './index.scss';
  export default {
    components: {
      Header
    }
  }
</script>>