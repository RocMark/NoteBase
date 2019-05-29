# dropDown整理

## 選單式表單 & JS 部分 
//!待bu

#　特性
* 用點擊觸發，而非hover
* 由 Popper.js 建構
* bootstrap.bundle.min.js 內就包含 Popper.js

* role="menu"
* ESC 關閉 功能表的功能

## Note
* active / disabled 於 dropdown-item
* data-toggle="dropdown" 必不可少

## 單一按鈕
* 可用 <button> 或 <a> 作觸發元件
* 可用 <button> 或 <a> 作 dropdown-item [v4]
//* v3 必須是 <a>

最外層為 <div class="dropdown show"> 
亦可為 <div class="button-group">
//* show 會呈現稍深的顏色 表展開狀態

//? snippets btn-dropdown-single

```html
  <div class="dropdown">

    <button class="btn dropdown-toggle" id="" data-toggle="dropdown" >
      Dropdown button
    </button>

    <a class="btn dropdown-toggle" href="#" role="button" id="" data-toggle="dropdown">
      Dropdown link
    </a>

    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <button class="dropdown-item" type="button">Action</button>
      <div class="dropdown-divider"></div>
    </div>
  </div>
```

## 分離按鈕 型式 修改順序
* 更改外層 dropdown => btn-group

* 新增一個按鈕 (點擊不會展開用的)
<button type="button" class="btn btn-info">Action</button>

* 原始按鈕加入 dropdown-toggle-split
* 原始按鈕內加入 親和力用的
<span class="sr-only">Toggle Dropdown</span>

```html
  <div class="btn-group">
    <button type="button" class="btn">Action</button>

    <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">

      <span class="sr-only">Toggle Dropdown</span>
    </button>

    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <div class="dropdown-divider"></div>
    </div>
  </div>
```

## 通用樣式
[加 class 的目標]
* 設定大小 [button]
btn-lg / btn-sm
亦可用於 dropdown-item 記得補上 btn class

* 下拉選單顯示方向 [父元素]
dropup / dropleft / dropright
//* 注意顯示的空間，若不足則無效

* 選單對其按鈕的右側 [dropdown-menu] 
dropdown-menu-right 

* header [dropdown-menu內] 
<h6 class=\"h4 dropdown-header\">Header</h6>
* 分割線 [dropdown-menu內] 
<div class="dropdown-divider"></div>

