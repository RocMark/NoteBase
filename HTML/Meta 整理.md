# Meta Tag整理

## 必備Meta
```pug
meta(charset="UTF-8")
meta(name="description" content="")
meta(http-equiv="X-UA-Compatible", content="ie=edge")
meta(name="viewport" content="width=device-width; initial-scale=1.0; ")
```

## viewport
```pug
meta(name="viewport" content="width=device-width; initial-scale=1.0; ")
//- maximum-scale=1.0; user-scalable=0; 不讓使用者縮放
```
- width/height: 數字 / device-width/height
- initial-scale / maximum-scale: 0.25 ~ 5
- user-scalable: 1(yes) / 0(no)

//* 以下待整理

表示網頁為英文，且是針對英國。此外，您也可以使用
<meta http-equiv="content-language" content="en-gb">
<html lang="en-gb">


<meta http-equiv=Content-Type content="text/html; charset=BIG5">
說明網頁的編碼為BIG5(大五碼)，讓瀏覽器取得該頁面正確的編碼，這裡通常筆者會建議使用utf-8(萬國碼)較為恰當。

<meta http-equiv=EXPIRES content=0>
設定網頁的到期時間. 設定為0可讓你的頁面不保存在你訪問者的暫存檔案中。

<meta http-equiv="Pragma" content="no-cache"/>
禁止瀏覽器從本地機的緩存中調閱網頁內容。這樣設定，訪問者將無法離線瀏覽。

<meta content=DOCUMENT name=RESOURCE-TYPE>
告知這個網頁的形式是文件。

<meta http-equiv="Window-target" content="_top">
強制頁面在當前視窗以獨立頁面顯示。防止別人在框架裡調用你的頁面。
<meta content=GLOBAL name=DISTRIBUTION>
告知這篇網頁是全世界性的。
<meta name="rating" content="general"/>

<meta content="Copyright (c) by PHP-Nuke Powered Site" name=COPYRIGHT>
告知這個網頁的版權為 PHP-Nuke Powered Site 所有。

<meta name="generator" content="Blogger"/>
宣告網站頁面編輯工具

<meta content="SEO ,網路行銷" name=KEYWORDS>
告知搜尋引擎這個網頁的關鍵字有SEO ,網路行銷
以上這段語法也可以寫像下面
<meta name="keywords" CONTENT="SEO ,網路行銷">


<meta content="Your slogan here" name=DESCRIPTION>
提供網頁的內容簡述。
通常如果沒有這行指令，搜尋引擎會以網頁內容的前廿五字做為網頁內容摘要(這部分的描述也是SEO藝術之一)。

<meta content="INDEX, FOLLOW" name=ROBOTS>
告訴搜尋引擎對此網頁做索引，也就是說會出現在它的搜尋結果中。
告訴搜尋引擎把這個網頁儲存在他們的server 裡，也就是"頁面庫存檔"。

<meta content="1 DAYS" name=REVISIT-AFTER>
告訴搜尋引擎1天之後再來造訪這個網頁

<meta content=GENERAL name=RATING>
告知這個網頁的等級為大眾(適合大眾瀏覽)。

<meta content="Microsoft FrontPage 5.0" name=GENERATOR>
告知這個網頁是用Microsoft Frontpage 5.0製作的


<meta http-equiv="imagetoolbar" content="no" /> 
關閉滑鼠移到圖片上方，出現儲存圖片的相關控制選單。


<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" /> 
這部分若沒指定，會依照使用者所使用的瀏覽器的版本為主，因此可利用此語法跟瀏覽器說，用那個版本來作瀏覽。

<meta name="distribution" content="Taiwan"/>
宣告網頁發佈地台灣


<meta name="URL" content="http://www.seochat.com.tw"> 
網頁路徑

<meta name="expires" content="31 December 2012"/>
告知搜尋引擎網站(頁)何時從的資料庫中刪除。

<meta name="reply-to" content="webmaster@yoursite.com"/>
告知來訪者如何聯繫網站管理人

頁面自動Refresh
刷新網頁
<meta http-equiv="refresh" content="5" />
自動Refresh網頁，每隔5秒就會自己更新一次。

meta轉址
<meta content='60; url=http://www.seochat.com.tw/' http-equiv='refresh'>
在60秒後，跳轉到www.seochat.com.tw，所以可以達成自動轉址的功能！