import Col from './col.ts'

Col.install = (app) => {
  app.component(Col.name, Col)
}


export default Col;