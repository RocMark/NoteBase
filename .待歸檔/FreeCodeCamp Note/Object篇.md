# Object 取值
//* ESLint 推薦使用 dot notation over bracket
```js
    let myObj = {
        'with space': 'Yo',
        normal: 'OK',
    }
    console.log(myObj.normal)
    console.log(myObj['with space'])
```
//* bracket notation 取值 + 深層取值
```js
    let myobj = {
        car: {
            inside: {
                'with space': 'target1',
            },
            list: ['one', 'target2'],
        },
    }
    let t1 = myobj.car.inside['with space']
    let t2 = myobj.car.list[1]
    console.log(`${t1} ${t2}`)
```
//* 物件存值取值
```js
    function test(val) {
        let obj = {
            alpha: 'Adams',
            '': undefined,
        }
        return obj[val]
    }
    test('alpha')
```