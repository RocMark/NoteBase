# JS原型鏈
prototype, prototype chain,inheritance

> https://goo.gl/7EfLSX

# Note Review
//!  Object.create 最單純的原型繼承

//* Object.create vs New
>https://goo.gl/iCjXMn  (難 待看)

# 繼承 inheritance
即物件可以提取其他物件的的屬性或方法

C#/JAVA classical inheritance
JS prototypal inheritance

# 原型鏈 prototype chain

最上層為 object  [prop1]
protoA{} [prop2]
protoB{} [prop3]

[prop1] 
//* object.prop1取得

[prop2]
//* 使用 obj.prop2 時，
> obj.prop2 = obj.protoA.prop2
> 會先尋找這個物件是否有該屬性，若無會//? 一直往上尋找，直到找到所需要的值。
//! 找無値時，會回傳null

# Object.create 最單純的原型繼承

# 範例
```js
    let Person = {
        firstName: 'Default',
        lastName: 'Default',
        getFullName() {
            return `${this.firstName} ${this.lastName}`
        },
    }

    let john = Object.create(Person)
    console.log(john)
    john.firstName = 'John';
    john.lastName = 'Doe';
    console.log(john.getFullName());
```

# Object.create 與 new 區別



# Object.create polyfill
> https://goo.gl/2p1Epy
```js
    if (!Object.create) {
        Object.create = function (o) {
            if (arguments.length > 1) {
                throw new Error('Object.create implementation only accepts the first parameter')
            }
            function F() {}
            F.prototype = o
            return new F()
        }
    }
```

# Prototype Chain 範例
//* 注意實務上不會使用此種方法當繼承(效能過差)，僅用於理解觀念

//? 所有物件都會包含原型(prototype)此物件，
//? 取得原型物件:  __proto__  (實務不使用)

//! let proto = Object.getPrototypeOf(obj)

```js
    let person = {
        firstName: 'Default',
        lastName: 'Default',
        getFullName() {
            return `${this.firstName} ${this.lastName}`
        },
    }

    let john = {
        firstName: 'John',
        lastName: 'Doe',
    }
    //* john繼承 person物件
    john.__proto__ = person

    console.log(john.getFullName()) //John Doe

    //* 在該物件存在，所以就回傳此，不需要往上去找
    console.log(john.firstname) // John

    let jane = {
        firstName: 'Jane',
    }

    jane.__proto__ = person

    //* Jane 只有 fName 所以 JS引擎 會去 __proto__理面找，getFullName() & lastName屬性
    console.log(jane.getFullName()) // Jane Default
```

# 所有物件的 prototype 都是物件
> https://goo.gl/94NKQb
```js
let obj = {
    name: 'Tom',
}
let func = function () {
    console.log('Hello')
}
let arr = ['this', 'is', 'an', 'array']
let str = 'This is string'
let num = 3
let boolean = false
```
