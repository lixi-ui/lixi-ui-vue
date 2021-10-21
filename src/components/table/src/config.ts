import { h } from 'vue'
import LxCheckbox from '@lixi/components/checkbox/src'
import { getPropByPath } from '@lixi/utils/util'

import type { TableColumnCtx } from './table-column/defaults'
import type { Store } from './store'
import type { TreeNode } from './table/defaults'

export const cellStarts = {
  default: {
    order: '',
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
    className: 'lx-table-column--selection',
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
  },
}

// 这些选项不应该被覆盖
export const cellForced = {
  selection: {
    renderHeader: function<T>({ store }: { store: Store<T>; }) {
      function isDisabled() {
        return store.states.data.value && store.states.data.value.length === 0
      }
      return h(LxCheckbox, {
        disabled: isDisabled(),
        indeterminate:
          store.states.selection.value.length > 0 &&
          !store.states.isAllSelected.value,
        'onUpdate:modelValue': store.toggleAllSelection,
        modelValue: store.states.isAllSelected.value,
      })
    },
    renderCell: function<T>({
      row,
      column,
      store,
      $index,
    }: {
      row: T
      column: TableColumnCtx<T>
      store: Store<T>
      $index: any
    }) {
      return h(LxCheckbox, {
        disabled: column.selectable
          ? !column.selectable.call(null, row, $index)
          : false,
        onChange: () => {
          store.commit('rowSelectedChanged', row)
        },
        onClick: (event: Event) => event.stopPropagation(),
        modelValue: store.isSelected(row),
      })
    },
    sortable: false,
    resizable: false,
  },
  index: {
    renderHeader: function<T>({ column }: { column: TableColumnCtx<T>; }) {
      return column.label || '#'
    },
    renderCell: function<T>({
      column,
      $index,
    }: {
      column: TableColumnCtx<T>
      $index: number
    }) {
      let i = $index + 1
      const index = column.index

      if (typeof index === 'number') {
        i = $index + index
      } else if (typeof index === 'function') {
        i = index($index)
      }
      return h('div', {}, [i])
    },
    sortable: false,
  },
  expand: {
    renderHeader: function<T>({ column }: { column: TableColumnCtx<T>; }) {
      return column.label || ''
    },
    renderCell: function<T>({ row, store }: { row: T; store: Store<T>; }) {
      const classes = ['lx-table__expand-icon']
      if (store.states.expandRows.value.indexOf(row) > -1) {
        classes.push('lx-table__expand-icon--expanded')
      }
      const callback = function(e: Event) {
        e.stopPropagation()
        store.toggleRowExpansion(row)
      }
      return h(
        'div',
        {
          class: classes,
          onClick: callback,
        },
        [
          h('i', {
            class: 'lx-icon lx-icon-arrow-right',
          }),
        ],
      )
    },
    sortable: false,
    resizable: false,
    className: 'lx-table__expand-column',
  },
}

export function defaultRenderCell<T>({
  row,
  column,
  $index,
}: {
  row: T
  column: TableColumnCtx<T>
  $index: number
}) {
  const property = column.property
  const value = property && getPropByPath(row, property, false).v
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index)
  }
  return value?.toString?.() || ''
}

export function treeCellPrefix<T>({
  row,
  treeNode,
  store,
}: {
  row: T
  treeNode: TreeNode
  store: Store<T>
}) {
  if (!treeNode) return null
  const ele:any = []
  const callback = function(e) {
    e.stopPropagation()
    store.loadOrToggle(row)
  }
  if (treeNode.indent) {
    ele.push(
      h('span', {
        class: 'lx-table__indent',
        style: { 'padding-left': treeNode.indent + 'px' },
      }),
    )
  }
  if (typeof treeNode.expanded === 'boolean' && !treeNode.noLazyChildren) {
    const expandClasses = [
      'lx-table__expand-icon',
      treeNode.expanded ? 'lx-table__expand-icon--expanded' : '',
    ]
    let iconClasses = ['lx-icon-arrow-right']
    if (treeNode.loading) {
      iconClasses = ['lx-icon-loading']
    }

    ele.push(
      h(
        'div',
        {
          class: expandClasses,
          onClick: callback,
        },
        [
          h('i', {
            class: iconClasses,
          }),
        ],
      ),
    )
  } else {
    ele.push(
      h('span', {
        class: 'lx-table__placeholder',
      }),
    )
  }
  return ele
}
