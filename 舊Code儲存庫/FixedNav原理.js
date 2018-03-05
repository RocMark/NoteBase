//* Fixed Nav原理

//! nav 外層 包一層 nav_wrap(防止跳動)
//* 用來防止下捲時，nav 切換成 posi Fixed 而造成空白
// ? 使內容產生跳動

// jQuery 範例
$('nav').wrap('<div class="nav_wrap"></div>')
$('.nav_wrap').height($('nav').outerHeight())

// ? 判斷 滾動觸發，先取得 offset
let navOffset = $('.nav').offet().top
$(window).scroll(() => {
    let scrollPosition = $(window).scrollTop() - 5
    if (scrollPosition >= navOffset) {
        // 新增 sticky [position fixed]
        // 在此亦可增加動畫效果
    } else {
        // 滾回最上時，移除該Class
    }
})
