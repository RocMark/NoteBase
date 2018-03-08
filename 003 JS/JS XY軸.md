# JS一秒區分clientX,offsetX,screenX,pageX之間關係
> https://kknews.cc/zh-tw/news/r3pzzr.html

javascript的event對象的clientX,offsetX,screenX,pageX 弄得頭暈，於是決定做個圖來區分一下


event.clientX、event.clientY

滑鼠相對於瀏覽器窗口可視區域的X，Y坐標（窗口坐標），可視區域不包括工具欄和滾動條。IE事件和標準事件都定義了這2個屬性

event.pageX、event.pageY

類似於event.clientX、event.clientY，但它們使用的是文檔坐標而非窗口坐標。這2個屬性不是標準屬性，但得到了廣泛支持。IE事件中沒有這2個屬性。

event.offsetX、event.offsetY

滑鼠相對於事件源元素（srcElement）的X,Y坐標，只有IE事件有這2個屬性，標準事件沒有對應的屬性。

event.screenX、event.screenY

滑鼠相對於用戶顯示器螢幕左上角的X,Y坐標。標準事件和IE事件都定義了這2個屬性



原文網址：https://kknews.cc/zh-tw/news/r3pzzr.html