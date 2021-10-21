<template>
  <ul v-show="visible" class="lx-select-group__wrap">
    <li class="lx-select-group__title">{{ label }}</li>
    <li>
      <ul class="lx-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, provide, inject, ref, reactive, toRefs, getCurrentInstance, onMounted } from 'vue'
import { selectGroupKey, selectKey, selectEvents } from './token'

export default defineComponent({
  name: 'LxOptionGroup',
  componentName: 'LxOptionGroup',

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const visible = ref(true)
    const instance:any = getCurrentInstance()
    const children:any = ref([])

    provide(
      selectGroupKey,
      reactive({
        ...toRefs(props),
      }),
    )

    const select:any = inject(selectKey)

    onMounted(() => {
      children.value = flattedChildren(instance.subTree)
    })

    // get all instances of options
    const flattedChildren = node => {
      const children:any = []
      if (Array.isArray(node.children)) {
        node.children.forEach(child => {
          if (
            child.type &&
            child.type.name === 'LxOption' &&
            child.component &&
            child.component.proxy
          ) {
            children.push(child.component.proxy)
          } else if (child.children?.length) {
            children.push(...flattedChildren(child))
          }
        })
      }
      return children
    }

    const queryChange = () => {
      visible.value = children.value.some(option => option.visible === true)
    }
    select.selectEmitter.on(selectEvents.groupQueryChange, queryChange)

    return {
      visible,
    }
  },
})
</script>
