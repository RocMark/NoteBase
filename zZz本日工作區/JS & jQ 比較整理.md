# JS & jQuery 比較整理

//! 開 jQuery Cheat Sheet Review

# 大綱
- 搜尋 子 / 父 / 兄弟 //!待補
- Set CSS Attr
- Class 相關
- 改變 DOM html & textContent
- Create DOM

# onLoad Function
```js
    // jsload (Snippets)
    document.addEventListener('DOMContentLoaded', () => {}) 
    $(() => {})  // jQ
```

# DOM 選擇器 $('li')
> JS doqs(單一元素) doqsAll(所有符合元素)

# CSS Selector (jQ)
JS Cant Use
//! li:first / li:last

```js
    $('div *')     // div 下所有子
    $('div p')    // div 其下的 p 
    $('p + a')   // 與 p 相鄰的 a //! 僅一個
    $('li:first') // 首個
    $('li:nth-child(2)')
    $('li:last') // 末個
    $('input[type="submit"]') 
```

# Set CSS Attr (jQ)
//* 單行屬性 Camel-Case
//? 多屬性用物件
```js
    $('input[type="submit"]').css('borderColor','red')
    $('li').css({
        'font-size': '20px',
        'color': 'red',
    })
```

# Set CSS Attr (JS)
```js
    // 單個元素 CSS
    let p  = document.querySelector('p')
    p.style.color = 'red'
    // 多個元素 CSS
    let target = document.querySelectorAll('li')
    //* forEach 寫法
    target.forEach((elem) => {
        elem.style.color = 'red'
    })
    // for 迴圈寫法
    // for (let i = 0; i < target.length; i += 1) {
    //     target[i].style.color = 'blue'
    // }
```

# 增刪 / 判斷是否有 Class
> jQ addClass('ClassName') / removeClass / hasClass
> JS //! classList
```js
    li.classList.add('baz')
    li.classList.remove('baz')
    li.classList.toggle('baz')
```

# JS CSS Tips
//// Dont use 會進行重繪
//// getAttribute() / setAttribute() / removeAttribute()
> 表格需要重繪例外

# Create DOM (JS)
> https://www.youtube.com/watch?v=pRN6WFUEFFE

# jQuery DOM包裹
> .wrap() / .wrapAll() / .wrapInner()

# jQuery DOM插入 其下
> .append() / .prepend()
//!查差異
> .appendTo() / .prependTo() 

# jQuery DOM插入 外部
> .after() / before()
> insertAfter() / insertBefore()