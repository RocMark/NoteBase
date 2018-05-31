# this  //! 重要複習

```js
    document.querySelector('.container').addEventListener('click', clickHandler)
    function clickHandler(e) {
        console.log(e.currentTarget) //指向綁定事件的母體
        console.log(this) //指向綁定事件的母體

        console.log(e.target) //指向觸發對象

        //* Arrow Function 可沿用上一層的this
        //! Arrow Function 不擁有或產生一個this
        setTimeout(() => {
            console.log(this) // 指向綁定事件的母體
        }, 500)
        
        //* ES5解法 that this 等同於 arrow function
        var that = this 
        setTimeout(function(){  // eslint-disable-line
            console.log(this) // 指向window
            console.log(that) // 指向綁定事件的母體
            console.log(e.target) //指向觸發對象
        }, 1000)
    }

```