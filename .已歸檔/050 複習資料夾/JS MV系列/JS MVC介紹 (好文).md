# 透視 JavaScript 的 MVC/MVP/MVVM 
https://www.youtube.com/watch?v=8aDhoe8kE28

# GUI 功能
* 視覺控制項與資料整合
* 強化使用者對資料的印象
* 事件驅動
* 配合Framework / IDE

## 問題
1. 常在事件處理方法裡包含資料運算邏輯
2. 各元件間互動方法都放在一個方法裡
MVC/MVP/MVVM 用來解決上述的問題

# MVC/MVP/MVVM 基本原理 (通稱MV*)
流程邏輯 / 視覺邏輯 / 資料運算邏輯
* 從資料邏輯中分離視覺邏輯
* 從視覺邏輯中分離流程邏輯
Why?
團隊合作 / 便於測試 / Function單一職責 / 釐清問題

# 以一個加減按鈕+顯示文字為例
## Model  
將資料狀態做封裝 (Class)
```js
let myApp={}
myApp.Model = function(){
    // 資料狀態
    let val = 0 
    // 以下為操作行為
    this.add = function(v){
        if (val < 100) val += v
    }
    this.sub = function(v){
        if (val > 0) val -=v
    }
    this.getVal = function(){
        return val 
    }
}
```
## View
```js
myApp.View = function (){
    // 管理視覺元件
    let $num = $('#num')
    let $incBtn = $('#plus')
    let $decBtn = $('#minus')

    // 呈現資料
    this.render = function (model){
        $num.text(model.getVal() + 'px')
    }
}
```

# MVC 架構
* View 觀察 Model 
* Controller 主角 (使用者接觸的對象)
由使用者觸發事件，Controller 負責派送 Request 並控制Model 的狀態

# MVC流程  7:30
1. Controller 初始化 View & Model
2. View 向 Model註冊 [註冊後 View 可以觀察Model]
3. 可觀察後，使用者即可看到View的初始輸出
4. 使用者觸發事件Click...etc (發送Request)
5. Controller 改變 Model狀態
6. View 觀察到 Model 改變 & 改變輸出

## Model  (皆為承上一段的Code)
```js
myApp.Model = function(){
    // Model 擁有 View 的參考
    // Model 實現觀察者模式，將元件放入註冊
    let views = []
    this.register = function(view){
        views.push(view)
    }

    // 註冊變化了就loop更新
    let self = this
    this.notify = function (){
        for (let i = 0; i < views.length; i++){
            views[i].render(self)
        }
    }
}
```

## View
```js
// 引用Controller參考
myApp.View = function(Controller){
    // ...
    // 將事件綁定在Controller 的 Action
    $incBtn.click(controller.plus)
    $decBtn.click(controller.minus)
}

```

## Controller 
```js
myApp.Controller = function(){
    let model = null
    let model = null

    this.init = function(){
        // Controller 初始化 Model & View
        model = new myApp.Model()
        view = new myApp.View(this)

        // Model 註冊 View
        model.register(view)
        model.notify()
    }

    //  Controller 負責控制 Model

    // 操作中不會看到 View 
    // 由 Model 去通知 View 做更新

    this.plus = function(){
        model.add(1)
        model.notify()
    }
    this.minus = function(){
        model.sub(1)
        model.notify()
    }
}
```

# Run
程式在執行時只會接觸到Controller
```js
(function(){
    let controller = mew myApp.Controller()
    controller.init()
})();
```

# MVC缺點
* Model 不應該擁有 View的參考
Model希望其單純，Model裡 Array 放 View 的 Object
* View 不容易測試
View必須透過別人做更新，要如何觸發

# MVP 可以為以上缺點 提出解決 Next