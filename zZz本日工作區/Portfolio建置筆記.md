# Portfolio 建置筆記

# FIXME
- 最後一區要設offset
- 補上提示字 & 紅邊 form


# JS Get ScrollPos
```js
    let scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop
    window.addEV('scorll',func)
```

# innerHTML / outerHTML
innerHTML 不含本身Tag
outerHTML 含本身

# Sass calc(100vh - 10px)
//! sass 無法將vh vw 與其他單位作計算
> 因為 sass只是做編譯，無法偵測到當前view height
> 必須經由 JS去作 取得 vh - px
> 實作範例
```js
    let slideShow = document.querySelector('.slideShow')
    let nav = document.querySelector('nav')
    let navH = window.getComputedStyle(nav).getPropertyValue('height').replace(/[^-\d\.]/g, '')
    let slideShowH = window.innerHeight - navH
    slideShow.style.height = `${slideShowH}px`
```

# 取得 CSS Style Value  //!重要
> regex排除非數字的部分
```js
    window.getComputedStyle(nav).getPropertyValue('height').replace(/[^-\d\.]/g, '')
    // 可以藉由此行 regex 排除任何非數字的
    //? .replace(/[^-\d\.]/g, '')
```

# transform 屬性取值
> 瀏覽器會自動換算成 matrix
> 要單純取到 transform: translateX 非常困難