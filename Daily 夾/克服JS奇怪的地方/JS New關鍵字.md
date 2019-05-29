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