//! JSON格式 存取更容易
let books = [
    { author: 'Tom', page: 23 },
    { author: 'Mark', page: 46 },
]
books.forEach((book) => {
    console.log(book.author)
})


//* 基本Array
let testArray = [10, 20, 'YO', {}]
for (let i = 0; i < testArray.length; i += 1) {
    // console.log('與forEach()相同效果')
}
let testFunc = function (item) {
    console.log(`${item}`)
}
// testArray.forEach(testFunc)

