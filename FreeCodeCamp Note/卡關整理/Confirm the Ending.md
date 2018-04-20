# 比對結尾是否為指定 字元 / 單字

Confirm the Ending


# 比對單字 + 字元
```js
function confirmEnding(str, target) {
    let arr = str.split(' ')
    if (arr.length <= 1) {
        if (str[str.length - 1] === target) {
            return true
        }
        return false
    } 
    if (arr[arr.length - 1] === target) {
        return true
    }
    return false
}
console.log(confirmEnding('He has to give me a new name', 'name'))
```