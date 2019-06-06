# Clean Code

* 避免使用浮點數作比較
* 使用閉包，考慮效能問題
* 使用 innerHTML 改變元素時，注意子元素綁定事件
使用事件代理，省去重新綁定 / 解除的麻煩
* 判斷式  if( typeof str == 'string' ) 
* 不要 pass eventObject 到 Event Handler以外的地方

# Style
* 自我表達 self-explained
* Function 命名 prefixes 統一 [ 動詞 + 名詞 ]
get / set / has / is /  isAt / on 
* 運用介系詞
and / by / at
```js
  getName() setName() hasHair()
  isBlond() isAtLast() onViewCreated()

  removeAt() saveAndExit()
  findViewById() waitForIdle()
```

* 不使用否定句
除了 Exception & Error
* 考慮擴展性 / 封裝細節

# 設計原則
1. 單一職責
一類不含多職責，同職責不出現在不同類
2. 開放封閉
  * 開放 => 擴展
    為未來的新功能準備好介面
  * 封閉 => 封裝細節
    Code功能拆分，用組成的方式組成功能

# CleanCode 心得分享

# 有意義的命名
- 避免誤導
小寫的L或大寫的O、自訂的縮寫
- 長命名優於短命名(較易搜尋)
- 方法的命名 get/set/is(判定)

# 函式
- 簡短、只做一件事情(單純化)
- 要無副作用

