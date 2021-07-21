<template>
  <div>
    <Header/>
    <slot/>
  </div>
</template>

<script>
  import Header from './header.vue';
  export default {
    components: {
      Header
    }
  }
</script>>