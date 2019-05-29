# JS 原型以及建構式

* console.dir($ / Vue)
可以查詢 jQuery / Vue 有哪些方法可以使用


# 物件導向
* 類別: 藍圖、範本、參考文件，沒有實體(instance)   [設計稿]
可利用類別去定義出不同的實體。
* 物件: 實體(instance) [實際蓋的房子]

# 原型鏈
* 原型鏈頂端為物件

# 物件觀念 & 原型繼承
* 原有 JS資料都掛載在 window物件 之下
* 物件向下尋找
* 傳參考的特性
物件傳址，因此無法用物件實做類別 (須用proto type / new)
* 複製後將與原本物件無關聯
```js
  const date = new Date()
  date // Sat May 26~ 底下無方法
  // 不過他的原型有方法，可供使用
  date.__proto__
```

* 原型 向上尋找 & 繼承 特性

* 錯誤做法 [ESLint不建議]
勿使用 __proto__ 去新增 方法
* 正確做法
const a = Object.getPrototypeOf(obj)

# Object.assign
* 淺層複製
* 兩者無關聯性
```js
  const Car = {
    brand: 'Ford',
    wheels: 4,
  }

  const car2 = Object.assign({}, Car)
  car2.brand = '123'
  console.log(car2.brand)  // 123
  console.log(Car.brand)  // Ford
```

# 原型繼承實做   [ES5]
```js
  function Car(brand, wheel = 4) {
    this.brand = brand
    this.wheel = wheel
    //* 創新物件的時候，皆會占一份記憶體空間 (不佳)
    this.getInfo = function () {
      console.log(this.brand, this.wheel)
    }
  }

  // ? 但寫於原型上只會占一份
  Car.prototype.sound = function () {
    return `${this.brand} bubu`
  }

  const carA = new Car('Ford')
  const carB = new Car('Bike', 2)
  // carA.getInfo()
  // carB.getInfo()

  console.log(carA.sound())
  console.log(carB.sound())
  // const protoA = carA.__proto__
  // const protoB = carB.__proto__
  const protoA = Object.getPrototypeOf(carA)
  const protoB = Object.getPrototypeOf(carB)
  console.log(protoA === protoB) // true
```

# ES6 Class 
```js
class Car {
  //? init Function
  constructor(brand, wheel = 4) {
    this.brand = brand
    this.wheel = wheel
    this.getInfo()
  }
  // static get set
  //* getInfo 等同於掛載在 proto上的 Function
  getInfo() {
    console.log(`getInfoFunc : ${this.brand}`)
  }
}
```