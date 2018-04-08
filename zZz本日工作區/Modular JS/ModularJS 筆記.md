# Modular Javascript 
> https://www.youtube.com/watch?v=HkFlM73G-hk

# 原則
# self-contained module
* 與該模組相關的任何物皆於模組內
* no global variables
> 過多的全域變數會使JS速度下降
* 單一功能，若有多功能應該分離

# other原則
* separation of concerns
* DRY (Dont Repeat yourself) 
* efficient DOM usage (盡可能減少)
* no memory leaks 
> all events cn be unbound

# Object literal Pattern 範例
> 此種方法外部仍可竄改 name 見 Revealing Module Pattern
```js
    let myModule = {
        name: 'will',
        age: 34,
        sayName() {
            console.log(this.name)
        },
        setName(newName) {
            this.name = newName
        },
    }
    myModule.sayName()
```
