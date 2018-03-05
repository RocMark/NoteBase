//* JS Object-oriented Programming

// ? Function目的在於將可重複利用的部分抽出
// function person(name, favColor) {
//     console.log(`Hi ${name} likes ${favColor}`)
// }
// person(john.name, john.favColor)
// person('Tom', 'red')

//* Object可以儲存各種的資訊 (func,[])
//* 包含 Data & behavior
let john = {
    name: 'John',
    favColor: 'Blue',
    greet() {
        console.log(`Hi ${this.name} likes ${this.favColor}`)
    },
}
// console.log(john.greet()) //! Error
// john.greet() //* 即可

// 若要建立類似John的物件
// ? 使用Blue print " Class " //*不見得要大寫開頭
function Person(name, favColor, age = 18) {
    this.name = name
    this.favColor = favColor
    this.greet = function () {
        console.log(`Hi ${name} ${favColor} ${18}`)
    }
}
let tom = new Person('tom', 'blue')
tom.greet()
let mart = new Person('mart', 'yello')
mart.greet()

