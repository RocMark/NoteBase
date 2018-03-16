// animate.css 
// animated('object','bounce','duration','delay','repeat');


//* animation 結束 用 animationEnd 去判斷
//* 結束後移除 animated Class
//* 才可於下次觸發時，執行動畫


const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
function animated(object, type, duration = 1, delay = 0, repeat = 1) {
    $(object).addClass(`animated ${type}`).on(animationEnd, () => {
        $(object).removeClass(`animated ${type}`)
    })
    $(object).css({
        '-webkit-animation-duration': `${duration}s`,
        '-webkit-animation-delay': `${delay}s`,
        '-webkit-animation-iteration-count': `${repeat}s`,
    })
}
// data-wow-offset: Distance to start the animation (related to the browser bottom)
