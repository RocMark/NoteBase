# JS This
> https://goo.gl/c7G7bd
* this 決定在於函式如何被呼叫

# 基礎題
```js
  console.log(this) // window
  var name = 'Global'
  function callFunc() {
    var name = 'Local'
    console.log(this.name)
  }
  callFunc() // Global
```

# 影響this的情境
* 純粹的調用
* 物件方法的調用
* DOM 物件的調用
* 建構式的調用
* bind apply call
傳入變數的物件
* 箭頭函式
不會產生this，會自動將 this 變數綁定到其定義時所在的物件



# 練習題
```js
  /* eslint-disable */
  function foo() {
    console.log(this.a)
  }

  function active(fn) {
    fn()
  }
  var a = 20
  var obj = {
    a: 10,
    getA: foo,
    active,
    getFoo: function(){
      console.log(this.a)
    },
    getActive: function (fn) {
      fn()
    }
  }
  obj.getA() // 10


  active(obj.getFoo) // 20 
  active(obj.getA) // 20

  obj.active(obj.getFoo) // 20
  obj.active(obj.getA) // 20
```
```js
  let a = 10
  let foo = function(){ console.log(this.a) }
  let bar = function(fun){ fun() }
  let b = { a:20, foo, bar }

  foo() // undefined ???
  b.foo() // 20
  b.bar(b.foo) // undefined
```