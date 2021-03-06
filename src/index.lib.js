import components from './components.ts'

var install = function (Vue) {
  Object.keys(components).forEach((key)=>{
    Vue.use(components[key])
  })
}

export * from './components.ts'

export default {
  install,
  version: '0.0.9'
}
