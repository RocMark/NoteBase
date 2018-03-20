# 原生JS 搜尋 child / parent / siblings
> https://www.youtube.com/watch?v=rBjvPNE2or0

# Note
//* ul.children
//* li.parentNode
//! .nextElementSibling


# 查詢 DOM
> doqs (單一元素) doqsAll(所有符合元素)
//* 串接查詢
```js
    //* 檢查是否符合指定的選擇器
    elem.matches('.target') === true
    let ul = document.querySelector('ul')
    let p = ul.querySelector('p')
    p.style.color = 'red'
```

# 子篇
//? .children 會回傳 NodeList 需要用Loop處理 同doqsAll
```js
    ul.children[0].style.color = '#eee'
    console.log(ul.children)
```

# 父篇 parentNode vs parentElement
//* parentNode (w3c標準)
//// parentElement 僅IE支援

# 兄弟篇
.nextElementSibling
> link.nextElementSibling
> link.previousElementSibling

# nth-child 易出錯處 (用於子元素)
//! 必須 第幾個 & Type 皆符合才取的到正確的
``` js
//*  ul > li*2 + a
doqs('li:nth-child(1)')   // (o)
doqs('li:nth-child(2)')   // (o)

doqs('li:nth-child(3)')   //! (x) 第三個元素為a 會無回傳值
doqs('a:nth-child(1)')   //! (x) 首元素為li 同上
```

# Dont USE
> 共通原因: 會將 indent 視為一個TextNode 
//// .childNodes / .nextSiblings / previousSibling
//// parentElement 僅IE支援