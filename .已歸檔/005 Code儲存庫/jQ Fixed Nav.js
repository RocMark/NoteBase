// Fixed Nav原理

//! nav 外層 包一層 nav_wrap(防止跳動)
// 用來防止下捲時，nav 切換成 position: fixed 而造成空白
// 空白會造成 內容產生跳動


function fixedNav() {
    // Scroll Nav Fixed & Prevent Jumping
    $('nav').wrap('<div class="navJumpFix"></div>')
    $('.navJumpFix').height($('nav').outerHeight())
    const navOffset = $('nav').offset().top
    $(window).scroll(() => {
        let scrollPosition = $(window).scrollTop()
        if (scrollPosition > navOffset) {
            $('nav').addClass('navSticky')
        } else {
            $('nav').removeClass('navSticky')
        }
    })
}

/**
 //* CSS navSticky
.navSticky
    position: fixed
    top: 0
    left: 0
    right: 0 
    z-index: 30
*/