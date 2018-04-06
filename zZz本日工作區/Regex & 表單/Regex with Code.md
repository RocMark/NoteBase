# Regex with Code

//! 切記 字數範圍是 {2,8} (逗號正確)   {2-8}錯誤!!!!

# Flag
/  Regex Here   / gi
- g Global Flag 開啟，會將所有符合的找出
- i insensitive 可以忽略大小寫不同
- m 多行匹配

# test() / exec() / match() 比較
test() 返回Boolean 


# exec() 方法
exec()   RegExp的方法
> 回傳結果:
//! ['符合的字串',index: 所在位置0為始,input: '原字串']


# match() 方法
match()  String的方法

```js

```

# regex 屬性
//* regex 屬性

> source 回傳 不含 / / 以及 flag
```js
    let reg1 = /^Car$/ig
    let str = 'car car'
    console.log(reg1) //* /^Car$/gi
    console.log(reg1.source) //* ^Car$
```

//* 下三為 flag 會回傳是否使用該flag (Boolean)
- ignoreCase
- global
- multiline

# regex.lastIndex 用法
> 只有 g flag 開啟才有用 (才能找到多個符合)
> lastIndex 從0開始

//* exec() / test() 找不到東西後，會重設回0

//? 執行 test() exec() 去重設 lastIndex
> 借由重複執行上二兩方法取得所有批配字串

# lastIndex MDN 重要應用
```js
    let myRe = /ab*/g
    let str = 'abbcdefabh'
    let myArray = []
    while ((myArray = myRe.exec(str)) !== null) {
        let msg = `Found ${myArray[0]}. `
        msg += `Next match starts at ${myRe.lastIndex}`
        console.log(msg)
    }
```

```js
    //* 兩種宣告皆可用
    let str1 = 'Car1 Car2 No'
    let re = new RegExp('car', 'gi')
    let re2 = /Car/gi

    //! 必須執行 exec 或 test 才有辦法取到 lastIndex
    let re = new RegExp('car', 'gi')
    let re2 = /Car/gi

    //* [ 'Car', index: 0, input: 'Car1 Car2 No' ] 1.
    console.log(re2.exec(str1))
    console.log(re2.lastIndex)
    while (re2.lastIndex > 0) {
        //* [ 'Car', index: 5, input: 'Car1 Car2 No' ] 2.
        //* null  3.
        console.log(re2.exec(str1))
        console.log(re2.lastIndex)
    }

    //* 原理&流程
    // re.exec(str1)
    // console.log(re.lastIndex) // 3 回傳首個符合的最末字元位置
    // re.exec(str1)
    // console.log(re.lastIndex) // 7 回傳Next
    // re.exec(str1)
    // console.log(re.lastIndex) // 0 找不到下一個符合時
```

# 補充
//* \S 可以找出所有非space的字元
//? testString.match(expression).length

# 創建 regex
```js
    let reg = /[a-z]/ig
    //* 不要用單引號括起來
    ////let reg = '/[a-z]/ig'
    let reg = new RegExp(/[a-z]/,'i') // 較少用
```

# 之前寫的Code 複習確認是否看得懂
```js
    let pattern = {
        username: /^[a-z\d]{5,12}$/,
        password: /^[\w@-]{8,20}$/,
        telephone: /^0\d{9}$/,
        profile: /^[a-z\d-]{8,20}$/,
    }
```

# Email Regex 解析
> (yourName) @ (domain) . (extension)(.again)
> mark77799@yahoo.com.tw

//? gmail 允許 .英文句點

//* 最好各部分用 () 格開，較易撰寫

# CSS Valid Style
```css
    input + p{
        opacity: 0;
        color: orange;
    }

    input.invalid + p{
        opacity: 1;
        color: pink;
    }
```
