# jQuery 整理

### JavaScirpt 視大小寫為不同!!

# 待查!!!!!!
* .index()
* .length()
# AJAX 插入位置
```
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
</p>
<!-- afterend -->
```

# Ready Function
``` javascript
$(document).ready(function(){
    // 準備方程式
    $('.link').attr('herf','url此')
    $('.box').html('Yo')
})
$(function(){
    // 可縮寫此 記得link jQuery cdn
})
```
### 複習個selector
```javascript
$('.box').children('.box_item')
$('.box_item').each(function(){
    // 對每個元素皆進行處理
})
```
## 定時器
```javascript
setInterval() //設定每段時間repeat
clearInterval() //中止計時器
```


## 事件
* dbclick
* mousemove()
* mouseover,mouseleave
* keyboard

## FormEvent
* submit,focus
* change (input val change)
* blur (lose focus)

## resize 事件
* 可以用於電腦PC Resize 視窗轉換成其他面板模式

## 取得個數
```javascript
ul > li*3
$('li').size()
```
## 設CSS樣式
```javascript
$('.box').css({'color':'red','font-size':'150%'})
$('.box').width(100)
$('.box').height(100)
```
```javascript
$('.box').innerheight(100) // 加padding
$('.box').outerheight(100) // 加border
```

## 數學運算 
```javascript
Math.floor() 無條件捨去
Math.ceil()  無條件進位
Math.round() 4捨5入
Math.random() 0~1 隨機!!!!
```

