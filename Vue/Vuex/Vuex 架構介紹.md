# Vuex 結構
主要是用來複雜項目之間的組件通信功能。
* 簡單的項目不建議使用

# 記得開啟嚴謹模式
* 上線時 要關閉，此模式非常耗資源
```js
  new Vuex.Store({
    strict: true,
  })
```

# 單向流動!!  流程 (看圖)
  透過統一的數據中心 store 去維護狀態數據
  元件更新時，通知數據中心，
  再由 store 將 共享的狀態，觸發每一個調用它的組件的更新

  * Vue元件 透過 dispatch 觸發 actions 中的 異步操作
  <!-- this.$store.dispatch('actionFn', obj) -->
  Vue compo => dispatch => Actions(異步操作)
  Actions 與後端 API 溝通

  * 再透過 Actions 的 commit 觸發 Mutations 修改 State(數據中心的資料)
  <!-- commit(types.VUEX_TEST,data) -->
  Actions => commit => Mutations(同步操作)

  * 再由 Store 去更新所有調用 State該資料的元件
  <!-- state.msg = data.text -->
  Mutations => mutate => State

  State(data) => render => Vue compo
<!-- ------------------------ -->
# vuex資料夾架構
  將 state、mutation、action 切成多個模塊
  * index.js
  vuex 主文件 store，引用上述模塊，
  再由main.js 引用此文件即可
  * modules
    * status之下

  # Vue 元件 dispatch
  ```js
    oneFn(){
      // actionFn 位於 actions.js
      this.$store.dispatch('actionFn', obj)
    }
  ```
  # status之下
  * index.js (state)
  模塊主文件，存放 state
  state > actions > mutations 順序不可換
  * actions.js (actions)
  撰寫由 Vue 元件 dispatch 觸發的 非同步 Function
  action 做 commit 傳給 mutations
  ```js
  export default {
    actionFn({ commit }, data) {

      // types.VUEX_TEST 表要 commit 到 mutations 的位置
      // data 是由 Vue元件傳來的資料
      commit(types.VUEX_TEST,data)
    }
  }
  ```
  * mutations.js
  接受來自 actions 的 commit
  ```js
  export default {
    // 對應 actions 指定的位置
    [types.VUEX_TEST](state, data){
      // 根據傳入的 data 更動 state 內容
      if(data.state === 1 ) {
        state.msg = data.text
      }
      console.log('mutation',state.msg,data)
    }
  }
  ```
  * mutation_type.js
  存放 action & mutation 共同變量用(全大寫)
<!-- ------------------------ -->
# 引入 main.js
  ```js
    import store from './vuex/index'
    new Vue ({
      store,
    })
  ```
<!-- ------------------------ -->
# 於 component 中使用
  ```js
  methods: {
    oneFn(){
      // commit 只接受一個參數，多個參數用 object包裝
      // 觸發 actions 然後 commit 到 mutations
      // 接著在 mutations 理面 更新資料
      this.$store.dispatch('actionFn',obj)

      console.log(this.$store.state.dataStatus,'資料')
    }
  }
  ```
<!-- ------------------------ -->