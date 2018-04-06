# Regex應用範例

# Note
{2,8} 字數範圍用,
[a-z] 可用字用 -

# 特殊字元
[.?*+|.*^$]  皆不需要反斜線
[\\] 才可使用\

# 檢測符合項加入陣列
```js
    let myReg = /car[A-Z]/g
    let myStr = 'CarA carB card carE'

    let newArr = []
    let matchItem
    while (matchItem = myReg.exec(myStr)) {
        newArr.push(matchItem[0])
    }
    console.log(newArr)

    console.log(myStr.match(myReg))
    //* match 方法簡單，但無法用於比對 objects
```
