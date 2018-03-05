# Event 概念
//! 用事件代替引用，解耦物件之間的關係
* 維繫事件與callbacks
* 射後不理 (Trigger後不用管他)

# Event流程 25:29

* 一個Event  (on/bind) 註冊多個callback
* 物件(Object) 觸發事件 (Event)
* Event 呼叫事件對應的callback

# Code (Backbone.js範例)

```js
let Event = {
    _events: {},

    //* Event.on    
    on: function(name, callback, context){
        this._events || (this._events = {})
        let events = this._events[name] //事件名稱
            || (this._events[name] = [])
        
        //* 將callback 及 context 加到事件的庫裡
        events.push({
            callback: callback,
            ctx: context
        })
    }

    //* 告知事件名稱 用loop找出事件名稱並執行
    trigger: function(name){
        let events = this._events[name]
        for (let i = 0 ; i < events.length ; i+=1){
            (ev = events[i]).callback.call(ev.ctx)
        }
    }
}
```

# Event Demo
```js
// 事件綁定callback
Event.on('eventOne',function(){
    alert('callback One')
}, this)
Event.on('eventOne',function(){
    alert('callback Two')
}, this)
Event.on('eventTwo',function(){
    alert('callback Three')
}, this)

// 觸發事件
Event.trigger('eventOne')
Event.trigger('eventTwo')
```

# Event + MV*
* 取代了觀察者模式 Model, View 透過Event溝通
* Controller Presenter ViewModel 可以更靈活
* 隱藏在Framework裡

# 結語 MV*觀點
* 觀看的角度與實作方式不同
* 邏輯分離
* 模組化
* 還是用Framework吧 (都已經處理好基層的了)
