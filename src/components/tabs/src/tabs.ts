import {
  defineComponent,
  Fragment,
  getCurrentInstance,
  h,
  nextTick,
  onMounted,
  onUpdated,
  provide,
  ref,
  watch,
} from 'vue'
import { isPromise } from '@vue/shared'
import { EVENT_CODE } from '@lixi/utils/aria'
import TabNav from './tab-nav.vue'

import type { Component, ComponentInternalInstance, PropType, VNode } from 'vue'
import type {
  BeforeLeave,
  ILxTabsProps,
  ITabType,
  ITabPosition,
  Pane,
  RootTabs,
  UpdatePaneStateCallback,
} from './token'

export default defineComponent({
  name: 'LxTabs',
  components: { TabNav },
  props: {
    type: {
      type: String as PropType<ITabType>,
      default: '',
    },
    activeName: {
      type: String,
      default: '',
    },
    closable: Boolean,
    addable: Boolean,
    modelValue: {
      type: String,
      default: '',
    },
    editable: Boolean,
    tabPosition: {
      type: String as PropType<ITabPosition>,
      default: 'top',
    },
    beforeLeave: {
      type: Function as PropType<BeforeLeave>,
      default: null,
    },
    stretch: Boolean,
  },
  emits: [
    'tab-click',
    'edit',
    'tab-remove',
    'tab-add',
    'input',
    'update:modelValue',
  ],
  setup(props: ILxTabsProps, ctx) {
    const nav$:any = ref(null)
    const currentName = ref(props.modelValue || props.activeName || '0')
    const panes:any = ref([])
    const instance:any = getCurrentInstance()
    const paneStatesMap = {}

    provide<RootTabs>('rootTabs', {
      props,
      currentName,
    })

    provide<UpdatePaneStateCallback>('updatePaneState', (pane: Pane) => {
      paneStatesMap[pane.uid] = pane
    })

    watch(
      () => props.activeName,
      modelValue => {
        setCurrentName(modelValue)
      },
    )

    watch(
      () => props.modelValue,
      modelValue => {
        setCurrentName(modelValue)
      },
    )

    watch(currentName, () => {
      nextTick(() => {
        nav$.value && nav$.value.$nextTick(() => {
          nav$.value && nav$.value.scrollToActiveTab()
        })
      })
      setPaneInstances(true)
    })

    const getPaneInstanceFromSlot = (
      vnode: VNode,
      paneInstanceList: ComponentInternalInstance[] = [],
    ) => {
      Array.from((vnode.children || []) as ArrayLike<VNode>).forEach(node => {
        let type = node.type
        type = (type as Component).name || type
        if (type === 'LxTabPane' && node.component) {
          paneInstanceList.push(node.component)
        } else if (type === Fragment || type === 'template') {
          getPaneInstanceFromSlot(node, paneInstanceList)
        }
      })
      return paneInstanceList
    }

    const setPaneInstances = (isForceUpdate = false) => {
      if (ctx.slots.default) {
        const children = instance.subTree.children

        const content = Array.from(children as ArrayLike<VNode>).find(
          ({ props }:any) => {
            return props.class === 'lx-tabs__content'
          },
        )

        if (!content) return

        const paneInstanceList: Pane[] = getPaneInstanceFromSlot(content).map(
          paneComponent => {
            return paneStatesMap[paneComponent.uid]
          },
        )
        const panesChanged = !(
          paneInstanceList.length === panes.value.length &&
          paneInstanceList.every(
            (pane, index) => pane.uid === panes.value[index].uid,
          )
        )

        if (isForceUpdate || panesChanged) {
          panes.value = paneInstanceList
        }
      } else if (panes.value.length !== 0) {
        panes.value = []
      }
    }

    const changeCurrentName = value => {
      currentName.value = value
      ctx.emit('input', value)
      ctx.emit('update:modelValue', value)
    }

    const setCurrentName = value => {
      // should do nothing.
      if (currentName.value === value) return

      const beforeLeave = props.beforeLeave
      const before = beforeLeave && beforeLeave(value, currentName.value)
      if (before && isPromise(before)) {
        before.then(
          () => {
            changeCurrentName(value)
            nav$.value.removeFocus?.()
          },
          () => {
            // ignore promise rejection in `before-leave` hook
          },
        )
      } else if (before !== false) {
        changeCurrentName(value)
      }
    }

    const handleTabClick = (tab, tabName, event) => {
      if (tab.props.disabled) return
      setCurrentName(tabName)
      ctx.emit('tab-click', tab, event)
    }

    const handleTabRemove = (pane, ev) => {
      if (pane.props.disabled) return
      ev.stopPropagation()
      ctx.emit('edit', pane.props.name, 'remove')
      ctx.emit('tab-remove', pane.props.name)
    }

    const handleTabAdd = () => {
      ctx.emit('edit', null, 'add')
      ctx.emit('tab-add')
    }

    onUpdated(() => {
      setPaneInstances()
    })

    onMounted(() => {
      setPaneInstances()
    })

    return {
      nav$,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      currentName,
      panes,
    }
  },

  render() {
    const {
      type,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      currentName,
      panes,
      editable,
      addable,
      tabPosition,
      stretch,
    } = this

    const newButton =
      editable || addable
        ? h(
          'span',
          {
            class: 'lx-tabs__new-tab',
            tabindex: '0',
            onClick: handleTabAdd,
            onKeydown: ev => {
              if (ev.code === EVENT_CODE.enter) {
                handleTabAdd()
              }
            },
          },
          [h('i', { class: 'lx-icon-plus' })],
        )
        : null

    const header = h(
      'div',
      {
        class: ['lx-tabs__header', `is-${tabPosition}`],
      },
      [
        newButton,
        h(TabNav, {
          currentName,
          editable,
          type,
          panes,
          stretch,
          ref: 'nav$',
          onTabClick: handleTabClick,
          onTabRemove: handleTabRemove,
        }),
      ],
    )

    const panels = h(
      'div',
      {
        class: 'lx-tabs__content',
      },
      this.$slots?.default(),
    )

    return h(
      'div',
      {
        class: {
          'lx-tabs': true,
          'lx-tabs--card': type === 'card',
          [`lx-tabs--${tabPosition}`]: true,
          'lx-tabs--border-card': type === 'border-card',
        },
      },
      tabPosition !== 'bottom' ? [header, panels] : [panels, header],
    )
  },
})
