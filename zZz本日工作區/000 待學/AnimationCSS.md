# AnimationCSS
> https://github.com/daneden/animate.css


# animate.css CDN
```pug
    link(href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" rel="stylesheet")
```
# 使用
> .animated.bounce.infinite
//* infinite class 可以使其 無限動作

//! 待實測


# 待修正
//* animation 細部調整失敗
```js
    function animate(elem, animation, duration = 1, delay = 0, times = 3) {
        Object.assign(elem.style, { 
            '-vendor-animation-duration': `${duration}s`, 
            '-vendor-animation-delay': `${delay}s`, 
            '-vendor-animation-iteration-count': times, 
        })
        elem.classList.add('animated', animation)
        animationEnd(elem, animation)
    }
```


```js
    function animate(elem, animation, duration = 1, delay = 0, times = 1) {
        elem.classList.add(`animated ${animation}`)
        Object.assign(elem.style, { 
            '-vendor-animation-duration': `${duration}s`, 
            '-vendor-animation-delay': `${delay}s`, 
            '-vendor-animation-iteration-count': times, 
        })
        animationEnd(elem, animation)
    }

    function animationEnd(elem, animation) {
        let animationEndEvent = [
            'webkitAnimationEnd',
            'mozAnimationEnd',
            'MSAnimationEnd',
            'oanimationend',
            'animationend',
        ]
        //* 註冊animationEnd事件
        animationEndEvent.forEach((evt) => {
            //* End事件觸發後 移除監聽End事件 & 移除Class
            elem.addEventListener(evt, animationEndCallBack)
        })
        //* 移除Listener & Class
        function animationEndCallBack() {
            elem.classList.remove(animation)
            animationEndEvent.forEach((evt) => {
                elem.removeEventListener(evt, animationEndCallBack)
            })
        }
    }
```