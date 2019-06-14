# 認識 ECMAScript 6+ (ES6+) 從今天開始

# 預設參數(Default parameters)
//? 盡可能一個Function 傳入參數 < 3
//? 盡可能於 撰寫 Function時，是否需要預設值

//! 注意 只有傳入變數為 undefined 才會使用 ES6的預設參數
//? null 0 '' 會傳入

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