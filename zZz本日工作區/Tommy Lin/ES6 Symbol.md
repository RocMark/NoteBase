# 基礎型別
Number , String , Boolean , null , undefined
Symbol(ES6)

# Symbol 用法
When to use?
當你想要利用物件記錄屬性狀態，但又不想列舉出來時
```js
    // ES5作法
    let obj = {
        name: 'John',
        age: 30,
        isRead: true, // 記錄這筆資料被讀取過用
    }

    // 但此種方法 設定的屬性 
    //* 可以被 for in 或 Object.keys 取出

    console.log(Object.keys(obj)) // 回傳一個陣列 內含各項屬性

    for (const key in object) {
        console.log(key)
    }
```
//* defineProperties 用法  (ES5)
定義不可被列舉的屬性
```js
    let obj = {
        name: 'John',
        age: 30,
    }

    Object.defineProperties(obj, 'isRead', {
        value: true,
        enumerable: false,  // 預設為 True
    })

    // Object.keys(obj) / for in 皆不會被列出
```
# Symbol (ES6) 新的資料型別
```js
    //* ESLint 建議要加上註解
    let isRead = Symbol('註解')

    let obj = {
        name: 'John',
        age: 30,
    }

    obj[isRead] = true // 設定 Symbol

    console.log(obj) 
    // { name: 'John', age: 30, [Symbol(註解)]: true }

    console.log(obj.hasOwnProperty(isRead)) 
    // true

    console.log(Object.keys(obj))
    //  { name: 'John', age: 30 }


    for (const key in obj) {
        console.log(key)  // name  age
    }
```