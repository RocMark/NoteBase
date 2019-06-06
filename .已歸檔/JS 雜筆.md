# Get CSS屬性值 without px [重要]
```js
    let navH = window.getComputedStyle(nav).getPropertyValue('height').replace(/[^-\d\.]/g, '')
```

# 運算子優先順序 [上至下，同層左至右]
濃縮版:  
.()[] 欄位存取、陣列索引、函式呼叫
=> 一元運算(++,-,!,typeof,new)
=> 乘除餘後加減 
=> 大小等於   => 雙/三等號比較 
=> 邏輯運算&& => 指派值=> 逗號

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


# Function vs. Block Scope
* JS 是以 Functional 區分 Scope。
* Scope 幫助封裝設計，隱藏資料變數。
> ES5 之前唯一的 Block Scope try — Catch，With Statement。
//* Block Scope 好處：Garbage Collection。

#  使用匿名函數（Anonymous functions）缺點 
1. 不能在 Stack trace 中顯示，不好 debug 
2. 不能參照 
3. 可辨識性不佳。

# Object篇
JS中 6大型別: object,string,number,boolean,null,undefined

//! everything in JavaScript is an object 是錯誤的!!!

//? function is a sub-type of object

> 當 取用 或 設置 object的屬性的時候，object會去 call內建的
> [[Get]] &  [[Put]] function

> object 中所有的屬性皆可透過 property descriptor描述
```js
    Object.getOwnPropertyDescriptor( myObject, "a" );
    // {
    //    value: 2,
    //    writable: true,  //? 表是否可以被寫
    //    enumerable: true, //* 是否可以被列舉
    //    configurable: true 
    //* 是否可再次設定property descriptor 的參數（不可逆行為）
    // }
```