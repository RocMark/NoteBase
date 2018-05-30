# 認識 ECMAScript 6+ (ES6+) 從今天開始

# Hoisting & let 
Function 優先權高於 var
```js
    console.log(a)

    //* 不管 var / func 在前 都會得到 [Function: a]
    var a = 3

    let a = 3
    //? 使用 let 需要先宣告 才能使用
    //SyntaxError: Identifier 'a' has already been declared

    function a() { }

    // eslint 建議 no-lone-blocks 改用 IIFE
    //* IIFE 可以用 ; 去換行 (eslint會保留逗號)
    var a = 'alex'
    {
        console.log(a) // 會取得 alex
        var a = 123
        console.log(a) // 123
    }
```

# const 
const 對於 Primitive 型別 (String,Number,Boolean,Symbol) 可以有不可更動的特性。

但對於物件的內容，則可以修改
```js
    const num = 123
    num = 456 // TypeError: Assignment to constant variable.

    const obj = {
        name: 'test',
    }
    obj.name = '456'
    console.log(obj)

    const newObj = JSON.parse(JSON.stringify(obj))
    newObj.name = '123'
    console.log(newObj)
```

# 函式
```js
    //* 函式宣告（Function Declaration）
    function test(){ /*最原始*/}

    //* 函式運算式（Function Expressions）
    //? 可以避免 Hoisting 使其衝至最上方，較穩定
    let testFunc = function(){ return 'test' }
    testFunc()

    let arrFunc = () => 'test'
    arrFunc()
```

# addEventListener 的 this 是誰
//! 因為 Arrow Function 不會產生 this，即會自動取外層的this
```js
    //* 效果相等
    document.querySelector('body').addEventListener('click', test)  
    function test(){}

    document.querySelector('body').addEventListener('click', function (e) {
        console.log('this')
        console.log(this) // 觸發事件的對象
        console.log('e.target')
        console.log(e.target) // 觸發事件的對象
        console.log('e.currentTarget')
        console.log(e.currentTarget) // 綁定事件的物件
    })
```

```js
    document.querySelector('body').addEventListener('click', (e) => {
        console.log('this')
        console.log(this) // window
        console.log('e.target')
        console.log(e.target) // 觸發事件的對象
        console.log('e.currentTarget')
        console.log(e.currentTarget) // 綁定事件的物件
    }, false)
```

//! with setTimeout 的 this
```js
    document.querySelector('body').addEventListener('click', test)
    function test(e) {

        //? ES6 解 this 會取 上一層的this
        //! 因為 Arrow Function 不會產生 this，即會自動取外層的this

        setTimeout(() => {
            console.log('this') 
            console.log(this) // 事件觸發者
            console.log('e.target')
            console.log(e.target) // 事件觸發者
        }, 2000)

        //* ES5解法
        let self = this
        // eslint-disable-next-line
        setTimeout(function () {
            console.log('this') // window
            console.log(this)
            console.log('self') // ES5 解法 綁定成事件觸發者
            console.log(self)
            console.log('e.target')
            console.log(e.target) // 事件觸發者
        }, 2000)
    }
```

# 變數設定 & 字串模版
//? 甚至可以 callFunction
```js
    //! 皆不能換行!!!!!
    //* 單雙引 要夾雜 or 跳脫字元
    let htmlTpl = ''
    let htmlTpl = ""

    //? 甚至可以 callFunction

    let test = function () {
        return 'testFunc'
    }
    let tpl = `
        ${test().toUpperCase()}
    `
    console.log(tpl)
```

# 預設參數(Default parameters)
//? 盡可能一個Function 傳入參數 < 3
//? 盡可能於 撰寫 Function時，是否需要預設值

//! 注意 只有傳入變數為 undefined 才會使用 ES6的預設參數
//? null 0 '' 會傳入

```js
    function test(a = 'AAA', b = 'BBB', c) {
        //* ES5 無預設參數 的寫法

        //?  
        c = c !== undefined ? c : 'CCC' 

        //! 注意此種判斷 0 代入會回傳 default值
        c = c || 'CCC' 
        return a + b + c
    }
    console.log(test())
```
//? 正確使用 object 當 預設參數
```js
    function test({ a = 'AAA', b = 'BBB', c = 'CCC' }) {
        console.log(a, b, c)
    }
    //* 可傳入想傳入的變數，其他保持為預設值
    test({ a: 'Alex' }) // Alex BBB CCC
```

# Object Destructuring  預設值 配合 物件解構
//* 預設值 使用 object的陷阱
```js
    function test(obj = { a: 'AAA', b: 'BBB', c: 'CCC' }) {
        console.log(obj)
    }
    //* 未傳入變數的預設值，未出現
    test({ a: 'Alex' }) // { a: 'Alex' }
```

//! 勿用 obj 內容 要記 code review困難
```js
    let objTest = {
        a: 'AAA',
        b: 'BBB',
        c: 'CCC',
    }
    function testObj(obj) {
        obj = obj || {}
        return obj.a + obj.b+ obj.c
    }
    console.log(testObj(objTest))
```

# Rest parameter (其餘參數)
//* 三個點 不確定數量的參數 
```js
    let arr = [1, 2, 3, 4, 5, 6]
    let [a, b, ...c] = arr
    console.log(a, b, c) // 1 2 [ 3, 4, 5, 6 ]

    let alex = {
        name: 'alex',
        bType: 'A',
        gender: 'male',
    }

    //* 不需要照順序，依照名稱
    let { gender, name, bType } = alex
    console.log(name)
```

//* 組建 物件
```js
    //* 組建 物件
    let name = 'alex'
    let gender = 'male'
    let alex = {
        //? eslint object-shorthand
        //* 直接寫 name 即可
        name: name,  
        gender: gender,
    }
```

# Array / 物件 鏡射
```js
    let [a, b, ...c] = [1, 2, 3, 4]
    console.log(c)  // [3,4]
    console.log(b)  // 2

    let alex = {
        name: 'alex',
        gender: 'male',
        age: 40,
    }
    //* 將物件內的屬性 直接拔出來使用
    let { name, gender, age } = alex
    console.log(name) //alex

    //? object 照key值

    //* node module 蠻常見
    import { name, gender, age } form 'alex'
```

# 組成物件
```js
    //* 組成物件
    let name = 'alex'
    let gender = 'male'
    //* ESLint會自動改成縮寫  (: name;可省略)
    let alex = {
        name: name,
        gender: gender
    }
```

# ES6 Promise & Async

array map/reduce 等鏈式為 同步
當 map / reduce 中 有 setTimeout / 取資料動作時，
應該將鏈式設成非同步 (使用 Promise) 才能確保資料正確!

//! async/await base on promise
async / await 仍需要使用到 promise

//? async/await：同步的視覺，非同步的享受

```js
    function fn1() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(1)
                resolve() // 會決定何時進 then
            }, 0)
        })
    }
    function fn2() {
        console.log(2)
    }
    fn1().then(fn2)
```

# async / await
```js
    fn1().then(fn2)

    async function fn3() {
        //? async/await：同步的視覺，非同步的享受
        //* async/await 等同上方 fn1().then(fn2)
        await fn1()
        fn2()
    }
```