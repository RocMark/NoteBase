# JS 建構式&原型建立
function constructor 函式建構式 & prototype
> https://goo.gl/1gebvA


# 透過函式建構式與Prototype的實用處
//? => 實務上 方法放在 建構式的prototype (減少記憶體使用)
//* => 屬性放在建構式中，因每物件可能都會有不同的屬性
```js
    function Person(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName

        //* BAD 若有1000物件皆含此方法，會占用相當多的記憶體，
        //? 但使用 prototype方法 僅會產生一個，並且可以共用!(效果相同)
        // this.getFullName = function () {
        //     return `${this.firstName}${this.lastName}`
        // }
    }
    let john = new Person('John', 'Doe')

    Person.prototype.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
```

# function.prototype 屬性
//* 並非進入此函式的原型

//? 所有透過這個function constructor 所建立出來的物件的 prototype

# 範例
//? 使用 Person.prototype.getFullName =
//* 建立原型的新方法

//* Person.prototype
//? => 透過 new Person 創建的物件，皆可以使用此方法

```js
    function Person(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    let john = new Person('John', 'Doe')

    console.log(Person.prototype) // 回傳空物件

    //? 使用 Person.prototype.getFullName =
    Person.prototype.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
    console.log(john.getFullName())

    console.log(john.__proto__) 
    //Person { getFullName: [Function] }
```

# function constructor 去增添屬性&方法
//? ESLint 不推薦此種做法
> ESLint 不推薦用 new 去建立 num/str(no-new-wrappers)
//* 避免不小心覆蓋原本內建的屬性
```js
    String.prototype.isLengthGreaterThan = function (limit) {
        return this.length > limit
    }
    console.log('PJCHENder'.isLengthGreaterThan(4))
```