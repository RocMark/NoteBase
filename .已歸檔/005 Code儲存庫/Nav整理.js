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
    border: 0.5px solid #f50057
*/