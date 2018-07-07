import actions from './actions'
import mutations from './mutations'

// 此為模塊主文件用來給 store 去 import 所有內容
export default {
  state: {
    // state 資料所在
    msg: 'default',
  },
  // state actions mutations 順序不可改
  actions,
  mutations,
}
