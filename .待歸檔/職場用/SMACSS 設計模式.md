僅為自己閱讀筆記整理之用 若有錯誤之處歡迎更正!

**SMACSS**
分為幾個區塊 Base / Layout / Moudle / Status / Theme

**Base**
* 首件事情  預設reset
  Reset.css / Normalize.css
  
* 建立共通樣式
  a-link   text-decoration:none
  .btn  [boostrap方式]

**Layout**
```
div#feature ul (X)
```
上列命名不佳原因
1.這種列名命名方式 
在其他地方也使用相同表單架構，會因為ID而衝突，不利於重複利用
2.命名不達意
3.架構被DIV綁死

解法:
1. 抽象出新名字 .list_grid [類似建立共通樣式]
2. 提高複用性
3. 綁 Class  ID留給JS做進一步控制

**Moudle模組**
* 避免使用tag去做指令  section .lightbox_list(X)
* tag 只用於設置Base 共通樣式
* 使用Class去命名 不會綁到tag結構較有彈性

* Subclassing Moudle 子模組
```
.pod
    width: 100%
.pod input[type=text]
    width: 50%
.pod-constrained input[type=text]
    width: 100%
.pod-callout
    width: 200px
.pod-callout input[type=text]
    width: 180px
```
* 先建立Base模組 .btn 要做微調在做子模組 .btn-primary


**Status 狀態規則**
* 利用JS 動態載入Class名稱
```
is-error 
    color: red
``` 
* 可以用 !important 去確保覆蓋 避免順序上出錯沒有執行該CSS樣式
```
.is-hidder
    display:none !important
.is-error
    display: none !important
```


**Theme**
Theme 網站多主題 結構不變 變主題 
Ex: Youtube / Youtube Dark
1.	大結構不變 Ex: 換頁面 nav顏色改變
2.	建立預設 index
3.	更換主題 建立額外的 theme 1.css檔案 …etc
4.	文字大小只設 3~6種  過多會造成網站沒重點
