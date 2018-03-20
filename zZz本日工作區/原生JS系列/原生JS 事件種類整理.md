# 原生JS 事件種類整理篇

//! submitBtn e.preventDefault 要套用到 form上!!!!
//! JS 無 hover 可用 mosueover

//* 更進階 待補
> https://ithelp.ithome.com.tw/articles/10192175
> Composition Event (組成事件)
> 自訂事件

# 介面相關 (多與 window物件相關)

# load事件
> 多用於 window
//? 易可用於圖片
```js
    window.onload() = function(){ 
        // 於所有網頁資源載入觸發 (CSS/JS/Pic)
    }
    img.onload() = function(){
        //! 於圖片載入完畢觸發
    }
```

# load vs DOMContentLoaded
//* load要等所有資源載完

//! DOMContentLoaded 於 DOM 結構解析完成就會觸發
> 與 $( document ).ready( handler )
> 以及 $(() => {   })  同效果


# unload /  //? beforeunload
> unload 觸發於離開頁面/重新整理
> beforeunload 會跳出對話框詢問使用者是否要離開

# error  //! 好用於圖檔失效處理
> 於 document / 圖片載入錯誤觸發

//* 若是在網頁 load 完成後才註冊 error 事件的 handler，你只會看到 X 或破圖。
> 因為 error 事件不會再次被觸發，後來掛上去的 handler 就等於沒有一樣。
//! 因此必須寫成以下寫法
```js
    //* 當圖檔不存在時觸發
    //? 將圖片自動換成欲設圖檔
    <img src="image.jpg" onerror="this.src='default.jpg'">
```
//* resize(尺寸變更)
//* scroll (捲軸拉動)
> 常與 Event Object 屬性合用

# 滑鼠相關事件
```js
    //? 常與 Event Object 屬性合用
    // click / dbclick

    //* mousedown 滑鼠按下 / mouseup 滑鼠放開觸發
    // mouseup 可以用於送出表單，
    // 當按下想要取消可以移動到按鈕外放開並不會觸發

    //* mouseenter 移入元素觸發 
    // mosueover 同上，hover到子元素也會觸發

    //* mouseleave 移出元素觸發
    // mouseout 同上，離開子元素也會觸發
```

# mousemove 在元素移動時連續觸發
> 常與 event object 取得滑鼠位置 做操作 
> 要用與下方一起複習
```js
    //* body  
    //! clientY 不隨滾 
    //? pageY 隨滾
    body.addEventListener('mousemove', (e) => {
        console.log(`${e.clientX} ${e.clientY}`)
    })

    //* 元素內用 offset較佳
    box.addEventListener('mousemove', (e) => {
        console.log(`${e.offsetX} ${e.offsetY}`)
    })
```

# Event Object 與 滑鼠相關的數值
> 原文 https://segmentfault.com/a/1190000008824028
```js
    //* e.clientX、e.clientY
    //! 不會隨滾動條移動
    //瀏覽器可視區域的X，Y坐標（窗口座標），
    //* e.pageX、e.pageY
    //? 會根據滾動條改變
    //類似於event.clientX、e.clientY(文檔座標)

    //* e.offsetX、e.offsetY
    //相對於事件源元素 的 X,Y座標
    //* e.screenX、e.screenY
    //相對於用戶顯示器螢幕左上角的X,Y坐標。
```

# 特殊事件
//* 可以用於 密碼 / 重新輸入密碼 / email等
> cut / paste / copy
```js
    pwdInput.addEventListener('paste', blockAction)
    InputText.addEventListener('cut', blockAction) 
    article.addEventListener('copy', blockAction)
    function blockAction(e) {
        //* Ctrl + C/X/V 也會被檔下來
        console.log(e)
        // e.target e.currentTarget 皆回傳 [object HTMLHeadingElement]
        console.log(`Dont Use ${e.type} on ${e.target}`)
        console.log(`Dont Use ${e.type} on ${e.currentTarget}`)
        //! 使用此防止 貼上動作
        e.preventDefault()
    }
```

# 鍵盤事件 //? 常於 input 合用

> keydown   壓下按鍵即觸發   順序1
//? 可與 e.target.value 合用 輸入同時輸出
//! 亦可用於 即時搜尋 AJAX用
> 用於 Input 時 與 input 事件效果相同
```js
    let hint = document.querySelector('.hint')
    inpText.addEventListener('keydown', (e) => {
        hint.innerHTML = e.target.value
    })
```

> keypress  按住會連續觸發 (Shift/Fn/CapsLock除外) 2
> keyup     放開鍵盤按鍵觸發 3

//! event.keyCode 可查詢使用者按下的按鍵
//* 按鍵對應表
> https://gist.github.com/tylerbuchea/8011573

# 表單事件
> focus 聚焦 / blur失焦 //? 用於提示未輸入
> input //* 輸入內容的瞬間即觸發
> change //* 焦點離開才觸發

# submit
//? UX 方面 點擊為了避免重複提交表單
//! submitBtn e.preventDefault 要套用到 form上!!!!
```js
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    //* 避免重複提交表單
    subBTN.addEventListener('click', function(e){
        //! 此處做Loading動畫 / 更改樣式皆可
        this.style.display = 'none'
        setTimeout(() => {
            this.style.display = 'inline-block'
        }, 2000);
    })
```

//* 更進階 待補
# Composition Event (組成事件)
# 自訂事件
> https://ithelp.ithome.com.tw/articles/10192175