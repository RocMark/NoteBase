# 從 jQuery 入門到認識JS 

## 1: 2X 分 之後 待重看!!!
load & DOMContentLoaded 處 review

document.readyState

```js
  document.addEventListener('DOMContentLoaded', () => { 
    //* 文件已經完成讀取和解析，但是其他的子資源，如「圖片樣式層次表」，仍然在讀取。這個狀態表示 DOMContentLoaded 事件已經被觸發。
    console.log(document.readyState)
  })
  console.log(document.readyState) // 文檔正在讀取
```


## chrome 中的 $ (review)
$ 符號代表 query selector

## 寫程式
甚麼人? 在甚麼時候? 作甚麼?

## on vs .click
* on 可串多個事件
* on 可用 jQuery新的事件 
.click之類的，只支援較原始的事件
* on 可用自訂事件

##  首件事先處理 Scope
* 建立 IIFE
* 撰寫 ready
```js
  //* $ 避免被別人覆蓋
  (function ($) {
    $(function () {
      
    })
  }($))
```

## overload 多載
同一個名稱，減少建立 Function
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