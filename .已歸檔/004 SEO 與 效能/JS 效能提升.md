# JS 效能提升

## 總是檢查資料型別  typeof
安全性 / 可用性

## 為何 宣告變數 可以提升速度
訪問區域性變數的速度 快於 全域變數
因為不需要透過 Scope Chain 一層一層往上查找
```js
  window.a = 123
  function test(){
    let num = window.a
    // window.a * window.a  // slow
    num * num   // faster
  }
```

## DOM 記憶體相關
* 由 JS 建立的 DOM 物件
必須 append 至 頁面中，否則會一直占據該份記憶體。
* 釋放子元素記憶體
innerHTML = ''
* 刪除節點 (事件代理)
刪除節點前，要刪除註冊在該節點的事件，避免記憶體浪費。

## setInterval 優化效能
用於不斷執行的程式碼，以節省效能
Ex: 捲動、ReSize事件、偵測滑鼠移動

## 字串效能優化
```js
  str += a
  str += b
  str += c
  str += a + b + c
  // 或用陣列儲存在用 join
  const cache = [str, a, b, c]
  cache.join('')
```

## 數字 轉 字串
("" +) > String() > .toString() > new String()

## 浮點數 轉 整數
parseInt() // 實際為 字串轉成數字
應該使用 Math.floor() / Math.round()

## DocFrag
```js
  // 此時並未插入 DOM，僅存於記憶體中
  // 因此對其操作，不會造成渲染
  const frag = document.createDocumentFragment()
  const el = document.createElement('p')
  el.innerHTML = 123
  // 插入 DocFrag 不影響頁面
  // loop 插入 DocFrag 在進行一次性渲染
```

## 使用 cloneNode() 取代 createElement()
字串寫 HTML缺點
1. 無法保證程式碼有效性
2. 字串操作效率低

若文件中存有現成的樣板節點 <template>
使用 cloneNode() 會快於 createElement()

## 使用 firstChild / nextElementSibling
代替 children 進行遍歷
```js
  const fNode = elem.firstChild
  while (node){
    node = node.nextElementSibling
  }
```

## 條件分支
* 可能性 高 排到 低 ，可以減少探測次數
* switch 快於 of 
* 使用三元運算
num = (a > b) ? a : b

## 使用 常量
多處會用到的 常量應該抽取出來
Ex:
1. UI上的字串 : 日後做國際化會更方便
2. URLs : 資源的位置
3. 未來容意更改的值

## 不去任意更動物件
* 不新增屬性 / 方法
* 不重定義方法
應該建立包含該功能的新物件，在做操作
建立自定型別，繼承該物件，在做操作


## 優化迴圈
* 在某些情況下，用減值迭代會更迅速
* 減化終止條件
每次迴圈都會計算終止條件，因此越減越好，
避免有 DOM 操作，將 length 先存於區域變數
* 減化迴圈體
* while > Loop > for in
for in 效能極差 因為會搜尋整個 prototype chain

## 迴圈引用   [查]
* 原理
執行 init，context 參照 el，el又參照內部 function，
導致此 Function 不會被 GC 一直保存在記憶體當中
```js
  function init(){
    const el = doqs('Elem')
    el.onclick = function(){ }   // 不佳
  }
  init()
  //---------------------------------------------
  function clickFunc(){}
  function init(){
    const el = doqs('Elem')
    el.onclick = clickFunc   // 即可解決 迴圈引用
  }
  init()
```

# JS 效能調校
> http://t.cn/R1NFoEe

待學 Chrome Dev Tools 效能調校


可分為 用戶端、伺服器端
# 用戶端 (前端)
* HTTP
* 下載頻寬
* DNS 查詢時間
* CSS 顯示速度
* JS 執行速度 (此文重點)
* AJAX
* Mobile & 瀏覽器特性

# 伺服器 (後端)
* 程式效能 / 資料庫效能
* HTTP 快取策略
* 內容壓縮 gzip
* 輸出快取
* 壓力測試

# HTTP
HTTP 協定 / Keep-Alive / HTTP Header
HTTP 限制、壓縮、快取

# HTML5 / JS
* JS優化
* 離線應用程式 / XHR
* indexedDB
* Web Storage / Web Socket / Web Worker

# CSS3
* 移動、變形特效
* 圓角框線
* 陰影效果
* 網頁字型
* 其他 Sprite / Media Queries

# 調校效能步驟
* 測量 : 數具量化
* 理解 : 了解問題、吸收新知
* 調校 : 修正問題、效能提升

## Object / Array 選擇

# Object
Object用於
* 無順序的陣列
* 需要字串當索引

## 基本原則
* 使用 {} 或 constructor(new) 建立物件最快
* 勿用 Object.create() 建立
效果等同於首條
* 勿用過多繼承 (減少原型鏈層級)
```js
  // 最快 Same
  obj = new Object() 
  obj = {}
  // 中等 使用以定義好的 propObj
  obj = Object.create(Object.prototype, propObj)
  // 最慢
  obj = Object.create(Object.prototype, { p : { value: 1 } })
```

## 基本原則
* 使用 var a = [1, 2, 3]
* 使用一致的型別 ，JS能作最佳化
混合型別，JS會需要作轉型，效能很差
* 索引最好能連貫 (元素間不要中空)
> https://jsperf.com/packed-vs-holey-arrays

