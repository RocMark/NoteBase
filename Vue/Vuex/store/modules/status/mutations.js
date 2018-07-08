export default {
  // VUEX_TEST 要與 actions 中 呼叫相同
  VUEX_TEST(state, data) {
    // 根據傳入 data 做 不同操作
    if (data.status === 1) {
      // mutation 去更動 state 的資料
      state.msg = data.text;
    }
    console.log(state.mg, data, 'mutation');
  },
};
