<template>
  <div 
    class="demo-block"
    :class="[blockClass]"
  >
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="expanded-wrap">
      <div v-if='isExpanded'>
        <div  v-if="$slots.default" class="description">
          <slot/>
        </div>
        <div>
          <slot name="highlight"/>
        </div>
      </div>
      <div class="expanded-bottom">
        <div class="expanded-btn" @click="handleExpandFn">
          {{ isExpanded ? "收起" : "展开" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock',
  data(){
    return {
      isExpanded: false
    }
  },
  methods : {
    handleExpandFn() {
      this.isExpanded = !this.isExpanded
    }
  },
  computed: {
    blockClass() {
      return `demo-${ this.$router.currentRoute.value.path.split('/').pop() }`
    }
  }
}
</script>
<style lang="scss" scoped>
  .demo-block{
    border: 1px solid var(--lx-border-color-base);
    border-radius: 3px;
    transition: .2s;
    margin-top: 10px;
    .expanded-wrap{
      position: relative;
      padding: 8px 10px;
      border: 1px solid #fafafa;
      box-shadow: 0px 0px 8px #fafafa;
      background: #fafafa;
      &:hover{
        box-shadow: 0px 0px 8px #eee;
      }
      .expanded-bottom{
        width: 100%;
        height: 30px;
        background: lightcyan;
        line-height: 30px;
        text-align: center;
        .expanded-btn{
          width: 100%;
          cursor: pointer;
        }
      }
    }
  }
</style>
