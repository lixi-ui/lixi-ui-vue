import { inject, provide } from 'vue'
import Node from '../model/node'

interface NodeMap {
  treeNodeExpand(node: Node): void
  children: NodeMap[]
}

export function useNodeExpandEventBroadcast(props){
  const parentNodeMap = inject<NodeMap>('TreeNodeMap', null as any)
  const currentNodeMap: NodeMap = {
    treeNodeExpand: node => {
      if (props.node !== node) {
        props.node.collapse()
      }
    },
    children: [],
  }

  if (parentNodeMap) {
    parentNodeMap.children.push(currentNodeMap)
  }

  provide('TreeNodeMap', currentNodeMap)

  return {
    broadcastExpanded: (node: Node): void => {
      if (!props.accordion) return
      for(const childNode of currentNodeMap.children) {
        childNode.treeNodeExpand(node)
      }
    },
  }
}
