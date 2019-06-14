# JS Func constructor & 關鍵字 new
> https://goo.gl/39uQ1m

函式建構式(function constructor)建立物件

# 函式建構式特性
//! 使用 new 表示呼叫 constructor 

//? 使用 new 它會幫我們建立一個物件
//* 原Function的值，會變成屬性名稱&値

# 範例與解說
//* 配合執行過程觀看
```js
    function Person() {
        this.firstName = 'John'
        this.lastName = 'Doe'
        console.log('此函式有被執行') // 此行會執行
        console.log(this) // 不寫屬性只執行此，會得到一個空物件
        return { Return: '原本this的內容就不會被回傳' }
    }

    let john = new Person()
    // Person { firstName: 'John', lastName: 'Doe' }
    console.log(john)

    //! 忘了加 new
    //* 就變成了 函數表達式（Function Expressions）
    let Tom = Person() 
    console.log(Tom) // 未設return => 回傳 undefined
    //? 此時的 this 指向 window, Func 建立環境為 window
```

# 執行過程
1. 會有一個空的物件被建立

2. People函式被執行(invoke),當函式執行在execution context 中會有this被建立，this指向由 new建立的空物件

3. 所以當執行 function，執行到 this.firstName時，因為this指向空物件，實際上是在幫這個空物件賦予屬性名稱和屬性值。

4. 只要這個函式建構式 People 沒有指定return為其他物件，它就會直接回傳給我們這個新建立的物件。


# JS new
* operators 的一種

constructor 建構子
所建立出來的物件 我們稱之為 實例 instance

# 函式建構式 function constructor 
* 函式建構式 就是普通 Function
只是我們透過這個 function 來建立物件
若在 function 前面 加上 new 這個運算子，


* new 會幫我們建立一個物件
Person Function 的內容，會變成此物件的屬性

1. 使用 new 關鍵字時，會先建立一個空物件
2. 接著 Person 函式會被執行 (invoke)
當函式執行會有 this 被建立，此 this 就會指向剛建立的空物件
3. 執行到 this.xxx時
此時 this 指向空物件，等同於幫 該空物件 設置屬性&值

* 只要這個 Person 沒有指定 return 其他物件
他就會回傳給我們這個新建立的物件

# EX1
此範例可證使用 new 關鍵字時，後方的 Function會執行!
```js
  function Person() {
    this.firstName = 'John'
    this.lastName = 'Doe'
    // 此 log 會執行兩次，表示使用 new 時，這個 Function會執行!
    console.log('This will Run!')
  }

  const john = new Person()
  const mark = new Person()
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

* 無 new
```js

```

# EX3
* 若於該建構式自定 return "物件" 則會回傳自定結果
[] 、 Function 也屬於物件

* 注意 如果 return 是基礎型別
則仍會 回傳 this 指向的物件
string、number、boolean
```js
  function Person() {
    this.name = 'Mark'
    return {
      RETURN: '會回傳此自訂物件',
      name: 'Not Mark',
    }
  }

  const john = new Person()
  console.log(john)

  function People (){
    this.name = 'Mark'
    return 123
  }
  const tim = new People()
  console.log(tim)
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