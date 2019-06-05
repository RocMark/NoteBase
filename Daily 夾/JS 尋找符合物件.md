# JS 尋找符合物件
* 常見重要

無法在陣列中比對物件，
因此需先提出個物件某要比對欄位
* 利用 indexOf 取得 index 值
再取得對應的物件

```js
// 1.是否有叫 Mark 的人並取出他的資料
// 2.計算多少人已成年
const people = [
  {name: 'Tom', age:10},
  {name: 'Mark', age:30},
  {name: 'Tim', age:25},
]

const peopleName = people.map(function (el) {return el.name})
people[peopleName.indexOf('Mark')] // 1.


const peopleAdultCount = people.map(function (el) {return el.age}).filter(function (el) {return el > 20}).length // 2.
```