<template>
  <div class = "doc div page-container">
    <div class = "doc-left">
      <div class = "logo" >
      </div> 
      <ul>
        <li class="doc-li" >
            <!-- <router-link to="/material/lixi-material-vue/doc/button" activeClass='active-menu'>button</router-link> -->
        </li> 
        <li class="doc-li" >
            <!-- <router-link to="/material/lixi-material-vue/doc/tree" activeClass='active-menu'>tree</router-link> -->
        </li> 
        <li class="doc-li" >
            <!-- <NavLink to="/doc/input" activeClass='activeClass'> input 输入框 </NavLink> -->
        </li>
        <li class = "doc-li" >
            <!-- <NavLink to="/doc/tree" activeClass='activeClass'> tree 树型结构 </NavLink> -->
        </li>
      </ul> 
    </div> 
    <div class = "doc-right div content">
      <!-- <router-view></router-view> -->
    </div> 
  </div>
</template>

<script>
// import Md from './index.md';
// import "./index.scss";
import defineComponent from 'vue'
export default defineComponent({
  components:{
    // Md
  }
})
</script>