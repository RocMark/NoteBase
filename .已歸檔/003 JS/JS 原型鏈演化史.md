## JS 原型鏈
若要建立兩個汽車的實體，該如何建立?

## Why use OO
- 減少重複的程式碼
- 減少記憶體的使用
- 使實體有關聯性

## 類別、物件
- 類別: 是一個藍圖，未有實體(instance) Ex:車子設計圖
- 物件: 透過類別建立出來的實體 Ex:車子

## 原型鏈特性
- JS prototype Base 繼承方式
- 最上層的原型為物件
- 向上尋找屬性、方法的特性
- 繼承特性 (不同實體，繼承同一屬性、方法)
- 類別使用 new關鍵字 建造出實體

## 小建議
- 類別 使用大寫作為開頭 Car
- 不公開方法 使用_作為開頭 static _add()
- 使用 Object.getPrototypeOf(obj) 取得原型
- 使用 ES6 Class
- 使用 預設參數 & 解構

## Level 0 (直接建立物件)
- 直接建立兩個物件
- 其缺點: 繁瑣、無法統一管理、擴展性差、占用記憶體
```js
  const carA = {
    wheels: 4,
    pressHorn() { console.log('AAA') },
  }
  const carB = {
    wheels: 4,
    pressHorn() { console.log('BBB') },
  }
```

## Level 1 (prototype建立藍圖)
- 利用 JS prototype 建立藍圖
- 使用 new 關鍵字建立實體
- 缺點: function功能相同，但每次創造實體時都複製一份，占用了不必要的記憶體
```js
  const Car = function (brand, sound = '888') {
    this.brand = brand
    this.wheels = 4
    this.pressHorn = function () { console.log(sound) }
  }
  const carA = new Car('AAA')
  const carB = new Car('BBB', 'BBB')
```

## Level 2 (在原型上建立共用方法)
- 將 Function 掛載到藍圖的 prototype
- 利用原型鏈 向上尋找的特性，實體無該屬性、方法即往上尋找可用的屬性、方法
- 寫於原型僅佔一份記憶體
```js
  Car.prototype.pressHorn = function () {
    console.log(`${this.brand} ${this.sound}`)
  }
  // true 表 Function 來自同一個記憶體位置
  console.log(carA).pressHorn() === carB.pressHorn())
```

## Level 3 (ES5 Reveal Pattern)
- 封裝內部資料，公開想公開的介面
- ES5 範例
```js
  const Car = function (brand,sound) {
    this.brand = brand
    this.wheel = 4
    this.pressHorn = function (){ console.log(sound) }
    return {
      brand,
      pressHorn: this.pressHorn
    }
  }
  const test = new Car('A','AAA')
  console.log(test.wheels) // undefined 不可取得
  console.log(test.brand) // 可取得
```

## Level 4 (ES6 Class)
- JS 為 prototype base，因此 Class 僅為 prototype的語法糖
- 使用 Class 使語法更精簡
```js
  class Car {
    // 寫於 constructor的內容，皆會在記憶體創一份新的
    // 因此 方法避免寫於 constructor 內部
    constructor(brand = 'default') {
      // constructor內容會於實體建立時執行
      this.brand = brand
      this.init() 
    }
    init() { console.log('init') }
    pressHorn(){
      console.log(`${this.brand} ${this.sound}`)
    }
  }
```

## Level 5 (ES6 static/get/set)

## ES6 Static 用法
- 靜態方法不須實例化，即可被呼叫
- 但被實例化後，則靜態方法不能被呼叫 (私有方法)
- 常用於工具函式 (資料處理)
```js
  class Calculator {
    constructor(str) { this.str = str }
    static add(a, b) { console.log(a + b) }
    hey() { return this.str }
  }

  const calculatorA = new Calculator('hey')
  // 建立實體後，無法透過實體使用該函式
  console.log(calculatorA.add) // undefined
  console.log(calculatorA.hey()) // 'hey'

  // 沒有建立實體即可使用
  Calculator.add(1, 4) // 3
```

## ES6 get/set 用法 (僅用於私有屬性)
- 可控制 資料 寫入 & 讀出的過程 
- 可於中間作一些格式處理、錯誤偵測
- getter不會有傳入參數，setter只會有一個傳入參數
- 看不是很懂... [範例參考至此](https://ithelp.ithome.com.tw/articles/10185583)
```js
  class Option {
    constructor(key, value) {
      if (typeof key !== 'undefined') { this[`_${key}`] = value }
    }
    get color() {
      if (this._color !== undefined) { return this._color } 
      return 'no color prop'
    }
    set color(value) { this._color = value }
  }

  const op1 = new Option('color', 'red')
  op1.color = 'yellow'

  const op2 = new Option('action', 'run')
  op2.color = 'yellow'
```

## ES5 getter / setter 寫法
- 使用 Object.defineProperty
- 若要使物件的屬性無法被更動 writable: false,
```js
  Object.defineProperty(obj, 'key', {
    get() {
      // 取得值前 可於此作format....etc
      return this.name
    },
    set(val) {
      // 設定值前可以作一些 例外判斷 (falsy...etc)
      this.name = val
      console.log(val)
    },
  })
```

## Bonus: 預設參數 & 解構
```js
  const User = function ({ name = 'default', age }) {
    this.name = name // 可預設但可傳入修改
    this.age = age
    this.gender = 'male' // 可預設不給用傳入的
  }
  // 傳入順序無差，以 Key為基準
  let test = new User({ age: 30 })
  console.log(test.name, test.gender) // 'default' 'male'
```

## 取得原型語法
- 取得原型1: 雙下底線proto (不推薦使用 效能差)
- 取得原型2: Object.getPrototypeOf(obj) (建議使用、IE9+)
```js
// ESLint/MDN 不建議使用 __proto__ 取得原型
const CarProto = Car.__proto__
// 推薦使用 ES5
const CarProto = Object.getPrototypeOf(Car)
```

## instanceof 原理 (判斷是否有該原型)
- 判斷目標是否在其原型鏈之下
```js
  // 判斷 'str' 是否在 String 之下
  console.log('str' instanceof String) 
  // false，因為此種表示方法為原始型別，其原型鏈為 undefined

  // 使用 new 關鍵字建立物件
  const newStr = new String('newStr')
  console.log(newStr instanceof String )
  console.log(newStr instanceof Object )
  // 皆true，String & Object 皆於 newStr 原型鏈上
```

## 術語 
* literal
不使用 constructor(構造函數 new) 建立 data
* constructor 構造函式
一個指定對象實例的類型的類或函數
* new 關鍵字
創建一個用 自定義的對象類型 的 instance(實例)
或具有構造函數的內置對象的實例
```js
  // Object.literal
  const obj = { test(){ console.log('hi') } }
  const mark = new Person()
  const str =  new String()
```

## 參考資料
[保哥 物件導向基礎](https://bit.ly/2KApPpr)