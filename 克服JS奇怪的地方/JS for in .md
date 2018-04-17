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