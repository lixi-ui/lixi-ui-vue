import Row from './row.ts'

Row.install = (app) => {
  app.component(Row.name, Row)
}


export default Row;
export const LxRow = Row;