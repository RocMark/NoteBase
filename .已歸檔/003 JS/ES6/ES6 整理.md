# ES6整理
> 內容 TemplateString / ArrowFunc / Class / 解構

# ES6 Template
//* 可以於模版字串中 使用 JS Code進行運算

# default value function
```js
function defaultTets(a, b = 10) {
    //* 記得無default value的放前面較佳
    return a + b
}
```

# Arrow Function (匿名函式)
> https://www.youtube.com/watch?v=6sQDTgOqh-I

> Why use?  Short / Inline / Single-Purpose
> 可省 Function字 / 單行 return 可不用大括號 / 單個變數傳入 可不用小括號
//* .filter(event => event.type === 'att')

//! 使用this更方便
> ES6前需要用 bind() / apply()

# 完整版 範例
> 可以再把可以重複利用的判斷式抽出
```js
const reduceTotal = (prev, x) => (prev || 0) + x
const isAttack = (e => e.type === 'att')
const totalDmgOnDorkman = dragonEvents
    // * 可以將 filter合併
    .filter(isAttack)
    .filter(e => e.target === 'player-dorkman')
    // .fiter(e => e.type === 'att' && e.type === 'player-dorkman')
    .map(e => e.value)
    .reduce(reduceTotal)
```

# Class
```js
function Person(name = 'person', age = 18) {
    this.name = name
    this.age = age 
}
const PersonArrow = (name, age) => {
    this.name = name
    this.age = age
}
class PersonClass {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    say() {
        console.log(`${this.name} is ${this.age}`)
    }
}
let p = new PersonClass('Tom', 87)
p.say() // log Tom

class SuperMan extends PersonClass{
    constructor(){
        // super會呼叫 父的constructor & function
        super()
        // 只有改變其 this.name!
        this.name = 'superman'
    }
}
let superman = new SuperMan()
superman.says('Yo')

class Bear {
    constructor() {
        this.type = 'bear'
    }
    says(say) {
    //! 使用Arrow Function 將 this 直接綁在此class
        setTimeout(() => {
            console.log(`${this.type} says ${say}`)
        }, 1000)
    }
}
```

# 解構
```js
let bear = 'foo'
let says = 'yo'
// 原始方法
// let zoo = {bear: bear, says:says}
// object short-hand
let zoo = { bear, says }


let foo = { type: 'faz', many: 2 }
let { type, many } = foo
console.log(many, type)

function bear(type = 'foo') {
    // 此行改進 傳入變數即可
    // type = type || 'foo'
    console.log(type)
}

//! 前面加的 ... 可以用來表示這個function可以接收多個參數
function bears(...types) {
    console.log(types)
    
}
bears('polar', 'foo', 'fav')
```