# Clean Code Guide
> https://www.youtube.com/watch?v=b9c5GmmS7ks&index=1&list=PLWKjhJtqVAbkK24EaPurzMq0-kw5U9pJh

//! 待補看完


# 通則
//! 避免 negative Conditionals
//* 不加入多餘的context (car前墜可以捨棄)
> let Car { carName: 'Honda', carColor: 'blue'}
//* 盡可能縮寫
```js
//! 最佳解 ES6 Function default value
function createBox (name = 'SampleBox'){
    // let boxName = name || 'SampleBox' //? if else縮寫
    console.log(name)
}
```

# 變數篇
- use let / const / meaningful var 
- use searchable / readable names
> let minInAYear = 525600 (o) 直接 i < 525600 (x)
- use explanatory var
> 抽出過長的項目 用變數代替以提高可讀性

# Function篇
//* Use High Order function
//* FuncName 要說明功能 且單一功能已達可複用
//* Remove重複代碼 & DeadCode，抽出相同處
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

# 封裝 condition
```js
// if(fsm.state === 'fetching' && isEmpty(listNode)){ //*不佳
if(showTarget(fsmTarget, listNodeTarget)){
    //* 這樣if else 較易閱讀管理!
}
function showTarget(fsm, listNode){
    return fsm.state === 'fetching' && isEmpty(listNode)
}
```

# Classes
//* Using ES6 classes
//* Use method chaining
//* Prefer composition over inheritance














# 待看 & 不懂
> Dont write to global functions  //* Part-2 2分
> Avoid conditionals 使用多型 //* Part-2 5分

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
