# Higher-order functions

# Why Use ?
```js
    // Less bugs //* Easier to reason about
    // Less time //? Re-use more
    // 省去 ijk宣告
    // 皆不會去修改陣列內容 //! immutable
    // 可以另創一陣列，存取結果
```

# High-Order-Function 總覽
//? forEach() 用於遍歷每個元素
//! map() 遍歷進行運算，得新陣列
//* filter() 取出回傳值為 true者，建立新陣列
> reduce 較少用 於最下方

# forEach()
```js
    //* 基礎用法
    elems.forEach((elem) => {
        console.log(elem)
    })

    //* with Index
    function testArr(elem, index, array) {
        console.log(`第${index}個為${elem}`)
    }
    // index 2 被跳過 因為該處無item
    [2, 5, , 9].forEach(testArr)
    // log結果 a[0] = 2 // a[1] = 5 // a[3] = 9
```

# map() filter() 合併範例
```js
    let testArr = [1, 2, 3]
    const checkNum = elem => elem >= 2
    // 存取新陣列
    let newArr = testArr
        // filter 將 符合運算數的值
        .filter(checkNum)
        // .filter(val => val >= 2) //*等同於此
        // 將數值*2 
        .map(val => val * 2)
    console.log(newArr) // [4,6]
```

# reduce 介紹
> reduce 遍歷，依序組合、加總然後丟給下個元素
=> 可進行 累加、累乘的動作

//? 將陣列化為單一值時使用
> => 用於陣列內容全部統整的時候 

# immutable (From MDN)
> Array.prototype 底下的這些高階函式
//? 大多都具不會去改變資料來源本身原有的值的特性

# reduce()
> 下方範例可得其過程為
```
    1ST: 
        Sum is 0  //* Function尾的初始值 0
        Elem is 1 //* 第一個元素
        0 + 1     //* 首次運算
    2ND: 
        Sum is 1  //* 1 + 0 得解
        Elem is 2 //* 第二個元素
        1 + 2     //* 第二次運算
    3RD:
        Sum is 3  //* 1 + 2 得解
        Elem is 3 //* 第三個元素
        3 + 3     //* 無下一元素，回傳該結果為 6 
```

```js
    let arr = [1, 2, 3]
    let totalNum = arr
        .reduce((sum, elem) => {
            console.log(`Sum is ${sum}`)
            console.log(`Elem is ${elem}`)
            return sum + elem
        }, 0) //! 初始值
    console.log(totalNum) 6 
```

<!--------------------------------------------------->
> 以下舊的整理 備份用

# map()
```js
let checkMan = attr => attr.gender === 'male'
let names = person
    // attr 為自訂一變數，等同於傳入person Array
    .filter(checkMan)
    //? find() 只回傳第一個符合的物件，得一個Object
    // .find(attr => attr.name === 'Mark') 
    .map(attr => `${attr.name} is ${attr.age}`)
    // [ 'Mark is 27', 'Tom is 28', 'Tim is 34', 'Mary is 87' ]
```

> .find() 功能與filter相同，但只回傳第一個，取得結果為一個物件
# filter() //? 搜尋符合條件的資料用
```js
//? 可以重複利用 checkMan 判斷式在其他地方 (decouple 解耦)
const checkMan = attr => attr.gender === 'male'
let mans = person
    .filter(checkMan)
console.log(mans)