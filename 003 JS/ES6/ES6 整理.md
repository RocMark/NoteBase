# ES6整理

//* Babel 

# default function  //!好用
# Arrow Function
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



