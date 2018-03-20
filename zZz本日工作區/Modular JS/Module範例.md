# JS Module #2
> https://goo.gl/TQictb 系列#2
> 轉換jQuery Code => Module

#　大綱
- Object literal Pattern
- Revealing Module Pattern
//* 隱藏不想公開的方法用

# Object literal Pattern 範例
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

# 完整實例
```js
    //* IIFE 查看是否可省略
    (function () {

        //* Object Literal Pattern開始
        let people = {
            people: [],
            init() {
                this.cacheDom()
                this.bindEvents()
                this.render()
            },
            cacheDom() {
                //* 設定會用到的DOM 元素
                this.main = document.querySelector('main')
                this.button = this.main.querySelector('button')
                this.input = this.main.querySelector('input')
            },
            render() {
                /* render View */
            },
            bindEvents() {
                /* bindEvents */
            },
            addPerson() {
                /* bindEvents */
                this.render()
            },
            deletePerson() {
                /* bindEvents */
                this.render()
            },
        }

        //* module初始化執行
        people.init()
    }())
```

# Revealing Module Pattern
```js
    //? Revealing Module Pattern
    let people = (function () {
        //* 使用此種方法 外部就無法對 name做更動!
        //* 不需要 init() 因為 IIFE會立即執行

        // cache DOM
        let main = $('main')
        let btn = main.find('button')

        // bind events
        btn.on('click', addPerson)
        main.delegate('delBtn', 'click', delPerson)    
        
        //* 通常不公開的 可以寫成前面加 _ (ESLint要調)
        render()

        function render() { /* render()*/ }
        function addPerson() { /* */ }
        function delPerson() { /* */ }

        //* 將想讓外部可以觸及的放在 return中
        return {
            addPerson,
            delPerson,
        }
    }())
```