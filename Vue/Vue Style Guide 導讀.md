# Vue Style Guide 導讀

* 43:31 Mixins 教學 (講得很好)
> http://t.cn/Rd3y0Va 

* Mixins Note
> http://t.cn/Rd3JSv8

# A (必要)

## 組件的命名 
* template中
用 "多個單字" 組成並用連字號命名 
> 避免未來衝突、HTML 無大小寫分
* script / 檔名 可用 駝峰寫法

## data(){}
* 小心使用 箭頭函式 於 Vue
> 避免 this 綁定錯誤

* data 內的 屬性不可以 _ 或 $ 做為開頭!
<!-- 風格指南 私有屬性名 有詳解 -->
因為他把 $ 當做 可以從 元件外面 來取得部分的屬性
Ex: $data 避免衝突，所以會報錯

## props 盡可能詳細
* 驗證失敗會有 console 警告

* prop 於 instance 被建立前驗證
此時的 data / computed 是無法使用的

* type 也可以是函數

```js
  props: { author: Person }
  function Person (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  props: {
    src: {
      type: [String, Number] // 多種條件
      required: true,
      // default 也可用function
      default: 'test',
      default: function() {
        return 'test'
      }
      // 自定義 驗證函數
      validator: function(val) {
        // false 會有 console 警告
        return val > 10
      }
      validator: function(val) {
        return [
          'syncing',
          'synced',
          'version-confict',
          'error'
        ].indexOf(val) !== -1
      }
    }
  },
```

## v-for :key="obj.id"
> Vue 為了 減少操作 DOM 成本，替換資料並不會重建 DOM
* Key 必須是唯一值
* 為了識別 DOM，避免重複使用而導致選到錯誤的 DOM
當操作 DOM後，在原本位置的 DOM 就會刪除!

## 避免將 v-for v-if 一起用
效能考量 v-for 優先於 v-if
迴圈中 每一次都要跑 v-if

### 解法
1. 法1: 將 v-if 拉去外層即可
2. 法2: 先 filter 過陣列再做 v-for

## CSS Scoped
產生 .class[data-s-0]


## 屬性命名規則 Plugin & Mixins
* 注意命名方法
建議加上 該 Mixins 名稱當做前墜
避免跟其他 Mixins / 元件 methods 搞混

## 屬性命名規則Mixin 用法
* 注意點 !!!!!!!
> 當載入 Mixin 後 
* 載入的 LifeCycle 程序 也會執行
來自 Mixins 的 會先執行 !!!

> 如果 Mixin 與 元件中 有同名 Function
* 元件中的 Function 優先權較高

```js
  // 在元件中 加上 mixins 屬性
  mixins: [myMixin, myMixin1],

  // 會把下面兩個特性都導入該元件
  const myMixin = {
    created(){ this.hello() }
    methods{
      $_myMixin_hello(){ console.log('Hello') }
    }
  }
```

# B (可讀性)  [檔案取名為主]

## 組件命名規則
分成一支檔案 (Vue-cli即可)

* 檔案命名 MyCompo 或 my-compo

### 分組命名 (類似 BEM)
1. BaseButton BaseIcon
2. AppButton AppIcon
用該頁會用到的 當做前綴

## 每頁只使用一次的組件
> Ex: TheHeader TheFooter TheSidebar
* 可用 The 前墜命名 表其唯一性
* 這些組件 不該有 props

## 緊密耦合的組件
建議在名字上，加上其上層元件的名字
> Ex: TodoList / TodoListItem / TodoListItemBtn

## 元件命名的順序
ClearSearchButton
> 可分三部分
1. 所屬 Search
2. 元件類別 Button
3. 功能 Clear

> 統一命名順序較佳 
SearchButtonClear
* 所屬 > 類別 > 功能

## Sel-closing Component
## 模板大小寫
* 用 Vue-cli 等同於 使用 template 屬性
因此無此問題

```html
  <div id="app">
    <!-- 正確寫法 -->
    <my-compo></my-compo>

    <!-- 這個 component 會編譯出來 -->
    <my-compo /> 

    <!-- 但這個不會被編譯，因為 html 會找不到 closeTag 而出錯 -->
    <h1>Hi</h1>

  </div>
```

## DOM 解析 (同上 用 template 包起來即可)
* 要在這種元件中 使用 自訂 compo 要小心!
Ex: Select 內部只能使用 options (類推)

## props 命名 [HTML不分大小寫]
props: { greetingText: String }
<div greeting-text="hi"></div>

## computed & view 乾淨化
複雜運算 放入 computed
computed 盡可能 原子化

## 元件中 避免操作 this.$parent
* 元件 應該要可獨立 
如果有操作 父層的動作，代表與父層有上下關連 (無法複用)
應該 純粹使用 props 由上而下溝通

* 由下而上 傳遞資料 要用 $emit Events [待找資料]

## 注意陣列、物件更新的機制
有些方法不會被偵測到
1. 直接修改索引值
this.arr[2] = 123 
2. 直接修改長度
this.arr.length = 2 

3. 直接對物件新增屬性 (並不會追蹤不存在的屬性)
this.user.age
> 物件解法
* this.$set(obj, key, val) 或 Vue.set
> this.$set(this.user, 'age', 32)

### splice 解法
* arr.splice( index , length , value)
index default 0 
length 為 加入新資料位置 或 

1. 可用 arr.splice(2, 1, 123)
2. 可用 arr.splice(2)



# C (程式碼一致性)
# D (謹慎使用) 效能調校 & 潛在風險