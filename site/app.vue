<template>
  <div>
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
import test from './test.jsx';
import TestX from './test.tsx';

import Layout from './component/layout/index.vue'

export default {
  components: {
    Test: test,
    TestX,
    Layout
  },
  data() {
    return {
      name : "ling"
    }
  }
}
</script>