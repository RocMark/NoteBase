# Stylus

* npm install --save-dev nib typographic
```
@import 'typographic'
@import 'nib'
typographic()  //Testing
fixed: bottom right //Testing
```
## MediaQuery庫 Rupture
```
npm install -g rupture
```
# 爆炸輸出!
```css
+hover()
+at(1)  // 指定區間 +at(xs)
+above()
+between()
+below(700px)
  color #eee
  main 
    color #00f
```
* 建立各區分段點!
```
rupture.scale = 0 400px 600px 800px 1050px 1800px
rupture.scale-names = 'xs' 's' 'm' 'l' 'xl' 'hd'
```
* 手機篇
```css
+mobile() / +tablet() / +desktop() / +hd()
rupture.mobile-cutoff = 480px //用此覆蓋400px
rupture.tablet-cutoff 
rupture.desktop-cutoff 
rupture.hd-cutoff 
```
## Nib 安裝
```
npm install nib -g 
@import 'nib'
```
### 實用Nib Mixin
* 快速載入reset css
```
reset-html5()
normalize-base()
normalize-html5()
```
* 快速撰寫位置
```cs
fixed/absolute top 20px left 2%
position: fixed/absolute
top: 20px
left: 2%
```
* 快速線 / TextShadow
```
border #eee
border: 1px solid #eee
```
```
shadow-stroke(#00e)
text-shadow: ~
```
* 
```
overflow ellipsis [待查]
clearfix()
background linear-gradient(top,#fff,#000)
```
## Mixin
```cs
test(var)
  margin-top unit(var,'px')
  if var > 10
    margin-bottom unit(var,'px')
  else
    background #eee
```
## 基礎
```cs
$color = #000
background: rgba(#000,0.9)
```

```cs
bline(bw=0.5px,bc=#000)
    border: bw solid bc
```

## 變數整理
* 區域變數 & 宣告成全域變數
```cs
#main 
  $width: 5em !global
  width: $width
#sidebar 
  width: $width
```

* 傳入多值
```
br()
    border-radius: arguments
br(10px,5)
```
* 設定單位
```
a = unit(a,px)
```
* 自行合併
```css
font-size = 14px
body
    font font-size Arial, sans-seri
body {
  font: 14px Arial, sans-seri;
}
```
## Typographic
[影片教學](https://www.youtube.com/watch?v=T-8W6JGvGEE&list=PLLnpHn493BHFWQGA1PcyQZWAfR96a4CkH&index=13)
```
@import 'typographic'
npm install -g typographic
```