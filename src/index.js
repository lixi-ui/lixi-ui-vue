import Button from './components/button/package/index';
import Tree from './components/tree/package/index';

var components = {
  Button,
  Tree
}

var install = function (Vue) {
  Object.keys(components).forEach((key)=>{
    Vue.use(components[key])
  })
}

export default {
  install,
  version: '0.0.4'
}

