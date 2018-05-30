# Function vs. Block Scope

* JS 是以 Functional 區分 Scope。
* Scope 幫助封裝設計，隱藏資料變數。
> ES5 之前唯一的 Block Scope try — Catch，With Statement。
//* Block Scope 好處：Garbage Collection。

#  使用匿名函數（Anonymous functions）缺點 
1. 不能在 Stack trace 中顯示，不好 debug 
2. 不能參照 
3. 可辨識性不佳。

# Why 'this'  ? 
> 我們可以隱性地reference 物件，設計出更優雅的 API，並可以 reuse function。

//? this 是在 function 呼叫時才會產生，並且是由哪裡（誰）呼叫而決定this 是表示什麼。

this 判斷
1. 是否為new 
2. call,bind,apply
3. 是否存於物件中
4. 是否為 addEventListener 的 CallbackFunc

以上皆指向該物件，
//? 以上皆非則指向 window  
//! arrow Function指向 window

# Object篇
JS中 6大型別: object,string,number,boolean,null,undefined

//! everything in JavaScript is an object 是錯誤的!!!

//? function is a sub-type of object

> 當 取用 或 設置 object的屬性的時候，object會去 call內建的
> [[Get]] &  [[Put]] function

> object 中所有的屬性皆可透過 property descriptor描述
```js
    Object.getOwnPropertyDescriptor( myObject, "a" );
    // {
    //    value: 2,
    //    writable: true,  //? 表是否可以被寫
    //    enumerable: true, //* 是否可以被列舉
    //    configurable: true 
    //* 是否可再次設定property descriptor 的參數（不可逆行為）
    // }
```

# 比較
> let arr = []
> let arr = new Array()
兩者並不相同，後者使用new會創建一個 object包裹 前者


# Class 篇
* JS 實際上並沒有 Class

> Class 重點於 //? copy
//! 新物件是去複製所有 Class 描述的特性

> Class 的繼承也是意味著 copies

> JS 可以用 mixin 的方式複製，達成類似 class 的方式，但實際上還是有部分是 share 相同的 reference，無法完全複製。


# Behavior Delegation
> JS 物件的特性是 Delegation-Oriented Design。

> Behavior Delegation 意味著提供一種方式，當找不到一個 obj property or 時 method 可以參考其他的 obj。

# OLOO 寫法  (類似繼承)
//* OO也可以實現相同功能，但OLOO 運作較簡潔
> objects-linked-to-other-objects
```js
    let Foo = {
        init(who) {
            this.me = who
        },
        identify() {
            return `I'm${this.me}`
        },
    }

    let Bar = Object.create(Foo)
    Bar.speak = function () {
        console.log(`Hello, ${this.identify()}.`)
    }
    let b1 = Object.create(Bar)
    b1.init('b1')
    let b2 = Object.create(Bar)
    b2.init('b2')

    b1.speak()
    b2.speak()
```