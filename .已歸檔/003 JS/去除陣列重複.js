//! 移除陣列中 重複項
let array = ['a', 1, 2, 3, 2, 3, 'b', 'a']
//* indexOf 檢查該字串是否存在
//* 以下原理 該字串位置 等同於 該位置則加入
//? 若以存在 該字串位置 即不等於 該位置!
let result = array.filter((element, index, arr) => arr.indexOf(element) === index)
console.log(result)