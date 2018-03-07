$(() => {
// repeat infinite
  animated('.contact_icon', 'shake', '15s', '0.7s', 'infinite')

  // -------------------------------------------------------------
  const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
  function animated(object, type, duration, delay, repeat) {

    $(object).addClass(`animated ${type}`).on(animationEnd, () => {
      $(object).removeClass(`animated ${type}`)
    })
    $(object).css({
      '-webkit-animation-duration': duration,
      '-webkit-animation-delay': delay,
      '-webkit-animation-iteration-count': repeat,
    })
  }
  // -------------------------------------------------------------
  // smooth scrolling
  $('.scroll,a[href|="#"],.logo_scroll').click((event) => {
    // 取消跳躍動作
    event.preventDefault()
    $('html').animate({
      // 扣除fixed nav 的高度
      // scrollTop:$(this.hash).offset().top - 76
      // scrollTop:$(window.location.hash).offset().top - 76
    }, 1000)
  })

  // -------------------------------------------------------------
  $('nav').wrap('<div class="nav_fixed_wrap"></div>')
  $('.nav_fixed_wrap').height($('nav').outerHeight())
  const navOffset = 0
  $(window).scroll(() => {
    const scrollPosition = $(window).scrollTop()
    if (scrollPosition >= navOffset) {
      $('nav').addClass('nav_sticky')
      if (scrollPosition <= 50) {
        animated('nav', 'pulse', '1.3s', '0', '1')
      }
    } else {
      $('nav').removeClass('nav_sticky')
    }
  })
// -------------------------------------------------------------
})
