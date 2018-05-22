# Nav Navbar 總整理

//! container-fluid 有些許 padding 自行修正

## nav 主體
* navbar 最外層

* navbar-expand-{sm, md, lg, xl} 響應式摺疊
當小於該數值，才進行摺疊 {576/768/992/1200}
//! 若要總是摺疊 不加即可


* navbar-* 樣式
<nav class="navbar navbar-expand-lg navbar-light bg-light">

## nav 色彩
先選定 navbar-light/dark
1. 再選定背景顏色 bg-* / bg-dark
2. 或用自訂背景色
style="background-color: #e3f2fd;"

## 基本架構
```html
<div class="container-fluid">
  <nav class="navbar">
    a.nav-brand //? Title
    button.navbar-toggler //* ToggleBtn

    //* 要 collapse的內容丟裡面
    .collapse.navbar-collapse

      //? mr-auto 用於 flex 將物右推
      ul.navbar-nav.mr-auto
      
        //* 基礎 navItem (active高亮當前)
        li.nav-item.active
          a.nav-link

      //* 亦可省略 <li>
      .navbar-nav
        a.nav-item.nav-link
      //? 但考慮到 DropDownMenu
      //? 需要將.nav-item 和 .nav-link 使用不同且巢狀元素
      使用 li 對日後調整也較方便，語意較佳
```

## 定位
使用 position: sticky 支援度還很渣

## nav中的下拉選單 架構
下拉選單依賴  Popper.js
```html
  //? nav 下拉選單
  li.nav-item.dropdown
    //* dropdown-toggle 下拉按鈕樣式
    //* navLink 點擊高亮用
    //! data-toggle="dropdown" 不可少
    a.nav-link.dropdown-toggle(data-toggle="dropdown"){itemName}

    //? 下拉本體
    .dropdown-menu
      a.dropdown-item{LinkName}
      .dropdown-divider //* 分割線
```

## 外部容器
container 置中
container-fluid 擴展至整個寬度

## 內部元件
* navbar-brand 導覽列標題
最好用於 <a>，<span .mb-0 .h1>需要自行修正
* navbar-text 垂直置中的文本
<span class="navbar-text">
* navbar-nav (本體)  //! ul.navbar-nav
* form-inline 表單(Ex:SearchBar)
* collapse.navbar-collapse 
//* collapse另開文

## 使用外部內容 Toggle Nav
//! id 和 data-target 匹配即可
```html
  <div class="pos-f-t"> //* 置頂用的class
    <div class="collapse" id="test">
      <div class="bg-dark p-4">
        <h4 class="text-white">Collapsed content</h4>
      </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#test">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>
```

## 摺疊狀態的 Title & Icon位置互換
1. 交換 button & navbar-brand 在 HTML的上下位置
2. 調整 button 的 ml-auto => mr-auto

## Collapse
* navbar-toggler (Collapse用 BTN)
* navbar-toggler-icon (漢堡圖樣)
```html
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
    <span class="navbar-toggler-icon"></span>
  </button>
```

## 補充
* d-print 才會被列印出來