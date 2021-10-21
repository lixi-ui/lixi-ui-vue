import Row from './row'

Row.install = (app) => {
  app.component(Row.name, Row)
}


export default Row;
export const LxRow = Row;