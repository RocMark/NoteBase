# 比對結尾是否為指定 字元 / 單字

Confirm the Ending

//! match 檢測該字串是否含有指定值

# 比對單字 + 字元
```js
function confirmEnding(str, target) {
    let arr = str.split(' ')
    let lastWord = arr[arr.length - 1]
    let lastChar = str[str.length - 1]
    let checkSingleWord = arr.length <= 1

    if (checkSingleWord) {
        if (lastChar === target) {
            return true
        }
        return false
    } 

    if (lastWord.match(target)) {
        return true
    }
    return false
}
console.log(confirmEnding('Open sesame', 'same'))
```