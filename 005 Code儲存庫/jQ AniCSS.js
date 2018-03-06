// animate.css + wow.js
// animated('object','bounce','duration','delay','repeat');
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
