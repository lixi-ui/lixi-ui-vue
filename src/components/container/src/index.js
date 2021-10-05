import Container from './container.vue'
import Aside from './aside.vue'
import Footer from './footer.vue'
import Header from './header.vue'
import Main from './main.vue'


Container.install = (app) => {
  app.component(Container.name, Container)
  app.component(Aside.name, Aside)
  app.component(Footer.name, Footer)
  app.component(Header.name, Header)
  app.component(Main.name, Main)
}

Container.Aside = Aside
Container.Footer = Footer
Container.Header = Header
Container.Main = Main

const _Container = Container

export default _Container
export const ElContainer = _Container
export const ElAside = Aside
export const ElFooter = Footer
export const ElHeader = Header
export const ElMain = Main
