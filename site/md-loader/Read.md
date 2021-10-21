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


```js
import { render } from "./index.zh-CN.d.md?vue&type=template&id=23af6f86"
import script from "./index.zh-CN.d.md?vue&type=script&lang=js"
export * from "./index.zh-CN.d.md?vue&type=script&lang=js"
script.render = render
/* hot reload */
if (module.hot) {
  script.__hmrId = "23af6f86"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('23af6f86', script)) {
    api.reload('23af6f86', script)
  }

  module.hot.accept("./index.zh-CN.d.md?vue&type=template&id=23af6f86", () => {    api.rerender('23af6f86', render)
  })

}

script.__file = "src/components/button/doc/index.zh-CN.d.md"
```

```js
import { render } from "./index.d.md?vue&type=template&id=c535533e"
const script = {}
script.render = render
/* hot reload */
if (module.hot) {
  script.__hmrId = "c535533e"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('c535533e', script)) {
    api.reload('c535533e', script)
  }

  module.hot.accept("./index.d.md?vue&type=template&id=c535533e", () => {      
    api.rerender('c535533e', render)
  })

}

script.__file = "site/pages/doc/introduce/index.d.md"

export default script
```

```html
<section >
      <h2 id="button-an-niu" tabindex="-1">Button 按钮</h2>
<p>常用的操作按钮。</p>
<h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3>
<p>基础的按钮用法。</p>
<demo-block>
        <div><p>使用<code>type</code>、<code>plain</code>、<code>round</code>和
<code>circle</code>属性来定义 Button 的样式。</p>
</div>
        <template #source><lixi-demo0 /></template>
        <template #highlight><pre class="per" v-pre><code class="html hljs">&lt;lx-row&gt;
  &lt;lx-button&gt;默认按钮&lt;/lx-button&gt;
  &lt;lx-button type=&quot;primary&quot;&gt;主要按钮&lt;/lx-button&gt;
  &lt;lx-button type=&quot;success&quot;&gt;成功按钮&lt;/lx-button&gt;
  &lt;lx-button type=&quot;info&quot;&gt;信息按钮&lt;/lx-button&gt;
  &lt;lx-button type=&quot;warning&quot;&gt;警告按钮&lt;/lx-button&gt;
  &lt;lx-button type=&quot;danger&quot;&gt;危险按钮&lt;/lx-button&gt;
&lt;/lx-row&gt;

&lt;lx-row&gt;
  &lt;lx-button plain&gt;朴素按钮&lt;/lx-button&gt;
  &lt;lx-button type=&quot;primary&quot; plain&gt;主要按钮&lt;/lx-button&gt;   
  &lt;lx-button type=&quot;success&quot; plain&gt;成功按钮&lt;/lx-button&gt;   
  &lt;lx-button type=&quot;info&quot; plain&gt;信息按钮&lt;/lx-button&gt;      
  &lt;lx-button type=&quot;warning&quot; plain&gt;警告按钮&lt;/lx-button&gt;   
  &lt;lx-button type=&quot;danger&quot; plain&gt;危险按钮&lt;/lx-button&gt;    
&lt;/lx-row&gt;

&lt;lx-row&gt;
  &lt;lx-button round&gt;圆角按钮&lt;/lx-button&gt;
  &lt;lx-button type=&quot;primary&quot; round&gt;主要按钮&lt;/lx-button&gt;   
  &lt;lx-button type=&quot;success&quot; round&gt;成功按钮&lt;/lx-button&gt;   
  &lt;lx-button type=&quot;info&quot; round&gt;信息按钮&lt;/lx-button&gt;      
  &lt;lx-button type=&quot;warning&quot; round&gt;警告按钮&lt;/lx-button&gt;   
  &lt;lx-button type=&quot;danger&quot; round&gt;危险按钮&lt;/lx-button&gt;    
&lt;/lx-row&gt;

&lt;lx-row&gt;
  &lt;lx-button icon=&quot;lx-icon-search&quot; circle&gt;&lt;/lx-button&gt;   
  &lt;lx-button type=&quot;primary&quot; icon=&quot;lx-icon-edit&quot; circle&gt;&lt;/lx-button&gt;
  &lt;lx-button type=&quot;success&quot; icon=&quot;lx-icon-check&quot; circle&gt;&lt;/lx-button&gt;
  &lt;lx-button type=&quot;info&quot; icon=&quot;lx-icon-message&quot; circle&gt;&lt;/lx-button&gt;
  &lt;lx-button type=&quot;warning&quot; icon=&quot;lx-icon-star-off&quot; circle&gt;&lt;/lx-button&gt;
  &lt;lx-button type=&quot;danger&quot; icon=&quot;lx-icon-delete&quot; circle&gt;&lt;/lx-button&gt;
&lt;/lx-row&gt;
</code></pre></template></demo-block><h3 id="jin-yong-zhuang-tai" tabindex="-1">禁用状态</h3>
<p>按钮不可用状态。</p>
<demo-block>
        <div><p>你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一
个<code>Boolean</code>值。</p>
</div>
        <template #source><lixi-demo1 /></template>
        <template #highlight><pre class="per" v-pre><code class="html hljs">&lt;lx-row&gt;
  &lt;lx-button disabled&gt;默认按钮&lt;/lx-button&gt;
  &lt;lx-button type=&quot;primary&quot; disabled&gt;主要按钮&lt;/lx-button&gt;  &lt;lx-button type=&quot;success&quot; disabled&gt;成功按钮&lt;/lx-button&gt;  &lt;lx-button type=&quot;info&quot; disabled&gt;信息按钮&lt;/lx-button&gt;   
  &lt;lx-button type=&quot;warning&quot; disabled&gt;警告按钮&lt;/lx-button&gt;  &lt;lx-button type=&quot;danger&quot; disabled&gt;危险按钮&lt;/lx-button&gt; 
&lt;/lx-row&gt;

&lt;lx-row&gt;
  &lt;lx-button plain disabled&gt;朴素按钮&lt;/lx-button&gt;
  &lt;lx-button type=&quot;primary&quot; plain disabled&gt;主要按钮&lt;/lx-button&gt;
  &lt;lx-button type=&quot;success&quot; plain disabled&gt;成功按钮&lt;/lx-button&gt;
  &lt;lx-button type=&quot;info&quot; plain disabled&gt;信息按钮&lt;/lx-button&gt;
  &lt;lx-button type=&quot;warning&quot; plain disabled&gt;警告按钮&lt;/lx-button&gt;
  &lt;lx-button type=&quot;danger&quot; plain disabled&gt;危险按钮&lt;/lx-button&gt;
&lt;/lx-row&gt;
</code></pre></template></demo-block><h3 id="wen-zi-an-niu" tabindex="-1">文字 
按钮</h3>
<p>没有边框和背景色的按钮。</p>
<demo-block>

        <template #source><lixi-demo2 /></template>
        <template #highlight><pre class="per" v-pre><code class="html hljs">&lt;lx-button type=&quot;text&quot;&gt;文字按钮&lt;/lx-button&gt;
&lt;lx-button type=&quot;text&quot; disabled&gt;文字按钮&lt;/lx-button&gt;     
</code></pre></template></demo-block><h3 id="tu-biao-an-niu" tabindex="-1">图标
按钮</h3>
<p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
<demo-block>
        <div><p>设置<code>icon</code>属性即可，icon 的列表可以参考 Lxement Plus 的 icon 组件，也可以设置在文字右边的 icon ，只要使用<code>i</code>标签即可，可
以使用自定义图标。</p>
</div>
        <template #source><lixi-demo3 /></template>
        <template #highlight><pre class="per" v-pre><code class="html hljs">&lt;lx-button type=&quot;primary&quot; icon=&quot;lx-icon-edit&quot;&gt;&lt;/lx-button&gt;
&lt;lx-button type=&quot;primary&quot; icon=&quot;lx-icon-share&quot;&gt;&lt;/lx-button&gt;
&lt;lx-button type=&quot;primary&quot; icon=&quot;lx-icon-delete&quot;&gt;&lt;/lx-button&gt;
&lt;lx-button type=&quot;primary&quot; icon=&quot;lx-icon-search&quot;&gt;搜索&lt;/lx-button&gt;
&lt;lx-button type=&quot;primary&quot;
  &gt;上传&lt;i class=&quot;lx-icon-upload lx-icon--right&quot;&gt;&lt;/i      
&gt;&lt;/lx-button&gt;
</code></pre></template></demo-block><h3 id="an-niu-zu" tabindex="-1">按钮组</h3>
<p>以按钮组的方式出现，常用于多项类似操作。</p>
<demo-block>
        <div><p>使用<code>&lt;lx-button-group&gt;</code>标签来嵌套你的按钮。</p>
</div>
        <template #source><lixi-demo4 /></template>
        <template #highlight><pre class="per" v-pre><code class="html hljs">&lt;div&gt;
  &lt;lx-button type=&quot;primary&quot; icon=&quot;lx-icon-arrow-left&quot;&gt;上一页&lt;/lx-button&gt;
  &lt;lx-button type=&quot;primary&quot;
    &gt;下一页&lt;i class=&quot;lx-icon-arrow-right lx-icon--right&quot;&gt;&lt;/i
  &gt;&lt;/lx-button&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="jia-zai-zhong" tabindex="-1">加载 
中</h3>
<p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
<demo-block>
        <div><p>要设置为 loading 状态，只要设置<code>loading</code>属性为<code>true</code>即可。</p>
</div>
        <template #source><lixi-demo5 /></template>
        <template #highlight><pre class="per" v-pre><code class="html hljs">&lt;lx-button type=&quot;primary&quot; :loading=&quot;true&quot;&gt;加载中&lt;/lx-button&gt;
</code></pre></template></demo-block><h3 id="bu-tong-chi-cun" tabindex="-1">不 
同尺寸</h3>
<p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸 
。</p>
<demo-block>
        <div><p>额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。</p>
</div>
        <template #source><lixi-demo6 /></template>
        <template #highlight><pre class="per" v-pre><code class="html hljs">&lt;lx-row&gt;
  &lt;lx-button&gt;默认按钮&lt;/lx-button&gt;
  &lt;lx-button size=&quot;medium&quot;&gt;中等按钮&lt;/lx-button&gt;
  &lt;lx-button size=&quot;small&quot;&gt;小型按钮&lt;/lx-button&gt;
  &lt;lx-button size=&quot;mini&quot;&gt;超小按钮&lt;/lx-button&gt;
&lt;/lx-row&gt;
&lt;lx-row&gt;
  &lt;lx-button round&gt;默认按钮&lt;/lx-button&gt;
  &lt;lx-button size=&quot;medium&quot; round&gt;中等按钮&lt;/lx-button&gt;    
  &lt;lx-button size=&quot;small&quot; round&gt;小型按钮&lt;/lx-button&gt;     
  &lt;lx-button size=&quot;mini&quot; round&gt;超小按钮&lt;/lx-button&gt;      
&lt;/lx-row&gt;
&lt;lx-row&gt;
&lt;/lx-row&gt;
</code></pre></template></demo-block><h3 id="button-attributes" tabindex="-1">Button Attributes</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>size</td>
<td>尺寸</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>类型</td>
<td>string</td>
<td>primary / success / warning / danger / info / text</td>
<td>—</td>
</tr>
<tr>
<td>plain</td>
<td>是否朴素按钮</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>round</td>
<td>是否圆角按钮</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>circle</td>
<td>是否圆形按钮</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>loading</td>
<td>是否加载中状态</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>icon</td>
<td>图标类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>autofocus</td>
<td>是否默认聚焦</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>native-type</td>
<td>原生 type 属性</td>
<td>string</td>
<td>button / submit / reset</td>
<td>button</td>
</tr>
</tbody>
</table>
<h3 id="button-group-attributes" tabindex="-1">Button-Group Attributes</h3>    
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>size</td>
<td>用于控制该按钮组内按钮的尺寸</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="button-group-slots" tabindex="-1">Button-Group Slots</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>自定义按钮组内容</td>
</tr>
</tbody>
</table>

      </section>
```

```js
import * as Vue from 'vue';
      export default {
        name: 'component-doc-1634251362033',
        components: {
          "lixi-demo0": (function() {

    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("默认按钮")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_4 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_5 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_6 = /*#__PURE__*/_createTextVNode("危险按钮")
const _hoisted_7 = /*#__PURE__*/_createTextVNode("朴素按钮")
const _hoisted_8 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_9 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_10 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_11 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_12 = /*#__PURE__*/_createTextVNode("危险按钮")
const _hoisted_13 = /*#__PURE__*/_createTextVNode("圆角按钮")
const _hoisted_14 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_15 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_16 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_17 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_18 = /*#__PURE__*/_createTextVNode("危险按钮")

function render(_ctx, _cache) {
  const _component_lx_button = _resolveComponent("lx-button")
  const _component_lx_row = _resolveComponent("lx-row")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, null, {
          default: _withCtx(() => [
            _hoisted_1
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { type: "primary" }, {
          default: _withCtx(() => [
            _hoisted_2
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { type: "success" }, {
          default: _withCtx(() => [
            _hoisted_3
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { type: "info" }, {
          default: _withCtx(() => [
            _hoisted_4
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { type: "warning" }, {
          default: _withCtx(() => [
            _hoisted_5
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { type: "danger" }, {
          default: _withCtx(() => [
            _hoisted_6
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, { plain: "" }, {
          default: _withCtx(() => [
            _hoisted_7
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "primary",
          plain: ""
        }, {
          default: _withCtx(() => [
            _hoisted_8
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "success",
          plain: ""
        }, {
          default: _withCtx(() => [
            _hoisted_9
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "info",
          plain: ""
        }, {
          default: _withCtx(() => [
            _hoisted_10
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "warning",
          plain: ""
        }, {
          default: _withCtx(() => [
            _hoisted_11
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "danger",
          plain: ""
        }, {
          default: _withCtx(() => [
            _hoisted_12
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, { round: "" }, {
          default: _withCtx(() => [
            _hoisted_13
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "primary",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_14
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "success",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_15
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "info",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_16
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "warning",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_17
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "danger",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_18
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, {
          icon: "lx-icon-search",
          circle: ""
        }),
        _createVNode(_component_lx_button, {
          type: "primary",
          icon: "lx-icon-edit",
          circle: ""
        }),
        _createVNode(_component_lx_button, {
          type: "success",
          icon: "lx-icon-check",
          circle: ""
        }),
        _createVNode(_component_lx_button, {
          type: "info",
          icon: "lx-icon-message",
          circle: ""
        }),
        _createVNode(_component_lx_button, {
          type: "warning",
          icon: "lx-icon-star-off",
          circle: ""
        }),
        _createVNode(_component_lx_button, {
          type: "danger",
          icon: "lx-icon-delete",
          circle: ""
        })
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"lixi-demo1": (function() {

    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("默认按钮")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_4 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_5 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_6 = /*#__PURE__*/_createTextVNode("危险按钮")
const _hoisted_7 = /*#__PURE__*/_createTextVNode("朴素按钮")
const _hoisted_8 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_9 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_10 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_11 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_12 = /*#__PURE__*/_createTextVNode("危险按钮")

function render(_ctx, _cache) {
  const _component_lx_button = _resolveComponent("lx-button")
  const _component_lx_row = _resolveComponent("lx-row")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, { disabled: "" }, {
          default: _withCtx(() => [
            _hoisted_1
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "primary",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_2
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "success",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_3
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "info",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_4
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "warning",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_5
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "danger",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_6
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, {
          plain: "",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_7
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "primary",
          plain: "",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_8
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "success",
          plain: "",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_9
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "info",
          plain: "",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_10
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "warning",
          plain: "",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_11
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "danger",
          plain: "",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_12
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"lixi-demo2": (function() {

    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("文字按钮")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("文字按钮")

function render(_ctx, _cache) {
  const _component_lx_button = _resolveComponent("lx-button")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_lx_button, { type: "text" }, {
      default: _withCtx(() => [
        _hoisted_1
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_button, {
      type: "text",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_2
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"lixi-demo3": (function() {

    const { resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, withCtx: _withCtx, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("搜索")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("上传")
const _hoisted_3 = /*#__PURE__*/_createElementVNode("i", { class: "lx-icon-upload lx-icon--right" }, null, -1 /* HOISTED */)

function render(_ctx, _cache) {
  const _component_lx_button = _resolveComponent("lx-button")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_lx_button, {
      type: "primary",
      icon: "lx-icon-edit"
    }),
    _createVNode(_component_lx_button, {
      type: "primary",
      icon: "lx-icon-share"
    }),
    _createVNode(_component_lx_button, {
      type: "primary",
      icon: "lx-icon-delete"
    }),
    _createVNode(_component_lx_button, {
      type: "primary",
      icon: "lx-icon-search"
    }, {
      default: _withCtx(() => [
        _hoisted_1
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_button, { type: "primary" }, {
      default: _withCtx(() => [
        _hoisted_2,
        _hoisted_3
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"lixi-demo4": (function() {

    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("上一页")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("下一页")
const _hoisted_3 = /*#__PURE__*/_createElementVNode("i", { class: "lx-icon-arrow-right lx-icon--right" }, null, -1 /* HOISTED */)

function render(_ctx, _cache) {
  const _component_lx_button = _resolveComponent("lx-button")

  return (_openBlock(), _createElementBlock("div", null, [
    _createElementVNode("div", null, [
      _createVNode(_component_lx_button, {
        type: "primary",
        icon: "lx-icon-arrow-left"
      }, {
        default: _withCtx(() => [
          _hoisted_1
        ]),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_lx_button, { type: "primary" }, {
        default: _withCtx(() => [
          _hoisted_2,
          _hoisted_3
        ]),
        _: 1 /* STABLE */
      })
    ])
  ]))
}

    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"lixi-demo5": (function() {

    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("加载中")

function render(_ctx, _cache) {
  const _component_lx_button = _resolveComponent("lx-button")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_lx_button, {
      type: "primary",
      loading: true
    }, {
      default: _withCtx(() => [
        _hoisted_1
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"lixi-demo6": (function() {

    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("默认按钮")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("中等按钮")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("小型按钮")
const _hoisted_4 = /*#__PURE__*/_createTextVNode("超小按钮")
const _hoisted_5 = /*#__PURE__*/_createTextVNode("默认按钮")
const _hoisted_6 = /*#__PURE__*/_createTextVNode("中等按钮")
const _hoisted_7 = /*#__PURE__*/_createTextVNode("小型按钮")
const _hoisted_8 = /*#__PURE__*/_createTextVNode("超小按钮")

function render(_ctx, _cache) {
  const _component_lx_button = _resolveComponent("lx-button")
  const _component_lx_row = _resolveComponent("lx-row")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, null, {
          default: _withCtx(() => [
            _hoisted_1
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { size: "medium" }, {
          default: _withCtx(() => [
            _hoisted_2
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { size: "small" }, {
          default: _withCtx(() => [
            _hoisted_3
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { size: "mini" }, {
          default: _withCtx(() => [
            _hoisted_4
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, { round: "" }, {
          default: _withCtx(() => [
            _hoisted_5
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          size: "medium",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_6
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          size: "small",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_7
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          size: "mini",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_8
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_row)
  ]))
}

    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
```

```js
import * as Vue from 'vue';
      export default {
        name: 'component-doc-1634251959384',
        components: {
          "lixi-demo5_0": (function() {

    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("默认按钮")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_4 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_5 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_6 = /*#__PURE__*/_createTextVNode("危险按钮")
const _hoisted_7 = /*#__PURE__*/_createTextVNode("朴素按钮")
const _hoisted_8 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_9 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_10 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_11 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_12 = /*#__PURE__*/_createTextVNode("危险按钮")
const _hoisted_13 = /*#__PURE__*/_createTextVNode("圆角按钮")
const _hoisted_14 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_15 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_16 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_17 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_18 = /*#__PURE__*/_createTextVNode("危险按钮")

function render(_ctx, _cache) {
  const _component_lx_button = _resolveComponent("lx-button")
  const _component_lx_row = _resolveComponent("lx-row")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, null, {
          default: _withCtx(() => [
            _hoisted_1
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { type: "primary" }, {
          default: _withCtx(() => [
            _hoisted_2
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { type: "success" }, {
          default: _withCtx(() => [
            _hoisted_3
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { type: "info" }, {
          default: _withCtx(() => [
            _hoisted_4
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { type: "warning" }, {
          default: _withCtx(() => [
            _hoisted_5
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { type: "danger" }, {
          default: _withCtx(() => [
            _hoisted_6
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, { plain: "" }, {
          default: _withCtx(() => [
            _hoisted_7
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "primary",
          plain: ""
        }, {
          default: _withCtx(() => [
            _hoisted_8
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "success",
          plain: ""
        }, {
          default: _withCtx(() => [
            _hoisted_9
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "info",
          plain: ""
        }, {
          default: _withCtx(() => [
            _hoisted_10
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "warning",
          plain: ""
        }, {
          default: _withCtx(() => [
            _hoisted_11
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "danger",
          plain: ""
        }, {
          default: _withCtx(() => [
            _hoisted_12
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, { round: "" }, {
          default: _withCtx(() => [
            _hoisted_13
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "primary",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_14
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "success",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_15
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "info",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_16
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "warning",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_17
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "danger",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_18
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, {
          icon: "lx-icon-search",
          circle: ""
        }),
        _createVNode(_component_lx_button, {
          type: "primary",
          icon: "lx-icon-edit",
          circle: ""
        }),
        _createVNode(_component_lx_button, {
          type: "success",
          icon: "lx-icon-check",
          circle: ""
        }),
        _createVNode(_component_lx_button, {
          type: "info",
          icon: "lx-icon-message",
          circle: ""
        }),
        _createVNode(_component_lx_button, {
          type: "warning",
          icon: "lx-icon-star-off",
          circle: ""
        }),
        _createVNode(_component_lx_button, {
          type: "danger",
          icon: "lx-icon-delete",
          circle: ""
        })
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"lixi-demo5_1": (function() {

    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("默认按钮")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_4 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_5 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_6 = /*#__PURE__*/_createTextVNode("危险按钮")
const _hoisted_7 = /*#__PURE__*/_createTextVNode("朴素按钮")
const _hoisted_8 = /*#__PURE__*/_createTextVNode("主要按钮")
const _hoisted_9 = /*#__PURE__*/_createTextVNode("成功按钮")
const _hoisted_10 = /*#__PURE__*/_createTextVNode("信息按钮")
const _hoisted_11 = /*#__PURE__*/_createTextVNode("警告按钮")
const _hoisted_12 = /*#__PURE__*/_createTextVNode("危险按钮")

function render(_ctx, _cache) {
  const _component_lx_button = _resolveComponent("lx-button")
  const _component_lx_row = _resolveComponent("lx-row")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, { disabled: "" }, {
          default: _withCtx(() => [
            _hoisted_1
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "primary",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_2
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "success",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_3
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "info",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_4
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "warning",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_5
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "danger",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_6
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, {
          plain: "",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_7
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "primary",
          plain: "",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_8
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "success",
          plain: "",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_9
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "info",
          plain: "",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_10
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "warning",
          plain: "",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_11
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          type: "danger",
          plain: "",
          disabled: ""
        }, {
          default: _withCtx(() => [
            _hoisted_12
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"lixi-demo5_2": (function() {

    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("文字按钮")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("文字按钮")

function render(_ctx, _cache) {
  const _component_lx_button = _resolveComponent("lx-button")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_lx_button, { type: "text" }, {
      default: _withCtx(() => [
        _hoisted_1
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_button, {
      type: "text",
      disabled: ""
    }, {
      default: _withCtx(() => [
        _hoisted_2
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"lixi-demo5_3": (function() {

    const { resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, withCtx: _withCtx, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("搜索")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("上传")
const _hoisted_3 = /*#__PURE__*/_createElementVNode("i", { class: "lx-icon-upload lx-icon--right" }, null, -1 /* HOISTED */)

function render(_ctx, _cache) {
  const _component_lx_button = _resolveComponent("lx-button")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_lx_button, {
      type: "primary",
      icon: "lx-icon-edit"
    }),
    _createVNode(_component_lx_button, {
      type: "primary",
      icon: "lx-icon-share"
    }),
    _createVNode(_component_lx_button, {
      type: "primary",
      icon: "lx-icon-delete"
    }),
    _createVNode(_component_lx_button, {
      type: "primary",
      icon: "lx-icon-search"
    }, {
      default: _withCtx(() => [
        _hoisted_1
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_button, { type: "primary" }, {
      default: _withCtx(() => [
        _hoisted_2,
        _hoisted_3
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"lixi-demo5_4": (function() {

    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("上一页")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("下一页")
const _hoisted_3 = /*#__PURE__*/_createElementVNode("i", { class: "lx-icon-arrow-right lx-icon--right" }, null, -1 /* HOISTED */)

function render(_ctx, _cache) {
  const _component_lx_button = _resolveComponent("lx-button")

  return (_openBlock(), _createElementBlock("div", null, [
    _createElementVNode("div", null, [
      _createVNode(_component_lx_button, {
        type: "primary",
        icon: "lx-icon-arrow-left"
      }, {
        default: _withCtx(() => [
          _hoisted_1
        ]),
        _: 1 /* STABLE */
      }),
      _createVNode(_component_lx_button, { type: "primary" }, {
        default: _withCtx(() => [
          _hoisted_2,
          _hoisted_3
        ]),
        _: 1 /* STABLE */
      })
    ])
  ]))
}

    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"lixi-demo5_5": (function() {

    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("加载中")

function render(_ctx, _cache) {
  const _component_lx_button = _resolveComponent("lx-button")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_lx_button, {
      type: "primary",
      loading: true
    }, {
      default: _withCtx(() => [
        _hoisted_1
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"lixi-demo5_6": (function() {

    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("默认按钮")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("中等按钮")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("小型按钮")
const _hoisted_4 = /*#__PURE__*/_createTextVNode("超小按钮")
const _hoisted_5 = /*#__PURE__*/_createTextVNode("默认按钮")
const _hoisted_6 = /*#__PURE__*/_createTextVNode("中等按钮")
const _hoisted_7 = /*#__PURE__*/_createTextVNode("小型按钮")
const _hoisted_8 = /*#__PURE__*/_createTextVNode("超小按钮")

function render(_ctx, _cache) {
  const _component_lx_button = _resolveComponent("lx-button")
  const _component_lx_row = _resolveComponent("lx-row")

  return (_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, null, {
          default: _withCtx(() => [
            _hoisted_1
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { size: "medium" }, {
          default: _withCtx(() => [
            _hoisted_2
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { size: "small" }, {
          default: _withCtx(() => [
            _hoisted_3
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, { size: "mini" }, {
          default: _withCtx(() => [
            _hoisted_4
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_row, null, {
      default: _withCtx(() => [
        _createVNode(_component_lx_button, { round: "" }, {
          default: _withCtx(() => [
            _hoisted_5
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          size: "medium",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_6
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          size: "small",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_7
          ]),
          _: 1 /* STABLE */
        }),
        _createVNode(_component_lx_button, {
          size: "mini",
          round: ""
        }, {
          default: _withCtx(() => [
            _hoisted_8
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_lx_row)
  ]))
}

    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
```