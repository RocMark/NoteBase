# Higher-order functions

# Why?
Less bugs //* Easier to reason about
Less time //? Re-use more

# List TransFormation 轉換 JSON用
```js
// 將Array 轉成另一個Array
.filter() / .map() 
//? .find() 功能與filter相同，但只回傳第一個，取得結果為一個物件
```

## map()
//? 抽出原Json，創造一個新的自訂陣列，可與filter合用
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

## filter()
```js
//!  filter() 常用
//* 用於Array 用來搜尋符合條件的資料
//? 可以重複利用 checkMan 判斷式在其他地方 (decouple 解耦)
const checkMan = attr => attr.gender === 'male'
let mans = person
    .filter(checkMan)
console.log(mans)
    

//* 原始會利用 for loop 來一個一個檢測
/*
let mans = []
for (let i = 0; i < person.length; i += 1) {
    if (person[i].gender === 'male') {
        mans.push(person[i])
    }
}
*/
```












//* In Javascript functions are value
//? 可用來傳入 Higher-order Function
```js
let triple = function (x) {
    return x * 3
}
let waffle = triple
waffle(30)
```
# Why 傳入 Higher-order Function
將多個小程式組成一個大程式 (composition 組成)

