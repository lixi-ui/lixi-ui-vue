import isServer from './isServer'

const globalNodes:any = []
let target: any = isServer ? void 0 : document.body

export function createGlobalNode(id?: string) {
  const el = document.createElement('div')

  if (id !== void 0) {
    el.id = id
  }

  target.appendChild(el)
  globalNodes.push(el)

  return el
}

export function removeGlobalNode(el: any) {
  globalNodes.splice(globalNodes.indexOf(el), 1)
  el?.remove()
}

export function changeGlobalNodesTarget(el: any) {
  if (el !== target) {
    target = el

    globalNodes.forEach((el: any) => {
      if (el.contains(target) === false) {
        target.appendChild(el)
      }
    })
  }
}
