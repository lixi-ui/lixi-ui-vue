import Button from './components/button/src/index';
import Tree from './components/tree/src/index';
import row from './components/row/src/index';
import col from './components/col/src/index';
import Container from './components/container/src/index';

import './style/src/index.scss'

var components = {
  Button,
  Tree,
  row,
  col,
  Container
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

