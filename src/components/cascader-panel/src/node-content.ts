import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'NodeContent',
  render() {
    const { node, panel } = this.$parent
    const { data, label } = node
    const { renderLabelFn } = panel
    return h(
      'span',
      { class: 'lx-cascader-node__label' },
      renderLabelFn ? renderLabelFn({ node, data }) : label,
    )
  },
})
