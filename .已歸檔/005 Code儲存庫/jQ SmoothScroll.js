// smooth scrolling

//* 取消跳躍動作
//* 以動畫方式 耗時 1s 

$('.scroll,a[href|="#"],.logo_scroll').click(function (e) {
    e.preventDefault() // 取消跳躍動作
    $('html').animate({
        //* 後方可減去要滾到上的哪
        scrollTop: $('html').offset().top - 76,
    }, 1000)
})
