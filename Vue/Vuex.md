# Vuex 三大塊 配合圖

# Vue 資料分3層
1. data  本身的資料
2. props 父傳給子的資料
子無法改父的資料
3. store 共用
屬於大家的資料



* State 等同於 data
會去 Render Compo

* Actions
非同步資料處理走此 (需要跟後端要資料)
1. 可以從 State 讀取資料，只可讀不可寫
2. 亦可由 State getter 取得資料
3. 可以傳送資料給 Mutation (commit)
4. 可以傳給自身 dispatch


* Mutations
同步資料處理走此  (本地端資料)

compo => mutation => state => compo

# Vue 基本元件 component
命名: 單字開頭皆大寫
```js
  const MyCompo = new Vue({
    template: `
    `,
    data() {
      return {
        data: '',
      }
    },
    computed: {},
    methods: {},
    mounted() {},
  })
```



# Vue 所有資料種類
1. data 本身的資料
2. props 父傳給子的資料，子沒有修改權限
3. state 共用的資料 (Vuex.Store)
透過 this.$store.state.屬性名 取得


# Vuex.Store Vue 資料流 (單向 / 參照圖)
# Component出發
1. 元件 欲執行非同步請求時，發送 dispatch
method / mounted 皆可
> dispatch 為一個 promise 後面可以串接 then
this.$store.dispatch('CONTENTS_READ')

2. 進入 Vuex.Store 元素 actions 區域 CONTENTS_READ 方法
3. 該方法 回傳 promise ， then 執行 
context.commit('updateContent', obj)
4. 呼叫 mutation 區域的 updateContent 方法，並把 obj當參數傳入
5. mutations 區域 進行對 state 的資料修改 / 寫入
6. 當 state 資料修改會去 影響 vue 畫面

# Vue 根元素設定
* 根元素才有
el / router (Vue Router) / store (Vuex ) 其他皆為共通
```js
  new Vue({
    el: '#app',
    router,  // Vue Router 用
    store,   // Vuex 用
    mounted() {
      this.store.dispatch('CONTENTS_READ')
    },
  })
```

# Vuex Store
分三大區塊 (依序  參照圖!)
* actions 處理非同步 (與 後端 API 溝通)
* mutations 處理同步資料 (本地資料)
* state
取名任意 推薦: CONTENTS_READ

```js
  const store = new Vuex.Store({
    strict: true,
    state: { 
      contents: [] // 會影響 UI 的資料
    },
    mutations: { 
      // 本地資料 (同步)
      setContents(state, data) {
        // 修改寫入 state資料
        state.contents = data
      }
    },
    actions: {
      // 發送呼叫後端 API (非同步)
      // actions 為 Promise 物件 所以需要有 return 值
      CONTENTS_READ: (context, obj) => {
        // 可以先再此判斷是否有該筆資料在決定要不發送 request
        if (!item) return false
        return axios promise
          // commit 資料進入 mutations
          .then((result) => { context.commit('setContents', obj) })
      },
    },
  })
```
