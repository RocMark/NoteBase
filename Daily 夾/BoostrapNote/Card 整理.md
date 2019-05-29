# Card 整理

## 基礎架構
card 預設寬度為 100%
可藉由 row>col-sm-6>card 來調整大小
或 card w-75 
* 主結構 card text-white bg-dark
* 次結構
* 樣式 card-{配色} / card-outline-{配色} 
樣式寫於 card 主結構
```html
  <div class="card text-center">
    <img class="card-img-top" src="" alt="">
    <div class="card-header">Header</div>
    <div class="card-body">
      <h5 class="card-title">Title</h5>
      <h6 class="card-subtitle mb-2 text-muted">SubTitle</h6>
      <p class="card-text"></p>
      <a href="#" class="card-link">Link</a>
    </div>
    <div class="card-footer text-muted">Footer</div>
  </div>
```
## 複數 card
* 卡片相連    使用 card-group
* 卡片不相連  使用 card-deck 
card-footer會自動對齊

* card-columns 瀑布式排列
利用 column 屬性建構  上->下 左->右
//* 可調整欄數
```scss
  .card-columns {
    @include media-breakpoint-only(lg) {
      column-count: 4;
    }
    @include media-breakpoint-only(xl) {
      column-count: 5;
    }
  }
```

## card 導覽列
//! 必需放入 car-header
nav-pills / nav-tabs 兩版本
```html
  <ul class="nav nav-pills card-header-pills">
    <li class="nav-item">
      <a class="nav-link active" href="#">Active</a>
    </li>
  </ul>
```

## 圖像
//! 於 card-body 加入 card-img-overlay
可以採用 card-img-top的圖當作背景圖
```html
  <div class="card">
    <img class="card-img-top" src="" alt="">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">主介紹文</p>
      <p class="card-text"><small class="text-muted float-right">Last updated 3 mins ago</small></p>
    </div>
  </div>
```