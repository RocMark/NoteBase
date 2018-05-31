# 從 jQuery 入門到認識JS 
jQuery IE6-8 用 1.12
> https://goo.gl/KnGxXf

## chrome 中的 $ (review)
console.dir($)
* $ 符號代表 query selector [單選]
ƒ (e,t){return new w.fn.init(e,t)}
* $_  取前一個選取的東西 (chrome才有)
* $$('h1')
選擇多個h1 回傳一陣列
```js
  // $ 字號的內容 [要非用 min.js 才會顯示註解]
  ƒ ( selector, context ) {
      // The jQuery object is actually just the init constructor 'enhanced'
      // Need init if jQuery is called (just allow error to be thrown if not included)
      return new jQuery…
```

# 呼叫 $ / jQuery
* 會幫你 new 一個東西
當你每次呼叫 $() 都會產生一個新的東西出來
//! 因此會占用記憶體
//? 所以仍建議用變數儲存起來 const dom = $()
```js
  const a = $('h1')
  const b = $('h1')
  console.log(a === b) // false 記憶體不同

  const c = document.querySelector('h1')
  const d = document.querySelector('h1')
  console.log(c === d) // true 記憶體相同


	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
  },
```


# jQuery 結構分析
* jQuery 僅公開 $ & jQuery

##  首先處理 Scope
* 建立 IIFE / 撰寫 ready
```js
  //* $ 避免被別人覆蓋
  (function ($) {
    $(function () {
      
    })
  }($))

  // IIFE 傳入變數
  (function (a, b) {
    const name = a
    const age = b
    console.log(name, age)
  }('mark', '48'))
```

## overload 多載
同一個名稱，減少公開的 Function
```js
  function overloadFunc(a) {
    if (!a) {
      console.log('nothing')
    } else if (typeof a === 'string') {
      console.log('a is a string')
    } else if (typeof a === 'number') {
      console.log('a is a number')
    } else if (typeof a === 'function') {
      console.log('a is a function')
    }
  }
  overloadFunc()
  overloadFunc('hey')
  overloadFunc(456)
  overloadFunc(() => { console.log('123') })
```

## why 將 script 放在 body 尾??
放在 head 因為 browser 會一行一行讀取 HTML
讀到 script
1. 進行解析
2. 解析時，無 DOM 會導致程式出錯
=> 解
1. 放在 <\body> 前
2. 撰寫 DOMContentLoaded 

## jQuery ready 解析
$(() => { })
* DOMContentLoaded
DOM讀取完畢，CSS檔、圖影音仍在解析讀取
```js
  let timer
  function stateHandler() {
    console.log(document.readyState)
    switch (document.readyState) {
      case 'interactive':
        console.log('DOMContentLoaded')
        break
      case 'complete':
        console.log('loaded')
        break
      default:
        break
    }
    if (document.readyState !== 'complete') {
      timer = setTimeout(stateHandler)
    }
  }
  timer = setTimeout(stateHandler)
```

## jQuery Ready 原始碼
* document.readyState
描述文件的讀取狀態
1. loading 
document 正在讀取
2. interactive
已完成讀取&解析 (css仍在讀取，DOMCotentLoaded已被觸發)
3. complete
文件 & 子資源皆讀取完畢 (load事件即將被觸發)
```js
  function completed() {
    document.removeEventListener('DOMContentLoaded', completed)
    window.removeEventListener('load', completed)
    jQuery.ready()
  }

  if (document.readyState === 'complete') {
    window.setTimeout(jQuery.ready)
  } else {
    document.addEventListener('DOMContentLoaded', completed)
    window.addEventListener('load', completed)
  }
```

## onload 事件
DOM讀取完畢，CSS檔、圖影音也讀取完畢
chrome 會對圖片做優化，圖片讀取時間不定
onload 較常用於 對單張圖片做onload

## on vs .click
* on 可串多個事件
* on 可用 jQuery新的事件 
.click之類的，只支援較原始的事件
* on 可用自訂事件

## 鏈式
* 鏈式要考慮閱讀性
* return this
```js
  const People = function (name) {
    this.name = name
    this.hey = function () {
      console.log(`hey${this.name}`)
      return this
    }
    this.intro = function () {
      console.log(`My Name is ${this.name}`)
      return this
    }
  }
  const mark = new People('Mark')
  mark.hey().intro()
```