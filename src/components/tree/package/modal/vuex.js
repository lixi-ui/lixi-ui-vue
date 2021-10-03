// 这是一个小型的vuex,其实与vuex 基本是差不多的
function Vuex () {
  this.state = {}
  this.mutation = {}
  this.action = {}
}

Vuex.prototype.createStore = function (obj) {
  console.log('this.state', this.state)
  console.log('obj', obj.state)
  this.state = obj?.state()
  // this.mutation = obj?.mutation
  this.action = obj?.action
}

Vuex.prototype.emit = function (obj) {
  this.state = this.mutation[obj.type](this.state)
}

Vuex.prototype.dispatch = function (obj) {
  this.state = this.action[obj.type](this.state)
}


export default Vuex;