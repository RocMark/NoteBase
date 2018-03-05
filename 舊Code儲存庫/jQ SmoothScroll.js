// smooth scrolling
//! 待轉換


$('.scroll,a[href|="#"],.logo_scroll').click(function (event) {
    event.preventDefault() // 取消跳躍動作
    $('html').animate({
        // 扣除fixed nav 的高度
        scrollTop: $(this.hash).offset().top - 76,
    }, 1000)
})
