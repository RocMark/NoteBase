# TLDR ES6+

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

    var arr = multiply(2, 1, 2, 3) 
    console.log(arr)
    function multiply(multiplier, ...theArgs){
        return theArgs.map(function(elem){
            return multiplier * elem
        })
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