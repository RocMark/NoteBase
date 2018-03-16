# JS & jQuery 比較整理

# onLoad Function
> document.addEventListener('DOMContentLoaded', () => {}) 
> $(() => {})  // jQ

# DOM Traversal
> JS doqs(單一元素) doqsAll(所有符合元素)
```js
    let li = document.querySelectorAll('li')
    $('li')
```

# CSS Selector (jQ)
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
```js
    // jQuery multiple attribute
    //* 單行屬性 Camel-Case
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
    changeAllCSS(target)
    function changeAllCSS(elems) {

        //* for 迴圈寫法
        for (let i = 0; i < elems.length; i += 1) {
            elems[i].style.color = 'blue'
        }

        //* forEach 寫法
        elems.forEach((elem) => {
            elem.style.color = 'red'
        })
    }
```

# addClass
> jQ addClass('ClassName') / removeClass / hasClass
> JS //! classList
```js
    li.classList.add('baz')
    li.classList.remove('baz')
    li.classList.toggle('baz')
```

# JS CSS Tips
//! Dont use 會進行重繪
> getAttribute()
> setAttribute()
> removeAttribute()
> 表格需要重繪例外

# Create DOM (JS)

