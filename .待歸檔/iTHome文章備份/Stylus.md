[CSS 预处理的区别的深度比较(簡)[入坑文!]](http://www.jianshu.com/p/b2174b800e40?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation)
[stylus入門(簡)](https://segmentfault.com/a/1190000002712872)
[Stylus：Node.js 架構下的 CSS 前處理器](hhttp://blogger.gtwang.org/2014/02/stylus-css-preprocessor-based-on-nodejs.html)
[stylus筆記總結](https://xinranliu.me/2014-09-16-stylus-note/)
[stylus中文參考文檔](http://www.zhangxinxu.com/jq/stylus/mixins.ph)
[Youtube教學系列](https://www.youtube.com/playlist?list=PLLnpHn493BHFWQGA1PcyQZWAfR96a4CkH)
[CSS 预处理的区别的深度比较(簡)[入坑文!]](http://www.jianshu.com/p/b2174b800e40?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation)

**Stylus Setup**
我使用的編輯器為 VS CODE 我就僅介紹此見諒~
1. npm install stylus -g 
2. 去marketplace 搜尋 stylus 安裝語言插件 (VS Code 預設是沒有的)
3. 在cmd中打上下方程式碼 即可監聽! 

* -w 後接要編譯的檔案 
* -o 後接要編譯成的檔案
* -c 可以產生壓縮格式css 
* -U 可以將 CSS的圖片以 Data URI 的方式
* -h 有其他參數可詳見
* -m 建立source map [檔案可以直接在ChromeDevTools中修改]
[Source map教學](https://www.youtube.com/watch?v=IQFdzIwGZ4I)
```
stylus -w -m public/stylus/main.styl -o public/css/main.css
```
-----
**Manta's Stylus Supremacy(VS CODE插件)**
* 用途: 可以格式化 stylus
* 快捷: ALT+SHIFT+F 文件格式化，會將檔案轉換成SCSS的模式 (有括號/分號...etc)
* 當然! 作為一個SASS使用者 真看不習慣括號&分號

* 修改方式: 
1. 在專案底下的 .vscode/setting.json下作更改
2. 將 [說明文件(英文)](https://thisismanta.github.io/stylus-supremacy/#vscode)中 Formatting options 下的選項放入 setting.json即可

* 沒修改的設定可以不用加在上面
* 這個插件也提供了類似CSS Comb的功能 [css屬性順序排序]
* 預設提供了3種選項，當然也可以自行設定順序
    1. false 不排序
    2. "alphabetical" 依照字母
    3. "grouped" [排序規則參照](https://github.com/SimenB/stylint/blob/master/src/data/ordering.json)
    4. 自行撰寫 可以參考上方連結 
    Ex: ["color", "background", "display"]
    (上次用CSScomb沒裝成功QQ，有東西可以代替了!)

* inserNewLine的部分有4個設定較複雜一點
有興趣的碰油 翻一下上面附的說明文件吧
* 以下為個人設定~
```
    "stylusSupremacy.insertSemicolons": false,
    "stylusSupremacy.insertBraces": false,
    "stylusSupremacy.insertNewLineAroundBlocks": "false",
    "stylusSupremacy.reduceMarginAndPaddingValues": true,
    "stylusSupremacy.alwaysUseNoneOverZero": true,
    "stylusSupremacy.alwaysUseZeroWithoutUnit": true,
    "stylusSupremacy.alwaysUseImport": true,
    "stylusSupremacy.sortProperties": "grouped",
```

待續!

上一篇文章: 
[SASS 無痛轉移 Stylus (環境建立與插件)](https://ithelp.ithome.com.tw/articles/10191909)

**Stylus簡介**
* 先來說說Stylus的優點!
* Node.js即可編譯!!，不需要額外裝Ruby
* 可以使用CSS/SASS/SCSS/LESS的寫法!!
* 大架構皆與SASS相同轉移方便

因此可讓使用其他預處理器的人也看得懂Code，
只需利用上一篇所提到的插件(Manta's Stylus Supremacy)作轉換即可
多的功能有需要在慢慢熟悉!!
-----
**Stylus語法基礎篇**
* 注意檔名需要為styl
* 可省略 冒號/分號/大括號，利用一個空白代替冒號
* 注釋 同SASS
```
// 單行注釋不會被輸出到main.css，用於開發用
/* 多行方式則會，用於撰寫文件描述 */
```
* 變量宣告 
* 注意!!!利用=去宣告 而非:
* 可以省略SASS的 $字號，不過還是建議加上避免混亂!
* 注意!!! 當要使用$時 呼叫也要加上$
```
var-name = var-value
$lb= lightblue //建議
color = $lb
```
* 嵌套用法 &:hover / &:first-child 同SASS
-----
**@開頭~**
* @import  (若沒使用.css則一律視為styl檔)
* import支援索引功能
```
@import "mixins/_base"
@import "css/animate.css"
```
* @font-face
* **注意!!**使用Google Font
需要把以下語法移除否則無法使用 (個人是下載下來用的非CDN)
```
/*latin
```
* @keyframes
```
@keyframes pulse
    0%
      background-color red
      transform scale(1.0) rotate(0deg)
    33%
      background-color blue
      -webkit-transform scale(1.1) rotate(-5deg)
```
* @media 會開一個block特別拿出來說明!
-----
**Mixin篇** 
* SASS 需要修改的地方 看下第一個Block
* 不可使用=以及加號 (請省略)
* 不傳值、傳入值、預設定值  3種方式實作
```
// 編譯錯誤!!
=border-radius(val) 
    border-radius: val
+border-radius(5px)
```
```
// 不傳值
test_line()
    border: 0.5px solid lightblue
// 傳入值
border-radius(val) 
    border-radius: val
// 預設定值
box_m(bm = 5px)
    margin bm
// 
bline(bw = 0.5px, bs = solid, bc = #000)
    border: bw bs bc 
box
    test_line() //不須寫值
    border-radius(5px)  //需要傳入值
    box_m() // 可傳可不傳，不傳則為5px
    // [具名參數]可放多值且指定某值，也可為空
    bline(bc: red) 
```
* 具名參數
以下輸出結果都會相同
雖然順序上更改還是一樣效果，為了統一規則還是照順序吧。
```
fade-out(color, amount = 50%)
  amount /= 100
  color - rgba(0,0,0,amount)
body
  foo: fade-out(#eee)
  foo: fade-out(#eee, 20%)
  foo: fade-out(#eee, amount: 50%)
  foo: fade-out(color: #eee, amount: 50%)
  foo: fade-out(amount: 50%, #eee)
  foo: fade-out(amount: 50%, color: #eee)
```

* Transparent mixins 
可以讓你傳入任意個數的參數
注意: argument也是Stylus特有
```
//mixin
border-radius()
  border-radius: arguments
//使用
button 
  border-radius: 5px 10px
//結果
button {
  border-radius: 5px 10px;
}
```
-----
**Mixin與MediaQuery**
這邊......難受
嘗試了很久以及翻閱文件最後試出以下是可行的。
有點可惜，之前用SASS 只需要寫+mobile
在繼續努力看是否能改寫成功QQ
```
$mobile_size= 480px
$mobile= "(max-width: " + $mobile_size + ")"
body
    @media $mobile
        background: lightblue
```
-----
* @function 
1. 可使用SASS的老方法 (未測)
@function來定義函數，@return 返回一個值。
2. 亦可用類似mixin的方式
```
add(a, b, c)
    a + b + c
// 會得到 4.02rem 因為 2%會變成 4rem的0.2
// 選取的單會以第一個為主
margin add(1rem,2%,3px)    (bad) 
// 會得 6rem
margin add(1rem,2,3) (good)
```
```
// 會造成compile錯誤!! 
// 若要少輸入變數，可以預設 [Mixin篇]
margin add(1rem,2)

// 解法:兩種
add(a, b, c = 3)
    a + b + c

add(a, b, c = a)
    a + b + c
```

* 傳入多值 並且運算
```
marg(a)
    a
.box
    margin margin(8px)
// 輸出
    margin 8px
```
```
// 錯誤用法
marg(a)
    a a
//則會輸出
    margin a: 8px   (error)
```
```
marg(a,b)
    return a b/2 a+b
.box
    margin margin(8px,10)
// 則會輸出
    margin 8px 5px 18px
```
-----
**Built in Function**
* 顏色相關
```
// 此行無法於CSS中使用，但Stylus提供為function
background rgba(#000,0.9)
// 結果會轉換成
background: rgba(255,255,255,0.9)
```
```
// 灰階
grayscale(color)
// 等同於lighten()效果
tint(blue, 50%)
// 等同於darken()效果
shade(blue, 50%)
// 相反色 & 對比色  [我測同結果?????]
invert(color)
complement(color)
// 降低飽和度
desaturate(blue, 50%)
```
* 運算式相關
```
// 絕對值 得 m10
margin: abs(-10px)
// 向上進位
ceil(4.6px) 
// 會輸出數字以外的，用來用在if去確認輸入形態用
unit(4.6%)
// 就會輸出 46px [設定單位用]
unit(4.6%,'px')
```
-----
**Stylus語法進階篇**
* 數組運算 
有興趣的碰油，可以見[Stylus筆記(內詳)](https://xinranliu.me/2014-09-16-stylus-note/)
(個人還沒使用過，之後填坑)

* 支援 argument 變數
* 支援 unless (相當於 !if)
```
position()
  position: arguments
  z-index: 1 unless @z-index

#logo
  z-index: 20
  position: absolute

#logo2
  position: absolute
```

* 讀取區域屬性 (向上搜尋的特性，若找無值則null，使用上請注意)
* 以下會輸出 margin-left 100px 以及 bgc blue
* 將屬性前面加上@
```
body
  color: red
  ul
    li
      color: blue
      div
        width: 200px
        margin-left: (@width / 2)
        background-color: @color
```

* for迴圈 (與JS寫法相同)
```
for <val-name> [, <index-name>] in <expression>
for <key-name>, <value-name> in <hashes>
```

```
table
    for row in 1 2
        tr:nth-child({row})
            height: 10px * row
table tr:nth-child(1) {
  height: 10px;
}
table tr:nth-child(2) {
  height: 20px;
}
```

* Interpolation 可以將變數差在屬性中
可以用於加前綴詞 (不過還是由自動化工具來處理好)
```
vendors = webkit moz o ms official
border-radius()
    for vendor in vendors
        if vendor == official
            border-radius: arguments
        else
            -{vendor}-border-radius: arguments
#content
    border-radius: 5px
```

* 變數型別自動轉換 
個人還是盡量讓型別相同，避免難以調整

* sprintf 運算子 (可以將括號值帶入 %s)
```
body
  foo: '%s / %s' % (5px 10px)
  foo: 'MS:WeirdStuff(opacity=%s)' % 1
  foo: unquote('MS:WeirdStuff(opacity=1)')
```

* 支援顏色運算
個人只使用lighten/darken去作按鈕hover
詳細實作，交由大神們補充了!
```
  foo: white - 50%
  foo: #eee - #f00
  foo: #eee - rgba(black,.5)
```

* Error Handle (待填)
Stylus支持自定義的錯誤輸出，通過error函數
-----
**Nib**
nib 是集合 stylus 常用的 mixin 為大全的 sass framework，
例如在樣式中經常用的 Border radius, Clearfix, Gradients等
[Nib github](https://github.com/tj/nib)
nib/docs/README.md 中有撰寫包含哪些mixin
[Nib使用With Express](https://blog.caesarchi.com/2012/10/08/-e6-95-99-e5-ad-b8-stylus-nib-express-on-node-js/)
-----
待填坑區...
* @extend [老師說不要用(?](https://ithelp.ithome.com.tw/articles/10187564)
* Error Handle
* Built-in-function 其實有一拖拉庫(還未看完)
* Nib 與 JS API合用
-----
* 一些細節方面 我會去完整重看完官方文件在補齊
* 上述有錯誤之處歡迎提出，我會迅速作更改!