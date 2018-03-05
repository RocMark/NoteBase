# Clean Code Guide
> https://www.youtube.com/watch?v=b9c5GmmS7ks&index=1&list=PLWKjhJtqVAbkK24EaPurzMq0-kw5U9pJh

# Var
- use let / const
- use meaningful var 

- use searchable / readable names
> let minInAYear = 525600 (o) 直接 i < 525600 (x)

- use explanatory var
> 抽出過長的項目 用變數代替以提高可讀性

# Avoid Side Effects
```js
//* 此做法會無法再次取得 name 的String版本
let name = 'Tonny G'
function splitName(name) {
    //* 切字串 輸出陣列
    // name = name.split(' ') //原始
    return name.split(' ') //* 新增Func 匯入name變數
}
// splitName() // console.log(name) // 原始
// ? 改成此可以保留name的使用 & 語意也較佳
const newName = splitName(name) 
console.log(newName)
```

# Func
//* FuncName 要說明功能
//? Func單一功能已達可複用 (下有範例)
//* Remove重複代碼，抽出相同處
//! 傳入過多arguments，取出並建立Object (好物)
```js
const menuConfig = {
    title: 'Foo'
    body: 'Baz',
    buttonText: 'Bar',
    cancelable: true,
}
function createMenu(menuConfig){}
```
//* 下列三個意義相同，統一格式較佳(用自己習慣的表示)
```js
getUserData()
// getUserInfo() // getClientData() // getCustomerRecord()
```

- Function 功能單一化
```js
// ? 改寫成 功能單一 皆可複用
function emailUsers(users) {
    users.filter(isUserActive).forEach(email)
}
function isUserActive(user) {
    const userDate = database.lookup(user)
    return userDate.isActive()
}

//* 多功能複合 可分割
function emailUsers(users) {
    users.forEach((user) => {
        const userDate = database.lookup(user)
        if (userDate.isActive()) {
            email(user)
        }
    })
}
```



# 通則
- 不加入多餘的context (car前墜可以捨棄)
```js
let Car { carName: 'Honda', carColor: 'blue'}
console.log(Car.carName) //* (x)
console.log(Car.Name) //* (o)
```

- 縮寫
```js
//! 最佳解 ES6 Function default value
function createBox (name = 'SampleBox'){
    console.log(name)
}
function createBox(name) {
    let boxName = name || 'SampleBox' //? 正解
    // let boxName
    // if (name) {
    //     boxName = name
    // } else {
    //     boxName = 'SampleBox'
    // }
    console.log(name)
}
```

# 進階
//* Dont write to global functions (不太懂)
> Part-2 2分左右
//* 利用 extends取代