# MVP架構
* User 接觸對象是View
* Presenter 取代 Controller
* 派送的角色由 View來扮演

# MVP 類型
* Supervising Controller 
不同點:  由View做派送
* Passive View

## Passive View
//! View & Model 不需知道對方
//? Presenter的工作量比較大 (必須把Model做更新)
//* 整體的可測試比較好

# MVP流程 14:23
1. 使用者看到View的初始輸出，同時 View 初始化 New出一個 Presenter
2. Presenter 初始化 Model
3. 使用者 Click 透過 View 發出請求
4. View 委派 Presenter 來處理使用者的請求

5. Presenter 改變並獲取Model狀態
6. Presenter 將Model 的狀態更新到View上面
7. 使用者看到View改變輸出

## Model
```js
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
    // ! 不需要觀察者模式，不用去註冊元件
}
```

## Presenter
```js
myApp.Presenter = function(view){
    // * Step 2 初始化 Model & View
    let _model = new myApp.Model()
    let _view = view
    // * Step 5-6 Presenter 將 Model 內容傳遞給View 
    // View的更新非 看Model發生何事更新
    //? view即可不需要 觀察Model
    // 而是 Presenter 將 model值 get出來 才塞到View中
    _view.render(_model.getVal())

    this.plus = function(){
        _model.add(1)
        _view.render(_model.getVal())
    }
    this.minus = function(){
        _model.sub(1)
        _view.render(_model.getVal())
    }
}
```

## View
```js
myApp.View = function(){
    // ...
    //* View 多了個初始化的動作，使用者接觸到的是View

    this.init = function (){
        let presenter = new myApp.Presenter(this)

        //! View 將請求委派給 Presenter
        //* Click 動作交由 Presenter去做
        $incBtn.click(presenter.plus)
        $decBtn.click(presenter.minus)
    }
}
```

## RUN
只接觸到View
```js
(function(){
    let view = new myApp.View()
    view.init()
})()
```

# 與MVC差異
//* 適合維持狀態



//! View & Model 解耦ㄡ3