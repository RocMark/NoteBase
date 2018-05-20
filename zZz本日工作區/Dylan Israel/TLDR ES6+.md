# TLDR ES6+

let const 
tplString 
destructuring
Object Literals

## tplString
//* 於DOM渲染會換行，不需要在加上<br> Tag
```js
    let str = `Hi
    ${fName}
    ${lName}.
    `
```

## 解構 物件
```js
    let person = {
        fName: 'John',
        lName: 'Doe',
        age: 30
    }
    //? 甚至可以自訂縮寫
    let { fName: fn, lName, age } = person
    console.log(fn)
```
## 解構 陣列
```js
    let arr = [1, 2, 3, 4]
    let [one, two, three] = arr
    console.log(one)
```

## Object Literals
//? ESLint 會自動改寫

## For Loop 迴圈 演化
> 參 深入淺出 ES6 Loop

## Spread Operator
* 利用 ... concat Array
```js
    const line = [
        'line One',
        'line Two',
        'line Three',
    ]

    const newLine = ['Title', ...line]
    //* 會將 此陣列 跟後面的陣列作 concat
    console.log(newLine)

    //* 原本 concat 作法，放前的.concat(放後的)
    const title = ['Title']
    console.log(title.concat(line))
```
* 與 Object
```js
    const line = {
        title: 'Title',
        subTitle: 'SubTitle',
        mainLine: 'MainLine',
    }

    //* 創造新物件，並加入新屬性
    const combine = { 
        newAttr: 'newVal',
        //* 當 line 沒有該屬性的時候，就會採用此 default
        title: 'newTitle', 
        ...line 
    }
    console.log(combine)
```

## Rest Operator
//! 用於不知道會傳入多少變數
```js
    function add(...numbers) {

        //* ES5 要先將 arguments 轉成 Array 在做處理
        //? ESLint 也建議使用 rest parameter
        console.log(arguments)
        
        console.log(numbers) // [3,4,5,6]
        console.log(typeof numbers) // object ??????
        return numbers.reduce((sum, el) => sum + el, 0)
    }
    let test = add(3, 4, 5, 6)
    console.log(test)
```

## Default Params
```js
    function add(numbers = [0]) {
        let total = numbers.reduce((sum, el) => sum + el, 0)
        console.log(total)
    }
    add([1, 23, 5])
```

## Modular JS
//* Import / Export
> 參資料夾


## Trailing Commas
//* 可以容許後面加逗號，利後續加變數，不會出錯
```js
    const arr = [1, ]
    const obj = {name: 'test',}
    function add(val1, ){ }
```



## fetch api & async await
//* 建一個 index.html 去 chrome 看結果
```js
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts/10'


    //* fetch 會 return 一個 promise
    //? fetch api 寫法

    function getData() {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
    }
    getData()

    // async await 寫法
    async function getDataAsync() {
        const response = await fetch(baseUrl)
        const json = await response.json()

        console.log(json)
    }
    getDataAsync()
```

## Sets 另外整理


## Class 另外整理
> http://www.codedata.com.tw/javascript/es6-4-maximally-minimal-classes/
## extends Class
extends super()
覆寫function原理，會找最近的先，才網上找有無
```js
    class Cat extends Animal {
        constructor(type, wild, tail) {
            super(type, wild)
            this.tail = tail // 覆寫
        }
        roar(sound) { // 覆寫
            return `${this.type} roar like ${sound}`
        }
    }
```

## Object.getOwnPropertyDescriptors
```js
    let tito = {
        type: 'cat',
        age: 2
    }

    // 取得 defineProperty 可以設定的參數的實際值
    // console.log(Object.getOwnPrpertyDescriptor(tito, 'type'))

    //* 取得所有的參數值 +'s'
    console.log(Object.getOwnPropertyDescriptors(tito))
```