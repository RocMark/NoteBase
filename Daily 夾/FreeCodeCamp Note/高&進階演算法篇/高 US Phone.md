# Regex驗證 US Phone碼

```js
function telephoneCheck(str) {
    var phoneRegex = /^(1|1\s)?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/g;
    return phoneRegex.test(str);
}
```
