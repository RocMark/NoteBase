# JS OOP Crash

* every thing is object
原始型別，當他使用方法時，在背後 JS 會將其包裹於
String、Number、Boolean物件下
```js
  const str = 'Hey'
  console.log(typeof str) // string

  const strObj = new String('Hey')
  console.log(typeof strObj) // object

  alert()
  window.alert() // 等同於上句
```

# Object Literal
```js
  const book = {
    title: 'Book One',
    author: 'Mark',
    year: 2018,
    getSummary() {
      return `${this.title} written by ${this.author} in ${this.year}`
    },
  }

  console.log(book.getSummary())
  // 取得所有的值
  console.log(Object.values(book))
  // 取得所有的鍵
  console.log(Object.keys(book))
```

# Constructor
* Constructor 基本上就只是個 Function
* 使用 new 關鍵字，會產生一個物件實體 (instance)
使用 new 時 Book function 會執行
```js
  function Book(title, author, year) {
    console.log('This will Run')
    this.title = title
    this.author = author
    this.year = year
    this.getSummary = function () {
      return `${this.title} written by ${this.author} in ${this.year}`
    }
  }
  // 產生一個物件實體
  const b1 = new Book('Book One', 'Mark', 2018)
  console.log(b1.getSummary()) // Book One written by Mark in 2018
  console.log(Object.getPrototypeOf(b1)) // Book{}
```

# Prototype 原型  (ES5作法)
* 避免使用 constructor 把 function 寫於每個物件中
只需要寫在原型上即可共用，省記憶體
```js
  function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }
  Book.prototype.getSummary = function () {
    return `${this.title} written by ${this.author} in ${this.year}`
  }

  Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years old`
  }

  // 新增 this.modified 來紀錄是否有更改記錄
  Book.prototype.setYear = function (newYear) {
    this.year = newYear
    this.modified = true
  }

  const b1 = new Book('Book One', 'Mark', 1952)
  const b2 = new Book('Book Two', 'Tom', 1891)
  console.log(b2.getAge()) // 127
  b2.setYear('1991')
  console.log(b2.getAge()) // 27
```

# Reveal Pattern
Constructor 有 指定回傳物件時，回傳結果為該物件
* 藉此可以封裝內部資料，公開想公開的介面
```js
  function Book(title, author, year) {
    console.log('This will Run')
    this.title = title
    this.author = author
    this.year = year
    this.private = 'Cant Get!'
    this.public = 'Can Get!'
    this.getSummary = function () {
      return `${this.title} written by ${this.author} in ${this.year}`
    }
    return {
      title,
      author,
      year,
      public: this.public,
      getSummary: this.getSummary,
    }
  }
  const b1 = new Book('Book One', 'Mark', 2018)

  console.log(b1.public) // Can Get !
  console.log(b1.private) // undefined
```

# Inheritance 繼承 (ES5)
```js
  function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }

  Book.prototype.getSummary = function () {
    return `${this.title} written by ${this.author} in ${this.year}`
  }

  function Magazine(title, author, year, month) {
    Book.call(this, title, author, year)
    this.month = month
  }
  // 綁定函式 必須早於 new 物件
  Magazine.prototype = Object.create(Book.prototype)
  const mag1 = new Magazine('mag1', 'Mark', '1957', 'March')
  // console.log(mag1.getSummary()) // is not a function 必須先綁定函式
  console.log(mag1.getSummary()) // Object.create 後才可用
```

# Object.create
```js
  const bookProto = {
    getSummary() {
      return `${this.title} written by ${this.author} in ${this.year}`
    },
    getAge() {
      const years = new Date().getFullYear() - this.year
      return `${this.title} is ${years} years old`
    },
    setYear(newYear) {
      this.year = newYear
      this.modified = true
    },
  }

  const book = Object.create(bookProto, {
    title: { value: 'Book One' },
    author: { value: 'Mark' },
    year: { value: 2018 },
  })
  // 兩種寫法皆可
  // book.title = 'Book One'
  // book.author = 'Mark'
  // book.year = 2015
  console.log(book)
```

# ES6 Class
作的事同上列，只是語法糖
```js
  class Book {
    constructor(title, author, year) {
      this.title = title
      this.author = author
      this.year = year
      this.objFunc = function () {
        console.log('所有建立的物件 都會含有此Func')
      }
    }
    // 方法應寫於 constructor 外
    // 此等同於在 Book的原型上 建 getSummary
    getSummary() {
      return `${this.title} written by ${this.author} in ${this.year}`
    }

    // ESLint 會建議除了 static 外的 Function 應該都會用到 this 關鍵字
    sayHey() { console.log('Hey') }
    // 可以不需要使用 new 建立物件即可使用的 Function
    static sayHi() { console.log('Hi') }
  }
  const b1 = new Book()
  Book.sayHi() // 會執行 Hi，需要用原型上執行
  // b1.sayHi() // is not a Function
  // Book.sayHey() // is not a Function

  class Magazine extends Book {
    constructor(title, author, year, month) {
      super(title, author, year)
      this.month = month
    }
  }
  const mag = new Magazine('Mag One', 'Mark', 2015, 'March')
  console.log(mag.getSummary())
```