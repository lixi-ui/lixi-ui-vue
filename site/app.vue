<template>
  <div>
    {{ name }}
    <Test/>
  </div>
</template>

<script>
import test from './test.jsx'
export default {
  components: {
    Test: test
  },
  data() {
    return {
      name : "ling"
    }
  }
}
</script>