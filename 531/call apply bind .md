# call apply bind 

# apply & bind
```js
  const obj = { num: 0 }
  const obj2 = { num: 5 }
  const addToThis = function (a, b, c) {
    return this.num + a + b + c
  }
  const result = addToThis.call(obj, 1, 2, 3) // 3為帶入a用
  console.log(result)


  const arr = [1, 2, 3]
  console.log(addToThis.apply(obj, arr))

  // bind 回傳一個 Function
  const bindFunc = addToThis.bind(obj2, arr)
```
