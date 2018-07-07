// mutation_type 存放 action & mutation 共通變數用
import * as types from './mutation_type'

export default {
  // 元件 透過 dispatch 觸發此 Function
  actionFn({ commit }, data) {
    // types.VUEX_TEST 表要 commit 到 mutation的位置
    // data 為 從元件傳來的參數 要傳過去
    commit(types.VUEX_TEST, data)
  },
}
