# JS JQ比較

# jQuery 注意點
1. HTML載入檔順序
2. jquery document ready
外層包覆 IIFE ,避免汙染全域
確保頁面加載完成後,才開始執行程式,避免出錯

3. const myBtn = $('#myBtn')
仍可用此減少每次存取dom的時間

* .hover()
由 mouseenter & mouseleave 組成
```js
$('#btn').hover(func) // 正確
$('#btn').on('hover',func) // 無法使用!!!!
```

```js
;(function () {
  $(function () {
    $('.myList li:first-child').css('color','red')
  })

  // JS 版本
  document.addEventListener('DOMContentLoaded', () => {
    
  })
}())
```


# Selectors
```js
  // 主流
  document.querySelector('.')
  document.querySelectorAll('.')

  // 可棄
  document.getElementById('') 
  document.getElementsByClassName('')
  document.getElementsByTagName('')

  // jQuery 同doqs但是可選取多個
  $('')
  // 宣告成變數,較省記憶體,不用每次呼叫都尋找
  const nav = $('#siteNav')
```

# 進階選擇器比較
```js
  // 尋找父層元素
  $('').parent()

  // 操作本身元素
  this

  // 同層元素
  $('').siblings()

  // 尋找子元素內容
  $('').

  // 更改 HTML / Text
  $('').html()
  $('').text()

  HTML
  textContent
  innerText
```

# JQ 小技巧篇
```js
  attr()
  remove()
  



```

# JQ可用事件
瀏覽器 - resize() / scroll
DocLoading - ready()
Form Events - 
blur() / submit()
change() / select() / focus()


# JQ Event Handler 待查
off() / on() / one()
trigger() / triggerHandler()

# jQuery 3.0版+ 棄用
bind() / unbind()
delegate() / undelegate()

# DOM 操作

# 修改 CSS方法
JS 實現方法
1. ClassList
2. 修改 ClassName (須判斷)
3. JS 修改 style (較不佳)

JQ
1. 使用.css() 適用於單一屬性
2. 多屬性採用 addClass() 會較佳

```js
  // IE 會有些支援度問題
  div.classList.add('show')
  div.classList.remove('show')
  div.classList.toggle('show')
  // 
  element.style.propertyName

  // JQ
  $('.myList li:first-child').css('color','red')

  $('').css({
    'property': 'value', 
    'property': 'value'
  });

  $('').hasClass( 'show' )
  $('').addClass( 'show', callBackFunc)
  $('').removeClass( 'show', callBackFunc)
  $('').toggleClass( 'show')
```


# Animation
* 注意 jQuery slim版本有些動畫會無法使用!
jQuery .hide() / .show() / .toggle()
.slideUp() / .slideDown() / .slideToggle()
.fadeIn() / .fadeOut() / .fadeToggle()
* fadeTo() 調整元素透明度
* JQ有提供 animate() 方法可自訂動畫 (待查)

<!-- Animation通用方法 -->
* 動畫停止/結束/跳至末的範例 (必看)
> https://api.jquery.com/finish/
- finish()
- delay()
- stop() 停止動畫
```js
  // delay 依序觸發效果實現

  // 需要注意如果要用show 必須給與秒數否則會立即show出
  // .delay(500).show(0)  即可
  $('.boxBtn').on('click', showBox)
  function showBox() {
    const arr = ['box1','box2','box3']
    for (let i = 0, j = arr.length; i < j; i += 1) {
      let delayTime = i * 1000
      $(`.${arr[i]}`).delay(delayTime).slideUp()
    }
  }
```

```js
  // duration 動畫執行時間
  // complete 動畫結束後執行的Function
  .hide(400,function(){
    console.log('Animation complete.')
  })
  // fadeTo()
  fadeTo(duration,opacity,callBackFunc)
```
* 小補充 display:none 會將 元素從 DOM 刪除,因此不會占據位置,而 visibility:hidden 僅隱藏但會占據位置
