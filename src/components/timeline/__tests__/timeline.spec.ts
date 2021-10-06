import { defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import TimeLine from '../src/index.vue'
import TimeLineItem from '../src/item.vue'

const Component = defineComponent({
  components: {
    'lx-timeline': TimeLine,
    'lx-timeline-item': TimeLineItem,
  },
  props: [],
  data() {
    return {
      activities: [{
        content: 'Step 1: xxxxxx',
        timestamp: '2018-04-11',
      }, {
        content: 'Step 2: xxxxxx',
        timestamp: '2018-04-13',
      }, {
        content: 'Step 3: xxxxxx',
        timestamp: '2018-04-15',
      }],
    }
  },
  template: `
    <lx-timeline>
      <lx-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp">
        {{activity.content}}
      </lx-timeline-item>
    </lx-timeline>
  `,
})

describe('TimeLine.vue', () => {
  test('create', () => {
    const wrapper = mount(Component)
    const vm = wrapper.vm

    const contentWrappers = wrapper.findAll('.lx-timeline-item__content')
    contentWrappers.forEach((content, index) => {
      expect(content.text()).toEqual(vm.activities[index].content)
    })

    const timestampWrappers = wrapper.findAll('.lx-timeline-item__timestamp')
    timestampWrappers.forEach((timestamp, index) => {
      expect(timestamp.text()).toEqual(vm.activities[index].timestamp)
    })
  })

  test('placement', () => {
    const wrapper = mount({
      ...Component,
      template: `
        <lx-timeline>
          <lx-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            :placement="activity.placement">
            {{activity.content}}
          </lx-timeline-item>
        </lx-timeline>
      `,
      data() {
        return {
          activities: [{
            content: 'Step 1: xxxxxx',
            timestamp: '2018-04-11',
            placement: 'top',
          }, {
            content: 'Step 2: xxxxxx',
            timestamp: '2018-04-13',
          }, {
            content: 'Step 3: xxxxxx',
            timestamp: '2018-04-15',
          }],
        }
      },
    })
    const timestampWrapper = wrapper.findAll('.lx-timeline-item__timestamp')[0]
    expect(timestampWrapper.classes('is-top')).toBe(true)
  })

  test('hide-timestamp', () => {
    const wrapper = mount({
      ...Component,
      template: `
        <lx-timeline>
          <lx-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            :hide-timestamp="activity.hideTimestamp">
            {{activity.content}}
          </lx-timeline-item>
        </lx-timeline>
      `,
      data() {
        return {
          activities: [{
            content: 'Step 1: xxxxxx',
            timestamp: '2018-04-11',
            hideTimestamp: true,
          }, {
            content: 'Step 2: xxxxxx',
            timestamp: '2018-04-13',
          }, {
            content: 'Step 3: xxxxxx',
            timestamp: '2018-04-15',
          }],
        }
      },
    })
    const timestampWrappers = wrapper.findAll('.lx-timeline-item__timestamp')
    expect(timestampWrappers.length).toEqual(2)
  })

  test('color', () => {
    const wrapper = mount({
      ...Component,
      template: `
        <lx-timeline>
          <lx-timeline-item
            timestamp="2018-04-11"
            color="#f00">
            Step 1: xxxxxx
          </lx-timeline-item>
        </lx-timeline>
      `,
    })
    const vm = wrapper.vm
    const nodeElm = vm.$el.querySelector('.lx-timeline-item__node')
    expect(nodeElm.style.backgroundColor).toEqual('rgb(255, 0, 0)')
  })

  test('type', () => {
    const wrapper = mount({
      ...Component,
      template: `
        <lx-timeline>
          <lx-timeline-item
            timestamp="2018-04-11"
            type="primary">
            Step 1: xxxxxx
          </lx-timeline-item>
        </lx-timeline>
      `,
    })
    const nodeWrapper = wrapper.find('.lx-timeline-item__node')
    expect(nodeWrapper.classes('lx-timeline-item__node--primary')).toBe(true)
  })

  test('size', () => {
    const wrapper = mount({
      ...Component,
      template: `
        <lx-timeline>
          <lx-timeline-item
            timestamp="2018-04-11"
            type="large">
            Step 1: xxxxxx
          </lx-timeline-item>
        </lx-timeline>
      `,
    })
    const nodeWrapper = wrapper.find('.lx-timeline-item__node')
    expect(nodeWrapper.classes('lx-timeline-item__node--large')).toBe(true)
  })

  test('icon', () => {
    const wrapper = mount({
      ...Component,
      template: `
        <lx-timeline>
          <lx-timeline-item
            timestamp="2018-04-11"
            icon="lx-icon-more">
            Step 1: xxxxxx
          </lx-timeline-item>
        </lx-timeline>
      `,
    })
    const nodeWrapper = wrapper.find('.lx-timeline-item__icon')
    expect(nodeWrapper.classes('lx-icon-more')).toBe(true)
  })

  test('dot', () => {
    const wrapper = mount({
      ...Component,
      template: `
        <lx-timeline>
          <lx-timeline-item
            timestamp="2018-04-11"
          >
            <template #dot>
              dot
            </template>
          </lx-timeline-item>
        </lx-timeline>
      `,
    })

    const dotWrapper = wrapper.find('.lx-timeline-item__dot')
    expect(dotWrapper.text()).toEqual('dot')
    expect(wrapper.find('.lx-timeline-item__node').exists()).toBe(false)
  })
})
