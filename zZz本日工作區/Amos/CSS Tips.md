# CSS Tips

## BS篇
//! 將要 float 的物件放於 最上方
其下方物件才會自動將原本的空間填補上來

自訂Class 放於前，可加前墜詞 mk-num-col

可以參考 bootstrap 的方式自行作擴充
Ex: mb-50

* #F00 RED

row 4 8欄常用
col-xs-12 設為最小占整寬
col-sm-4  主要調整 sm

fakeImg 

btn-block 等同外元素寬度的 btn

盡量不要在 BS 中 加自訂的 Class名稱
//* 另外設置 自訂 Class名稱 於內/外

//! 有些架構的區塊
可用自訂CSS 去設定，日後較有彈性，且不需要去碰到結構

利用 註解 tl 去切割區域 方便速查
<!-- //*==================== -->

# page-header [已寫snippets]
page-header 已從 bs4 移除
改成用 通用類別自行呈現
```html
  <h1>Title<small class="text-muted">subTitle<small><h1>
```

# 主次標題 inline
```css
  <h3>Title<small>subTitle</small></h3>
```
