<template>
  <div>
    {{ name }}
    <Test/>
    <TestX/>
    <router-view></router-view>
  </div>
</template>

<script>
import test from './test.jsx';
import TestX from './test.tsx';

export default {
  components: {
    Test: test,
    TestX
  },
  data() {
    return {
      name : "ling"
    }
  }
}
</script>