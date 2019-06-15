# Input整理帖

# 常用屬性
* required 必填屬性
* autofocus 頁面讀取後自動focus
* maxlength="限定最多多少字"
* autocomplete="on" 
on[重新整理頁面會儲存上一次輸入的] 
off[重新整理不儲存之前輸入的值]

* min max 設置 數字/日期 上限用 step為間隔
* 注意: number設置 會造成只有 1,4可選
```html
<input type="date" name="bday" min="2000-01-02">
<input type="datetime-local" min="2015-10-01T00:00" max="2015-10-31T00:00">
<input type="number" min="1" max="5" step="3">
<input type="range" min="-10" max="10" step="2">
```

# Hidden
* 供PHP用於儲存一些表單資訊 但不顯示 Ex:時間戳記/登入記錄..etc
* 仍會送出隱藏的資料
```
<form action="xxx.php" method="post">
<input type="hidden" name="num" value="999">
<input type="submit" name="send" value="送出表單">
</form>
```        
# ReadOnly V.S. Disable
> 可用於 顯示帳號 但不提供修改
* readonly 唯讀，submit會傳送資料 
* disable 唯獨，submit不會傳送資料

# Pattern
* [0]必須填0!  [0-9] 0~9之間皆可用 [A-Z]同理 [a-z]  {8}8個數字 
* 注意!!!! 大小寫有別!
```
<input type="tel"  pattern="[0][9][0-9]{8}" placeholder="(07)12345678">
<input pattern="[A-Z]" title="這裡可以寫提示~"/>
// combine
<input type="text" name="text" pattern="[a-z]{2}[0-5]{3}" title="aa222">
```

# CheckBox & Radio
* checked 可以預設為已勾選 限定於 type="checkbox或radio"
* 常與 label Tag合用
* 點擊 Male 字樣時 會自動選取radio id="male"

# label優點
[詳細解說文](http://crazy.molerat.net/learner/cpuroom/programmer/reading.php?filename=1010706120235.dov)
1. 點選範圍加大，讓使用者更容易點選選項
2. 無障礙設計，導盲鼠會閱讀出與input綁定的label名稱，使使用者一聽就曉得這個選項是什麼
```
<form>
<label for="male">Male</label>
<input type="radio" name="sex" id="male" />
<label for="female">Female</label>
<input type="radio" name="sex" id="female" />
</form>
```

# CheckBox & Radio 注意事項
* 同一組的單選按鈕，name 取值一定要一致，這樣同一組的單選按鈕才可以起到單選的作用
* 復選框 name取值最好有所區別
* 原因  [有誤請糾正!]
從name屬性：html的表單元素都有name屬性，name屬性是用來區分表單元素的。
表單一般用JavaScript或者服務器端語言比如PHP來處理，
JavaScript或php通過name屬性，就知道你選擇了什麼了。
如果你的複選框各個控件的name屬性都一樣，
對於服務器來說，它根本不知道你選擇的是什麼。

# Color
* 可設預設顯示顏色
```
<input type="color" value="#eee">
```

# File
* accept屬性 限定於 type="file"
* accept 只接受的檔案類型 file_extension audio/* video/* image/* media_type
```
<input type="range" min="-10" max="10" step="2">
<input type="file" accept="audio/*">
```   

# Image  [盡可能少用] (查閱的資料歷史悠久，有錯誤請糾正3Q)
* height / width /src / alt 皆只可用於image
1. input 會提交表單兩次，造成寫入異常
2. img 則正常
```
<input type="image" height="50px" width="50px" src="#" alt="cat" onclick="return onsubmit();">
<img src="xxx.gif" onclick="return onsubmit();"> 
```

# 待額外製作樣式原件
* range 另寫顯示值的物件
* file 另寫提示字 & 測試多值 multiple
* checkbox / radio 與其他長條型input不同


# V.S. Button
[參考原文](http://blog.csdn.net/qiyuanhjc/article/details/75158545)
* Button 已具有 input button的屬性，但可操控性更強
* Button 內部可以放圖片/文本 input無法!
* 建議: 在表單中 還是盡量使用 input submit 作為 提交按鈕
# * 注意! 若要在表單中 使用button 記得要設置 type="submit"

* 請始終為按鈕規定type屬性：Internet Explorer的默認類型是"button"，
* 而其他瀏覽器中（包括W3C規範）的默認值是"submit"。

```
<button type="button">
    <img src="img/path.jpg" width="50px" height="50px" alt="path">
    <p>Lorem ipsum dolor sit.</p>
</button>
```

# V.S. Image  
* [盡可能少用] (查閱的資料歷史悠久，有錯誤請糾正3Q)
* height / width /src / alt 皆只可用於image
1. input 會提交表單兩次，造成寫入異常
2. img 則正常
```
<input type="image" height="50px" width="50px" src="#" alt="cat" onclick="return onsubmit();">
<img src="xxx.gif" onclick="return onsubmit();"> 
```

# With TextArea [待補]
* https://www.w3schools.com/tags/tag_textarea.asp
* http://www.webtech.tw/info.php?tid=HTML_textarea_%E8%A1%A8%E5%96%AE%E5%A4%9A%E8%A1%8C%E6%96%87%E5%AD%97%E8%BC%B8%E5%85%A5%E6%AC%84%E4%BD%8D%E5%85%A7%E6%96%87%E5%AD%97%E5%A4%A7%E5%B0%8F%E8%A8%AD%E8%A8%88
* http://www.webpage.idv.tw/study/03/09/textarea.htm



# dirname
* textarea 亦可使用
* 書寫方向! EX:阿拉伯文為左至右書寫

# list
* 用來與datalist搭配
```
<input list="browsers">
<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Safari">
</datalist>
<select id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Safari">
</select>
```

# 延伸一下dataList V.S. Select
dataList的表現很像是一個select下拉列表，但它只是提示作用，並不限制用戶在input輸入框裡輸入什麼
select標籤創建了一個菜單。菜單裡的選項通過option標籤指定。一個select元素內部，必須包含一個option元素，
總的來說就是，它們都可以顯示出一個下拉表單框，但是select標籤只能在它提供的選項中選擇，而datalist不僅可以讓你選擇，還可以讓你自己輸入其它的選項。

# 時間相關tag
[進階用法參考文](https://blog.gtwang.org/web-development/html5-date-input/)
* 注意datetime-local 12-8 (無效) 12-08(O)
* week >52 (無效)
* placeholder (無效)
* min="2017-12-08" max="2017-12-09" 用來限制時間區間
* step="1" 可以強迫time顯示 00秒 但不可操控 [原文](https://stackoverflow.com/questions/14487621/how-do-i-force-seconds-to-appear-on-an-html5-time-input-control)
* datetime-local 同理 [建議可把:01刪掉 不顯示秒]
```
<form>
    <input type="datetime-local" value="2017-12-09T00:00:01" step="1">
    <input type="month" value="2017-12">
    <input type="week" value="2017-W35">
    <input type="date" value="2017-10-31">
    <input type="time" value="00:00:00" step="1">
</form>
 ```

# form 相關
* form 可讓input脫離母體form且可讓input屬於多個form
```
<form action="/action_page.php" id="form1">
  First name: <input type="text" name="fname"><br>
  <input type="submit" value="Submit">
</form>
Last name: <input type="text" name="lname" form="form1">
```
* formnovalidate="formnovalidate" //指定不驗證

# 以下只可用於Submit/Image
* formaction ="?a=1&b=3"  //單獨指定提交後執行動作
可以用於提交後前往另一個頁面 執行與form不同的php檔
```
<form action="/action_page.php">
  First name: <input type="text" name="fname"><br>
  <input type="submit" value="Submit"><br>
  <input type="submit" formaction="/action_page2.php" value="Submit to another page">
</form>
```
* formenctype //設定編碼
* formmethod //單獨指定傳送方式 post/get
* formtarget //指定視窗模式(type=submit)
```
formtarget= "_blank"
// 其他 _self(同個視窗 default) 
// _parent(父視窗) 
// _top
```