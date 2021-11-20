## 介绍

### 引入

```sh 
  # 安装
  npm install lixi-ui-vue
```

```js
  // 引入
  import lixiUiVue from 'lixi-ui-vue';
  var app = createApp(App).use(lixiUiVue);
```

```html
  <!-- 项目中使用 -->
  <lx-button></li-button>
```

### cdn 的使用
```js
  <script src="https://unpkg.com/lixi-ui-vue@0.0.6/lib/index.js"></script>
```


### 项目的设计介绍

### 通过全局安装脚手架 创建项目

```sh
  # 脚手架
  npm install lixi-cli -g
```

#### 分为三个部分 web ui material

#### web的介绍
```sh
  # web 通常是用于业务逻辑开发
  # 创建基于vue3.0 的 web 项目
  # lixi-cli create web-app vue-web 
  # cd web-app
  # npm install
  # npm start
  # 这样设计是为了组件更好的被复用
  # 可以引入自定义的材料库
  # 实战项目的 github 地址
```

#### ui的介绍
```js
  // 简单的组件库
```

#### material的介绍
```sh
  # 复杂的组件,业务开发中通用的组件
  # material 通常是用于业务组件库的二次开发
  # 创建基于vue3.0 的 material 项目
  # lixi-cli create material-app vue-material 
  # cd material-app
  # npm install
  # npm start
  # 这样设计是为了组件更好的被复用
  # 通过业务开发的过程中积累着材料库
  # 实战项目github 
```
