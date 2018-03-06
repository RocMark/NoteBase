# MVVM 簡介

## knockout js 黑暗執行緒 2012-05-09 (待看)
http://blog.darkthread.net/post-2012-05-09-knockout-js-intro.aspx

## 7 min Crash Course - Knockout JS
https://www.youtube.com/watch?v=JGwRIbWWqjE

# MVVM 特色 Two-way Data Binding
* ViewModel 一有變化就更新View
* View 一有輸入值就更新ViewModel

* Data-Binding 由 Framework處理 不必自己找元素

## Model
跟資料來源溝通 
(不只資料操作，與資料庫/WebService做溝通)

## View 包含 Bind邏輯的樣板

## ViewModel 
將資料轉換成視覺元件可用的狀態 (類似Model角色)


# Code (knockout.js為例)
# View 
View(Template)透過HTML屬性來與ViewModel結合

```html
//* 要顯示的值做data-bind
<span id="num" data-bind="text: val"></span><br>
//* 要做甚麼動作也用data-bind紀錄
<button data-bind="click: plus">+</button>
<button data-bind="click: minus">-</button>
```

# ViewModel
```js
myApp.ViewModel = function(){
    let model = new myApp.Model()

    //* 先觀察Model狀態
    //? 觀察 this.num 並做更新
    this.num = ko.observable(model.getVl())
    //* computed 輸出調整
    this.val = ko.computed(function(){
        return this.num() + 'px'
    }, this)

    //* 操作Model完，Get Value 但不直接塞到View中
    //! 而是放入ViewModel的成員中 (this) 
    //? 放入 this.num後 FrameWork 會去自動幫你更新View
    this.plus = function(){
        model.add(1)
        this.num(model.getVal())
    }
    this.minus = function(){
        model.sub(1)
        this.num(model.getVal())
    }
}
//! 透過Framework結合 View & ViewModel
ko.applyBindings(new myApp.ViewModel())
```

# MVVM 缺點
* 需要隨時監控View的狀態，效能會受影響
* 效能掌握在Framework手上
* Data-Binding 的錯誤要在 Runtime 才能發現