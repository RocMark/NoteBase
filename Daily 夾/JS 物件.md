# JS 物件

物件屬性 ['456']

## 物件特性
JS 所有東西都是物件除了 undefined & 基礎型別

undefined / null 也是物件，只是有一些特殊的特性
* 這些基礎型別，有物件的特性
* 這些基礎型別有用到下列物件的 constructor 
> 他們的 prototype 為物件

string => String物件
number => Number物件
boolean => Boolean物件
```js
  console.dir('456'.__proto__)
  console.dir(true.__proto__)

  const num = 456
  console.dir(num.__proto__)
```

## 基礎型別的特性
* 無法在基礎型別上 擴增屬性
* 但可以在其上層物件中 擴增屬性
```js
  var x = '2'
  console.log(typeof x) //string
  x.test = 1
  console.log(x.test)  // undefined

  x.__proto__.sayHi = function(){
    console.log('Hi')
  }

  String.prototype.sayYo = function(){
    console.log('Yo')
  }
  x.sayHi()   // Hi
  x.sayYo()   // Yo
```

## 刪除物件的方法  [勿用delete]
* 屬性不用，設為 null 即可，沒必要不用刪
應該避免在執行時期，修改物件結構
* 物件結構沒有異動，JS引擎會更易找到最加存取路徑
當結構異動，最佳化失效，操作效率下降
* JS 會對 熱門存取物件作最佳化
```js
  var obj = { x:1 }
  delete obj.x  
  console.log(obj.x)  //undefined
```

## 指定 null 或 undefined 使其 GC
無效!!!! 因為 null 本身就是個物件，該變數永遠不會被回收
1. 屬性不會消失 
2. 記憶體不會被回收
```js
  console.log(typeof null) // object

  var obj = { x:1 }
  obj = null
  // null 為基礎型別，無法擴充屬性，因此無效
  console.log(obj.x)  // TypeError
```

# JS for-in 迴圈

用法與 Array.prototype.forEach 很像

# 注意事項
//? for-in 會 loop 整個 prototype chain
//! 所以繼承來的屬性&方法也會被輸出

//* 處理陣列資料，為了避免呼叫出不必要的屬性，儘可能不要使用 for...in 的用法來處理迴圈。

# 語法
```js
    // prop 自訂變數，會將該物件屬性存入該變數
for (let prop in Customer1) {

    //! 解 非 繼承而來的屬性才輸出
    //* 取得屬性是否屬於該物件而非繼承 回傳 boolean
    
    if (Customer1.hasOwnProperty(prop)) {
        console.log(`${prop}: ${Customer1[prop]}`)
    }
}
```

# ESLint 提示
//* guard-for-in
> for-in 應該被包裹在 if中用來過濾不需要的屬性
//? no-restricted-syntax
> for-in 會 loop整個原型鏈 
//* Use Object.{keys,values,entries} 去找所需較佳