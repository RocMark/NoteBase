# JS 基本型別

# primitives 原始型別
原始型別: String / Number / Boolean / Null / Undefined / Symbol (ES6)
* non-object data
* 僅擁有該值、無任何屬性 & 方法
console.dir 僅會回傳 該值
* 無法為其 新增屬性或方法
* 若要新增 方法、屬性，須通過原型鏈 (方法亦繼承來自上層)

我想請問一下 原始型別的原型，無法用 console.dir()去查詢，那他繼承的原型，