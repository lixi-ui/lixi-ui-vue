<template>
  <div 
    class="demo-block"
    :class="[blockClass]"
  >
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="expanded-wrap">
      <div v-show='isExpanded'>
        <div  v-if="$slots.default" class="description">
          <slot/>
        </div>
        <div class="highlight">
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
import hljs from 'highlight.js'
import { stripScript, stripStyle, stripTemplate, stripSetup, removeSetup } from '../../util'

const stripTemplateAndRemoveTemplate = code => {
  const result = removeSetup(stripTemplate(code))
  if (result.indexOf('<template>') === 0) {
    const html = result.replace(/^<template>/, '').replace(/<\/template>$/,'')
    return html.replace(/^[\r?\n|\r]/, '').replace(/[\r?\n|\r]$/, '').trim()
  }
  return result
}

const sanitizeHTML = str => {
  const temp = document.createElement('div')
  temp.textContent = str
  return temp.innerHTML
}

export default {
  name: 'DemoBlock',
  data(){
    return {
      isExpanded: false,
      codepen: {
        script: '',
        html: '',
        style: '',
      },
    }
  },
  created() {
    const highlight = this.$slots.highlight()
    if (highlight && highlight[0]) {
      let code = ''
      let cur = highlight[0]
      if (cur.type === 'pre' && (cur.children && cur.children[0])) {
        cur = cur.children[0]
        if (cur.type === 'code') {
          code = cur.children
        }
      }
      if (code) {
        this.codepen.html = stripTemplateAndRemoveTemplate(code)
        this.codepen.script = stripScript(code)
        this.codepen.style = stripStyle(code)
        this.codepen.setup = stripSetup(code)
        if (this.codepen.setup) {
          this.hasSetup = true
        }
      }
    }
  },
  methods : {
    handleExpandFn() {
      this.isExpanded = !this.isExpanded
    },
    prettyCode () {
      setTimeout(() => {
        const highlight = this.$el.querySelector('.highlight')
        const hlcode = highlight.querySelector('pre code')
        const innerScript = `<script>
  ${this.displayDemoCode}
${'</sc' + 'ript>'}
`
        const innerStyle = this.codepen.style && this.codepen.style.trim() ? `<style>
  ${this.codepen.style}
</style>
` : ''
        hlcode.innerHTML = sanitizeHTML(`<template>
  ${this.codepen.html}
</template>

${this.displayDemoCode ? innerScript : ''}${innerStyle}`)

        setTimeout(() => {
          if (this.$el.getElementsByClassName('description').length === 0) {
            highlight.style.width = '100%'
            highlight.borderRight = 'none'
          }
          try {
            hljs.highlightBlock(hlcode)
          } catch (error) {
            console.log(error)
          }
        }, 0)
      }, 0)
    },
  },
  computed: {
    blockClass() {
      return `demo-${ this.$router.currentRoute.value.path.split('/').pop() }`
    }
  },
  mounted() {
    this.prettyCode()
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
      .highlight {
        font-family: Menlo,Monaco,Consolas,Courier,monospace;
      }
    }
  }
</style>
