# 原生JS 整理
> https://www.ptt.cc/bbs/Ajax/M.1491563311.A.1F2.html


> JS 一次設定多個CSS屬性 //?待補
//* ES6 Object assign用法 [MDN]
> https://blog.fundebug.com/2017/09/11/object-assign/

# 大綱
- 修改 DOM 屬性
- 修改 CSS Class
- 修改 CSS 屬性

# 原生JS 注意事項
//? doqsAll 操作要用Loop
//* 新創物件要重新註冊事件

# 取得 & 修改 屬性值
//* 查無屬性會回傳 空值
> if (elem.id === '') {log('查無id')}

> p.className = null //! 刪除屬性用
//? classNames / id / textContent / innerHTML
```js
    let p = doqs('p') // default class = "one"
    p.className = 'two three'
    //! 注意會完全覆寫
    log(p.classNames) // two three
    p.className = null //! 刪除屬性用
```

# DONT USE
////getAttribute()/setAttribute()/removeAttribute()
會造成重繪(redraw) / 表格例外

# 修改 class 
//? classList.add / remove / toggle
//* contains 查詢是否含有
```js
    let p = doqs('p')
    p.classList.add('baz')
    p.classList.remove('boz')
    p.classList.toggle('foo')
    let boolean = p.classList.contains('baz')
```

# 設定 & 取得 CSS 屬性值
//! 取值方式很長要看
//? 設定時，多字串連使用小駝峰寫法
```js
    elem.style.paddingTop = '2rem'
    let paddingTop = window.getComputedStyle(p).getPropertyValue('padding-top')
```

# 一次性設定多個 CSS 屬性
//! data-* 屬性 待查
```js
    let p = document.querySelector('p')
    p.style.color = 'red'
    Object.assign(p, {
        id: 'world',
        'data-test': 'hello', //! 未成功待解
    })
```
