# Bootstrap Beginner Crash Course
> https://goo.gl/3VU8XY

##　Why use?
* speed dev time / responsive / 一致性
* role 增強語意性用

## Removed
* Label / Well / Jumbotron / Thumbnail

## SetUp
初學者範本: https://goo.gl/72Yjz5

## float
//* 免撰寫 media-query
float-{sm/md...}-right

## container 
最基礎的 layout Element (置中用)
要用 grid system 不可少
.container-fluid //* 占據整個橫幅

## Spacing
margin (m) padding (p) 
top(t) bottom(b) left(l) right(r)
* x 設定 左 & 右
* y 設定 上 & 下

{m/p}{t/b/l/r}-{xs, sm, md, lg, xl}-{0 ~ 5 / auto}。

## 水平置中
d-block mx-auto

## sizing
* display d-flex d-block 
xs sm md lg xl
w-25 w-50 w-75 w-100 預設
max-width: 100% [mw-100 mh-100]

## 文本
* page-header
* lead 用於 p 首段(字較稍大)

### 文本排版
* text-left / text-right / text-center / text-justify
* text-nowrap
* text-lowercase / text-uppercase
* text-capitalize

## list  
* list-unstyled (去除bullet / padding)
* list-group
* list-group-item

* list-group-flush
除部分邊框及圓角，用來產生邊緣貼齊的列表群組
可用於其他容器內 Ex: Card

* disabled
<li> 使用 Class .disabled
<button> 使用 disabled 屬性
<a> 不支援

* list-group-item-action
用於 <button> <a> 創建可互動清單項目 (hover disabled)
用來區分可點擊元件 & 不可點擊元件(li/div)
//! 勿用 .btn
```html
    <ul class="list-group">
      <li class="list-group-item active">item1</li>
      //! disabled 需要撰寫禁止點擊事件
      <li class="list-group-item disabled">item2</li>

      <a href="#" class="list-group-item list-group-item-action">123</a>
      <button class="list-group-item list-group-item-action">123</button>
    </ul>
```
* 帶標籤 (後未看)

## btn
* 可用於 <button>  <a>  <input>
* 用於 <a> 建議加上 role="button"

* btn-block  [等寬於外元素]
//! disabled="disabled" 屬性
```html
  <button class="btn btn-default">123</button>
  <a href="#" class="btn btn-primary" role="button">Link</a>
  <input type="submit" class="btn btn-primary" value="Submit">
```

## <form class="form-inline">
* form-group / form-control
form-control-{lg / sm} //* 響應式放大縮小
* form-text

## card
內建 flexBox，預設無 margin 
//* card 取代 panels wells thumbnails
* 可放 圖 / 文本 / 清單 / 連結
* card-body 主要區塊

## alert [Done JS行為 需要再看]
* alert-link 調整字體顏色 & 粗體

### alert-dismissible  X按鈕
1. 確認有載入警報插件 ( requires util.js )
2. 按鈕放於右上角 可用 .close 於 button

3. 加入 fadeOut 動畫 fade show (都要加)
點擊 X 執行 fadeOut 並刪除 DOM

* data-dismiss="alert" 用來觸發 JS函式
務必使用 <button> 才可正常運作
```html
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <h4 class="alert-heading">Heading</h4>
    <button type="button" class="close" data-dismiss="alert">&times;</button>
  <a href="#" class="alert-link">Link</a>
  Text
  </div>
```

### badge 備註標籤
* badge-pill 膠囊樣式
```html
  //* 標題後的 Tag
  <h1>Example heading
    <span class="badge badge-secondary">New</span>
  </h1>

  //* 按鈕備註用 Tag
  <button type="button" class="btn btn-primary">
    Notifications
    <span class="badge badge-light">4</span>
  </button>

  //* Link 標籤  [用於文章書簽 badge-pill 膠囊樣式]
  <a href="#" class="badge badge-pill badge-primary">Primary</a>
```

### Images
//? 設定寫於 Img 上
* img-fluid 設定為響應式 
* img-thumbnail [圖片預覽圖 會有1px邊框]
* rounded

* 範例圖片 https://goo.gl/7pgGPK
```html
  //! 圖片置中
  //* 先將其轉成 display: block => margin 左右 auto
  <img src="" class="rounded mx-auto d-block" alt="">

  <picture>
    <source srcset="" media="(max-width: 900px) and (orientation: portrait)" type="">
    <img src="" class="img-fluid rounded img-thumbnail" alt="">
  <picture>
```



## 較少用的
## table [Done]
* table 基礎
* table-dark 暗色版
* thead-light / thead-dark
* table-striped  間隔深淺
* table-bordered 線框
* table-hover
* table-sm (將padding縮小一些)

* 水平捲動
外層包覆如下，當內容超過 ViewPort提供捲動軸
<div class="table-responsive"></div>

* table-responsive{-sm|-md|-lg|-xl}
對應不同段點作設定 同樣寫於外層 div
創建響應式表格，使表格在 576px, 768px, 992px, 和 1120px 中斷點(max-width)內能夠水平的滾動。

### 文字裝飾 Decoration
* mark (HighLight用) / small (次要字)
* del (刪除線) / u (下底線) / strong (粗體)

### float float-right / float-left /  clearfix

### blockquote 引言
```html
    <blockquote class="blockquote-reverse">
      <p>
        Lorem20
        <footer class="blockquote-footer">Quote by <cite>John Doe</cite> </footer>
      </p>
    </blockquote>
```

### code (程式碼區塊) & kbd(提示按鍵)
```html
    <code>&lt;h1&gt;Heading&lt;/h1&gt;</code>
    <br>
    Copy this with <kbd>cd</kbd>
```