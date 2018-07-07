/* eslint-disable */

// mutation_type內容 (存放 action & mutation 共通變數用)
const VUEX_TEST = 'VUEX_TEST'


//! Vue Component 呼叫 dispatch 做為起始
// this.$store.dispatch('actionFn', obj)

// state 所在，模塊主文件用來給 store 去 import 所有內容
export default {
  state: {
    // 这里面是要读取或者写入数据的地方
    msg: 'default',
  },
  // state actions mutations 順序不可改
  actions: {
    // 元件 透過 dispatch 觸發此 Function
    actionFn({ commit }, data) {
      // types.VUEX_TEST 表要 commit 到 mutation的位置
      // data 為 從元件傳來的參數 要傳過去
      commit(types.VUEX_TEST, data)
    },
  },
  mutations: {
    // types.VUEX_TEST 對應 actions 指定的位置
    [types.VUEX_TEST](state, data) {
      // 根據傳入資料 做對應資料處理
      if (data.status == 1) {
        // mutation 去 更動 state 資料
        state.msg = data.text
      }
      console.log(state.mg, data, 'mutation')
    },
  },
}
