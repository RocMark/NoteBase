# SASS GuideLine
> https://sass-guidelin.es/zh/

## 大原則
* 盡量不要使用ID 選擇器   (留給JS控制用?)
* 盡量不要使用 !importants
* 扁平化
* 精簡代碼
    1.使用ShortHand 語法
    2.減少重複 [撰寫 .btn .input 等常重複利用的元件]
    3.移除沒用的樣式
* 撰寫注釋

## CSS 命名原則
* 不要取方向式 & 無語意式命名 Left/Right/Box
* 命名可只有HTML即可看出相依性
* 命名可以加前綴詞 Ex:  l代表layout語法
* 模組化 [類似boostrap]
button元件 class="btn基本樣式 btn-primary顏色etc "

## BEM 設計模式 (Block Element Modifier)
* HTML 命名可以看出關聯性 
nav, nav_list

* Modifier 用JS做動畫時新增的特效效果
Ex: nav_items--active
* _ 下底限用於表示元素
* -- 雙中線表動作

* When Not To Use BEM
1. 有複用性的功能 可以獨立成一個Class
Ex: .clearfix / .grid
2. 並非所有元素都要遵守 (可全域通用的就全域通用)