#　JS new 關鍵字

# ESLint new
Disallow new For Side Effects 

new with a constructor is typically to create an object of a particular type and store that object in a variable.

```js
  var person = new Person()

  new Person() // Bad
  // 不給予值的情況，參照不存在 => GC掉，因此應該宣告成 Function 不使用 new
```
