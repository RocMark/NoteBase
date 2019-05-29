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

