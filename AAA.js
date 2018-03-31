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



let str = 'hello'
let originArr = str.split('')
let newArr = []
console.log(originArr.pop())
originArr.forEach((elem, index, arr) => {
    let lastItem = arr.pop()
    newArr.push(lastItem)
})
console.log(originArr)
