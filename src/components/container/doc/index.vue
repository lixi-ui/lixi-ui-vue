<template>
  <div>
    {{ pageName }}
    <Md/>
  </div>
</template>

<script>
  import Md from './index.md'

  export default {
    name : 'ContainerMd',
    components: {
      Md
    },
    data () {
      return {
        pageName: 'container - doc',
        lang: 'zh'
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
  .lx-header, .lx-footer {
    background-color: #B3C0D1;
    color: var(--lx-text-color-primary);
    text-align: center;
    line-height: 60px;
  }

  .lx-aside {
    background-color: #D3DCE6;
    color: var(--lx-text-color-primary);
    text-align: center;
    line-height: 200px;
  }

  .lx-main {
    background-color: #E9EEF3;
    color: var(--lx-text-color-primary);
    text-align: center;
    line-height: 160px;
  }

  body > .lx-container {
    margin-bottom: 40px;
  }

  .lx-container:nth-child(5) .lx-aside,
  .lx-container:nth-child(6) .lx-aside {
    line-height: 260px;
  }

  .lx-container:nth-child(7) .lx-aside {
    line-height: 320px;
  }
</style>
