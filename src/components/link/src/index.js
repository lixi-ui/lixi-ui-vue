import Link from './index.vue'


Link.install = (app) => {
  app.component(Link.name, Link)
}

const _Link = Link

export default _Link
export const LxLink = _Link
