# JS 常見陷阱

# 數字篇
* JS 使用 小數點，就會轉換成浮點數
0.1 * 0.2 = 0.020000000000000004
* 數字轉成字串
Number(2).toString() // Number可省略
* isNaN(null) == false  // false
null 是 object 會先轉成數字 0 


