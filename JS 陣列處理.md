# JS陣列處理 彙整

//* 6分快速理解 8種 Array處理
> https://www.youtube.com/watch?v=Urwzk6ILvPQ

//* 待看
> https://www.youtube.com/watch?v=rRgD1yVwIvE&t=2s
> https://www.youtube.com/watch?v=Wl98eZpkp-c&t=2s
> https://www.jianshu.com/p/f821b8aa4f69

# High-Order Function 篇

## forEach (Loop through Array)
```js
[1, 2, 3].forEach((item, index) => {
    console.log(item, index)
    // 得 1 0 / 2 1 / 3 2
})
```

# 結合 map & filter
```js
let expensiveOnsale = products
    .filter(item => item.price > 500) //* Condition符合取出加入陣列
    .map(item => item.name) //* Loop出符合目標陣列中 所需要的屬性
console.log(expensiveOnsale)
```



## map
//? Loop Array + 處理 輸出到新陣列
```js
const products = [{
    name: 'box1',
    price: 400,
    remaining: 1,
}, {
    name: 'box2',
    price: 600,
    remaining: 0,
}, {
    name: 'box3',
    price: 800,
    remaining: 1,
},
]

//* Loop 出各 Object 的 name
let name = products.map(item => item.name)
console.log(name)  //[ 'box1', 'box2', 'box3' ]
//* 可以進行判斷
let result = products.map(item => (item.price > 1000))
console.log(result) //[ false, false, false ]
//! 創建成新物件
// {'name': 'productName', 'onSale': true}
let onSaleProducts = products.map((item) => {
    y = {},
    y.name = item.name,
    y.onSale = (item.remaining > 1)
    return y
})
console.log(onSaleProducts)

[ { name: 'box1', onSale: false },
{ name: 'box2', onSale: false },
{ name: 'box3', onSale: false } ]
```


```js
let origin = [1, 2, 3]
const doubled = origin.map(item => item * 2)
console.log(doubled)

let arr = [2, 4, 6]
console.log(arr.map(item => item / 2))
```

## reduce
> 1ST 程序: sum[0] + sum[1] = result1
> 2ND 程序: result1 + sum[2]
> ....etc 直到迴圈結束

//* 最後的數字為初始 result 還未進行1ST的初始值

//* 可以作累加 (購物車結帳) 累乘
```js
const sum = [1, 2, 3].reduce((result, item) => {
    return result + item 
}, 10)
//* 得結果 16 = 10(初始) + 6(Loop Array的結果)
```
# reduce 進階篇
//* 詳細版 可在輸出前進行運算 & 輸出index & 輸出 array
```js
const sum = [1, 2, 3].reduce((result, item, index, array) => {
    console.log(
        'result:', result,
        'item:', item,
        'index:', index,
        'array:', array,
    )
    return result + item 
}, 10)
console.log(sum)
```
//* reduce 合併多個 Array 8:00
> https://www.youtube.com/watch?v=CXxVjQ1VTEo
```js
let myData = [[8, 6], [5, 4, 3], [2]]
let output = myData.reduce((result, item) => result.concat(item), [])
console.log(output)
```

# reduce //! 取得陣列平均值
```js
let cost = [20, 60, 40]
let average = cost.reduce((result, item, index, array) => {
    result += item
    //* 判斷是否最後一個了
    if (index === array.length - 1) {
        return result / array.length
    }
        return result
})
console.log(average)
```

## filter
//? 檢測condition，若是會加入array 否則不會
```js
const num = [1, 2, 3]
const evens = num.filter(item => item % 2 === 0)
//* 結果為 [ 2 ] 僅 2 為偶數被加入陣列
console.log(evens) 

//? 原版， return 後接condition
const evens = num.filter(function(item){
    return item % 2 === 0  //*此為判斷式
})
```

## find
//? 尋找符合 condition 目標是否存在
//* 有則回傳 該目標 {id: 'b'}
//! 無則回傳 undefined
```js
const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
const found = objects.find((item) => {
    // return item.id === 'b'
    return item.id === 'd'
})
console.log(found)
```

## find index (類似find，但回傳的是目標的index)
//? 查無結果會回傳 -1 注意: index 由 0 開始
```js
const objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
const found = objects2.findIndex(item => item.id === 'e')
console.log(found)
```

## some
//? 檢測整個 Array 是否 
//!其中有一項符合該Condition
//* 回傳 true / false
```js
const hasNegativeNum = [1, 2, 3, -1].some((item) => {
    return item < 0  //* 此為判斷式
})
console.log(hasNegativeNum)
```
## every  (類似some)
//! 但需要全部都符合才會回傳 true
```js
const allPositiveNum = [1,2,-1].every(function (item) {
    return item > 0 //* 此為判斷式
})
console.log(allPositiveNum) //false
```


# JS Array 字串處理

# slice 選取指定範圍 可以刪除元素或取出元素
```js
let testArr = ['box1', 'box2', 'box3', 'box4']
//* (n,m) 取第一個 從第 n + 1 個開始取 取到第m個
let sapArr = testArr.slice(1, 3)
//[ 'box2', 'box3' ]
//! (0,-1) 刪除最後一個
let delLastArr = testArr.slice(0, -1) 
//[ 'box1', 'box2', 'box3' ]
```
# substring //? 用於字串切割 同slice方法
```js
let test = 'DangYo'
// ? (n,m) 從第 n+1 個位置 起 至 位置 m 
let getSapStr = test.substring(1, 4) //ang
//* 從第 4 個字起直到最後
let getAfterString = test.substring(4) //Yo

//! 從第一個位置 起 至 位置 4  
//* 0以下效果相同接從首個起
let firstStartStr = test.substring(0, 4) //Dang
```

# indexOf()   //? 用於字串 顯示其起始位置
//* 用來搜尋字串是否包含某元素 
//* 從0開始，空白也算一個元素
```js
// 不見得要是單字
let notWord = 'Welcome to Hell'
console.log(notWord.indexOf('come'))

let testStr = 'Cat Dog Cow'
let CatPosition = testStr.indexOf('Cat') // 0
let DogPosition = testStr.indexOf('Dog') // 4 
//! 字串搜尋大小有別 
let dogPosition = testStr.indexOf('dog') // -1
// ? 搜尋不到會顯示-1 
let BirdPosition = testStr.indexOf('Bird') // -1
```