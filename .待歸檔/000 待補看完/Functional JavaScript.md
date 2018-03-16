# Functional JavaScript
//! 20:00 開始聽不懂 待聽
> https://www.youtube.com/watch?v=KKv6nH56kmM&index=8

function(){} is everything 
() => {}

# 重點
//! 多使用High Order Function
//* 多使用小程式(功能單一) 進行 Composition
//* 使用多個小程式組成大程式，減少新Function

# lodash 函式庫介紹
//? 代碼優化 函式庫 待學!!!
> https://jigsawye.com/2017/09/04/make-good-use-of-lodash/

# 出發點 & 著重項目
- Purity
- Context
- Evaluation
- Composition
- Transformation

# It would bring you
- Re-thinking & Fun
- Patterns 加速工作效率

# 特色
- First-class Function | Closure
- High-order functions | Function Composition
- Purity | 處理 side-effects | Laziness
- Recursion | Tail-recursion optimization | Type

# High-order functions 將多個小程式組織起來
//? 對於List操作 非常有用!! 取代loop
//* 支援度高

```js
[1, 2, 3].map(x => `Num: ${x}`)
Array Number [初始狀態]
-> (Number -> String) [經過map運算]
-> Array String [得到的結果]
```

## 好處
* No more looping
* No more ijk tricks
* Source lines of code (SLOC 解決Code量)
* map/reduce看就知道該功能是啥 Loop還需要閱讀

## loop / map() / forEach() 比較
```js
let rawData = ['A', 'B', 'C']
//* 取得結果相同
let resultLoop = []
let resultHO = []
let resultForEach = []

for (let i = 0; i < rawData.length; i += 1) {
    resultLoop.push(rawData[i])
}

//! High-order 一行即解決
rawData.map(x => resultHO.push(x))

// ? ForEach 用法
rawData.forEach((item) => {
    resultForEach.push(item)
})
```

## HOFunction AJAX Sample 
```js
//* Loop URL
urls.map(url => Http.get(url)) 
    //* filter 偵錯
    .filter(response => response.status !== 404)
    //* 轉換型別
    .map(response => Parser.comment(response))
    //* 渲染頁面
    .map(comment => UI.renderComment(comment))
    //* 執行
    .execute()
```

# map() reduce() V.S. forEach()
有副作用的時候使用 forEach()
map() reduce() 若可以保證型別一致可減少問題


# Function Composition
Function Programming 不喜歡定義新的函式
相反的，我們將小的合併為大的

## 優點
- Safety 小程式安全，組出大的也安全
- Reusability 小程式重複利用度高
- Flexibility 
- 小程式的功能性也較單一

```js
//? Best
map(not.odd) [1,2,3]  //*Lodash(模組化函式庫)

//* 匿名function
map(\x -> !odd x) [1,2,3]
//* 另外建實名function
let notOdd x = not(odd x)
map notOdd [1,2,3]
```

# Context & Functor 20:00
> https://www.youtube.com/watch?v=KKv6nH56kmM&index=8&list=PL8dIIwCMF-SN8ZOY1NgSrj-WkYb112glF
//* 不是很懂