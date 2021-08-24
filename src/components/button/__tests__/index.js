import { mount } from "@vue/test-utils";
import test1 from '../../../test.json';

import Button from '../package/index.vue';

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' },
    })
    console.log('wrapper', wrapper)
    // expect(wrapper.classes()).toContain('el-button--primary')
    // const wrapper = mount(TestVue);
    expect(test1.a).toEqual(1);
  });
})