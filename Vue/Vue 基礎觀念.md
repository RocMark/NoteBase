# Vue
框架強調資料，資料驅動

# SEO
SPA 補上一段 Server Side Render (SSR) 較佳

#　Vue 好處
* 不需要直接處理畫面
使用雙向綁定，資料變動，即改變畫面
使用設定好的模板，去對應資料
* 環境好準備
cdn 即可

# 觀念
* 雙向綁定 
> 免去事件監聽
v-model 綁 data
最常用於 form 表單
* Template
Vue 的 雙括號為 innerText
* 要用 HTML 應使用 v-html=""
* Vue 中的 this 會指向 new 的實體
常用 箭頭函式 去避免產生新的 this
Ex: this.computed

# computed
用於需要處理的資料
1. 用 v-bind 綁定 input & data(){keyWord:''}
2. 當 user 輸入資料，data() 中 keyWord 改變
3. keyWord改變，連動到 computed 中有使用到 this.keyWord 的 Function
4. 當 含 this.keyWord 的 Function 變動，呼叫該 Function 的 Function 也會重新運行 
Ex: filterArray()

# 模板概念
* {{}} 對應到 innerText
* v-html 較少用了
如果是自己產的沒問題，
若從其他地方取來的，容易被串改，盡量避免
* v-html="highLight(傳入變數)" 對應 innerHTML
highLight 為 method 中的 Function
該 Function return htmlStr

* 使用 HTML <template>
v-if="此處撰寫判斷式"
v-else="此處撰寫判斷式"

v-for="city in filterArray"

# Vuex Strict
* strict: true,
嚴格模式，只用於開發 (會觀察每層的資料較耗能)
> 如果使用 cli 可用 strict: process.env.NODE_ENV !== 'production'

* 警告
> 需要遵循 Vuex 資料流程圖
避免 compo 未經過 mutation 直接 修改 state資料
// Do not mutate vuex store state outside mutation handlers !!