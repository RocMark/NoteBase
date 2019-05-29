# TLDR JS 筆記

# 變數 Hoisting
//! Function 優先級較高
```js
    console.log(x)
    var x = 10
    console.log(x)

    // function x() {
    //     console.log('test')
    // }

    // console.log(y)
    let y = 10
    console.log(y)

    //* let 重覆宣告會出錯 (Quokka Error Msg)
    // ​​SyntaxError: Identifier 'y' has already been declared​​
    // function y() {
    //     console.log(test);
    // }

    //? 函式建構式 不會進行 Hoisting!
    // console.log(z)
    console.log(w)
    let z = function () {
        console.log('test')
    }
    function w() {
        console.log('test')
    }
```

# Number用法
//? ESLint 建議 +- & */ 不可混用 用括號括起來
```js
    let num = 7.24
    //* 效果相同 10為進位 radix進位不可少
    console.log(parseInt(num, 10))
    console.log(Number.parseInt(num, 10))
    console.log(Number.parseFloat(num, 10))

    //* 設定小數點後要有幾位 0~20 負不可
    console.log(num.toFixed(5))

    let num2 = (7 + 3) * 10
```

# Array
//* 基本操作，配合 Qoukka
```js
    let arr = [1, 2, 3, 4, 5]

    console.log(arr)
    arr.push(6)
    console.log(arr)
    arr.pop()
    console.log(arr)
    arr.shift()
    console.log(arr)
    arr.unshift(1)
    console.log(arr)
```
//? 取出陣列元素 splice
```js
    let arr = [1, 2, 3, 4, 5]
    //* 取出 index 從 x (1) 始 的 n (2)個元素
    console.log(arr.splice(1, 2))
    console.log(arr)
```

# 複製一個新的陣列 map (會產生一個新Array 互不影響)
```js
    let example = [1, 2, 3, 4, 5, 6]

    let example2 = example.map(elem => elem)
    example2.push(7)
    console.log(example)
    console.log(example2)
```


# Object篇
```js
    let obj = {
        fName: 'John',
        lName: 'Doe',
        age: 30,
        cats: ['Neko', 'cat', { name: 'kitty', age: 1 }],
        male: true,
    }
    console.log(obj.cats[2].age)

    //* 將 object 轉成 string
    let str = JSON.stringify(obj)
    console.log(str.fName)

    console.log(JSON.parse(str))
    console.log(typeof JSON.parse(str))
```

//? 檢測 Object 是否有該屬性

//* ESLint 不建議使用 hasOwnProperty
//* 該方法可以用來檢測指定的屬性是否是對象的直屬屬性而不是原型鏈上的
//! 它不會去檢查原型鏈上的所有屬性
```js
    // Bad
    console.log(obj.hasOwnProperty('cats'))
    console.log(obj.hasOwnProperty('test'))

    // Good
    console.log(Object.prototype.hasOwnProperty.call(obj, 'test'))
    console.log(Object.prototype.isPrototypeOf.call(obj, 'test'))
    console.log({}.propertyIsEnumerable.call(obj, 'test'))
```
# Object 靜態方法 (static)
```js
    //* Object 靜態方法
    console.log(Object.keys(obj))
    console.log(Object.values(obj))
    console.log(Object.entries(obj))
```

# for in 迴圈 疊代物件屬性
```js
    //* ESLint guard-for-in 要求內不迴圈判斷是否符合該key

    //* ESLint no-restricted-syntax
    //! 不建議使用 for in loop 他會loop 整個 prototype chain
    //? Use Object.{keys,values,entries}, and iterate over the resulting array. ()

    // eslint-disable-next-line
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            
        }
    }
```

# 累乘 累除
```js
    let test = 3 ** 4
    console.log(test)
    let test2 = 16 / 2 / 2
    console.log(test2)
```

# ++ // -- 符號
//* 不推薦使用
```js
    let num = 5
    console.log(num++)  // 5
    console.log(num--)  // 6
    console.log(num)    // 5

    num += 5
    console.log(num)
    num -= 5
    console.log(num)
    num *= 5
    console.log(num)
    num /= 5
    console.log(num)
```

# const 
//! 注意!! 可以更動 物件/Array內的值，但無法重新宣告成其他型態
```js
    const arr = [1, 2, 3]
    const obj = { name: 'test' }
    obj.name = '123'

    // arr = [4, 5, 6]  //! ERROR
    arr.push(4)
    console.log(arr)
    console.log(obj.name)
```

# const 物件內屬性 作法
```js
    const obj = { name: 'test' }

    Object.defineProperty(obj, 'name', {
        writable: false, // 是否可更改屬性
    })
    obj.name = '123'
    console.log(obj.name) // test
```

# if else 
```js
    if (false && true) {
        console.log('if')
    } else if (true) {
        console.log('else if') //? 會執行
    } else if (true) {
        console.log('else if2') //! 不會執行
    }
```

# for   forreverse

```js
    let arr = ['a', 'b', 'c']
    for (let i = 0, j = arr.length; i < j; i += 1) {
        console.log(i)
    }

    for (let i = arr.length, j = 0; i > j; i -= 1) {
        console.log(i)
    }
```

# while loop 用於未知需要執行幾次
```js
    let count = 10
    while (count > 0) {
        console.log(count)
        count -= 2
        console.log(count)
        if (count <= 5) {
            break
        }
    }
```

# do while 至少執行1次
```js
    do {
        count -= 2
        console.log(count)
        if (count <= 5) {
            break
        }
    } while (count > 0)
```