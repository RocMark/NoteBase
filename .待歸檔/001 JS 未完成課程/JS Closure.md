# JS Closure 閉包
//? Closures are FUNCTIONS WITH PRESERVED DATA
> https://www.youtube.com/watch?v=71AtaJpJHw0

# 簡易解說 & Example
```js
    function addTo(passed) {
        function add(inner) { return passed + inner }
        return add
    }

    //? 將 passed變數設置為7 (創造保留變數!)
    let add7 = addTo(7) 
    // 同理可以創造 N 個 Function with 不同保留變數
    let add8 = addTo(8) 

    //* 回傳 Function add (可丟入值運算)
    // 可於chrome dev 查看 Scope / Closure / 會有一保留變數 passed
    console.dir(add7) 

    //* 將 3 帶入 inner 並與 已設變數 passed 做運算 回傳
    console.log(add7(3)) // return 10
```

# Best Example
```js
    function addTo(passed) {
        function add(inner) { return passed + inner }
        return add
    }

    // <-- we put in add7 the function 'add' with passed = 7
    var add7 = addTo(7)

    /* Because the addTo function returns it's inner function (return add;), 
    what's exactly returning is a picture with this content:

    function add(inner) { return 7 + inner }

    We have assigned that 'picture' in add7, 
    which has become effectively a function so now we can call it: */
    console.log(add7(3)) // returns 10
```