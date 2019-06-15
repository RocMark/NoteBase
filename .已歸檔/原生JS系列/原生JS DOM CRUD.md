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

# DOM Manipulation Convenience Methods
> https://goo.gl/7U1fW3

//* 免參照父
//? 注意支援度!!!
```js
    elem.remove()

    //* 插入父元素底下
    ul.prepend(newElem) //* 成為首個子

    //* 將 新建元素 插入 已存在元素 之前
    existElem.before(newElem)

    existElem.replaceWith(newElem) 

    //* 尋找最接近的元素
    elem.closest('div')
```


# 插入 / 取代 DOM
//? insertBefore(newElem,existElem)
```js
    //* 插入父元素底下
    ul.prepend(newElem) //* 成為首個子
    ul.appendChild(newElem)  //* 成為末個子

    //* ul 之下 將 新建元素 插入 已存在元素 之前
    ul.insertBefore(新建元素,已存在元素) 
    //! ul.insertAfter() (X) 不存在

    //* 將 新建元素 插入 已存在元素 之前
    existElem.before(newElem)

    //* 取代
    ul.replaceChild(newElem,existElem) //* 參照父

    existElem.replaceWith(newElem) //* 免參照
```

# 刪除 DOM
//! Review!
```js
    //! 現已不需參照父元素
    let elem = doqs('.target')
    elem.remove() //?即可

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