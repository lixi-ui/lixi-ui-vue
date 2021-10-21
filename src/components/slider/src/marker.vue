<script lang="ts">
import { computed, defineComponent, h } from 'vue'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'LxMarker',
  props: {
    mark: {
      type: [String, Object] as PropType<string | Record<string, unknown>>,
      default: () => undefined,
    },
  },
  setup(props:any) {
    const label = computed(() => {
      return typeof props.mark === 'string' ? props.mark : props.mark.label
    })

    return {
      label,
    }
  },
  render() {
    return h('div', {
      class: 'lx-slider__marks-text',
      style: this.mark?.style,
    }, this.label)
  },
})
</script>
