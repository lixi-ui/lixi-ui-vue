<template>
  <!-- <div class="doc">
    <div class="side">
      
    </div>
    <div class="content">
    </div>
  </div> -->
  <div class = "doc div">
    <div class = "doc-left" >
      <div class = "logo" >
      </div> 
      <ul>
        <li class="doc-li" >
            <router-link to="/doc/button" active-class='active-menu'>doc</router-link>
            <!-- <NavLink to="/doc/introduce" activeClass='activeClass'> introduce 介绍 </NavLink>  -->
        </li> 
        <li class="doc-li" >
            <!-- <NavLink to="/doc/button" activeClass='activeClass'> button 按钮 </NavLink>  -->
        </li> 
        <li class="doc-li" >
            <!-- <NavLink to="/doc/input" activeClass='activeClass'> input 输入框 </NavLink> -->
        </li>
        <li class = "doc-li" >
            <!-- <NavLink to="/doc/tree" activeClass='activeClass'> tree 树型结构 </NavLink> -->
        </li>
      </ul> 
    </div> 
    <div class = "doc-right div" >
      <router-view></router-view>
    <!-- <Switch>
        <Route path = "/doc/introduce">
            <Introduce/>
        </Route>
        <Route path = "/doc/button" >
            <Button/>
        </Route> 
        <Route path = "/doc/input" >
            <Input/>
        </Route>
        <Route path = "/doc/tree" >
            <Tree/>
        </Route>
    </Switch>  -->
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