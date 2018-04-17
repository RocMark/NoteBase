# Regex 方法
> https://www.youtube.com/watch?v=W7S_Vmq0GSs&index=6


# 大綱
//! \b  Word Boundary用法
> 建立 Regex

//? Regex方法: test() , exec()

//* String方法: match()

> Splitting with Regex: split()
> Replace with Regex: replace()

# \b Word Boundary
//? \b 為單字才輸出
//! /\b[a-z]+\b/
```js
    let regex = /[a-z]+/g
    let regexB = /\b[a-z]+\b/g
    let str = 'one and Two And there' 
    let resultA = str.match(regex)
    // [ 'one', 'and', 'wo', 'nd', 'there' ]
    let resultB = str.match(regexB)
    // [ 'one', 'and', 'there' ]
```

# 兩種建立 Regex方法
```js
    let regex = /hello/i
    let newRegex = new RegExp('/hello/', 'i')
```

# test() vs match
```js
    regex.test(str) 
    str.match(regex)
```

# test() 
//? 為Regex方法 回傳 boolean値

# match
>  較常用
//! 只回傳第一個符合的字串

//* 為字串方法 回傳 一陣列內容
['符合字串', index: 符合位置, input: '丟入檢測的字串']


# 利用 regex 切割字串
```js
    let regex = /[a-z]+/g
    let str = 'one and two and there' 
    let target = str.match(regex)
    console.log(target)
    // [ 'one', 'and', 'two', 'and', 'there' ]
```
