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
export const LxContainer = _Container
export const LxAside = Aside
export const LxFooter = Footer
export const LxHeader = Header
export const LxMain = Main
