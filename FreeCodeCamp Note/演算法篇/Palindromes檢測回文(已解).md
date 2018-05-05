# 檢測回文
//* 排除所有非 a-z 0-9 的字元

//?   \w  等同於  [A-Za-z0-9_]

//* ^ 除外字元

//!   \W  等同於  [^A-Za-z0-9_] 有包含_ 
> 所以需要額外用 | or 去排除 _

```js
    function palindrome(str) {
        let cleanUpStr = str.replace(/\W|_/g, '').toLowerCase()
        if (cleanUpStr.split('').reverse().join('') === cleanUpStr) {
            return true
        }
        return false
    }
    console.log(palindrome('0_0 (: /-\\ :) 0-0'))
```