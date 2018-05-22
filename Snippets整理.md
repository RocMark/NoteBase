# JS Snippets 速查
SCSS Intellisense / SCSS Refactor

# 備註
elem .classList 中間空格
可用 Ctrl+S 自動刪除，可無視

# DOM 查詢 
* 查詢節點 doqs doqsAll 
//// doqs-id doqs-tag doqs-class
* 找父 .parentNode  ////.parent()   
* 找兄 .children (註1) //! children-loop 
////.children()  
* 找子 sib next / pre ////.siblings() 

* 取首子 firstElementChild 
.children[1]
* 取末子 lastElementChild 
.children[1]

## 判斷是否符合該元素  match (註2)

# DOM 操作 (增刪)
* 建節點 createELem -text
* 建文檔碎片 docfrag

* 複製節點  cloneElem
* 刪除節點  el.remove()  [IE11 X]
elem.parentNode.removeChild(elem)

* 加入節點 (首)  appendChild
* 加入節點 (末)  prepend

* 插入節點 //! insertFunc 

# DON 操作 (進階)
* before
elem.before(otherElem)
* replaceWith
elem.replaceWith(otherElem)
* closest
elem.closest('div')

# DOM CSS
//! 必須使用camel   .style.borderBottom
若要設定多個css屬性，寫成class較佳
* classList   add / remove / toggle
* cssText

* 判斷是否有 class
.classList.contains('className')

* 刪除css屬性 設為 '' / null / inherit 即可
elem.style.padding = null
elem.style.color = 'inherit'
* css-getProperty  (註3)

# 事件
* addEv
//? Once
elem.addEventListener('click', Func, { once: true })
* addEvall 
//// 迴圈 + addEv 用 事件代理較佳

## Fuck IE 不支援   
[Polyfill.io] 向下相容實作
* NodeList 可用 forEach
* DOM 操作進階
* Array.from()

## 補充資料

### children [註1]
取得結果為 HTMLCollection 無法用 forEach，
需要先 Array.from() 先轉成 array

## 判斷是否符合該元素  match (註2)
1. matches()
2. match snippets
用於事件代理 判斷 class
3. 利用 querySelector
```js
  el.matches('div.bar') //* 回Boolean
  if (e.target.classList.contains('')) {}
  const btn = parent.qs('[type="button"]')
```

### css 選取差異 [註3]
* css 樣式
inline-style / html <style> / 外部 css file
* style 
可讀可寫、但僅取得 html-inline樣式的屬性
* window.getComputedStyle()
只可讀、但可以取得  //* css-getProperty
```js
  window.getComputedStyle(elem,null).getPropertyValue('padding')
```