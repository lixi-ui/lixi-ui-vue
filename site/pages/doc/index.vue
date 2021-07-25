<template>
  <div class="doc">
    <div class="side">
      
    </div>
    <div class="content">
      <Md/>
    </div>
  </div>
</template>

<script>
import Md from './index.md';
import "./index.scss";
export default {
  components:{
    Md
  }
}
</script>