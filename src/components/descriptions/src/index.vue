<template>
  <div class="lx-descriptions">
    <div v-if="title || extra || $slots.title || $slots.extra" class="lx-descriptions__header">
      <div class="lx-descriptions__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="lx-descriptions__extra">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>

    <div class="lx-descriptions__body">
      <table :class="['lx-descriptions__table', {'is-bordered': border}, descriptionsSize ? `lx-descriptions--${descriptionsSize}` : '']">
        <tbody>
          <template v-for="(row, index) in getRows()" :key="index">
            <lx-descriptions-row :row="row" />
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue'
import { useGlobalConfig } from '@lixi/utils/util'
import { isValidComponentSize } from '@lixi/utils/validators'
import DescriptionsRow from './descriptions-row.vue'
import { lxDescriptionsKey } from './token'

import type { PropType } from 'vue'
import type { ComponentSize } from '@lixi/utils/types'

export default defineComponent({
  name: 'LxDescriptions',
  components: {
    [DescriptionsRow.name]: DescriptionsRow,
  },
  props: {
    border: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Number,
      default: 3,
    },
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    title: {
      type: String,
      default: '',
    },
    extra: {
      type: String,
      default: '',
    },
  },
  setup(props:any, { slots }) {
    provide(lxDescriptionsKey, props)

    const $ELEMENT = useGlobalConfig()
    const descriptionsSize = computed(() => {
      return props.size || $ELEMENT.size
    })

    const flattedChildren = children => {
      const temp = Array.isArray(children) ? children : [children]
      const res:any = []
      temp.forEach(child => {
        if (Array.isArray(child.children)) {
          res.push(...flattedChildren(child.children))
        } else {
          res.push(child)
        }
      })
      return res
    }

    const filledNode = (node, span, count, isLast = false) => {
      if (!node.props) {
        node.props = {}
      }
      if (span > count) {
        node.props.span = count
      }
      if (isLast) {
        // set the last span
        node.props.span = span
      }
      return node
    }

    const getRows = () => {
      const children:any = flattedChildren(slots.default?.()).filter((node:any) => node?.type?.name === 'LxDescriptionsItem')
      const rows:any = []
      let temp:any = []
      let count = props.column
      let totalSpan = 0 // all spans number of item

      children.forEach((node, index) => {
        let span = node.props?.span || 1

        if (index < children.length - 1) {
          totalSpan += span > count ? count : span
        }

        if (index === children.length - 1) {
          // calculate the last item span
          const lastSpan = props.column - totalSpan % props.column
          temp.push(filledNode(node, lastSpan, count, true))
          rows.push(temp)
          return
        }

        if (span < count) {
          count -= span
          temp.push(node)
        } else {
          temp.push(filledNode(node, span, count))
          rows.push(temp)
          count = props.column
          temp = []
        }
      })

      return rows
    }

    return {
      descriptionsSize,
      getRows,
    }
  },
})
</script>
