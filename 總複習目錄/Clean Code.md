# Clean Code

* 避免使用浮點數作比較
* 使用閉包，考慮效能問題
* 使用 innerHTML 改變元素時，注意子元素綁定事件
使用事件代理，省去重新綁定 / 解除的麻煩
* 判斷式  if( typeof str == 'string' ) 
* 不要 pass eventObject 到 Event Handler以外的地方