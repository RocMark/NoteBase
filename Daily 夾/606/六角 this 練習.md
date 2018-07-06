# this 練習
http://t.cn/R19WZFu

建立執行環境 的 建立階段會 創造 this

* 但 this 由怎麼被呼叫來決定


# 影響this的情境
* 純粹的調用
window
* 物件方法的調用
物件
* DOM 物件的調用
DOM 物件
* 建構式的調用
new 他的物件
* bind apply call
傳入變數的物件
* 箭頭函式
會指向全域的 this

# 基礎練習題
```js
  console.log(this) // window
  var name = '全域'
  function callMethod() {
    var name = '區域'
    console.log(this.name) // 全域
    return function () {  // 閉包
      var name = '區域的內層變數'
      console.log(this.name) // 全域
    }
  }
  callMethod()() // 先執行 callMethod 後，執行 return 的函式
```

# 物件內的 this
```js
  var name = '全域'
  var object = {
    name: 'Object 區域',
    callMethod: function () {
      var name = '區域'
      // console.log(name) // 區域
      // console.log(this) // object 物件
      console.log(this.name) // Object 區域
    },
    abbCallMethod () {
      // 縮寫的原始版本 為上方
      var name = '縮寫函式區域'
      console.log(name) // 縮寫函式區域
      console.log(this) // object 物件
      console.log(this.name)
    },
    arrowCallMethod: () => {
      var name = '箭頭函式區域'
      console.log(this.name)
    },
  }
  object.callMethod()   // Object 區域
  object.abbCallMethod() // Object 區域
  object.arrowCallMethod() // 全域
```

# 閉包
object.callMethod() // 此時算是物件方法的調用
object.callMethod()() // 此時會與純粹調用相同
```js
  var name = '全域'
  var object = {
    name: 'Object 區域',
    callMethod: function () {
      var name = '區域'
      return function () { console.log(this.name) }
    },
    callMethod2: function () {
      var name = '區域'
      var that = this    // 指向此 object，並將其存在 that 中
      console.log(that) 
      return function () { 
        console.log(that) // 指向 object
        console.log(that.name) 
      }
    }
  }
  object.callMethod()() // 全域
  object.callMethod2()() // Object 區域
```

# addEventListener
```js
  var elem = document.getElementsByTagName('div')
  function style () {
    console.log(this)
    this.style.border = '1px solid red'
  }
  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', style)
  }
```

# 建構式
```js
  var name = '全域'
  var callMethod = function (newName) {
    this.name = '卡斯伯'
    console.log(this.name)
  }
  // 執行該 Function 會將架構 給予 該變數
  var myName = new callMethod()
  console.log(myName.name)
```

# 箭頭 建構式
* Error !!
箭頭函式不能當建構式
```js
  var name = '全域'
  var callMethod = (newName) => {
    this.name = newName || '區域'
  }
  var myName = new callMethod('卡斯伯')
  console.log(this.name)
  console.log(myName.name)
```

# bind / apply / call
指向指定物件
```js
  function callMethod () {
    var name = '區域'
    console.log(this.name)
  }
  callMethod.call({name: '卡斯伯'})
```