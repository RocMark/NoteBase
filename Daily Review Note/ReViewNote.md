# ReView Note

# DOM
//* e.target / e.currentTarget 用於 TemplateStrin
> 會回傳 [object HTMLInputElement]

# Form Submit
// !this.disabled = true

# Arrow Function
//? 箭頭函式: 綁定到其定義時所在的物件
> 一般函式建立時在window之下，
> 所以在window下使用箭頭函式自然會指向 window
```js
    // ul.addEventListener('click', (e) => {
    form.addEventListener('submit', function(e){
        e.preventDefault()
    }
```