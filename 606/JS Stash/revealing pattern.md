# revealing pattern

# 與 object literal的差異
obj literal 中的 變數皆可被存取
* revealing 只公開可操作的介面
* 不需要 init()、本身就是個IIFE會立即執行

# 可傳入變數
```js
  const people = (function (name) {
    const myName = name
    const str = '123'
    const mix = function () {
      return myName + str
    }
    return {
      mix,
    }
  }('tom'))
  console.log(people.mix())
```

# Render Function
```js

```

# 範例
```js
  const test = (function () {
    let testName = '123'
    const pName = '789' // 不公開
    const getTestName = function () {
      return testName
    }
    const setTestName = function (name) {
      testName = name
    }
    return {
      getTestName,
      setTestName,
    }
  }())
  console.log(test.getTestName()) // 123
  test.setTestName('456')
  console.log(test.getTestName()) // 456

  console.log(test.pName) // undefined
```