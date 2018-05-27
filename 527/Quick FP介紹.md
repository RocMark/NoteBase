# Quick FP介紹
> https://goo.gl/S5SP9F

## What is FP
* coding style / mindset

## Why FP?
* safer
* easier to debug & maintain

## How to do FP?
* Do everything with functions
input -> output
* Avoid side effects
重點在傳入一個値並回傳一個値 (資料處理)
use pure functions
* Use High Order Function

* Dont iterate
改用 map reduce filter

* Avoid mutability
不去改變原始資料，產生新陣列在去做操作
use immutable data

* Persistent data structures (18:00 ReView)
for efficient immutability
=> 樹狀結構 (Structural Sharing)/Map/HashMap
=> Share Old Part with New Version
避免複製陣列占用多份，不必要的記憶體

* Immutable.js
immutability 因為需要創造新陣列會做很多相同的步驟，因此有LB幫忙做好。
> 介紹網址 好東西!! https://goo.gl/RY7MnF

```js
  // Pure functional way (傳入input 得output)
  function greet(name) {
    return `Hi${name}`
  }
  // not Pure (不應該 讀取外部)
  function greet() {
    console.log(`Hi${name}`)
  }
  // Not functional way
  const name = 'Mark'
  const greeting = 'Hi'
  console.log(greeting + name)
```

## Use High Order Function
Function 巢狀 回傳 Function
```js
  function adject(adjective) {
    return function (str) {
      return adjective + str
    }
  }

  const cool = adject('cool')
  const damn = adject('damn')

  console.log(cool('Conf')) // coolConf
  console.log(damn('27o')) // damn27o
```

# Avoid mutability
* 先看一下 const 的雷 (下方)
```js
  // Immutable
  const rooms = ['h1', 'h2', 'h3']
  const newRooms = rooms.map((el) => {
    if (el === 'h3') { return 'h4' }
    return el
  })
  console.log(newRooms)


  // Mutation  (Bad!!)
  const rooms = ['h1', 'h2', 'h3']
  rooms[2] = 'h4'
  rooms = [] 
  console.log(rooms)
```

## const 的雷
* 注意 const 重新宣告才會出錯，改變內容不會!
```js
  const rooms = ['h1', 'h2', 'h3']
  rooms[2] = 'h4' // 仍可以改變!!!
  // Assignment to constant variable.
  rooms = [] 
  console.log(rooms)

  const obj = { name: 'Mark' }
  obj.name = '123' // 仍可以改變!!!
  // Assignment to constant variable.
  obj = {}
  console.log(obj)  // { name:'123' }
```