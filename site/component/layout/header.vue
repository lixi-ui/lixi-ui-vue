<template>
  <div className="lx-layout-header">
      <div className="lx-logo">Lixi</div>
      <div className="lx-layout-menu">
        <ul className="lx-menu-ul">
          <li className="lx-menu-li">
            <router-link to="/home" className="menu-item" activeClassName='active-menu'>home</router-link>
          </li>
          <li className="lx-menu-li">
            <router-link to="/doc" activeClassName='active-menu'>doc</router-link>
          </li>
          <li className="lx-menu-li">
            <router-link to="/material" activeClassName='active-menu'>material</router-link>
          </li>
          <li className="lx-menu-li">
            <select id="item" value="zh">
              <option value="zh">zh</option>
              <option value="es">es</option>
            </select>
          </li>
          <!-- {/* <li className="lx-menu-li">
            <select id="item" onChange={(e)=>sclick(e)}>
              <option value="v4">v4</option>
              <option value="v3">v3</option>
            </select>
          </li> */} -->
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: "header",
  }
</script>

<style scoped>
  .header{
    background: #ddd;
  }
</style>
