import {
  createVNode,
  h,
  reactive,
  ref,
  render,
  toRefs,
  Transition,
  vShow,
  withCtx,
  withDirectives,
} from 'vue'
import { removeClass } from '@lixi/utils/dom'

import type { VNode } from 'vue'
import type { Nullable } from '@lixi/utils/types'
import type { ILoadingCreateComponentParams, ILoadingInstance } from './loading.type'

export function createLoadingComponent({
  options,
  globalLoadingOption,
}: any): any {
  let vm: any = null
  let afterLeaveTimer: any = null

  const afterLeaveFlag = ref(false)
  const data = reactive({
    ...options,
    originalPosition: '',
    originalOverflow: '',
    visible: false,
  })

  function setText(text: string) {
    data.text = text
  }

  function destroySelf() {
    const target = data.parent
    if (!target.vLoadingAddClassList) {
      let loadingNumber: any = target.getAttribute('loading-number')
      loadingNumber = Number.parseInt(loadingNumber) - 1
      if (!loadingNumber) {
        removeClass(target, 'lx-loading-parent--relative')
        target.removeAttribute('loading-number')
      } else {
        target.setAttribute('loading-number', loadingNumber.toString())
      }
      removeClass(target, 'lx-loading-parent--hidden')
    }
    if (vm.el && vm.el.parentNode) {
      vm.el.parentNode.removeChild(vm.el)
    }
  }

  function close() {
    const target = data.parent
    target.vLoadingAddClassList = null
    if (data.fullscreen) {
      globalLoadingOption.fullscreenLoading = undefined
    }
    afterLeaveFlag.value = true
    clearTimeout(afterLeaveTimer)

    afterLeaveTimer = window.setTimeout(() => {
      if (afterLeaveFlag.value) {
        afterLeaveFlag.value = false
        destroySelf()
      }
    }, 400)
    data.visible = false
  }

  function handleAfterLeave() {
    if (!afterLeaveFlag.value) return
    afterLeaveFlag.value = false
    destroySelf()
  }

  const componentSetupConfig = {
    ...toRefs(data),
    setText,
    close,
    handleAfterLeave,
  }

  const elLoadingComponent = {
    name: 'LxLoading',
    setup() {
      return componentSetupConfig
    },
    render() {
      const spinner = h('svg', {
        class: 'circular',
        viewBox: this.svgViewBox ? this.svgViewBox : '25 25 50 50',
        ...(this.svg ? { innerHTML: this.svg } : {}),
      }, [
        h('circle', { class: 'path', cx: '50', cy: '50', r: '20', fill: 'none' }),
      ])

      const noSpinner = h('i', { class: this.spinner })

      const spinnerText = h('p', { class: 'lx-loading-text' }, [this.text])

      return h(Transition, {
        name: 'lx-loading-fade',
        onAfterLeave: this.handleAfterLeave,
      }, {
        default: withCtx(() => [withDirectives(createVNode('div', {
          style: {
            backgroundColor: this.background || '',
          },
          class: [
            'lx-loading-mask',
            this.customClass,
            this.fullscreen ? 'is-fullscreen' : '',
          ],
        }, [
          h('div', {
            class: 'lx-loading-spinner',
          }, [
            !this.spinner ? spinner : noSpinner,
            this.text ? spinnerText : null,
          ]),
        ]),
        [[vShow, this.visible]])]),
      })
    },
  }

  vm = createVNode(elLoadingComponent)

  render(vm, document.createElement('div'))

  return {
    ...componentSetupConfig,
    vm,
    get $el() {
      return vm.el as HTMLElement
    },
  }
}
