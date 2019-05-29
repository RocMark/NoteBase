# css 實用技巧

# 垂直置中

## Ghost Elements
* 原理:
當一個 div 中有多個 inline-block 設成垂直置中
元素會對齊最高的那個元素。
* 做法: 
建一個偽元素高度 100% 寬度為 0，
並且需要將內部元素都設為 inline-block & 垂直置中
```css
  /* container > centerBox > img */
  .container::after {
    content: "";
    display: inline-block;
    width: 5px;
    height: 100%;
    background-color: red;
    vertical-align: middle;
  }
  .centerBox{
    display: inline-block;
    vertical-align: middle;
  }
```
## Transform  (center)
* 勿忘了加 position: relative 於容器
```css
  .container {
    position: relative;
  }
  .centerBox{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
```
## Table
* float 會使 table-cell 屬性消失 (少用)
```css
  .container{
    display: table-cell;
    vertical-align: middle;
  } 
```

# 背景壓暗
利用 before 
.bg  使用 bg image
```css
  .bg {
    overflow: hidden;
  }
  .bg::before {
    content: "";
    display: block;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
  }
```