import { h, ref, Teleport, onUnmounted } from 'vue'
import { NOOP } from '@vue/shared'
import isServer from '@lixi/utils/isServer'
import { createGlobalNode, removeGlobalNode } from '@lixi/utils/global-nodes.ts'

import type { VNode, Ref } from 'vue'

export default (contentRenderer: () => VNode, appendToBody: Ref<boolean>) => {
  const isTeleportVisible = ref(false)

  if (isServer) {
    return {
      isTeleportVisible,
      showTeleport: NOOP,
      hideTeleport: NOOP,
      renderTeleport: NOOP,
    }
  }

  let $el: HTMLElement = null

  const showTeleport = () => {
    isTeleportVisible.value = true
    // this allows the delayed showing strategy since the the content itself could be enterable
    // e.g. lx-popper
    if ($el !== null) return

    $el = createGlobalNode()
  }

  const hideTeleport = () => {
    isTeleportVisible.value = false
    if ($el !== null) {
      removeGlobalNode($el)
      $el = null
    }
  }

  const renderTeleport = () => {
    return appendToBody.value !== true
      ? contentRenderer()
      : isTeleportVisible.value
        ? [
          h(
            Teleport,
            { to:  $el },
            contentRenderer(),
          ),
        ]
        : void 0
  }

  onUnmounted(hideTeleport)

  return {
    isTeleportVisible,
    showTeleport,
    hideTeleport,
    renderTeleport,
  }
}