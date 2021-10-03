import Vuex from './vuex';

var VuexStore = new Vuex;

// console.log(VuexStore);

function TreeStore(data) {
  var treeData = [ ...data ] // 深拷贝
  console.log('treeData', treeData)
  var looseTree = looseEqual(treeData)
  VuexStore.createStore({
    state () {
      return { treeData: looseTree }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    action: { // 使用的是 flux 流模式。也是最简单的模式
      expand(state) {
        return state
      }
    }
  })
  return VuexStore;
}

function looseEqual(data){
  // 将数据摊平 
  // [{
  //   key: 'k_1',
  //   value: 'v_1',
  //   children: [{
  //     key: 'k_1_1',
  //     value: 'v_1_1'
  //   }]
  // }]
  // 返回
  // [
  //  {
  //   _id: r_0,
  //   _pId: 'r',
  //   _level: '1',
  //   _expand: true,
  //   _data: {
  //     key: 'k_1',
  //     value: 'v_1',
  //     children: [{
  //       key: 'k_1_1',
  //       value: 'v_1_1'
  //     }]
  //   }
  //   _children: 'r_0_1'
  // },
  // {
  //   _id: r_0_0,
  //   _pId: 'r_0',
  //   _level: '2',
  //   _expand: false,
  //   _data: {
  //     key: 'k_1_1',
  //     value: 'v_1_1'
  //   }
  //   _children: ''
  // }
  //]
  var arr = [];
  function recursion(data, _pId, _level, _expand){
    for (var i = 0; i < data.length; i++) {
      var obj = {
        _id: _pId + '_' + i,
        _pId: _pId,
        _level: _level,
        _expand: _expand,
        key: data[i].key,
        value: data[i].value,
        _data: data[i]
      }
      arr.push(obj)
      if(data[i].children){
        recursion(data[i].children, obj._id, obj._level+1, false)
      }
    }
  }
  recursion(data,'r',1,true)
  console.log('arr', arr)
  return arr;
}

export { TreeStore }