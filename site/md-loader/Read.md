### 解析 md-loader 的函数
### 主要的作用就是将 md 里面的文件中 ::: demo 中的文件转换为 可运行的 的 veu 组件。

1. 第一步 使用的是 markdown-it-chain 将 md 转为 html. 将 :::demo 的文件转换为 `<!--lixi-demo: ${content} :lixi-demo-->`

2. 获取里面的文件 fance 将 dome 里面的 html 包裹 一成代码 `<template v-pre><template>`

> v-pre 不会被解析为vue的代码.

3. 使用的是 compileTemplate 将 <!--lixi-demo: ${content} :lixi-demo--> 的代码转换为可 运行的 vue 代码

4. 最后 被 转到 vue-loader 上进行解析。


```html
  <h2 id="aa" tabindex="-1"><a class="header-anchor" href="#aa">¶</a> aa</h2>
  <demo-block>
    <template #source><lixi-demo0 /></template>
    <template v-pre>
      <pre>
        <code class="html">
          &lt;div class=&quot;demo-image__error&quot;&gt;
          &lt;div class=&quot;block&quot;&gt;
          &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
          &lt;/div&gt;
          &lt;div class=&quot;block&quot;&gt;
          &lt;span class=&quot;demonstration&quot;&gt;Custom&lt;/span&gt;
            {{ name }}
          &lt;/div&gt;
          &lt;lx-button/&gt;
          &lt;lx-tree/&gt;
          &lt;/div&gt;
          &lt;script&gt;
            export default {
              id: 'Md11',
              name: 'Md11',
              data() {
                return {
                  name: 'ling'
                }
              }
            }
          &lt;/script&gt;
        </code>
      </pre>
    </template>
  </demo-block>
  <script lang="ts">
    import * as Vue from 'vue';
    export default {
      name: 'component-doc',
      components: {
        "lixi-demo0": (function() {
          const {
            createElementVNode: _createElementVNode,
            toDisplayString: _toDisplayString,
            createTextVNode: _createTextVNode,
            resolveComponent: _resolveComponent,
            createVNode: _createVNode,
            openBlock: _openBlock,
            createElementBlock: _createElementBlock 
          } = Vue
          const _hoisted_1 = { class: "demo-image__error" }
          const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", { class: "block" }, 
          [
            /*#__PURE__*/_createElementVNode("span", { class: "demonstration" }, "Default")
          ],
          -1 /* HOISTED */)
          const _hoisted_3 = { class: "block" }
          const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", { class: "demonstration" }, "Custom", -1 /* HOISTED */)

          function render(_ctx, _cache) {
            const _component_lx_button = _resolveComponent("lx-button")
            const _component_lx_tree = _resolveComponent("lx-tree")

            return (_openBlock(), _createElementBlock("div", null, [
              _createElementVNode("div", _hoisted_1, [
                _hoisted_2,
                _createElementVNode("div", _hoisted_3, [
                  _hoisted_4,
                  _createTextVNode(" " + _toDisplayString(_ctx.name), 1 /* TEXT */)       
                ]),
                _createVNode(_component_lx_button),
                _createVNode(_component_lx_tree)
              ])
            ]))
          }
          const democomponentExport = {
            id: 'Md11',
            name: 'Md11',
            data() {
              return {
                name: 'ling'
              }
            }
          }
          return {
            render,
            ...democomponentExport
          }
        })(),
      }
    }
  </script>

```