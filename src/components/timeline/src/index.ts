import Timeline from './src/index.vue'
import TimelineItem from './src/item.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@lixi/utils/types'

Timeline.install = (app: App): void => {
  app.component(Timeline.name, Timeline)
  app.component(TimelineItem.name, TimelineItem)
}

Timeline.TimelineItem = TimelineItem

const _Timeline = Timeline as any as SFCWithInstall<typeof Timeline> & {
  TimelineItem: typeof TimelineItem
}

export default _Timeline
export const LxTimeline = _Timeline
export const LxTimelineItem = TimelineItem
