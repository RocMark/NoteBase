# ES6 Class
> JS仍是 prototypal inheritance的方法
> class僅是語法糖，用來建立物件和原型的另一種撰寫方式
//* 背後邏輯和 function constructor 或 Object.create 相同

# 使用方法
//* 使用 constructor 來建立物件
> 在一個class中，只能有一個constructor
//? 透過 new 建立 john物件
```js
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName
            this.lastName = lastName
        }
        getFullName() {
            return `Hello ${this.firstName} ${this.lastName}`
        }
    }

    //* new的值會帶入 constructor
    let john = new Person('John', 'Doe')
    console.log(john)
```

# 建立子類別 extends
```js
    class Animal {
        constructor(name) { this.name = name }
        speak() {
            return `${this.name} makes a noise`
        }
    }

    class Dog extends Animal {
        speak() {
            return `${this.name} makes a bark`
        }
    }

    let ruby = new Dog('Ruby')
    console.log(ruby)
    ruby.speak()
```

# 呼叫父類別  super
```js
    class Animal {
        constructor(name) { this.name = name }
        speak() { return `${this.name} noise` }
    }
    class Dog extends Animal {

        //* 此方法建立於 Dog物件中，並非覆蓋父的方法，因此可以透過super呼叫父類的方法
        speak() { return `${this.name} bark` }

        //? super 呼叫父類別的方法使用
        speakAnimal() { return super.speak() }
    }
    let ruby = new Dog('Ruby')
    console.log(ruby.speak()) // Ruby bark
    console.log(ruby.speakAnimal()) // Ruby noise
```