$(() => {
// repeat infinite
  animated('.contact_icon', 'shake', '15s', '0.7s', 'infinite')

  // 刪除文章用 AJAX------------------------------------------------------------
  $('.del_article').on('click', (e) => {
    const msg = 'Confirm Delete Article !!!!'
    if (confirm(msg) === true) {
      $.ajax({
        type: 'DELETE',
        url: e.target.pathname,
        success() {
                alert('Deleting Article')
                window.location.href = '/'
            },
        error(err) {
                console.log(err);
            },
      })
      return true
    }
    return false

  })

  $('.contact_btn').on('click', () => {
    $('.fullscreen_filter').show()
    $('.modalbox').show()
  })
  $('.modalbox_exit,.fullscreen_filter').on('click', () => {
    $('.fullscreen_filter').hide()
    $('.modalbox').hide()
  })
  $('.modalbox_exit').on('mouseover', () => {
    animated('.modalbox_exit', 'tada', '1s', '0s', '2')
  })


  // -------------------------------------------------------------
  const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
  function animated(object, type, duration, delay, repeat) {

    $(object).addClass(`animated ${type}`).on(animationEnd, () => {
      $(object).removeClass(`animated ${type}`);
    });
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
  $('.nav_item').on('click mouseover', function () {
    $(this).siblings().find('.nav_sublist').hide()
    // $('.nav_sublist').hide()
    $(this).children().slideDown(500)
  })
  // -------------------------------------------------------------
  $('nav').wrap('<div class="nav_fixed_wrap"></div>')
  $('.nav_fixed_wrap').height($('nav').outerHeight());
  const nav_offset = 0
  $(window).scroll(() => {
    const scroll_position = $(window).scrollTop()
    if (scroll_position >= nav_offset) {
      $('nav').addClass('nav_sticky');
      if (scroll_position <= 50) {
        animated('nav', 'pulse', '1.3s', '0', '1');
      }
    } else {
      $('nav').removeClass('nav_sticky')
    }
  })
// -------------------------------------------------------------
})
