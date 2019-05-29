# Vuex Map系列 (封裝!)
若多個 元件 會用到該屬性
抽取出來並做成 Getter (store 的 computed 屬性)
依賴會被緩存，使用 mapGetter 也較方便統一

# ES6 Spread Operator
```js
  const A = { id: 1, name: 'Tim', }
  const B = { age: 34, wife: 'Mary', }

  const C = { ...A, ...B}
  // 可以取得上述兩個物件的合併 即如下
  // { id: 1, name: 'Tim', age: 34, wife: 'Mary',}
```

# MapGetter 不等於 MapState
只是做映射，在變數多時叫方便而已。
* 背後仍會轉譯成 this.$store.state
mapState 寫法與 mapGetters 寫法不同

* mapGetters 的 val，只能是 String
  會檢查 val in this.$store.getters的值
  false噴錯
```js
  // Store
  state: { count: 10, numb: 100, }
  // component mapState

  computed: mapState({
    count: state => state.count
  })

  // 會被轉成
  computed: {
    count(){
      return this.$store.state.count
    }
  }

  // component mapGetters
  computed: {
    // 可用物件 或 陣列
    ...Vuex.mapGetters({
      // 將 State 中 numb 映射 給 count
      count: 'numb'  // count 值等於 100
    })

    ...Vuex.mapGetters([ 'count' ])
    // 仍會轉成
    count(){
      return this.$store.getters['count']
    }
  }
```

# mapActions & mapMutations
兩者幾乎相同，只是做了一層函數包裝
* 差別在於 store 提交方法
actions => 執行 dispatch 動作呼叫 actions
mutations => 執行 commit 動作呼叫 mutations
```js
  methods: {
    ...mapActions([
      // 映射 this.increment() 
      // 到 this.$store.dispatch('increment')
      'increment'
    ])

    increment(...args) { 
      // 等同於 this.$store.dispatch('increment')
      return this.$store.dispatch.apply(this.$store, ['increment'].concat(args)) 
    }
  }
```