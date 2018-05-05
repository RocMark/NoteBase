# JQuery 動畫 Stop

# .stop
.stop() 
//? 目的在於 清除前面的動畫執行現在的動畫
常用於  hover 下拉式選單

.stop([clearQueue][,JumpToEnd]) // 預設皆為false

clearQueue 表是否要清除排隊
JumpToEnd 是否跳到最後

stop有三個動作
1. stop 停止正在跑的動畫

2. 是否清除排隊
//* 清掉所有排隊中的動畫，執行此動畫

3. 是否跳至最後
//! JumpToEnd表 跳至 被停動畫的結果

# 沒排隊、一般情況
```js
    //* 會依序執行 先執行往左，才執行往下
    //* 後面1000 為 執行時間為 1s

    // .stop(clearQueue,jumpToEnd)
    //? 清除排隊 會將 left 500 清除 只執行 left 300
    //* .stop(false,false) 預設值

    $('#target').animate({left: 500},1000)
    $('#target').stop(false,true).animate({top: 500},1000)
    //* 1. 停掉 left500
    //* 2. 停掉後沒人在排隊了不需要清
    //* 3. 跳到 End表 left 的 End 即執行完 往左500的狀態

    //* 則不會執行往左
    $('#target').stop(false,false).animate({top: 500},1000)
```

#  排隊的狀況
```js
    //* 會將 left 500 停掉， left 300繼續
    $('#target').animate({left: 500}).animate({left: 300})
    $('#target').stop(false,false).animate({top: 500})

    //? 清除所有在排隊的動畫，直接執行此動畫
    // 第一個人被停掉，第二個人被清掉，直接執行此
    $('#target').stop(true).animate({top: 500})


    //* left500 停 left300 清掉
    //! JumpToEnd表 跳至 被停動畫的結果 即 Left500
    $('#target').stop(true,true).animate({top: 500})
```