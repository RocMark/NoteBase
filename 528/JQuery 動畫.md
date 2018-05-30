## jQuery 動畫
可用 CSS 做動畫就用 CSS (效能較佳、但對目前硬體差別不大)
JS 動畫 目的在於  互動
* .animate(styleObj,optionObj)
推薦這個 可自訂項更多
* .animate(styleObj,duration,easing,completeHandler)

## animation optionObj
> http://api.jquery.com/animate/
* duration
* easing [針對所有屬性做]
* queue
* specialEasing [針對特定屬性做]
* step / progress / complete / start / done
時間 hook 偵聽
* fail
* always [永遠都會執行]

## 動畫流程
找到目標 => stop() => animate()
1. 找到目標
2. stop() 
取消正在做 或 未完成的動畫
3. animate({ marginTop: 200 }, 2000)
執行新動畫  (jQuery 預設單位為px 可省略不寫)
4. animate({ marginLeft: 150 }, 2000)
鏈式可一直串接下去
```js
  $('#target')
    .stop()
    .animate({ marginTop: 200 }, 2000)
```



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