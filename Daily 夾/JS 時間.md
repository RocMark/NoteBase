# JS 時間處理
* 日光節約時間?

# GMT & UTC 差異
一般使用上沒有差異
UTC 有閏秒
工程師 使用 GMT (格林威治標準時間)

# Date.UTC()  補!
* universal time 是瞎毀....
* time.set​UTCDate() // 補
* time.getUTCDate() // 回傳日期根據 universal time?
* UTC系 回傳英國倫敦格林威治時間???
```js
  // 回傳自 1970/01/01 起的毫秒數
  // 可帶參至ms 年>1900 月0為始
  Date.UTC(1900,0,31,23,59,59,999)
```

# 時間比較、計算 思路
1. 先轉換成至 1970 的毫秒數
.valueOf()
2. 作計算 (加減)
3. 轉換回原本的 時間物件
4. 使用寫好的 Format Function 解析

# toLocale​String() 補!!!
```js

```

# toLocaleDateString()  補!!!
* toLocale​Format (非W3C規範)
* toLocaleTimeString()
```js
toLocaleTimeString()
toLocaleDateString()
```