# Modular Code
//! 綁定this時的注意事項 (見下詳解)
```js
    (function () {
        let people = {
            data: [],
            init() {
                this.cacheDom()
            },
            cacheDom() {
                this.$el = $('#peopleModule')
                this.$button = this.$el.find('button')
                this.$input = this.$el.find('input')
            },
            render() {
                
            },
            bindEvents() {
                //* 以下相同意思
                // this.$button.on('click', this.addPerson.bind(people))
                //* 在此利用 bind(this) 綁定 this 為 people
                this.$button.on('click', this.addPerson.bind(this))
            },
            addPerson() {
                //! 此時的this會指向 e.currentTarget 即 this.$button 綁定事件者
                //* 因此需要將this 指向people 才能取得正確的 this.data & $input
                this.data.push(this.$input.val())
                this.render()
                this.$input.val('')
            },
        }
        people.init()
    }())
```

# Listener 的 This 是誰???
//! 註解 listener的 callBackFunc this 等同於 e.currentTarget
e.target => 被點擊的btn
e.currentTarget => btns 即 綁定事件的母體

//* 範例碼
```js
    let btns = document.querySelector('.btns')

    btns.addEventListener('click', demo)

    function demo(e){
        console.log(this)
        console.log(e.target)
        console.log(e.currentTarget)
    }

    <div class="btns">
        <button>1</button>	
        <button>2</button>	
        <button>3</button>	
    </div>
```