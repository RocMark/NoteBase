# JS CallBack
> https://www.youtube.com/watch?v=xHneyv38Jro

//! ES6以前，切分變數有效範圍的最小單位是 "function" (var)

//? 同步 synchronous (一般執行順序)
> 前一個執行完才執行下一個，依照順序
> 會 LockDown UI

cook 5s / eat 3s / wash 2s => 共花 10s
> 完成順序 cook -> eat -> wash

非同步則 全部同時 => 共花 5s
> 完成順序 wash -> eat -> cook 
> (不合理因此需要callback)

//! 非同步 asynchronous programming (setTimeout)
//* 非同步的意義: 不讓等待時間 block 住其他不相關動作的執行
> 前一個執行中 下一個也可以進行運作
> 不會 LockDown UI

# 非同步 vs 多執行緒
//* JS為單執行緒

# Function Call
```js
function a() { b() } // 一般call function
function a() { a() } //* 遞迴
function a(callBack) { callback } //* callback
```

//* What is Callback?
> 當滿足了某個條件 才會被動的去執行的Function
> Ex: setTimeout
> //! 為了可以確保執行順序而使用
> //? 使一連串的Code不會同時發生，而是有順序性

# CallBack Hell
//* 函式間相依過深，會造成Nesting過多層，而難以維護
//? 可以藉由 Promise 解決

# IIFE 立即被呼叫的函式 
//! 可用 ES6 let 完全取代
> Immediately Invoked Function Expression
//* Why IIFE?
1. 將參數值保留
2. 減少全域變數的產生，避免了變數名稱衝突的機會

# CallBack 範例

```js
let users = ['box1', 'box2', 'box3']
function addUser(username) {
    setTimeout(() => {
        users.push(username)
    }, 200)  
}
function getUsers() {
    setTimeout(() => {
        console.log(users)
    }, 100)
}

//! callback
function callBackUser(username, callback) {
// function callBackUser(username) {
    setTimeout(() => {
        users.push(username)
        callback()
        // getUsers()
    }, 200)
}


//* 執行時間較 getUsers長
// 例如: 伺服器在較遠處就容易發生
addUser('Jake') 
//? getUsers 會先執行 導致結果錯誤
getUsers() 

//! 使用 callBack 確保前面的先執行完才執行後一個
callBackUser('Jake', getUsers)
callBackUser('Jake') // 註解掉的寫法 得同結果
```