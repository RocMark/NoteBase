# 原生JS 文章 DOM操作 整理
> https://www.ptt.cc/bbs/Ajax/M.1491563311.A.1F2.html

# 大綱
- DOM 建立
- DOM 插入、取代
- DOM 刪除
- DOM 複製
- DOM 修改
//! DocumentFragment

# innerHTML & outerHTML
> jQ html() text()
```js
    // 取代內部 //? 結果為 ul > div
    ul.innerHTML = '<div>ReplaceByThis</div>'
    // 取代外部 //! 只剩下 div
    ul.outerHTML = '<div>ReplaceByThis</div>'
```

# Good Tutorial
> https://www.youtube.com/watch?v=pRN6WFUEFFE

# 建立 DOM
```js
    //* createElement 選擇要創建的物件類型
    const newElem = document.createElement('p')
    newElem.textContent = 'Im NewElem' // 用上方的設定屬性方式設定

    //! 法二
    let op = document.createElement('p')
    let oText = document.createTextNode('TextContent')
    op.appendChild(oText)
    // <p> TextContent </p>
```

# .textContent VS  createTextNode('text')
> https://goo.gl/pR6keQ
//! 可見 DocumentFragment 例子

//* textContent 適用於改變已存在物件的內容
//? createTextNode 
> 適用於新創元素，並且需要放置在另一處



# 插入 / 取代 DOM
//? insertBefore(newElem,existElem)
```js
    //* 會將物件插在 已建立物件的後面
    ul.appendChild(p) 
    //* 物件插在ul下 的 已存在Elem前
    ul.insertBefore(newElem,existElem) 
    //! ul.insertAfter() (X) 不存在
    //? 取代
    ul.replaceChild(replaceElem,oldElem)
```

# 刪除 DOM
//! Review!
```js
    //* 不需要參照 父元素
    elem.parentNode.removeChild(elem)    

    //* 需要參照到 父元素
    parentElem.removeChild(elem)
```

# 複製 DOM
//* 可以用於AJAX 
```js
    let Link = document.querySelector('ul a')
    let copy = Link.cloneNode()
    copy.className = 'copy'
    console.log(copy)
```

# 修改 DOM 內容
//* .innerHTML 傳統做法
> elem.innerHTML = `<h1>Change</h1>`

# 修改 DOM 內容進階
//! DocumentFragment 可以加速渲染速度!!
```js

```