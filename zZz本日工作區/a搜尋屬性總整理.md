# 原生 JS 搜尋屬性總整理

# 大綱
- 判斷 DOM 屬性是否存在
- 判斷 CSS 屬性是否存在
- indexOf vs match() 判斷 字串
//! match 只能用於 String
//* indexOf 可用於 字串或陣列
- data-屬性使用
> jQ addClass/removeClass/hasClass()

# 判斷DOM屬性是否存在
```js
    if (elem.id === '') {log('查無id')}
```

# 判斷CSS屬性是否存在
```js
    p.className = null //* 刪除屬性用
    p.className = 'two three' //! 注意會完全覆寫

    //* 判別是否存在
    p.classList.contains('baz')
```

# indexOf vs match()
indexOf() / lastIndexOf()  會回傳字符串的位置
match() 只用於字串

# data-屬性注意事項
> jQ $('elem').attr('attr','value')

# 原生JS 使用 dataset 去存取屬性
> MDN
//* HTML 最好使用 全小寫
//* 因為使用大寫會在 JS時造成不必要的判斷錯誤!
```js
    // section(data-sectionname="AboutMe" data-date-of-birth="2018/2/9")

    this.sections.forEach((elem) => {
        console.log(elem.dataset.sectionname)
        console.log(elem.dataset.dateOfBirth)

        // console.log(elem.dataset.sectionName)
        //! 如果在 html attr 使用大寫 會將 sectionName 判斷成 => section-name
    })
```