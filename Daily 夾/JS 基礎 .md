# String Method
length / toUpperCase()
* trim 移除兩邊空白
* substring(始,末)  取子字串
* split('當做切割點')  切割字串成陣列
```js
  // ES6 Template String
  let st = 'Hello Tom'
  console.log(st.substring(0,5)) // Hello
  let name = 'Mark';
  console.log(`My Name is ${name}`);

  let st2 = 'tech, it, code'
  console.log(st2.split(', '))
  // ["tech", "it", "code"]
```

# JS 物件/解構
```js
  const person = {
    fName: 'Tom',
    lName: 'Hank',
    age: 30,
    address: {
      street: '50 main st',
      city: 'LA'
    }
  }
  const { fName, lName, address: { city }} = person;
  console.log(fName) // Tom
  console.log(city) // Tom
  console.log(address) // undefined
```