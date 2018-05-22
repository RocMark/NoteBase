# aria-label
用於增進網頁的 accessibility
讓一些閱讀不易的使用者，利用朗讀軟體來存取網頁。

//* 朗讀軟體會讀出 Close
```html
  <button type="button" class="close" data-dismiss="alert" aria-label="Close" >&times;</button>
```
## iconfont 實用
當使用的元件不包含文本， Ex: <button> 只含 icon

* 建議增加 toolTips 提示 icon 意義
* 建議加入 aria-label，去告知該 icon的用途
* aria-hidden="true"
會通知朗讀軟體，播放至該屬性內容自動跳過，避免混淆

//? 若使用連結，建議將 label 加在 <a> 上為佳
```html
  <a href="#" aria-label="設置"><i class="icon-gear"></i> 設置</a>

  //! 注意 若於 iconfont 上添加 aria-label 會念兩遍設置
  <a href="#"><i class="icon-gear" aria-hidden="true"></i>設置</a>
```

## Form
### 朗讀軟體 不會識別 placeholder (解)
1. 利用 aria-label 再次標注
2. 利用 label 但不顯示 label 

//? bootstrap class sr-only
sr-only (screen reader only)  
不可用 display: none，朗讀軟體會忽略

```html
  <label for="username" class="sr-only">用戶名</label>
  <input id="username" name="username" placeholder="用戶名">
```

## 圖片 alt 用途
圖片本身無法被朗讀軟體閱讀，朗讀軟體會去閱讀 alt 內容
另外當圖片無法加載時，瀏覽器會將 alt 內容展示給用戶。

當 alt & aria-label 同時存在，會去閱讀 aria-label

# title 屬性 (無幫助)
title 是用作提示與補充的，但不會被閱讀軟體朗讀