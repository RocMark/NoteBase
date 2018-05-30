# FP讀書會入門
> https://www.youtube.com/watch?v=Ybzgy0WsXnA

> OO 將會改動處 封裝
> FP 將會改動處 最小化

//* 此篇 ES6寫法範例為主

# Function Library
Lodash 
> 類似工具庫/語法糖 提供很多map/filter....
Ramda
> 較注重流程，語意化
underscore.js

# FP 
> 是種思維邏輯
1. 更接近人類的語言
2. 更加模組化
3. 更容易測試

# 預備背景知識
//* First Class Function 
> 可將 Function 當參數傳入 Function
//! Curry
> 只透過部分的參數呼叫一個Function，
> 它會回傳一個Function去處裡剩下的參數
```js
    //* ES6
    let add = x => y => x + y
    let increment = add(1)
    increment(1) // 2

    // ES5
    let add = function(x){
        return function(y){ return x + y }
    }
```

# 例子
```js
    //? FP寫法
    //* pointfree (使用printMsg時不需要管參數帶到哪)
    let printMsg = run(addToDom('msg'), h1, echo)
    printMsg('Hey!')

    //* 修改成 用 h2標籤 並且重複 print 在 console上面3次
    let printMsg = run(console.log, repeat(3), h2, echo)
    printMsg('Hey!')

    //---------------------------------------------------
    
    // 一般作法
    doqs('#msg').innerHTML = '<h1>Hey!</h1>'

    // 增加複用性
    function printMsg(elemId, format, msg) {
        let target = document.querySelector(`#${elemId}`)
        target.innerHTML = `<${format}>${msg}</${format}>`
    }
    printMsg('msg', 'h1', 'Hey!')
```

# Functional 基本概念
1. Declarative Programming //?敘述式
2. Pure functions //! 避免 side effects
3. Referential transparency
4. Immutability

# Declarative Programming 敘述式
//? 敘述式
> 把實際作的事加入Function中，用呼叫的方式
```js
    function greet(name){
        return `Hi ${name}`
    }
    greet('Tom')

    //* 對每個 elem執行後面的程序並放入 新Array
    arr.map(elem => elem * elem)

    //* 迭代 (累加 累乘)
    arr.reduce((sum, elem) => sum + elem, 0)
```

//* 命令式
```js
    let name = 'Tom'
    let greet = 'Hi'
    console.log(name + greet)

    let arr = [1, 2, 3, 4]
    for (let i = 0; i < arr.length; i += 1) {
        arr[i] *= arr[i] //* 此種較佳
        // arr[i] = Math.pow(arr[i], 2) //ESLint不推薦此寫法
    }
    console.log(arr)
```

# Pure functions
//! 單一Function只作一件事情
//! 作同樣事情，只回傳一樣的結果
//* 不使用外部不確定性參數

//? pure / impure function隔離
> 可重複使用 & 易debug & 易讀 & 易追蹤

//? 不應該去修改 Function 之外的參數
> 會於debug / 維護上造成不確定性
```js
    let counter = 0
    function increment(){ return ++counter } // Bad

    let arr = [1,2,3,4]
    arr.slice(0,3) // [1,2,3]  N次結果相同

    //! arr.splice(始,多少個,newItem1,.....newItemX)
    //* 作同樣事情，回傳結果不同
    //? Impure
    arr.splice(0,3) // [1,2,3]
    arr.splice(0,3) // [4,5]
    arr.splice(0,3) // []
```

# Pure functions Bad Example
```js
    function showStudent(ssn) {

        //! db 來自外部，有可能不存在
        //* 相同參數每次得到的結果可能不同
        // 因為db function不在此 function內造成額外不確定性

        let student = db.get(ssn)
        if (student !== null) { 
            // * 直接修改了HTML內容 & 來自外部參數無法確定內容
            render('Name') 
        } else { 
            //! 會讓程式中止
            throw new Error('student not found') 
        }
    }
    showStudent('333')
```

# Pure functions Good Example
```js
    let find = curry((db, id) => {
        let obj = db.get(id)
        if (obj === null) {
            throw new Error('Object not found')
        }
    })
    let csv = (student => `${student.name}`)
    let append = curry((elemId, info) => {
        document.querySelector(elemId).innerHTML = info
    })
    let showStudent = run(
        append('#studentInfo'),
        csv,
        find(db),
    )
    showStudent('333')
```

# Referential transparency
//* 程式碼可以替換成它執行後所得到的結果，而且不改變整個程式行為

> 對於作debug / 單元測試較容易
```js
    let input = [80,90,100]
    let average = (arr) => divide(sum(arr), size(arr))
    average(input) // 90 
    
    let input = [80,90,100]
    let average = divide(270,3) //90
    average(input) // 90 
```

//? Good Example
```js
    let increment = counter => counter + 1
    let plus2 = run(increment, increment)
    log(plus2(0))
```
> Bad Example
```js
    let counter = 0
    function increment(){
        return ++counter
    }
    increment()
    increment()
    ...
    //* counter來自外部，呼叫時較無法直接觀察其變化，從程式碼上較難得知會影響的外部變數
    log(counter) //-> ?????
```

# Immutable
資料建立後就不能更改，目的是避免side effect

# Functional 的基本模式
//! compose
//! f * g = f(g(x))

```js
    let compose = function(f, g){
        return function (x){ return f(g(x)) }
    }

    //* 結合律(associativity)
    //? compose(f, compose(g, h))  兩者相等
    //? compose(compose(f, g), h)

    let showStudent = compose(append('#id'), csv, find(db))

    showStudent('333')
    //* 333 -> find() -> student -> csv -> name -> append
```

# Processing data using fluent chains
//? Promise Chain
```js
    const map = fn => arr => arr.map(fn)
    const multiply = x => y => x * y

    //* 取出某個特定Key 在放回Array
    const pluck = key => object => object[key]

    const discount = multiply(0.98)
    const tax = multiply(1.0925)

    const customRequest = request({
        header: { 'X-Custom': 'myKey' },
    })

    customRequest({ url: '/cart/items' })
        // .then(map(pluck('price')))
        // .then(map(discount))
        // .then(map(tax))
        //? 進一步作合併
        .then(
            map(compose(tax, discount, pluck('price')))
        )
```
//* Method Chain
```js
    _.chain(enrollment)
        .filter()
        .pluck()
        .average()
        .value()
```

# 比較 Functional & OO 
> 較多會混用 (hybrid)
//* OO 開發方式: 
> 不去作新增Function，而是作定義不同dataType (新增Class)
//? FP 開發方式:
> 注重解耦 & 獨立，因此會新增更多Function

# 範例
```js
    //* OO 方式
    Person 含有 getFullName()
    Student 繼承 Person 達到可使用 getFullName()

    //? FP 方式

    Person / Student // 存 Data 容器
    fullName(person)  //* global functions
```

# OO 會遇到的問題
//* 於開發時，會需要回到 Parent看有哪些 Method
```js
    class Person {
        constructor(fName, lName, ssn) {
            this.fName = fName
            this.lName = lName
            this.ssn = ssn
            this.address = null
        }
        getAddress() { return this.address }
        setAddress(addr) { this.address = addr }
        peopleInSameCity(friend){
            /* 假設要寫一Function 判斷是否居住於同city */
        }
    }
    class Student extends Person {
        constructor(fName, lName, ssn, school) {
            super(fName, lName, ssn)
            this.school = school
        }
        getSchool() { return this.school }
        peopleInSameCityAndSchool(friend){
            /* 欲找出同City 且 同學校 */
            //* 必須去call 其父的Function 進行 同City運算
            let closeFriends = super.peopleInSameCity(friends)
        }
    }
```

# FP解決方法
```js
    function selector(city, school) {
        return function (student) {
            return student.address.country() === country && student.school === school
        }
    }

    let findStudentsBy = function (friends, selector) {
        return friends.filter(selector)
    }

    findStudentsBy(
        [curry, turing, church, kleene],
        selector('US', 'Princeton'),
    )
```

# FP & OO 混合要點
Class部分，設為單純儲存容器、資料形態
Method寫於 Class之外，以達覆用