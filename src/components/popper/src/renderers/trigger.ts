import { cloneVNode } from 'vue'
import throwError from '@lixi/utils/error'
import { getFirstValidNode } from '@lixi/utils/vnode'

import type { VNode, Ref, ComponentPublicInstance } from 'vue'

type EventHandler = (e: Event) => any
interface IRenderTriggerProps extends Record<string, unknown> {
  ref: string | Ref<ComponentPublicInstance | HTMLElement>
  onClick?: EventHandler
  onMouseover?: EventHandler
  onMouseleave?: EventHandler
  onFocus?: EventHandler
}
// VNode[] | undefined  IRenderTriggerProps
export default function renderTrigger(trigger: any, extraProps: any):any {
  const firstElement = getFirstValidNode(trigger, 1)
  if (!firstElement) throwError('renderTrigger', 'trigger expects single rooted node')
  return cloneVNode(firstElement, extraProps, true)
}
