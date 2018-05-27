# CSS 專家密技
> https://goo.gl/5YqaRo (Github)
> https://goo.gl/tzv1bR (YT直播)

# Note
* 屬性選取器[href='#']，效能較差 (少用)
* font-size 快捷 fz

* input[type="text"]比直接下class還慢

* 寬高比 = height / width * 100

# bs3 gutter [2:07]
欄跟欄間距，以 padding 實做的 (實做容易)

# RWD iFrame / 圖片
> https://goo.gl/tzv1bR (YT直播)  [1:21:47]
(以 padding 百分比 代替 高)
//! RWD常見技巧
Ex: Youtube影片(iframe)、GoogleMap

//* 正方形 w50p + pb50p 
//? 流程
```
  0. 外部容器 w500 h500 
  1. 子元素 w100p height: 0  [高設為0]
  2. 使用 padding-bottom 將物件撐開 [取代高]
  3. 設定 padding-bottom: 20% 百分比 
  4. 代表 父層的寬 (500px)  當成為百分之百

  5. 因此 padding-bottom 500px * 20% => 100px
  6. 使用 padding-bottom 當高 所以高為 100px

  7. 寬高比為 500px / 100px 或 100%/20% => 5:1
```
# 內部此用 iframe
1. 將設定 pb20p 的項目 加上 po relative
2. iframe 加入 poab
將不論是高或padding 撐出的空間拿來填滿
3. 因此可設 w100p h100p 做填滿 

//? 無論Viewport寬，子元素將維持其寬高比
```css
  .container {
    height: 500px;
    width: 500px;
    border: 0.5px solid #eee;
  }
  .box {
    width: 100%;
    height: 0;
    background-color: #aaf;
    padding-bottom: 50%;
    position: relative; 
  }
  .box iframe {
    position: absolute;
    width: 100%;
    height: 100%; 
  }
```

# 顯示、隱藏
用 JS 去控制 aria-hidden 代替 
加上 hidden 的 Class
```css
  [aria-hidden="true"]{
    display: none
  }
```

# bs4 clearfix
```css
  &::after {
    display: block;
    clear: both;
    content: "";
  }
```

# CSS Reset (css-reset)
normalize.css
box-sizing  default 為 content-box

# unset 
讓元素回復到全部的預設値 (IE 11 不支援)
```css
  button {
    all: unset;
  }
```

# 移除 多餘的 首/末 border
* :not() (反向選取器) [好用]
* not 語意較佳、但效能倒數的
* +號 效能/閱讀性較差、但不會造成複寫、較差
加號 => 跟屁蟲選取器 [支援度較佳]

```css
  /* 效果同下面的範例 */
  .nav li + li {
    border-left: 1px solid #eee;
  }

  /* 效果同下面的範例 */
  .nav li:not(:last-child) {
    border-right: 1px solid #666;
  }

  .nav li {
    border-right: 1px solid #666;
  }
  .nav li:last-child {
    border-right: none;
  }
```

# List 橫向排列
//* li d-inline-block
```css
  li {
    display: inline-block;
  }
```

# 全域套用 line-height (加在body上)
```css
  body {
    line-height: 1.5;
  }
```

# nth-child (第n個子物件)
//! 必須 Tag 也符合才有用，重點於第n個
//? even odd
* 類型:nth-of-type(n)
(第n個此類型子物件)

:nth-child(an +b)
a 乘以 n 加 b 等於 目標 

//! A個一群 裡面的 第B個

* :nth-child(3n +2)  [2,5,8,11,14......]
n*0 + 2 => 2可以選到
n*1 + 2 => 5可以選到

* :nth-child(-n +6) 選前6個[較少用
]

# max-height 來建立純 CSS 的捲動軸
常用於 會員條款區  (好用!)
下拉選單、後台、一堆文字 可用。
```css
  .slider {
    max-height: 200px;
    overflow-y: hidden;
    width: 300px;
  }

  .slider:hover {
    max-height: 600px;
    overflow-y: scroll;
  }
```

# 表格中每個儲存格維持等寬
table-layout: fixed
```css
  .calendar {
    table-layout: fixed;
  }
```

# 屬性選取器 應用
根據不同上傳檔案類型，前面的 Icon不同
<!-- <p><span lang="zh-TW">lorem</span></p> -->
```css
  /* | 代表 有 - 相連的  zh-TW */
  [lang|="zh"]{fs: smaller}

  $ 代表以結尾
  a[href$=".pdf"]{bgi}
  a[href$=".doc"]{bgi}
  a[href$=".ai"]{bgi}
```

# :empty (CSS3選取器) [IE8 不支援]
<!-- <div></div> -->
可以選擇 內無文字的 Tag
可用在 非必填 顯示欄位 方便
```css
  input[type="text"]:empty{}
  div:empty { }
```


# 為 破圖定義樣式 [還不錯]
```sass
  img 
    display: block
    font-family: Helvetica, Arial, sans-serif
    font-weight: 300
    height: auto
    line-height: 2
    position: relative
    text-align: center
    width: 100%
  img::before 
    content: "We're sorry, the image below is broken :("
    display: block
    margin-bottom: 10px
  img::after 
    content: '(url: ' attr(src) ')'
    display: block
    font-size: 12px
```
```css
  img {
    display: block;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 300;
    height: auto;
    line-height: 2;
    position: relative;
    text-align: center;
    width: 100%;
  }
  img::before {
    content: "We're sorry, the image below is broken :(";
    display: block;
    margin-bottom: 10px;
  }

  img::after {
    content: '(url: ' attr(src) ')';
    display: block;
    font-size: 12px;
  }
```
# rem 設定全域 em 設區域大小
rem 跨平台好用 (舊版不支援)、 em 做無障礙網站會用到
px 穩定

# :root 彈性字體大小
```css
  :root {
    font-size: calc(1vw + 1vh + 0.5vmin);
  }
  body {
    font: 1rem/1.6 sans-serif;
  }
```

# mobile UX 
設定表單元素的 font-size
```css
  input[type='text'],
  input[type='number'],
  select,
  textarea {
    font-size: 16px;
  }
```
# pointer-events
禁用 btn 的 cursor: pointer
```css
  .button-disabled {
    opacity: .5;
    pointer-events: none;
  }
```