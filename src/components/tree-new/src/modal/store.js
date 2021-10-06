import Vuex from './vuex';

var VuexStore = new Vuex;

// console.log(VuexStore);

function TreeStore(data) {
  var treeData = [ ...data ] // 深拷贝
  var looseTree = looseEqual(treeData)
  // console.log('looseTree', looseTree)
  VuexStore.createStore({
    state () {
      return {
        treeData: looseTree,
        data: data
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    action: { // 使用的是 flux 流模式。也是最简单的模式
      expand(state, data) {
        if (data.node._expand) {
          state.treeData[1]._show = false
          state.treeData[0]._expand = false
        } else {
          state.treeData[1]._show = true
          state.treeData[0]._expand = true
        }
        return state
      },
      update(state, data) {
        var stateOld = { ...state }
        var treeData = [ ...data.data ]
        var looseTree = looseEqual(treeData)
        // console.log('looseTree--', looseTree)
        stateOld.treeData = looseTree
        return stateOld
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
  function recursion(data, _pId, _level, _expand, _show){
    for (var i = 0; i < data.length; i++) {
      var _children = ''
      if(data[i].children){
        for (var j = 0; j < data[i].children.length; j++) {
          _children += _pId + '_' + i + '_' + j
        }
      }
      var obj = {
        _id: _pId + '_' + i,
        _pId: _pId,
        _level: _level,
        _expand: _expand,
        _show: _show,
        _data: data[i],
        _children: _children,
        key: data[i].key,
        value: data[i].value,
      }
      arr.push(obj)
      if(data[i].children){
        recursion(data[i].children, obj._id, obj._level+1, false, false)
      }
    }
  }
  recursion(data, 'r', 1, false, true)
  return arr;
}

export { TreeStore }