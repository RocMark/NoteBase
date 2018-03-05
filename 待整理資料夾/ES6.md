# ES6 語法整理

## 變數
* let 區域邊數
* const 不可更動變數
* 模版字串 `` 傳值 ${}
* 物件內包函式
```js
let person = {
    firstName: 'Mark',
    sayName(){
        return `Name: ${this.firstName}`
    }
}
```

# Arrow Function
* 不要使用 => 在object裡 (this)
```js
let add = (a,b) => {
    return a+b;
}
let add = (a,b) => a+b   //ShortHand
console.log( add(2,3) )
```

## Map Function (JS)
陣列中每個元素上呼叫callback，並傳回含結果的陣列

```
let num = [2,3,7]
let db = num.map(function(n){
    return n + 2
})
let db = num.map ((n) => n + 2 )
log (db)
```

## forEach()
```js
let num = {
    name: 'Mark'
    num: ['123','456','789'],
    showNum: function(){

        this.num.forEach(function(numbers){
            log(`${this.name} yo ${numbers}`)
        })  //X

        this.num.forEach( numbers => {
            log(`${this.name} yo ${numbers}`)
        })  //O

    }   
}
num.showNum()
會得到 name 為undefined & numbers輸出正常
```

# Spread Operator & Rest Parameters
```
let sum = function(){
    <!-- log(arguments) -->
    return argument.reduce(() => {
        
    })
}
sum(2,2,3,3)
```