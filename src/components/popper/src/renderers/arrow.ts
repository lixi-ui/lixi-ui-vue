import { Comment, h } from 'vue'

export default function renderArrow(showArrow: boolean) {
  return h(Comment, null, '')
    // return showArrow
    // ? h(
    //   'div',
    //   {
    //     ref: 'arrowRef',
    //     class: 'lx-popper__arrow',
    //     'data-popper-arrow': '',
    //   },
    //   null,
    // )
    // : h(Comment, null, '')
}
