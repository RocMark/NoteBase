# ES6 Class介紹

# Class 
What is Class?  模板、藍圖
透過 new 產生 物件出來

new 關鍵字可以建立出 自己定義的類別出來
//* 原生的有 Ex: new Date()  new Array()

Why use Class? 簡化程式碼 複雜度

# ES5 Class 寫法
```js
  function User(name, age) {
    this.name = name
    this.age = age
    this.gender = 'male'
  }
  let tom = new User('Tom', 45)
  let mark = new User('Mark', 30)
  console.log(mark.age)
```

# ES5 Function 共通寫法
//! 需要寫在 prototype上
//* ES6 簡化此過程，直接寫於 Class 中即可
```js
  User.prototype.birthYear = function() {
    return new Date().getFullYear() - this.age;
  }
```

# 指定傳入的參數 寫法
//* 順序無差別、key為基準
```js
  function User({ name, age }) {
    this.name = name !== undefined ? name : 'defaultName'
    this.age = age
    this.gender = 'male'
  }
  let tom = new User('Tom', 45)
  let mark = new User('Mark', 30)
  let test = new User({ age: 30, name: 'Mark' })

  console.log(test.name)
```

# ES5 Function
```js
  function User({ name, age }) {
    this.name = name !== undefined ? name : 'defaultName'
    this.age = age
    this.gender = 'male'
    this.birth = ''

    //* 此 Function 放入 ES6 Class constructor 就會立即執行
    //* 即不需要自行在做執行該Function
    this.enrollDate = function () {
        this.birth = new Date().getTime()
        return new Date().getTime()
    }
  }
  let test = new User({ age: 30, name: 'Mark' })
  test.enrollDate()

  console.log(`birth${test.birth}`)
```

# ES6 Class  (prototype 語法糖)
```js
  class User {
    //* constructor 建構式 初始化 建立物件會自動執行內部內容
    constructor(name = 'Mark', age = 30) {
      this.name = name
      this.age = age
      this.birth = ''
      this.enrollDate()
    }
    // method
    enrollDate() {
      this.birth = new Date().getTime()
      return new Date().getTime()
    }
  }
  let tom = new User('Tom', 45)
  console.log(tom.birth)
```

# Function 寫於 constructor / method 的差異

//! 寫於 constructor 建立 屬性/方法 皆會是建立在 該物件之上 (記憶體位置各不同) 比較為 false
//* 因此會重復建立 相同的方法於每個物件 (沒必要!!)

//? 而 class 建立的 方法，則可通過 prototype chain 共通使用，因此比較時會為 true

```js
    class User {
        constructor(name = 'Mark', age = 30) {
            this.name = name
            this.age = age
            this.birth = ''
            this.birthYear = function () {
                return new Date().getFullYear - this.age
            }
            this.enrollDate()
        }
        // method
        // birthYear() {
        //     return new Date().getFullYear - this.age
        // }
        enrollDate() {
            this.birth = new Date().getTime()
            return new Date().getTime()
        }
    }

    let userA = new User('User1', 45)
    let userB = new User('User2', 45)

    //* false 寫於 constructor 會隸屬於 該物件
    console.log(userA.birthYear === userB.birthYear)

    //? true 寫於 method 會因 prototype chain 而 指向同一個原型的 Function
    console.log(userA.enrollDate === userB.enrollDate)
```

# prototype 小提示
定義函式，皆會具備prototype屬性
此屬性為一個物件，內含有 prototype
```js
    function Foo() {}
    console.log(Foo.prototype)
    
    console.log(Foo.prototype.constructor === Foo) 
    //* true

    Foo.prototype.run = function () { 
        console.log('run') 
    }

    let testA = new Foo()
    let testB = new Foo()
    testA.run()

    //? true 來自於同一個記憶體位置
    console.log(testA.run() === testB.run())

    dir(testA) //於 console 中可以顯示該內容
    dir(testB) 
    //* 其 __proto__ 中皆含有 run Function
    //* run Function 來自同一個 上層級物件 (prototype chain)

    //? 原始為 ，因為在該層級找不到方法會自動往上找
    testA.__proto__.run 
    //* 因此可以省略寫成如下即可
    testA.run 

    
    //?　hasOwnProperty　會尋找該物件是否有該pro

    testA.hasOwnProperty('run') // false
    //* 因為該物件本身不含其方法 (繼承而來)

    testA.run = function(){ console.log('test')}
    testA.hasOwnProperty('run') // true

    delete testA.run //* 刪除該 property
    testA.hasOwnProperty('run') // false

```

# ES6 靜態方法 (三種方法)
https://goo.gl/79DAiK
//* 可直接調用 不需要額外 new 建立物件
1. 父直接調用
2. 子繼承父 後 調用
3. 子類 通過 super 調用
```js
    class Foo {
        static classMethod() {
            return 'hello';
        }
    }
    Foo.classMethod();  //hello

    class Bar extends Foo { }
    Bar.classMethod();  //hello

    class Cla extends Foo {
        return super.classMethod(); //hello
    }
```

# getter / setter
可控制 資料 寫入 & 讀出的過程 
(可於中間作一些format/判斷...etc)

//* Vue 使用 es5 實作 get set

# Getter / setter 寫法
//! 使用 Object.defineProperty

//! 若要使物件的屬性無法被更動 writable: false,
```js
    Object.defineProperty(obj, 'key', {
        get() {
            // 取得值前 可於此作format....etc
            return this.name
        },
        set(val) {
            // 設定值前可以作一些 例外判斷 (falsy...etc)
            this.name = val
            console.log(val)
        }
    })
```

# prototype & __proto__ 的不同
類別才有 prototype

物件則無，但可以通過 prototype chain找到 prototype
即 __proto__
```js

    Function Foo(){}
    Foo.prototype // {constructor: f}


    var foo = new Foo()
    foo.prototype  // undefined
    foo.__proto__  // {constructor: f}

    Foo.prototype === foo.__proto__ // true

    Foo.prototype.run = function (){}

    // foo.__proto__.run 等同於 下列 (__proto__可省)
    a.run

    //? ESLint 會建議不要使用 __proto__

    //* 改使用 Object.getPrototypeOf(foo)
    //* 會回傳 該物件的 prototype
```