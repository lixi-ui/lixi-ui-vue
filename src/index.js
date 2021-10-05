import Button from './components/button/src/index';
import Tree from './components/tree/src/index';

import './style/src/index.scss'

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

