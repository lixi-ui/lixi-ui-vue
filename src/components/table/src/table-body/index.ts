import {
  defineComponent,
  getCurrentInstance,
  h,
  watch,
  onUnmounted,
  onUpdated,
} from 'vue'
import { addClass, removeClass } from '@lixi/utils/dom'
import isServer from '@lixi/utils/isServer'
import { hColgroup } from '../h-helper'
import useLayoutObserver from '../layout-observer'
import useRender from './render-helper'
import { removePopper } from '../util'
import defaultProps from './defaults'

import type { VNode } from 'vue'
import type { DefaultRow, Table } from '../table/defaults'

export default defineComponent({
  name: 'LxTableBody',
  props: defaultProps,
  setup(props:any) {
    const instance:any = getCurrentInstance()
    const parent = instance.parent as Table<DefaultRow>

    const { wrappedRowRender, tooltipContent, tooltipTrigger } = useRender(
      props,
    )
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent)

    watch(props.store.states.hoverRow, (newVal: any, oldVal: any) => {
      if (!props.store.states.isComplex.value || isServer) return
      let raf = window.requestAnimationFrame
      if (!raf) {
        raf = fn => window.setTimeout(fn, 16)
      }
      raf(() => {
        const rows = instance.vnode.el.querySelectorAll('.lx-table__row')
        const oldRow = rows[oldVal]
        const newRow = rows[newVal]
        if (oldRow) {
          removeClass(oldRow, 'hover-row')
        }
        if (newRow) {
          addClass(newRow, 'hover-row')
        }
      })
    })

    onUnmounted(() => {
      removePopper?.()
    })
    onUpdated(() => {
      removePopper?.()
    })

    return {
      onColumnsChange,
      onScrollableChange,
      wrappedRowRender,
      tooltipContent,
      tooltipTrigger,
    }
  },
  render() {
    const data = this.store.states.data.value || []
    return h(
      'table',
      {
        class: 'lx-table__body',
        cellspacing: '0',
        cellpadding: '0',
        border: '0',
      },
      [
        hColgroup(this.store.states.columns.value),
        h('tbody', {}, [
          data.reduce((acc: VNode[], row) => {
            return acc.concat(
              this.wrappedRowRender(
                row,
                acc.length,
              ),
            )
          }, []),
        ]),
      ],
    )
  },
})
