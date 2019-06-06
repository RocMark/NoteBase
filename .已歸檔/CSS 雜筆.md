# 塊級元素 vs 行內元素

# 塊級元素 (自動占據整個容器寬)
> address / fieldset / menu  / dl
> ul / ol / li / form / table
<p> <hr> <h1~6>為 塊級元素

# 行內元素
> span / strong / em / br / input / select
> textarea / cite
<img>  <label> <textarea>為 行內元素
* 行內元素 無法透過 垂直方面的 margin / padding 
即 mt mb pt pb
> inline-block可 

* 行內元素 無法直接設定 寬高 (inline-block可)

* 會 Wrap內容，不會自動占據整個寬
直接設定 min-width 或 width: 100% 無效 !!

* 當所有 行內元素內容 加起來超過 一行才會換行
強迫換行可用 <br>

# 行內元素 設定高
> 無法直接設定 height 高為多少
1. 先設定為 inline-block
2. 在設定 line-height 或 height

# 行內元素 占據整個寬
1. 設為 inline-block
2. 設置 width: 100% 或 min-width: 100%

* input 設置如上 會造成 overflow
使用 box-sizing 修正即可

# 為破圖定義樣式 

# CSS Units
* vw / vh
* vmin / vmax 取瀏覽器最大最小邊
可用於平板
* em   根據母元素
用於區域的內容, Ex一篇文章大中小文字
* rem  根據root層級的文字 (html)
做為調整 整個網站 較為方便
BS4亦選用此

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

# pointer-events
禁用 btn 的 cursor: pointer
```css
  .button-disabled {
    opacity: .5;
    pointer-events: none;
  }
```

# SASS GuideLine
```md
  * 做運算 單位請相同  calc(100% -30px -2rem)  [x]
  * 運算式用括號 可以免calc (100%/3)

  * $value: 42 
  $length: $value * 1px  [O]
  $length: $value +px  [x]

  **顏色篇**
  * 排序 HSL > RGBA > 16進制(用小寫且簡) > 內建顏色單字
  * 內建顏色單字 有些描述並不清楚 只用於快速建構
  * HSL 表示法  最易理解，也便於開發者通過調整色調、飽和度和亮度來驚喜地調整顏色。 
  * RGB優勢於表示近似紅綠藍的顏色時更加簡潔
  * 當一個顏色被多次調用時，最好用一個有意義的變量名來保存它。

  * 變亮和變暗顏色
  1.	Lighten & darken 調節亮度
  2.	Mix 可以在顏色中混入黑或白 直到變成全黑/全白
```

## Ghost Elements
* 原理:
當一個 div 中有多個 inline-block 設成垂直置中
元素會對齊最高的那個元素。
* 做法: 
建一個偽元素高度 100% 寬度為 0，
並且需要將內部元素都設為 inline-block & 垂直置中
```css
  /* container > centerBox > img */
  .container::after {
    content: "";
    display: inline-block;
    width: 5px;
    height: 100%;
    background-color: red;
    vertical-align: middle;
  }
  .centerBox{
    display: inline-block;
    vertical-align: middle;
  }
```
# 背景壓暗
利用 before 
.bg  使用 bg image
```css
  .bg {
    overflow: hidden;
  }
  .bg::before {
    content: "";
    display: block;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
  }
```