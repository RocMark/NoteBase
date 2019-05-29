# instanceof 解析 
> http://bit.ly/2JmQO7E 

# 術語 
* literal
不使用 constructor(構造函數 new) 建立 data
* constructor 構造函式
一個指定對象實例的類型的類或函數
* new 關鍵字
創建一個用 自定義的對象類型 的 instance(實例)
或具有構造函數的內置對象的實例
```js
  const mark = new Person()
  const str =  new String()
```

# 取得原型的方法
* Object.getPrototypeOf(obj)
注意支援度 [IE9+]
E5S 非物件時，會拋出 TypeError 例外
ES6 時該參數將會被強制轉換成 Object
```js
  const str = 'str'
  console.log(str.__proto__)
  console.log(Object.getPrototypeOf(str))
```

# instanceof 原理
判斷目標的 constructor.prototype (構造函式原型) 是否存在於目標的原型鏈上
```js
  console.log('str' instanceof String) 
  // false，因為此種表示方法為原始型別，其原型鏈為 undefined
  const newStr = new String('newStr')
  console.log(newStr instanceof String )
  console.log(newStr instanceof Object )
  // 皆true，String & Object 皆於 newStr 原型鏈上
```

# String、Number、Boolean 兩種表示形式
> https://eslint.org/docs/rules/no-new-wrappers
String、Number、Boolean 可以有 primitive 和 object 的表示方式
因此會出現下列機車的行為。

* 直接宣告的 'str' 為 primitive 基礎型別(僅該值、無其他屬性&方法)，因此無法使用 console.dir('str')，去查看內容
而他可使用字串方法的原因為，其方法繼承來自 String 建構式

* 而使用 new String('newStr')產生的字串，會先產生一個物件，同樣繼承 String Object
```js
  const newStr = new String('newStr')

  console.dir(newStr) // 物件表示形式的 str
  console.log(typeof (newStr)) // object
  console.log(typeof 'str') // string

  console.log(newStr instanceof String) // true

  console.log('str' instanceof String) // false
  // false，因為此種表示方法為原始型別，其原型鏈為 undefined

  console.dir('str') // 只回傳 str 基礎型別
```

## 為了避免使用不同表示形式而出錯
* 只用 typeof 會將 Object 表示形式的字串忽略掉
因此需要多去判斷其 instanceof
```js
function isString(s) {
  return typeof(s) === 'string' || s instanceof String
}
```

# Number()
Number 建構子
* 不使用 new 運算子，可以用來轉換型別
* 如果參數沒辦法轉換成數字，則會回傳 NaN

## Number() 方法
* isNaN()
判斷傳入的值是不是 NaN
* isFinite
判斷傳入的值是不是一個有限的數值
* isInteger()
判斷傳入的值是不是一個整數。
* parseFloat()
* parseInt()

## Number Instance 實體
* 所有 Number 實體都會繼承其建構式的 Number.prototype
* Number 的原型物件可修改並作用在所有 Number 實體