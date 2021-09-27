## 关于js 的设计模式。

## 现在主推两种设计模式

1. 第一种是 flux 流模式

```js
 // 这个模式的特点就是,一个变量一个action. 主要的是知道所有的变量情况下可以使用这个模式
 // 最大的特点就是 一个 动作 , 一个状态
 // 上代码
 var store = { // 所有的数据都在这里
   state: {
    nama: 'ling',
    online: false,
   }
 }
 // 接下来就是行为的定义了
 var action = function (action) { // 可以是一个函数
    switch (action.type) {
      case 'add': 
        return addFun(action);
      case 'remove': 
        return remove(action);
    }
 }

 function addFun () {
   // 就是使用一些简单的例子
   // 就是一些简单的例子 通过这个例子呢。 你可以扩展一下你自己的业务逻辑。 现在留一个作业题了
   // 带着这个问题去思考了。
   // 这样就很不错了。已经做到这一点就已经很不错了。这是入门.大神们就不要来挖苦我了
 }
 function remove () {

 }

```
#### 一期

目的是为了将这些东西给什么来着,就是将这些东西给结合起来。然后就是这样的情况了.

- [x] vue 源码 带问题去看

- [x] keep-alive

- [x] 代码结构,路径结构,生成的md文件，以及锚点

- [x] 国际化，代码分割, 版本控制

- [x] 样式

- [x] 单元测试，ts规范

- [] 异步加载

- [] bus ， spc

- [] 若依的分析及拆解

- [] webpack 的进度条优化，打包优化，与其他框架的分析

#### 后期

- [] 代码风格(js 模式)

- [] 文档规范，设计图，流程图

- [] 原型图设计

- [] 图片过大，加载错误

- [] server 服务器，搜索功能

- [] 自动化脚本, sh

- [] bug规范，开发规范，代码风格 eslint

- [] mysql,mongod 的用户规范，redis 部署, 亚马逊服务器

- [] java 部署

- [] cli package-lock 原理.

- [] 脚本生成代码

- [] 加入我们，团队协作，任务协调

- [] 邮件与推广

- [] git bi标签

- [] 统计, 百度统计

- [] loader 与 puligin 的详细

- [] 两个框架的结合

- [] 移动端

- [] vite 脚手架

- [] xss 攻击

- [] babel,es6,commont amd,umd

- [] 交流论坛