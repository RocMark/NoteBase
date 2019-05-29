# FP 讀書會
> https://www.youtube.com/watch?v=KCK5v2EfF2E

//* JS 兩大支柱 Prototype Inheritance & Functional Programming

# 大綱
- First Class Citizen
> Function 當參數傳入fun / 當 return值 / assign 給變數

- Lexical Scoping Chain
> 1.上下順序 2.執行&變數環境 3. Call Stack

- Closure
> 合併二上 //! 例子 Review

- Function Programming
> why learn?

- Currying Function
> 一 Function 可傳入n個參數，拆成N個 Function
> 各Function 只傳一變數 (N個 return階層)

- Recursion 遞迴
- High Order Function 最後包成結果

# Why need to know?
了解 Functional Programming 等同於了解 JavaScript 的性質
JS 很多method / function 的設計都是為了實踐 Functional Programming
> 對於學習 FrameWork的原理很有幫助

# Function 基礎概念
寫過的Function，後面只需要用，不需要重寫。

> 重新認識系列 Function篇複習
- First Class Citizen
- Lexical Scoping Chain
// ! 同時發生會產生 Closure

# First Class Citizen 三特性
> 只要符合下面三項，即符合 First Class Citizen 的特性

> Function
1. 可被 assigned to 變數
2. 可被當參數傳入另 function
3. 可被當成 return 值

# First Class Citizen 例子
```js
    let hello = function(a, func){
        return function(b){
            return func(a,b)
        }
    }
```

# Lexical Scoping Chain
- Lexical Environment
> Code 寫在上下的順序是有別的。

- Execution Context 執行環境
> 當Function被呼叫會產生一個 Execution Context
> 表 現在正在執行的區域

- Variable Environment 
> Execution Context 中會有一區存 Variable

- Call Stack (Data Structure)
//* LIFO (Last In First Out) Stack!
> http://mis101bird.js.org/function/   //?參考此

> 初始建立 Global context 於最下方
> 當 Function 執行時觸發另一Function
> 該另Function會建造新的 執行環境，將其執行完移出 stack
> 回到原本執行的 執行環境，執行完後移出

# Lexical Scoping Chain例子 (14分)
//! review 外部參照!
```js
    function b() {
        myVar) //! 
    }

    function a() {
        let myVar = 2
        b()
        //? Call b 產生 b()的執行環境
        //* 內部沒有變數可參照
        //! 外部參照!!!
    }

    let myVar = 1
    //* 產生 Global Execution Context
    //* 內含變數區塊 (myVar = 1)
    a()
    //? Call a 產生 a()的執行環境
    //? 內含變數區塊 (myVar = 2)
```

# Closure 例子
//! 超重要 Review
```js
    function greet(str) {
        //* 進入Function return後 Function結束(丟出stack)
        //! str變數 Hi 會繼續存在 Memory裡
        return function (name) {
            `${str} ${name}`
        }
    }
    let sayHi = greet('Hi')
    //* 建Global Context
    // call sayHi Function ，即greet()並建執行環境
    //? 建立 str變數 'Hi'

    sayHi('Tom') // Hi Tom
    // call sayHi() 產生 sayHi() 執行環境
    // 變數為 'Tom'
    //* str變數 不在 sayHi()執行環境中，但經由外部參照往外找，之前使用過Memory處。

    //? Closure範圍 包含 Memory處 & sayHi() 執行環境
```

# Currying
拿一Function 傳入多個 argument，
有幾個 argument 就拆成幾個Function，
每個Function 要求只傳一個值進入。


# 題目1
> 寫個傳多少值進去舊return該值
```js
    function identity(arg){ return arg }
```
# 題目2
> 寫加、減、乘
```js
    function add(a, b) { return a + b }
    function sub(a, b) { return a - b }
    function mul(a, b) { return a * b }
```

# 題目3
> var three = identityf(3)
> three() = 3
//* 起始點
```js
    function identityf(arg){
        return function (){
            return arg
        }
    }
    let three = identityf(3)
    three()
```

# 題目4
> addf(3)(4) ->7
//! invocation (基於過去寫的內容加上其他特性)
//* invocation N次 就要 return N次
```js
    function add(arg1) {
        return function (arg2) {
            return arg1 + arg2
        }
    }
    add(3)(4)

    // ES6
    let addTest = function (x) { 
        return y => x + y)
    }
    addTest(3)(4)
```
# 題目5
> var addf = liftf(add)
> addf(3)(4) ->7
> liftf(mul)(5)(6) -> 30 //* 目標為此
//? 標準解
```js
    function liftf(func) {
        return function (a) {
            return function (b) {
                return func(a, b)
            }
        }
    }
    liftf(mul)(5)(6)

    function add(a, b) { return a + b }
    function sub(a, b) { return a - b }
    function mul(a, b) { return a * b }
```
//* My answers
> 不佳 可見 題目9 
```js
    liftf(mul)(5)(6)
    liftf(add)(5)(6)

    function liftf(func) {
        return func
    }
    function mul(arg1) {
        return function (arg2) {
            return arg1 * arg2
        }
    }
    function add(arg1) {
        return function (arg2) {
            return arg1 + arg2
        }
    }
```
# 題目6
//? Currying 見上有解釋
> curry(mul)(5)(6)
> 括號內可傳無限多個參數 如何修改
> 非無限次 invocation
```js
    // 解答同上題
    //? ES6 reset parameters 
    function curry(func) {
        return function (...first) {
            //* 此時 first 為 Array
            return function (...second) {
                //* 當 first 傳入 Function 會轉換成 Variable
                return func(...first, ...second)
            }
        }
    }
    curry(mul)(5, 10)(6, 8) // 只回傳第一組 50
```
# 題目7
> 使用上列的Function修改實作以下結果
> assign Function 給 inc 
> 當傳一値使其加一，再傳再加一

> let inc = func~ 
> inc(5) -> 6
> inc(inc(5)) -> 7
//! 進入 High Order Function
```js
    let inc = addf(1)
    let inc2 = lift(add)(1)
    let inc3 = curry(add,1)
```
# 題目8  (51:30)
> 無限多次 invocation
> 直到 invocation為空
> addg() -> undefined
> addg(2)() -> 2
> addg(2)(7)() -> 9
//* 最後一個 () 不可少
//* 待複習
> https://www.youtube.com/watch?v=Fvteb7RvzUA
```js
    function addg(first) {
        if (first !== undefined) {
            return function more(next) {
                if (next === undefined) {
                    return first
                }
                first += next
                return more
            }
        }
        return undefined
    }
    console.log(addg(1)(2)(3)())
```
# 題目9
//* High Order Function 不管傳入的Function都使其遞迴
//! 累加 累乘 原理 reduce()
傳入運算式 & N個數值
> liftg(mul)() -> undefined
> liftg(mul)(3)() -> 3
> liftg(mul)(3)(0)(4)() -> 0
> liftg(mul)(1)(2)(4)(8)() -> 64
```js
    let test = arr.reduce((sum, elem) => sum * elem, 1)

    function liftg(func) {
        return function (first) {
            if (first !== undefined) {
                return function more(next) {
                    if (next !== undefined) {
                        return first
                    }
                    first = func(first, next)
                    return more
                }
            }
            return undefined
        }
    }
    liftg(mul)(1)(2)(4)(8)()
```
# 題目10
> write a curry function compose that takes two unary(一元，只有一個input ) functions and returns a unary function that calls them both
//! 重要範例 組成 兩個Function 順序可自訂
> compose(double)(square)(5) -> 50
```js
    function double(val) { return val * 2 }

    function square(val) { return val * val }

    function compose(unary1) {
        return function (unary2) {
            return function (val) {
                return unary1(unary2(val))
            }
        }
    }

    compose(double)(square)(5) //* 先 square 後 dou
```
# 題目11
將傳入的兩個 Array 作平方，並合併成一個 Array作輸出
//! 陣列當參數傳入 spread argument
```js
    const args = [1,2,3]
    callMe(...args)
```
> square(...[1,3,5],...[2,4,6])
```js
    function square(...numbers) {
        return numbers.map(elem => elem * elem)
    }
    let result = square(...[1, 3, 5], ...[2, 4, 6])
    console.log(result)
```
//* my answer
```js
    let arr1 = [1, 3, 5]
    let arr2 = [2, 4, 6]

    function square(data1, data2) {

        data2.forEach((elem) => { data1.push(elem) })
        return data1.map(elem => elem * elem)

        //! 兩陣列合併用 push (效能較佳)
        //* 多陣列用 concat
        /*
            let result = data1.concat(data2)
            return result.map(elem => elem * elem)
        */
    }
    console.log(square(arr1, arr2))
```


# 題目12
> 綜合以上所有
> compose(double)(square)([1,3,5])([2,4,6])
```js
    function square(...numbers) {
        return numbers.map(elem => elem * elem)
    }

    function double(...numbers) {
        return numbers.map(elem => elem * 2)
    }

    function compose(unary1) {
        return function (unary2) {
            return function (numbers1) {
                return function (numbers2) {
                    return unary1(...unary2(...numbers1, ...numbers2))
                }
            }
        }
    }
    console.log(compose(double)(square)([1, 3, 5])([2, 4, 6]))
```