# JS 函式建構式 & 關鍵字 new
函式建構式(function constructor)建立物件

constructor 建構子
所建立出來的物件 我們稱之為 實例 instance

# 參考資料
- [PJchender](https://pjchender.blogspot.com/2016/06/javascriptfunction-constructornew.html)

# 函式建構式特性
- 使用 new 表示呼叫 constructor 
- new 會建立 新的物件
- 該 Function 內的 this 宣告，會變成新物件的屬性

# 函式建構式 function constructor 
* 函式建構式 就是普通 Function
只是我們透過這個 function 來建立物件
若在 function 前面 加上 new 這個運算子，

# 使用 new 關鍵字 發生了些甚麼
1. 使用 new 關鍵字時，會先建立一個空物件
2. 接著 Person 函式會被執行 (invoke)，當函式執行會有 this 被建立，此 this 就會指向剛建立的空物件
3. 執行到 this.xxx時，this 指向空物件，等同於幫 該空物件 設置屬性 & 值
* 只要這個 Person 沒有指定 return 其他物件，就會回傳給我們這個新建立的物件

# EX1
此範例可證使用 new 關鍵字時，後方的 Function會執行!
```js
  function Person() {
    this.firstName = 'John'
    this.lastName = 'Doe'
    // 此 log 會執行兩次，表示使用 new 時，這個 Function會執行!
    console.log('This will Run!')
  }

  const john = new Person() // 建造時執行 Person()
  const mark = new Person() // 建造時執行 Person()
  console.log(john)
  // Person {firstName: 'John', lastName: 'Doe'}
``` 

# EX2
此範例可證使用 new 關鍵字時，this 會指向一個空物件

* 比較 沒有 new 關鍵字
無 new 關鍵字，等同於 函式運算式 (Function Expressions) 用法
而該 Function 無 return 值，預設會回傳 undefined
```js
  function People() {
    console.log(this)
  }
  const mary = new People()
  // People {} 可見執行 new 時，會將 this 指向建立的空物件
  const tim = People()
  // window 此為函式運算式 (function expression)
  // 等同於純粹的調用該 Function，因此 this為執行環境 window

  console.log(mary) // People {}
  console.log(tim) // undefined
```

# EX3
* 若 return "物件" 則會回傳自定結果
* 若 return 基礎型別 則會回傳 new 出的物件
```js
  function Person() {
    this.name = 'Mark'
    return {
      RETURN: '會回傳此自訂物件',
      name: 'Not Mark',
    }
  }
  const john = new Person()
  console.log(john.name) // Not Mark

  function People (){
    this.name = 'Mark'
    return 123
  }
  const tim = new People() 
  console.log(tim) // 'Mark'
```

# EX4 實際應用
使用 函式建構式，來建立可覆用的藍圖
```js
  // 使用 ES6 預設參數 (Default parameters)
  function Person(firstName, lastName, age = 500) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  const john = new Person('John', 'Doe')
  console.log(john)
  const jane = new Person('Jane', 'Doe')
  console.log(jane)
```