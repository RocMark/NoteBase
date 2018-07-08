import Vue from 'vue';
import Vuex from 'vuex';

// Vuex 允許我們將 store 切割成模塊 (module)
// 每個模塊擁有 自己的 state、mutation、action

// 引用 status 模塊主文件 (state 存放處)
import status from './modules/status/index';

Vue.use(Vuex);

// 此為 Store 文件，用來統一通知有引用到 dataStatus的所有元件
export default new Vuex.Store({
  strict: true,
  modules: {
    dataStatus: status,
  },
});
