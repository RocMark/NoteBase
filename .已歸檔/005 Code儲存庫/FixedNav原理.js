//* Fixed Nav原理

//! nav 外層 包一層 nav_wrap(防止跳動)
//* 用來防止下捲時，nav 切換成 posi Fixed 而造成空白
// ? 使內容產生跳動

fixedNav()
function fixedNav() {
    // Scroll Nav Fixed & Prevent Jumping
    let mainNav = $('.mainNav')
    mainNav.wrap('<div class="navJumpFix"></div>')
    $('.navJumpFix').height(mainNav.outerHeight())
    
    const navOffset = mainNav.offset().top
    $(window).scroll(() => {
        let scrollPosition = $(window).scrollTop()
        if (scrollPosition > navOffset) {
            mainNav.addClass('navSticky')
        } else {
            mainNav.removeClass('navSticky')
        }
    })
}
