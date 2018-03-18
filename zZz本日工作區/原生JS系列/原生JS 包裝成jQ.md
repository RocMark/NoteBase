# 原生JS 包裝成 類似jQuery
//* 鍊式呼叫
//* Ex: $('foo').css({color: 'red'}).on('click', () => {})

```js
    const $ = function $(selector, context = document) {
        const elements = Array.from(context.querySelectorAll(selector))
        return {
            elements,
            html (newHtml) {
                this.elements.forEach(element => {
                    element.innerHTML = newHtml
                })
                return this
            },
            css (newCss) {
                this.elements.forEach(element => {
                    Object.assign(element.style, newCss)
                })
                return this
            },
            on (event, handler, options) {
                this.elements.forEach(element => {
                    element.addEventListener(event, handler, options)
                })
                return this
            }
        }
    }
```

# ES6 Class Version
```js
    class DOM {
        constructor(selector) {
            const elements = document.querySelectorAll(selector)
            this.length = elements.length
            Object.assign(this, elements)
        }
        each(callback) {
            for (let el of Array.from(this)) {
                callback.call(el)
            }
            return this
        }
        addClass(className) {
            return this.each(function () {
                this.classList.add(className)
            })
        }
        removeClass(className) {
            return this.each(function () {
                this.classList.remove(className)
            })
        }
        hasClass(className) {
            return this[0].classList.contains(className)
        }
        on(event, callback) {
            return this.each(function () {
            this.addEventListener(event, callback, false)
            })
        }
    }
```