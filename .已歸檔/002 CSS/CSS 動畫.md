# transform 屬性取值
> 瀏覽器會自動換算成 matrix
> 要單純取到 transform: translateX 非常困難

# transform-origin
> https://goo.gl/MybnnT
設定物件變形的起始點
Ex: 時鐘 分針秒針就要換

# checkbox 動畫原理
<input type="checkbox"> 移動 box
<div class="box"></div>

## transition & animation checkBox
*  使用 checkBox 觸發動畫
將 animation 移入 input:checked 即可
```css
  .box {
    height: 100px;
    width: 100px;
    border: 1px solid black;
    position: absolute;
    left: 0px;
    /* left 可省略 all(default) */
    transition: left .3s;

    /* 當寫上時立即執行 */
    animation: moveBox .3s 3;
  }
  /* 當 input 被點擊 其下一個同輩元素 box 往左*/
  input:checked + .box {
    left: 50px;
  }
  @keyframes moveBox {
    50% {
      left: 30px;
    }  
  }
```

## transition & animation Tips
> https://goo.gl/4WQwBe (複習好物)
不建議混用 transition & animation
* animation 優先權會高於 transition (如下範例碼)
如果 animation & transition 操作同一屬性
animation 的 操作會先執行完，才輪到 transition執行
* transition
```css
  .box {
    position: relative;
    left: 0px;
    top: 10px;
    transition: .3s;
  }

  .box:hover {
    top: 30px;
    background-color: #f00;
  }

  input:checked + .box {
    animation: movebox .3s 10;
  }

  @keyframes movebox {
    0%, 100% {
      top: 10px;
    }
    50% {
      left: 10px;
    }
  }
```

# animation (上)
https://goo.gl/Eo77NL
* 權重
原本的 CSS 屬性 < @keyframe < !important
  * firefox 符合標準，套用 !important 無視是否有 transition
  * Chrome 無視 !important

* 

# animation (下)
https://goo.gl/UgmwA1 (bu)

* 套用動畫名稱
animation-name
* 動畫播放開始
animation-delay
* 動畫播放結束由如下控制
animation-duration
animation-iteration-count

## animation-iteration-count
default: 0 [使用正整數]
* 0 表 瞬間跑完動畫
* infinite  無限次數

## animation-direction
指定動畫播放的順序是正向 (0%→100%) 或反向 (100%→0%)
* normal 正向
* reverse 反向

* alternate 奇數正向，偶數反向 ????

## animation-play-state
動畫播放 play 還是 pause 狀態
* play: 動畫會正常跑  [default]
* pause: 動畫會暫停   (停格在某一個 frame)

## animation-fill-mode
動畫播放(元素套用動畫狀態)的前後，是否要繼續套用動畫的CSS值


# animation timing function
https://goo.gl/XfWjNi

# CSS3 Animation
> https://www.youtube.com/watch?v=B7UateVfh0A&t=77s

# transition
//* 轉場特效
transition: property / duration / timing-Function / delay
- property
> 定義哪些 CSS properties會被轉場效果影響
- duration
> 轉場所花時間
- timing-Function
> http://cubic-bezier.com/ 可自行設定移動效果
//* ease / linear / ease-in
- delay 
> 多久才開始轉場

# transform 2D
//* 針對已存在物件做變形
transform: rotate(30deg) 往右轉 //* 往左用-30deg
transform: scale(0.5)
transform: skew(20deg)  往左歪斜20deg
transform: scale(0.5)

# transform: translate
transform: translate(200px)  //* 往右200px
//! 改變物件位置

# 改變物件位置選擇
//? translate 比 transition 效能好
//* transition 會需要用到 poab 易造成破版

# transform: matrix
合併多個 transform結果，對可讀性不佳，慎用
//* matrix generator
>http://ds-overdesign.com/transform/matrix3d.html

# 3D transform 17分  //! 用到 Review
//? 視角 靠近人的物體會變大，反之

1. 設定 perspective-origin: center 
//? 視角位置

2. 設定 perspective-distance: 500px
//* 眼睛距離畫布多少

3. transition: all 2s 轉場效果
4. 觸發效果事件
&:hover
    perspective: 200px //? 距離縮短 => 物體放大
    perspective-origin: left-top //* 變更視角