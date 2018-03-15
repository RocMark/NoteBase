# Higher-order functions

# Why?
Less bugs //* Easier to reason about
Less time //? Re-use more
省去 ijk宣告

# forEach() V.S. map()
forEach() 不會返回任何東西
map 會返回一個相同大小的新數組

# Example
```js
let delTitle = attr => attr.title !== todoTitle
let newTodoList = todoList
    .filter(delTitle)
    .map(attr => attr)
newTodoList.forEach((obj) => {
    htmlString+=`~`
})
$().render(htmlString)
```

# forEach()
```js
let books = [
    { author: 'Tom', page: 23 },
    { author: 'Mark', page: 46 },
]
books.forEach((book) => {
    console.log(book.author)
})
```

## map() //? 取目標屬性 創造新陣列
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
## filter() //? 搜尋符合條件的資料用
```js
//? 可以重複利用 checkMan 判斷式在其他地方 (decouple 解耦)
const checkMan = attr => attr.gender === 'male'
let mans = person
    .filter(checkMan)
console.log(mans)